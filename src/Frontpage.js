import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import rocketlaunchlogo from "./assets/rocketlaunch_logo_orange_dark_1500.png";
import { URL } from "./settings";
import Countdown from "./Countdown";

function Frontpage() {
  const [nextlaunch, setNextlaunch] = useState({});

  const fetchNextlaunch = () => {
    fetch(`${URL}/api/nextlaunch/upcoming`)
      .then(res => res.json())
      .then(data => {
        setNextlaunch(data);
        console.log(data);
      });
  }

  useEffect(() => {
    fetchNextlaunch();
  }, []);

  return (
    <div>
      {(typeof nextlaunch.results != "undefined") ? (
        <div>
          <img src={rocketlaunchlogo} className="imgLogo" alt=""/><br />
          <div className="ca3LaunchBig ca3White">Launch In</div>
          <div className="ca3CDBig"><Countdown date={(nextlaunch.results[0].net)}/></div>
          <div className="ca3LaunchinfoBig ca3White">
            {nextlaunch.results[0].launch_service_provider.name}&nbsp;-&nbsp;
            {nextlaunch.results[0].pad.location.name}&nbsp;-&nbsp;
            {nextlaunch.results[0].pad.location.country_code}</div>
          <div>
            <Navbar variant="dark">
              <Nav className="ca3NavbarBig m-auto">
                <NavLink className="nav-link ca3NavbarBig ca3Orange" exact activeClassName="selected" href="/" to="/">
                  Home
            </NavLink>
                <NavLink className="nav-link ca3NavbarBig ca3Orange" activeClassName="selected" to={{
                  pathname: "/information",
                  launchProp: { index: 0 }
                }}>
                  Information
            </NavLink>
                <NavLink className="nav-link ca3NavbarBig ca3Orange" activeClassName="selected" to={{
                  pathname: "/location",
                  launchProp: {
                    index: 0,
                    lat: nextlaunch.results[0].pad.latitude,
                    lon: nextlaunch.results[0].pad.longitude
                  }
                }}>
                  Location
            </NavLink>
                <NavLink className="nav-link ca3NavbarBig ca3Orange" activeClassName="selected" to={{
                  pathname: "/weather",
                  launchProp: {
                    index: 0,
                    lat: nextlaunch.results[0].pad.latitude,
                    lon: nextlaunch.results[0].pad.longitude
                  }
                }}>
                  Weather
            </NavLink>
              </Nav>
            </Navbar>
          </div>
          <div className="mt-4">
            <div className="ca3CDBig ca3White">Upcoming Launches</div>
            {nextlaunch.results.slice(1).map((data, index) =>
              <div key={data.id} className="mt-4">
                <div className="ca3CDSmall ca3White">Launch In</div>
                <div className="ca3CDSmall"><Countdown date={data.net}/></div>
                <div className="ca3LaunchinfoSmall ca3White">{data.launch_service_provider.name}</div>
                <div className="ca3LaunchinfoSmall ca3White">{data.pad.location.name}</div>
                {/* <div className="ca3LaunchinfoSmall ca3White">{data.pad.location.country_code}</div> */}
                <div>
                  <Navbar variant="dark">
                    <Nav className="m-auto">
                      <NavLink className="nav-link ca3NavbarSmall ca3Orange" activeClassName="selected" to={{
                        pathname: "/information",
                        launchProp: { index: index + 1 }
                      }}>
                        Information
                    </NavLink>
                      <NavLink className="nav-link ca3NavbarSmall ca3Orange" activeClassName="selected" to={{
                        pathname: "/location",
                        launchProp: {
                          index: index + 1,
                          lat: nextlaunch.results[index + 1].pad.latitude,
                          lon: nextlaunch.results[index + 1].pad.longitude
                        }
                      }}>
                        Location
                    </NavLink>
                      <NavLink className="nav-link ca3NavbarSmall ca3Orange" activeClassName="selected" to={{
                        pathname: "/weather",
                        launchProp: {
                          index: index + 1,
                          lat: nextlaunch.results[index + 1].pad.latitude,
                          lon: nextlaunch.results[index + 1].pad.longitude
                        }
                      }}>
                        Weather
                    </NavLink>
                    </Nav>
                  </Navbar>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : ('')}
    </div>
  );
}

export default Frontpage;