import React, { useState, useEffect } from "react"
import "./ca3.css";
import { Form, Container, Row, Col, Button } from "react-bootstrap";


const Comments =() => {
    return (
        <div>
        <Row>
            <Col sm={2}></Col>
            <Col sm={8}>  
                 <div>
                    <div className="ca3CommentName">Blastoff34
                    &nbsp;
                    <div className="ca3CommentInfo">Commented @ 14:32 24th November</div>
                 </div>
                </div>
            </Col>
            <Col sm={2}></Col>
        </Row>
        <Row>
            <Col sm={2}></Col>
            <Col sm={8}>  
                    <div className="ca3Comment">I can't wait for this launch! MY ENTIRE LIFE HAS LET UP TO THIS MOMENT!</div>
                    <br/>  <br/><br/>
            </Col>
            <Col sm={2}></Col>
        </Row>
        </div>
        );
};


    
export const WriteComment =() => {
    
        const init = { username: "", comment: "" };
        const [newComment, setNewComment] = useState(init);
      
        const submitComment = (evt) => {
          evt.preventDefault();
          WriteComment(newComment.username, newComment.comment);
        }
        const onChange = (evt) => {
          setNewComment({ ...newComment, [evt.target.id]: evt.target.value })
        }
    
    return (
        <div>
        <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
        <div class="col-xs-4">
            
            <textarea class="form-control" id="Comment" rows="5" placeholder="Enter username"></textarea>
        </div>     
                <div className="ca3Submit">
                    
                <Button onClick={submitComment} class="btn submit" variant="primary"  type="submit">
                Submit
                </Button>
                </div>
            </Col>
        <Col sm={2}></Col>
        </Row>

        </div>
        );
};


export default Comments;