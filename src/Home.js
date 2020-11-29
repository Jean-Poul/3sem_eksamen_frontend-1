import { Container, Row, Col, Button } from "react-bootstrap";
import { URLLaunchString } from "./settings";
import React, { useState, useEffect } from "react";
import logo from "./img/rocketlaunch_logo_orange_dark_1500.png";

const Frontpage = () => {
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
  let launchServiceProviderName;
  let location;

  if (JSON.stringify(launchString).length > 100) {
    launchServiceProviderName =
      launchString.results[launchNo].launch_service_provider.name;
    location = launchString.results[launchNo].pad.location.name;
  }

  /* ## 
       ## ROCKETLAUNCH VARS
       ## 
    */

  return (
    <div>
      <Container>
        <Row className="text-center mb-5">
          <Col className="col-xs-2"></Col>
          <Col className="col-lg-8">
            <img src={logo} width="200px" height="auto"></img>
          </Col>
          <Col className="col-xs-2"></Col>
        </Row>

        <Row className="text-center">
          <Col className="col-xs-2"></Col>
          <Col className="col-lg-8 mainLaunch">
            <h1>Launch in</h1>
            <span className="timer">00d : 0h : 14m : 43s</span>
          </Col>
          <Col className="col-xs-2"></Col>
        </Row>

        <Row className="text-center mt-2">
          <Col className="col-xs-2"></Col>
          <Col className="col-lg-8 mainLaunch">
            <span>{launchServiceProviderName}</span>
            <span>&nbsp; - &nbsp;</span>
            <span>{location}</span>
          </Col>
          <Col className="col-xs-2"></Col>
        </Row>

        <Row className="text-center mt-2 mb-5">
          <Col className="col-xs-2"></Col>
          <Col className="col-lg-8 mainLaunch">
            <span>
              <a href="#">Information</a>
            </span>
            <span>&nbsp; - &nbsp;</span>
            <span>
              <a href="#">Location</a>
            </span>
            <span>&nbsp; - &nbsp;</span>
            <span>
              <a href="#">Weather</a>
            </span>
          </Col>
          <Col className="col-xs-2"></Col>
        </Row>

        <div className="spacer"></div>
        <Row className="text-center mb-5">
          <Col className="col-xs-2"></Col>
          <Col className="col-lg-8">
            <h3>Next 9 launches</h3>
          </Col>
          <Col className="col-xs-2"></Col>
        </Row>

        {/* ###
      THIS PART HAS TO LOOP 
      ### 
      */}
        <div>
          <Row className="text-center">
            <Col className="col-xs-2"></Col>
            <Col className="col-lg-8">
              <h4>Launch in</h4>
              <span className="timer">00d : 0h : 14m : 43s</span>
            </Col>
            <Col className="col-xs-2"></Col>
          </Row>

          <Row className="text-center mt-2">
            <Col className="col-xs-2"></Col>
            <Col className="col-lg-8 mainLaunch">
              <span>{launchServiceProviderName}</span>
              <span>&nbsp; - &nbsp;</span>
              <span>{location}</span>
            </Col>
            <Col className="col-xs-2"></Col>
          </Row>

          <Row className="text-center mt-2 mb-5">
            <Col className="col-xs-2"></Col>
            <Col className="col-lg-8 mainLaunch">
              <span>
                <a href="#">Information</a>
              </span>
              <span>&nbsp; - &nbsp;</span>
              <span>
                <a href="#">Location</a>
              </span>
              <span>&nbsp; - &nbsp;</span>
              <span>
                <a href="#">Weather</a>
              </span>
            </Col>
            <Col className="col-xs-2"></Col>
          </Row>
        </div>

        <div>
          <Row className="text-center">
            <Col className="col-xs-2"></Col>
            <Col className="col-lg-8">
              <h4>Launch in</h4>
              <span className="timer">00d : 0h : 14m : 43s</span>
            </Col>
            <Col className="col-xs-2"></Col>
          </Row>

          <Row className="text-center mt-2">
            <Col className="col-xs-2"></Col>
            <Col className="col-lg-8 mainLaunch">
              <span>{launchServiceProviderName}</span>
              <span>&nbsp; - &nbsp;</span>
              <span>{location}</span>
            </Col>
            <Col className="col-xs-2"></Col>
          </Row>

          <Row className="text-center mt-2 mb-5">
            <Col className="col-xs-2"></Col>
            <Col className="col-lg-8 mainLaunch">
              <span>
                <a href="#">Information</a>
              </span>
              <span>&nbsp; - &nbsp;</span>
              <span>
                <a href="#">Location</a>
              </span>
              <span>&nbsp; - &nbsp;</span>
              <span>
                <a href="#">Weather</a>
              </span>
            </Col>
            <Col className="col-xs-2"></Col>
          </Row>
        </div>

        <div>
          <Row className="text-center">
            <Col className="col-xs-2"></Col>
            <Col className="col-lg-8">
              <h4>Launch in</h4>
              <span className="timer">00d : 0h : 14m : 43s</span>
            </Col>
            <Col className="col-xs-2"></Col>
          </Row>

          <Row className="text-center mt-2">
            <Col className="col-xs-2"></Col>
            <Col className="col-lg-8 mainLaunch">
              <span>{launchServiceProviderName}</span>
              <span>&nbsp; - &nbsp;</span>
              <span>{location}</span>
            </Col>
            <Col className="col-xs-2"></Col>
          </Row>

          <Row className="text-center mt-2 mb-5">
            <Col className="col-xs-2"></Col>
            <Col className="col-lg-8 mainLaunch">
              <span>
                <a href="#">Information</a>
              </span>
              <span>&nbsp; - &nbsp;</span>
              <span>
                <a href="#">Location</a>
              </span>
              <span>&nbsp; - &nbsp;</span>
              <span>
                <a href="#">Weather</a>
              </span>
            </Col>
            <Col className="col-xs-2"></Col>
          </Row>
        </div>                

        <Row className="text-center">
          <Col className="col-xs-2"></Col>
          <Col className="col-lg-8"></Col>
          <Col className="col-xs-2"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Frontpage;
