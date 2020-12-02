import React, { useState } from "react";
import "./style2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
//import AllJokes from "./AllJokes";
//import AllScrape from "./AllScrape";
import Frontpage from "./Frontpage";
import Information from "./Information";
import Location from "./Location";
import Weather from "./Weather";
import UserAdmin from "./UserAdmin";
import CommentAdmin from "./CommentAdmin";
import Login from "./Login";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";

const Header = ({ isLoggedIn, loginMsg, isAdmin, loginName }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" id="header">
        {/* <Navbar.Brand href="#home">Hold E, Gruppe 8</Navbar.Brand> */}
        <Nav className="mr-auto">
          <NavLink className="nav-link" exact activeClassName="selected" href="/" to="/">
            Hold E, Gruppe 8
        </NavLink>
          {/* <NavLink className="nav-link" activeClassName="selected" to="/jokes">
            Jokes
        </NavLink>

          {isLoggedIn && (
            <NavLink className="nav-link" activeClassName="selected" to="/scrape" href="/scrape">
              Scrape
            </NavLink>
          )} */}
          {isAdmin && (
            <>
              <NavLink className="nav-link" activeClassName="selected" to="/comments">
                Comments
            </NavLink>

              <NavLink className="nav-link" activeClassName="selected" to="/users">
                Users
            </NavLink>
            </>
          )}
          <NavLink className="nav-link" activeClassName="selected" to="/login-out">
            {loginMsg}
          </NavLink>
          {isLoggedIn && (
            <>
              <li className="floatRight">
                <span>Logged in as {loginName}</span>
              </li>
            </>
          )}
        </Nav>

      </Navbar>
    </>
  );
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginName, setLoginName] = useState('');

  let history = useHistory();

  const setLoginStatus = (status, name) => {
    setIsLoggedIn(status);
    setLoginName(name);
    history.push("/");
  };

  const setAdminStatus = (status) => {
    setIsAdmin(status);
    history.push("/");
  };

  return (
    <div>
      <Header
        loginMsg={isLoggedIn ? "Logout" : "Login"}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        loginName={isLoggedIn ? loginName : ''}
      />

      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/jokes">
            <Jokes />
          </Route>
          <Route path="/scrape">
            <Scrape />
          </Route> */}
          <Route path="/information">
            <Information />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/login-out">
            <Login
              loginMsg={isLoggedIn ? "Logout" : "Login"}
              isLoggedIn={isLoggedIn}
              setLoginStatus={setLoginStatus}
              setAdminStatus={setAdminStatus}
            />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="pageContent">
      <Frontpage />
    </div>
  );
}

function Users() {
  return (
    <div className="pageContent">
      <UserAdmin />
    </div>
  );
}

function Comments() {
  return (
    <div className="pageContent">
      <CommentAdmin />
    </div>
  );
}

/* function Information() {
  return (
    <div className="pageContent">
      <Information />
    </div>
  );
} */
/* function Jokes() {
  return (
    <div className="pageContent">
      <AllJokes />
    </div>
  );
}

function Scrape() {
  return (
    <div className="pageContent">
      <AllScrape />
    </div>
  );
}

function Admin() {
  return (
    <div className="pageContent">
      <h2>Admin</h2>
    </div>
  );
} */