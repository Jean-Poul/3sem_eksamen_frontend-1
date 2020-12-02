import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {useLocation} from 'react-router-dom'

import {URL} from "./settings";


function Location() {
  const [nextlaunch, setNextlaunch] = useState({});
  let location = useLocation();
  let index = location.launchProp.index;
  let lat = location.launchProp.lat;
  let lon = location.launchProp.lon;
  console.log("index: "+ index+ " lat: "+ lat+" lon: "+lon);

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
    <div className="App">
      {(typeof nextlaunch.results != "undefined") ? (
        <div>
          <h1>Launch location</h1>
          <div>{nextlaunch.results[index].net}</div>
          <div>{nextlaunch.results[index].launch_service_provider.name}</div>
          <div>{nextlaunch.results[index].pad.location.name}</div>
          <div>{nextlaunch.results[index].pad.location.country_code}</div>
          <div>
          <Nav className="mr-auto">
              <NavLink className="nav-link" exact activeClassName="selected" href="/" to="/">
                Home
            </NavLink>
              <NavLink className="nav-link" activeClassName="selected" to={{
                pathname: "/information",
                launchProp: { index: index }
              }}>
                Information
            </NavLink>
              <NavLink className="nav-link" activeClassName="selected" to={{
                pathname: "/location",
                launchProp: {
                  index: index,
                  lat: nextlaunch.results[index].pad.latitude,
                  lon: nextlaunch.results[index].pad.longitude
                }
              }}>
                Location
            </NavLink>
              <NavLink className="nav-link" activeClassName="selected" to={{
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
          </div>
        </div>
      ) : ('')}
    </div>
  );
}

export default Location;