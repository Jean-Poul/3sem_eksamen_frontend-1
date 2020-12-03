import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import rocketlaunchlogo from "./assets/rocketlaunch_logo_orange_dark_1500.png"
import { useLocation, useHistory } from 'react-router-dom'
import { URL } from "./settings";
import Countdown from "./Countdown";

function InformationPage() {
  const [nextlaunch, setNextlaunch] = useState({});
  let location = useLocation();
  let history = useHistory();
  let index = (location.launchProp !== undefined) ? location.launchProp.index : history.push("/");
  console.log(index);

  //let index = 0;
  //let index = location.launchProp.index;
  console.log("index: ", index);

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
          <div className="ca3LaunchBig ca3White">Launch information</div>
          <div className="ca3CDBig"><Countdown date={(nextlaunch.results[index].net)}/></div>
          <div className="ca3LaunchinfoBig ca3White">
            {nextlaunch.results[index].launch_service_provider.name}&nbsp;-&nbsp;
            {nextlaunch.results[index].pad.location.name}&nbsp;-&nbsp;
            {nextlaunch.results[index].pad.location.country_code}</div>
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
      ) : ('')}
    </div>
  );
}

export default InformationPage;