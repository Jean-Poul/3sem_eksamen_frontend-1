import React, { useState, useEffect } from "react";
import "./ca3.css";
import { URLLaunchString } from "./settings";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

export let launchServiceProviderName;
export let location;
export let countrycode;

export let wikilink;
export let latitude;
export let longitude;

export let date;
export let launchtime;
export let provwiki;
export let provlogo;
export let provtype;
export let missionname;
export let missiondetails;
export let missiontype;
export let rocket;
export let rocketimg;

const LaunchString = () => {
  const [launchString, setLaunchString] = useState([]);

  // loads launchString first time
  useEffect(() => {
    fetchLaunchString();
  }, []);

  let fetchLaunchString = () => {
    fetch(URLLaunchString)
      .then((res) => res.json())
      .then((data) => {
        setLaunchString(data);
      });
  };

  let launchNo = 2;

  if (JSON.stringify(launchString).length > 100) {
    launchServiceProviderName =
      launchString.results[launchNo].launch_service_provider.name;
    location = launchString.results[launchNo].pad.location.name;
    countrycode = launchString.results[launchNo].pad.location.country_code;

    wikilink = launchString.results[launchNo].pad.url.wiki_url;
    latitude = launchString.results[launchNo].pad.latitude;
    longitude = launchString.results[launchNo].pad.longitude;

    date = launchString.results[launchNo].net;
    launchtime = launchString.results[launchNo].net;
    provwiki = launchString.results[launchNo].launch_service_provider.url.wiki;
    provlogo =
      launchString.results[launchNo].launch_service_provider.url.logo_url;
    provtype = launchString.results[launchNo].launch_service_provider.type;
    missiontype = launchString.results[launchNo].mission.type;
    missionname = launchString.results[launchNo].mission.name;
    missiondetails = launchString.results[launchNo].mission.description;
    rocket = launchString.results[launchNo].rocket.configuration.full_name;
    rocketimg =
      launchString.results[launchNo].rocket.configuration.url.description;
  }

  console.log("launch service provider:" + launchServiceProviderName);
  console.log("location " + location);
  console.log("countrycode" + countrycode);
  console.log("wikilink " + wikilink);
  console.log("lattitude " + latitude);
  console.log("longitude " + longitude);
  console.log("date " + date);
  console.log("launchtime " + launchtime);
  console.log("provlogo " + provlogo);
  console.log("provtype " + provtype);
  console.log("missionname " + missionname);
  console.log("missiondetails " + missiondetails);
  console.log("missiontype " + missiontype);
  console.log("rocket " + rocket);
  console.log("rocketimg " + rocketimg);

  return <div></div>;
};

export default LaunchString;
