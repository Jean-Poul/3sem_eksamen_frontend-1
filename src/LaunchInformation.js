import React, { Component } from "react";
import "./ca3.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Comments, { WriteComment } from "./Comments";
import LaunchString, {
  date,
  launchtime,
  location,
  provlogo,
  launchServiceProviderName,
  provtype,
  missionname,
  missiondetails,
  missiontype,
  rocket,
  rocketimg,
} from "./LaunchString";

const LaunchInformation = () => {
  return (
    <div>
      <LaunchString />
      <Container className="">
        <Row className="ca3siteBody">
          <Col sm={4}>
            <div className="ca3h1">
              Date: <br />
              Estimated Launch:
              <br />
              Location:
              <br />
            </div>
          </Col>
          <Col sm={8}>
            <div className="ca3P">
              {date} <br />
              {launchtime}
              <br />
              {location}
              <br />
            </div>
          </Col>
        </Row>

        <Col>
          <br />
          <img
            src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/logo/spacex_logo_20191121063502.png"
            className="img"
          ></img>
          <br />
          <br />
        </Col>
        <Row className="ca3siteBody">
          <Col sm={4}>
            <div className="ca3h1">
              Launch Provider:
              <br />
              Provider Type:
              <br />
              <br />
              Mission Name:
              <br />
              Mission Type:
              <br />
              Mission Details:
              <br />
            </div>
          </Col>

          <Col sm={8}>
            <div className="ca3P">
              {launchServiceProviderName}
              <br />
              {provtype}
              <br />
              <br />
              {missionname}
              <br />
              {missiontype}
              <br />
            </div>
            <div className="ca3MDetails">
              {missiondetails}
              <br />
            </div>
            <br />
          </Col>

          <Col sm={4}>
            <div className="ca3h1">
              Rocket:
              <br />
            </div>
          </Col>

          <Col sm={8}>
            <div className="ca3P">
              {rocket}
              <br />
            </div>
          </Col>
        </Row>
        <Col>
          <br />
          <img
            src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/arianespace_image_20190207032425.jpeg"
            className="imgRocket"
          ></img>
          <br />
          <br />
        </Col>
      </Container>

      <hr className="ca3Hr" />
      <br />
      <div className="ca3LaunchSmall">Comment Section</div>
      <Container>
        <Comments />
        <WriteComment />
      </Container>
    </div>
  );
};

export default LaunchInformation;
