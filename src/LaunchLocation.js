import React, { useState, useEffect } from "react"
import "./ca3.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import GoogleApiWrapper from "./GoogleMaps"

const LaunchLocation =() => {
    return (
        <div >
            
            <Container className="">
                <Row className="ca3siteBody">
                    
                    <Col sm={4}>
                        <div className="ca3h1">
                            Location: <br/>
                            Country:<br/>
                            wiki link:<br/>
                            <br/>
                            Lattitude:<br/>
                            Longitude:<br/>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="ca3P">
                            Cape Canaveral Air Force Station - SLC 40 <br/>
                            USA<br/>
                            <a href="https://en.wikipedia.org/wiki/Cape_Canaveral_Space_Launch_Complex_41">Cape Canaveral</a> <br/> <br/>
                            28.562311364583692<br/>
                            -80.57676638004789<br/>
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