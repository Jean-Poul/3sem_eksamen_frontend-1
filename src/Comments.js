import React, { useState, useEffect } from "react"
import "./ca3.css";
import { Form,  Row, Col, Button } from "react-bootstrap";
import { URL } from "./settings";
import facade from "./apiFacade";


const Comments = (props) => {

  console.log(parseJwtName(facade.getToken()));

  function parseJwtName(name) {
    let tokenName = JSON.parse(atob(name.split('.')[1]));
    return tokenName.username;
  }

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchAllComments();
    }, []);

    const fetchAllComments = () => {
        fetch(URL + "/api/comments/all")
            .then(res => res.json())
            .then(data => {
                setComments(data);
                console.log(data)
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
                rocketID: props.rocketID,
                userName: parseJwtName(facade.getToken())
            })
        }
        fetch(URL + "/api/comments", options)
        .then(res => {
          fetchAllComments();
        });  
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
                                                <div className="ca3CommentName">User: {data.userName}
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