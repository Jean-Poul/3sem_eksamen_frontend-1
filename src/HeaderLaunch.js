import React, { useState, useEffect } from "react"
import "./ca3.css";

import { Form, Container, Row, Col, Button } from "react-bootstrap";
import rocketlaunchlogo from "./rocketlaunch_logo_orange_dark_1500.png"


const HeaderLaunch =() => {
    return (
        <div>
            <Container>
                <Row className="ca3siteBody">
                <Col sm={2}><div className="ca3White">Hold E, Gruppe 8<br/></div></Col>
                <Col sm={9}></Col>
                <Col sm={1}><div className="ca3White ca3Login">Login</div></Col>
                </Row>
                <img src={rocketlaunchlogo}  className="imgLogo"/> <br/>
                <div className="ca3LaunchBig">Launch In</div>
                <span className="ca3CDBig">
                    <span className="ca3Green">00</span>
                    <span className="ca3White">d:</span>
                    <span className="ca3Green">00</span>
                    <span className="ca3White">h:</span>
                    <span className="ca3Lime">14</span>
                    <span className="ca3White">m:</span>
                    <span className="ca3Green">43</span>
                    <span className="ca3White">s</span>
                </span>

                <div className="ca3LaunchinfoBig">
                SpaceX - Cape Canaveral Air Force Station - SLC 40, USA
                </div>
            </Container>
        </div>
    );
};

export default HeaderLaunch;