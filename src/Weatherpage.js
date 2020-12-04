import React, { useState, useEffect } from 'react';
//import "./ca3.css";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import rocketlaunchlogo from "./assets/rocketlaunch_logo_orange_dark_1500.png";
import Compass from './assets/compass.svg';
import Barometer from './assets/barometer.svg';
import Humidity from './assets/humidity.svg';
import Sunrise from './assets/sunrise.svg';
import Sunset from './assets/sunset.svg';
import { useLocation, useHistory } from 'react-router-dom'
import Countdown from "./Countdown";
import { URL } from "./settings";

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY
}

function App() {
  const [weather, setWeather] = useState({});
  const [cityName, setCityName] = useState({});
  const [nextlaunch, setNextlaunch] = useState({});
  let location = useLocation();
  let history = useHistory();
  let index = (location.launchProp !== undefined) ? location.launchProp.index : history.push("/");
  let lat = (location.launchProp !== undefined) ? location.launchProp.lat : history.push("/");
  let lon = (location.launchProp !== undefined) ? location.launchProp.lon : history.push("/");
  console.log("index: " + index + " lat: " + lat + " lon: " + lon);

  const fetchWeather = () => {
    fetch(`${URL}/api/weather/${lat}/${lon}/${api.key}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data);
        console.log(data);

        fetch(`${URL}/api/geoloc/${lat}/${lon}`)
          .then(res => res.json())
          .then(data2 => {
            setCityName(data2);
            console.log(data2);
          });
      });
  }

  const fetchNextlaunch = () => {
    fetch(`${URL}/api/nextlaunch/upcoming`)
      .then(res => res.json())
      .then(data => {
        setNextlaunch(data);
        console.log(data);
      });
  }

  useEffect(() => {
    fetchNextlaunch();
    fetchWeather();
  }, []);

  const dateBuilder = (unix) => {
    let d = new Date(unix * 1000);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }

  const dateBuilderSmall = (unix) => {
    let d = new Date(unix * 1000);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];

    return `${day}`
  }

  const getDirection = (angle) => {
    //let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    let directions16 = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    //return directions[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8];
    return directions16[Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 22.5) % 16];
  }

  const dateTimeConverter = (unix, zone) => {
    let gmt = new Date(unix * 1000).getTimezoneOffset() * 60;
    let date = new Date(unix * 1000 + ((zone + gmt) * 1000));

    let hour = date.getHours();
    let min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

    return `${hour}:${min}`;
  }

  return (
    <div>
      <div>
        {(typeof nextlaunch.results != "undefined") ? (
          <div>
            <img src={rocketlaunchlogo} className="imgLogo" alt="" /><br />
            <div className="ca3LaunchBig ca3White">Weather information</div>
            <div className="ca3CDBig"><Countdown date={(nextlaunch.results[index].net)} /></div>
            <div className="ca3LaunchinfoBig ca3White">{nextlaunch.results[index].launch_service_provider.name}</div>
            <div className="ca3LaunchinfoBig ca3White">{nextlaunch.results[index].pad.location.name}</div>
            <div className="ca3LaunchinfoBig ca3White">{nextlaunch.results[index].pad.location.country_code}</div>

            <div>
              <Navbar variant="dark">
                <Nav className="ca3NavbarBig m-auto">
                  <NavLink className="nav-link ca3NavbarBig ca3Orange" exact activeClassName="selected" href="/" to="/">
                    Home
                                </NavLink>
                  <NavLink className="nav-link ca3NavbarBig ca3Orange" activeClassName="selected" to={{
                    pathname: "/information",
                    launchProp: { index: index }
                  }}>
                    Information
                                </NavLink>
                  <NavLink className="nav-link ca3NavbarBig ca3Orange" activeClassName="selected" to={{
                    pathname: "/location",
                    launchProp: {
                      index: index,
                      lat: nextlaunch.results[index].pad.latitude,
                      lon: nextlaunch.results[index].pad.longitude
                    }
                  }}>
                    Location
                                </NavLink>
                  <NavLink className="nav-link ca3NavbarBig ca3Orange" activeClassName="selected" to={{
                    pathname: "/weather",
                    launchProp: {
                      index: index,
                      lat: nextlaunch.results[index].pad.latitude,
                      lon: nextlaunch.results[index].pad.longitude
                    }
                  }}>
                    Weather
                                </NavLink>
                </Nav>
              </Navbar>
            </div>
          </div>
        ) : ('')}
      </div>
      <div className="mt-5">
        {(typeof weather.current != "undefined") ? (
          <main>
            <div>
              <div className="location-box">
                <div className="location">{cityName.locality}, {cityName.countryName}</div>
                <div className="date">{dateBuilder(weather.current.dt)}</div>
              </div>
              <div className="weather-box">
                <div className="temp">{Math.round(weather.current.temp)}°c</div>
                <div className="weather">{weather.current.weather[0].main}</div>
                <div>
                  <img src={" http://openweathermap.org/img/wn/" + weather.current.weather[0].icon + "@2x.png"} alt="" />
                </div>
                <div className="items">
                  <div className="itemLarge">
                    <div>{weather.current.weather[0].description}</div>
                    <div>feels like {Math.round(weather.current.feels_like)}°c</div>
                  </div>
                  <div className="itemSmall">
                    <div className="itemT"><img alt="" src={Compass} className="icon" style={{ transform: `rotate(${weather.current.wind_deg}deg)` }} />&nbsp;
                  {weather.current.wind_speed}m/s {getDirection(weather.current.wind_deg)}</div>
                    <div className="itemT"><img alt="" src={Barometer} className="icon" />&nbsp;
                  {weather.current.pressure}hPa</div>
                    <div className="itemT"><img alt="" src={Humidity} className="icon" />{' '}
                  Humidity {weather.current.humidity}%</div>
                  </div>
                  <div className="itemSmall">
                    <div className="itemB"><img alt="" src={Sunrise} className="icon2" />&nbsp;Sunrise {dateTimeConverter(weather.current.sunrise, weather.timezone_offset)}</div>
                    <div className="itemB"><img alt="" src={Sunset} className="icon2" />&nbsp;Sunset {dateTimeConverter(weather.current.sunset, weather.timezone_offset)}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="daily-box">
              {weather.daily.map(data =>
                <div key={data.dt} className="itemDaily">
                  <div className="itemDailyHeader">{dateBuilderSmall(data.dt)}</div>
                  <div>
                    <img src={" http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"} alt="" className="iconSmall" />
                  </div>
                  <div className="tempDaily">
                    <div>{Math.round(data.temp.max)}°</div>&nbsp;&nbsp;
                  <div className="tempDailyCold">{Math.round(data.temp.min)}°</div>
                  </div>
                  <div className="dailyDescription">{data.weather[0].description}</div>

                  <div className="dailyDescription">
                    <img alt="" src={Compass} className="icon3" style={{ transform: `rotate(${data.wind_deg}deg)` }} />&nbsp;
                  {data.wind_speed}m/s {getDirection(data.wind_deg)}
                  </div>
                </div>
              )}
            </div>
          </main>
        ) : ('')}

      </div>
    </div>
  );
}

export default App;