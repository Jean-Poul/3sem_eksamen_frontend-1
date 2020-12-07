import { Form, Container, Row, Col, Button } from "react-bootstrap";

const AddUser = () => {

  const perfomAddUser = (evt) => {
    evt.preventDefault();

    let options = {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: document.getElementById("userName").value,
        password: document.getElementById("password").value
      })
    }
    fetch(URL + "/user", options);


    console.log("User added");
    document.getElementById("userSubmitted").innerHTML = <div class="alert alert-success" role="alert">You've created a user, login above.</div>;
  }


  return (
    <div>

      <Container>
        <Row>
          <Col>
          </Col>
          <Col>
            <h2 className="ca3White">Sign up</h2>
            <Form className="mt-4">
              <Form.Group controlId="userName">

                <div id="userSubmitted" />

                <Form.Label className="ca3White">Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label className="ca3White">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <Button onClick={perfomAddUser} variant="primary" type="submit">
                Submit
                </Button>
            </Form>
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default AddUser;