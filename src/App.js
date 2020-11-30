import React, {useState} from "react";
import "./style2.css";
import "./ca3.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav} from "react-bootstrap";
import Frontpage from "./Home";
import AllJokes from "./AllJokes";
import AllScrape from "./AllScrape";
import LaunchHome from "./Home";
import LaunchInformation from "./LaunchInformation";
import LaunchLocation from "./LaunchLocation";
import LaunchWeather from "./LaunchWeather";
import HeaderLaunch from "./HeaderLaunch";
import Login from "./Login";
import {Switch, Route, NavLink, useHistory} from "react-router-dom";

const Header = ({ isLoggedIn, loginMsg, isAdmin, loginName }) => {
  return (
    <>
      <Navbar   variant="dark" id="header">
        
        <Nav className="ca3NavbarBig m-auto">
          
          <NavLink className="nav-link ca3NavbarBig" exact activeClassName="selected" href="/" to="/">
            Home
        </NavLink>

        {/** 
          <NavLink className="nav-link ca3NavbarBig" activeClassName="selected" to="/jokes">
            Jokes
        </NavLink>*/}
      
          <NavLink className="nav-link ca3NavbarBig" activeClassName="selected" to="/information">
            Information
        </NavLink>
        <NavLink className="nav-link ca3NavbarBig" activeClassName="selected" to="/location">
            Location
        </NavLink>
        <NavLink className="nav-link ca3NavbarBig" activeClassName="selected" to="/weather">
            Weather
        </NavLink>


          {/** 
          {isLoggedIn && (
            <NavLink className="nav-link ca3NavbarBig" activeClassName="selected" to="/scrape" href="/scrape">
              Scrape
            </NavLink>
          )}
          {isAdmin && (
            <>
              <li>
                <NavLink className="nav-link ca3NavbarBig" activeClassName="selected" to="/admin">
                  Admin
            </NavLink>
              </li>
            </>
          )}
          <NavLink className="nav-link ca3NavbarBig" activeClassName="selected" to="/login-out">
            {loginMsg}
          </NavLink>
          {isLoggedIn && (
            <>
              <li className="floatRight">
                <span>Logged in as {loginName}</span>
              </li>
            </>
          )}*/}
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
    <div className="pageContent">
      <HeaderLaunch />
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
          <Route path="/jokes">
            <Jokes />
          </Route>
          <Route path="/scrape">
            <Scrape />
          </Route>


          <Route path="/information">
            <Information/>
          </Route>
          <Route path="/Location">
            <Location />
          </Route>
          <Route path="/Weather">
            <Weather />
          </Route>

          <Route path="/admin">
            <Admin />
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
            <Frontpage/>
        </div>
    );
}

function Jokes() {
    return (
        <div className="pageContent">
            <AllJokes/>
        </div>
    );
}

function Scrape() {
    return (
        <div className="pageContent">
            <AllScrape/>
        </div>
    );
}

function Admin() {
  return (
    <div className="pageContent">
      <h2>Admin</h2>
    </div>
  );
}

function Information() {
  return (
    <div className="pageContent">
     <LaunchInformation />

    </div>
  );
}
function Location() {
  return (
    <div className="pageContent">
      <LaunchLocation />
    </div>
  );
}
function Weather() {
  return (
    <div className="pageContent">
      <LaunchWeather />
    </div>
  );
}
