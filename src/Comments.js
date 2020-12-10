import React, { useState, useEffect } from "react"
import "./ca3.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { URL } from "./settings";
import facade from "./apiFacade";

const dateBuilder = (timestamp) => {
  let d = new Date(timestamp);
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let hours = (d.getHours() < 10 ? "0" : "") + d.getHours();
  let minutes = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
  let seconds = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();

  return `${month} ${date}, ${year} ${hours}:${minutes}:${seconds}`;
};

const Comments = ({ rocketID, isLoggedIn, isAdmin }) => {

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
        rocketID: rocketID,
        userName: parseJwtName(facade.getToken())
      })
    }
    fetch(URL + "/api/comments", options)
      .then(res => {
        fetchAllComments();
        document.getElementById("Comment").value = "";
      });
  }
  console.log("rocketID: " + rocketID)
  console.log("isLoggedIn: " + isLoggedIn)
  console.log("isAdmin: " + isAdmin)

  let rocketComments = comments.all !== undefined
    ? comments.all.filter(rc => rc.rocketID.includes(rocketID))
    : '';
  console.log("rc: " + rocketComments)
  return (
    <div>
      <div>
        {(typeof comments.all != "undefined") ? (
          <div>
            {rocketComments.map(data =>
              <div key={data.id}>
                <Row>
                  <Col sm={3}></Col>
                  <Col sm={6}>
                    <div>
                      <div className="ca3CommentName ca3Orange">{data.userName}&nbsp;
                      <div className="ca3CommentInfo ca3Grey">Commented @ {dateBuilder(data.created)}</div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={3}></Col>
                </Row>
                <Row>
                  <Col sm={3}></Col>
                  <Col sm={6}>
                    <div className="ca3Comment ca3White">{data.userComment} &nbsp;</div>
                  </Col>
                  <Col sm={3}></Col>
                </Row>
                <Row>
                  <Col sm={3}></Col>
                  <Col sm={6}>
                    <div>&nbsp;</div>
                  </Col>
                  <Col sm={3}></Col>
                </Row>
              </div>
            )}
          </div>
        ) : ('')}
      </div>
      <div>
        {(rocketComments.length === 0) ? (
          <div>
            <Row>
              <Col sm={3}></Col>
              <Col sm={6}>
                <div className="ca3Grey">No comments yet</div>
                <div className="ca3Grey">Be the first to comment</div>
              </Col>
              <Col sm={3}></Col>
            </Row>
            <Row>
              <Col sm={3}></Col>
              <Col sm={6}>
                <div>&nbsp;</div>
              </Col>
              <Col sm={3}></Col>
            </Row>
          </div>
        ) : ('')}
      </div>
      <div>
        {(isLoggedIn) ? (
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <div>
                <Form className="mt-4" label="">
                  <textarea
                    className="form-control"
                    rows="5"
                    type="text"
                    id="Comment"
                    placeholder="Write a comment"
                  />

                  <Button onClick={submitComment} variant="primary" type="submit" className="ca3Submit ca3Orange">
                    Submit your comment
                </Button>
                </Form>
              </div>
            </Col>
            <Col sm={3}></Col>
          </Row>

        ) : (
            <Row>
              <Col sm={3}></Col>
              <Col sm={6}>
                <div className="ca3LoginComment">
                  Please login to comment
              </div>
              </Col>
              <Col sm={3}></Col>
            </Row>
          )}


      </div>
    </div>
  );
};

export default Comments;