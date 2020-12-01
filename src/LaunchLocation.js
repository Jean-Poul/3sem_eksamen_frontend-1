import React, { useState, useEffect } from "react"
import "./ca3.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import GoogleApiWrapper from "./GoogleMaps"
import LaunchString, {location, countrycode, wikilink, latitude, longitude}  from "./LaunchString";


const LaunchLocation =() => {
    return (
        <div >
            <LaunchString/>
            <Container className="">
                <Row className="ca3siteBody">
                    
                    <Col sm={4}>
                        <div className="ca3h1 ca3Orange">
                            Location: <br/>
                            Country:<br/>
                            wiki link:<br/>
                            <br/>
                            Latitude:<br/>
                            Longitude:<br/>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="ca3P ca3White">
                            {location}<br/>
                            {countrycode}<br/>
                            <a href={wikilink} className="ca3Green">Link</a> <br/> <br/>
                            {latitude}<br/>
                            {longitude}<br/>
                        </div>
                    </Col>
                </Row>
                
                </Container>
                <div className="main-wrapper "><br/><br/>
                 <GoogleApiWrapper/>
               </div>
      
            
        </div>
    );
};




export default LaunchLocation;