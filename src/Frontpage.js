import React, { useState, useEffect } from 'react';
import {URL} from "./settings";

/* const api = {
  base: "https://micklarsen.com/3_sem_eksamensprojekt/api/nextlaunch/upcoming"
} */

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
          <div><a href="">Information</a>&nbsp;<a href="">Location</a>&nbsp;<a href="">Weather</a></div>
          <div>
            <h1>Upcoming Launches</h1>
            {nextlaunch.results.slice(1).map((data, index) =>
              <div key={data.id}>
                <div>{index + 1}</div>
                <div>{data.net}</div>
                <div>{data.launch_service_provider.name}</div>
                <div>{data.pad.location.name}</div>
                <div>{data.pad.location.country_code}</div>
                <div><a href="">Information</a>&nbsp;<a href="">Location</a>&nbsp;<a href="">Weather</a></div>
              </div>
            )}
          </div>
        </div>
      ) : ('')}
    </div>
  );
}

export default Frontpage;