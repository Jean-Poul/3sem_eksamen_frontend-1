import React, { Component } from 'react';
import "./ca3.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Comments, {WriteComment} from './Comments';



const LaunchInformation =() => {
    return (
        <div >
            
            <Container className="">
                <Row className="ca3siteBody">
                    
                    <Col sm={4}>
                        <div className="ca3h1">
                            Date: <br/>
                            Estimated Launch:<br/>
                            Location:<br/>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="ca3P">
                            November 27, 2020 <br/>
                            09:02 EST<br/>
                            Cape Canaveral Air Force Station - SLC 40<br/>
                        </div>
                    </Col>
                </Row>
                
                <Col>
                    <br/>
                    <img src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/logo/spacex_logo_20191121063502.png" className="img"></img>
                    <br/>
                    <br/>
                </Col>
                <Row className="ca3siteBody">

                <Col sm={4}>
                    <div className="ca3h1">
                        Launch Provider:<br/>
                        Type:<br/>
                        Mission Name:<br/>
                        Mission Details:<br/>
                    </div>
                </Col>

                <Col sm={8}>
                    <div className="ca3P">
                        SpaceX<br/>
                        Commercial<br/>
                        Red Rocket <br/>
                    </div>
                    <div className="ca3MDetails">
                        A SpaceX Falcon 9 rocket will launch the 16th batch, of approximately 60 satellites for SpaceX’s Starlink broadband network, a mission designated Starlink V1.0-L15.
                    </div>
                    <br/>
                </Col>

                <Col sm={4}>
                    <div className="ca3h1">
                        Vehicle:<br/>
                    </div>
                </Col>

                <Col sm={8}>
                    <div className="ca3P">
                        SpaceX Falcon 9<br/>

                    </div>
                </Col>

                
                </Row>
                <Col>
                    <br/>
                    <img src="https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/arianespace_image_20190207032425.jpeg" className="imgRocket"></img>
                    <br/>
                    <br/>
                </Col>
            </Container>
            
            <hr className="ca3Hr"/>
            <br/>
            <div className="ca3LaunchSmall">Comment Section</div>
            <Container>
                <Comments />
                <Comments />
                <Comments />
                <WriteComment/>
            </Container>
            
        </div>
    );
};


export default LaunchInformation;