import React, { useState, useEffect } from "react"
import "./ca3.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { URLComments } from "./settings";
import { rocketID } from "./LaunchString";


const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchAllComments();
    }, []);

    const fetchAllComments = () => {
        fetch(URLComments + "all")
            .then(res => res.json())
            .then(data => {
                setComments(data);
            });
    }

    const submitComment = (evt) => {
        evt.preventDefault();



        let options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userComment: document.getElementById("Comment").value,
                rocketID: rocketID
            })
        }
        fetch(URLComments, options);
        fetchAllComments();
    }

    return (
        <div>
            <div>

                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        {(typeof comments.all != "undefined") ? (
                            <div>
                                {comments.all.map(data =>
                                    <div key={data.id}>
                                        <Row>
                                            <div>
                                                <div className="ca3CommentName">Blastoff34
                                                &nbsp;
                                                <div className="ca3CommentInfo">Commented @ {data.created}</div>
                                                </div>
                                                <div className="ca3CommentInfo">ROCKET ID:  {data.rocketID}
                                                &nbsp;
                                                </div>
                                            </div>
                                        </Row>
                                        <div className="ca3Comment">{data.userComment} &nbsp;</div>
                                        <br />
                                    </div>
                                )}
                            </div>
                        ) : ('')}
                        <br />  <br /><br />
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={8}>
                        <div class="col-xs-4">
                            <Form className="mt-4" label="">
                                <textarea
                                    class="form-control"
                                    rows="5"
                                    type="text"
                                    id="Comment"
                                    placeholder="Write a comment"
                                />
                                <div className="ca3Submit">
                                    <Button onClick={submitComment} variant="primary" type="submit">
                                        Submit your comment
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={2}></Col>
                </Row>

            </div>
        </div>
    );
};

export default Comments;