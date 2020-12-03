import React, { useState, useEffect } from "react"
import "./ca3.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { URLComments } from "./settings";


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
                console.log(data);
            });
    }

    const fetchNewComments = () => {
        fetch(URLComments + "all")
            .then(res => res.json())
            .then(data => {
                setComments(data);
            });
    }

    const submitComment = (evt) => {
        evt.preventDefault();
        //WriteComment(newComment.username, newComment.comment);

        let options = {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userComment: document.getElementById("Comment").value
            })
        }
        fetch(URLComments, options);
        fetchNewComments();
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
                                                <div className="ca3CommentName">Blastoff34 {data.userName}
                                                &nbsp;
                                                <div className="ca3CommentInfo">Commented @ {data.created}</div>
                                                </div>
                                            </div>
                                        </Row>
                                        {/* <div className="ca3Comment">Id:{data.id} &nbsp;</div> */}
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
                            <Form onChange={onChange} className="mt-4" label="">
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

/* function makeOptions(method, body) {
    const opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
    }
    return opts;
} */


//const init = { username: "", comment: "" };
//const [newComment, setNewComment] = useState(init);

const onChange = (evt) => {
    //setNewComment({ ...newComment, [evt.target.id]: evt.target.value })
}


export default Comments;