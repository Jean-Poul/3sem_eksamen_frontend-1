import React, { useState, useEffect } from "react"
import "./ca3.css";
import { URLLaunchString } from "./settings";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import LaunchString, {launchNo,launchServiceProviderName,location, countrycode}  from "./LaunchString";


const Frontpage =() => {
    
    return (
        
        <div><LaunchString />
            <Container className="">
                <Row className="ca3siteBody">
                <br />
                <Col sm={4}></Col>
                   
                </Row>
                <div id="L0">
                    <span className="ca3CDBig ca3White">Next 9 Launches</span>
                    <br/><br/>
                    <div className="ca3LaunchSmall ca3White">Launch In</div>
                    <span className="ca3CDSmall ca3Green">
                        <span className="ca3Lime">00</span>
                        <span className="ca3White">d:</span>
                        <span className="ca3Lime">00</span>
                        <span className="ca3White">h:</span>
                        <span className="ca3Lime">14</span>
                        <span className="ca3White">m:</span>
                        <span className="ca3Green">43</span>
                        <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                    <span>{launchServiceProviderName}</span><br/>
                     <span>{location}</span><br/>
                     <span>{countrycode}</span>
                    </div>
                    <br />
                </div>

                {/*TEST LAUNCHES*/}

                <div id="L1">
                    <div className="ca3LaunchSmall ca3White">Launch In</div>
                    <span className="ca3CDSmall">
                        <span className="ca3Orange">02</span>
                        <span className="ca3White">d:</span>
                        <span className="ca3Orange">04</span>
                        <span className="ca3White">h:</span>
                        <span className="ca3Lime">34</span>
                        <span className="ca3White">m:</span>
                        <span className="ca3Green">12</span>
                        <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                    United Launch Alliance - Cape Canaveral fl, USA
                    </div>
                    <br />
                </div>
                <div id="L2">
                    <div className="ca3LaunchSmall ca3White" >Launch In</div>
                    <span className="ca3CDSmall">
                        <span className="ca3Red">03</span>
                        <span className="ca3White">d:</span>
                        <span className="ca3Orange">23</span>
                        <span className="ca3White">h:</span>
                        <span className="ca3Lime">12</span>
                        <span className="ca3White">m:</span>
                        <span className="ca3Green">10</span>
                        <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                    Indian Space Research Organization - Satish Dhawan Space Centre First Launch Pad
                    </div>
                    <br />
                </div>
                <div id="L3">
                    <div className="ca3LaunchSmall ca3White">Launch In</div>
                    <span className="ca3CDSmall">
                        <span className="ca3Red">14</span>
                        <span className="ca3White">d:</span>
                        <span className="ca3Orange">09</span>
                        <span className="ca3White">h:</span>
                        <span className="ca3Lime">43</span>
                        <span className="ca3White">m:</span>
                        <span className="ca3Green">32</span>
                        <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                    LandSpace - Jiuquan, People's Republic of China
                    </div>
                    <br />
                </div>
                <div id="L4">
                    <div className="ca3LaunchSmall ca3White">Launch In</div>
                    <span className="ca3CDSmall">
                        <span className="ca3Red">23</span>
                        <span className="ca3White">d:</span>
                        <span className="ca3Orange">12</span>
                        <span className="ca3White">h:</span>
                        <span className="ca3Lime">47</span>
                        <span className="ca3White">m:</span>
                        <span className="ca3Green">32</span>
                        <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                    United Launch Alliance - Vandenberg AFB, CA, USA
                    </div>
                    <br />
                </div>
                <div id="L5">
                    <div className="ca3LaunchSmall ca3White">Launch In</div>
                    <span className="ca3CDSmall">
                        <span className="ca3Red">27</span>
                        <span className="ca3White">d:</span>
                        <span className="ca3Orange">15</span>
                        <span className="ca3White">h:</span>
                        <span className="ca3Lime">21</span>
                        <span className="ca3White">m:</span>
                        <span className="ca3Green">56</span>
                        <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                    Russian Space Forces - Plesetsk Cosmodrome, Russian Federation
                    </div>
                    <br />
                </div>

                <div id="L6">
                    <div className="ca3LaunchSmall ca3White">Launch In</div>
                    <span className="ca3CDSmall">
                    <span className="ca3Red">32</span>
                    <span className="ca3White">d:</span>
                    <span className="ca3Orange">17</span>
                    <span className="ca3White">h:</span>
                    <span className="ca3Lime">15</span>
                    <span className="ca3White">m:</span>
                    <span className="ca3Green">14</span>
                    <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                    SpaceX - Unknown Location
                    </div>
                    <br />
                </div>
                <div id="L7">
                    <div className="ca3LaunchSmall ca3White">Launch In</div>
                    <span className="ca3CDSmall">
                    <span className="ca3Red">47</span>
                    <span className="ca3White">d:</span>
                    <span className="ca3Orange">26</span>
                    <span className="ca3White">h:</span>
                    <span className="ca3Lime">05</span>
                    <span className="ca3White">m:</span>
                    <span className="ca3Green">26</span>
                    <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                    Rocket Lab Ltd - Onenui Station, Mahia Peninsula, New Zealand
                    </div>
                    <br />
                </div>
                <div id="L8">
                    <div className="ca3LaunchSmall ca3White">Launch In</div>
                    <span className="ca3CDSmall">
                    <span className="ca3Red">56</span>
                    <span className="ca3White">d:</span>
                    <span className="ca3Orange">09</span>
                    <span className="ca3White">h:</span>
                    <span className="ca3Lime">21</span>
                    <span className="ca3White">m:</span>
                    <span className="ca3Green">56</span>
                    <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                    SpaceX - South Texas Launch Site
                    </div>
                    <br />
                </div>
                <div id="L9">
                    <div className="ca3LaunchSmall ca3White">Launch In</div>
                    <span className="ca3CDSmall">
                    <span className="ca3Red">69</span>
                    <span className="ca3White">d:</span>
                    <span className="ca3Orange">11</span>
                    <span className="ca3White">h:</span>
                    <span className="ca3Lime">43</span>
                    <span className="ca3White">m:</span>
                    <span className="ca3Green">32</span>
                    <span className="ca3White">s</span>
                    </span>

                    <div className="ca3LaunchinfoSmall ca3White">
                        SpaceX - Cape Canaveral Air Force Station - SLC 40, USA
                    </div>
                    <br />
                </div>
               

            </Container>
        </div>
    );
};

export default Frontpage;
