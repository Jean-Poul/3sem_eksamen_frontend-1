import React, { useState, useEffect } from 'react';
import {URL} from "./settings";


function Information() {
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
          <h1>Launch information</h1>
          <div>{nextlaunch.results[0].net}</div>
          <div>{nextlaunch.results[0].launch_service_provider.name}</div>
          <div>{nextlaunch.results[0].pad.location.name}</div>
          <div>{nextlaunch.results[0].pad.location.country_code}</div>
          <div><a href="">Information</a>&nbsp;<a href="">Location</a>&nbsp;<a href="">Weather</a></div>
        </div>
      ) : ('')}
    </div>
  );
}

export default Information;