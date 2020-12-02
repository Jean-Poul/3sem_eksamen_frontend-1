import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { URL } from "./settings";

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
    <div className="App">
      {(typeof nextlaunch.results != "undefined") ? (
        <div>
          <h1>Next Launch</h1>
          <div>{nextlaunch.results[0].net}</div>
          <div>{nextlaunch.results[0].launch_service_provider.name}</div>
          <div>{nextlaunch.results[0].pad.location.name}</div>
          <div>{nextlaunch.results[0].pad.location.country_code}</div>
          <div>
            <Nav className="mr-auto">
              <NavLink className="nav-link" exact activeClassName="selected" href="/" to="/">
                Home
            </NavLink>
              <NavLink className="nav-link" activeClassName="selected" to={{
                pathname: "/information",
                launchProp: { index: 0 }
              }}>
                Information
            </NavLink>
              <NavLink className="nav-link" activeClassName="selected" to={{
                pathname: "/location",
                launchProp: {
                  index: 0,
                  lat: nextlaunch.results[0].pad.latitude,
                  lon: nextlaunch.results[0].pad.longitude
                }
              }}>
                Location
            </NavLink>
              <NavLink className="nav-link" activeClassName="selected" to={{
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
          </div>
          <div>
            <h1>Upcoming Launches</h1>
            {nextlaunch.results.slice(1).map((data, index) =>
              <div key={data.id}>
                <div>{index + 1}</div>
                <div>{data.net}</div>
                <div>{data.launch_service_provider.name}</div>
                <div>{data.pad.location.name}</div>
                <div>{data.pad.location.country_code}</div>
                <div>
                  <Nav className="mr-auto">

                    <NavLink className="nav-link" activeClassName="selected" to={{
                      pathname: "/information",
                      launchProp: { index: index + 1 }
                    }}>
                      Information
                    </NavLink>
                    <NavLink className="nav-link" activeClassName="selected" to={{
                      pathname: "/location",
                      launchProp: {
                        index: index + 1,
                        lat: nextlaunch.results[index + 1].pad.latitude,
                        lon: nextlaunch.results[index + 1].pad.longitude
                      }
                    }}>
                      Location
                    </NavLink>
                    <NavLink className="nav-link" activeClassName="selected" to={{
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