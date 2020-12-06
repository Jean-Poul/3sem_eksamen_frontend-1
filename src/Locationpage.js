import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import rocketlaunchlogo from "./assets/rocketlaunch_logo_orange_dark_1500.png";
import { useLocation, useHistory } from 'react-router-dom'
import Countdown from "./Countdown";
import MapContainer from "./GoogleMaps";
import GoogleApiWrapper from "./GoogleMaps"
import { URL } from "./settings";


function Location() {
  const [nextlaunch, setNextlaunch] = useState({});
  let location = useLocation();
  let history = useHistory();
  let index = (location.launchProp !== undefined) ? location.launchProp.index : history.push("/");
  let lat = (location.launchProp !== undefined) ? location.launchProp.lat : history.push("/");
  let lon = (location.launchProp !== undefined) ? location.launchProp.lon : history.push("/");
  console.log("index: " + index + " lat: " + lat + " lon: " + lon);

  const fetchNextlaunch = () => {
    fetch(`${URL}/api/nextlaunch/upcoming`)
      .then(res => res.json())
      .then(data => {
        setNextlaunch(data);
        <MapContainer
          latitude={data.results[index].pad.latitude}
          longitude={data.results[index].pad.longitude}
        />
        console.log(data);
        console.log("lat: "+ data.results[index].pad.latitude);
        console.log("lon: "+ data.results[index].pad.longitude);
      });
  }

  useEffect(() => {
    fetchNextlaunch();
  }, []);

  return (
    <div>
      {(typeof nextlaunch.results != "undefined") ? (
        <div>
          <div>
            <img src={rocketlaunchlogo} className="imgLogo" alt="" /><br />
            <div className="ca3LaunchBig ca3White">Launch location</div>
            <div className="ca3CDBig"><Countdown date={(nextlaunch.results[index].net)} /></div>
            <div className="ca3LaunchinfoBig ca3White">{nextlaunch.results[index].launch_service_provider.name}</div>
            <div className="ca3LaunchinfoBig ca3White">{nextlaunch.results[index].pad.location.name}</div>
            <div className="ca3LaunchinfoBig ca3White">{nextlaunch.results[index].pad.location.country_code}</div>

            <div>
              <Navbar variant="dark">
                <Nav className="ca3NavbarBig m-auto">
                  <NavLink className="nav-link ca3NavbarBig ca3Orange" exact activeClassName="selected" href="/" to="/">
                    Home
            </NavLink>
                  <NavLink className="nav-link ca3NavbarBig ca3Orange" activeClassName="selected" to={{
                    pathname: "/information",
                    launchProp: { index: index }
                  }}>
                    Information
            </NavLink>
                  <NavLink className="nav-link ca3NavbarBig ca3Orange" activeClassName="selected" to={{
                    pathname: "/location",
                    launchProp: {
                      index: index,
                      lat: nextlaunch.results[index].pad.latitude,
                      lon: nextlaunch.results[index].pad.longitude
                    }
                  }}>
                    Location
            </NavLink>
                  <NavLink className="nav-link ca3NavbarBig ca3Orange" activeClassName="selected" to={{
                    pathname: "/weather",
                    launchProp: {
                      index: index,
                      lat: nextlaunch.results[index].pad.latitude,
                      lon: nextlaunch.results[index].pad.longitude
                    }
                  }}>
                    Weather
            </NavLink>
                </Nav>
              </Navbar>
            </div>
          </div>
          <div>
            <Container>
              <Row>
                <Col sm={4}><div className="ca3P">&nbsp;</div></Col>
                <Col sm={8}><div className="ca3P">&nbsp;</div></Col>
              </Row>

              <Row>
                <Col sm={4}>
                  <div className="ca3h1 ca3Orange">Location:</div>
                </Col>
                <Col sm={8}>
                  <div className="ca3P ca3White">
                    {nextlaunch.results[index].pad.location.name}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <div className="ca3h1 ca3Orange">Country:</div>
                </Col>
                <Col sm={8}>
                  <div className="ca3P ca3White">
                    {nextlaunch.results[index].pad.location.country_code}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <div className="ca3h1 ca3Orange"> wiki link:</div>
                </Col>
                <Col sm={8}>
                  <div className="ca3P ca3White">
                    <a href={nextlaunch.results[index].pad.wiki_url} className="ca3Green">Link</a>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col sm={4}><div className="ca3P">&nbsp;</div></Col>
                <Col sm={8}><div className="ca3P">&nbsp;</div></Col>
              </Row>

              <Row>
                <Col sm={4}>
                  <div className="ca3h1 ca3Orange">Latitude:</div>
                </Col>
                <Col sm={8}>
                  <div className="ca3P ca3White">
                    {nextlaunch.results[index].pad.latitude}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={4}>
                  <div className="ca3h1 ca3Orange">Longitude:</div>
                </Col>
                <Col sm={8}>
                  <div className="ca3P ca3White">
                    {nextlaunch.results[index].pad.longitude}
                  </div>
                </Col>
              </Row>
              {/*  <Row>
                <Col>
                  <br />
                  <img src={nextlaunch.results[index].pad.map_image} className="imgRocket"></img>
                  <br />
                  <br />
                </Col>
              </Row> */}
            </Container >
            <div className="main-wrapper ">
              <GoogleApiWrapper
                latitude={nextlaunch.results[index].pad.latitude}
                longitude={nextlaunch.results[index].pad.longitude}
              />
            </div>
          </div >
        </div >
      ) : ('')
      }
    </div >
  );
}

export default Location;