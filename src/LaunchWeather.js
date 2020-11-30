import React, { useState, useEffect } from "react"
import "./ca3.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import GoogleMaps from "./GoogleMaps"

const LaunchWeather =() => {
    return (
        <div>
            <Container className="">
                <Row className="ca3siteBody">
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <div className="ca3h1">
                            Hagl og Patter<br/><br/>
                            </div>
                            <img src="https://i.ytimg.com/vi/X_VRlkPsSf4/maxresdefault.jpg"  className="img2"/> 
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LaunchWeather;