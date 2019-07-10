import React, { Component } from 'react';
import 'react-bootstrap';
import '../Styles/Daily.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Skycons } from '../skycons.js';

class Daily extends Component {
  render(){
    const city = this.props.place.replace(/^.+\//, "").replace(/_/, " ");
    let data = this.props.current;
    let temperature = data.apparentTemperature;
    temperature = Math.floor(temperature);

    const description = data.summary;

    let iconName = this.props.icon;

    var skycons = new Skycons({"color": "white"});
    skycons.set("icon1", Skycons[iconName]);
    skycons.play();

    /* Get the current time and date for the location being request from
     * Darksky API. ~~~~~~~~~~~~~~
     */
    let hours, mins, today, meridiem, time;
    today = new Date();

    hours = today.getHours();
    mins = today.getMinutes();
    today = today.toDateString();
      if (hours >= 12) {
        meridiem = 'pm';
        hours = hours - 12;
      } else {
        meridiem = 'am';
      }
    time = hours + ':' + mins + ' ' + meridiem;

    return (
  <section className="container" id="daily-forecast-section">
    <div className="row" id="location">
      <FaMapMarkerAlt id="marker-icon" />
    <h1 id="timezone">{city}</h1>
    </div>
    <div className="container row" id="time-day-date">
      <div id="time">{time} -</div>
      <div className="ml-2" id="date">{today}</div>
    </div>
    <div className="row container" id="daily-temp-wrapper">
      <div id="temperature">{temperature + '°c'}</div>
    </div>
    <div className="container d-flex" id="skycon-desc-wrapper">
      <div id="weather-icon">
        <canvas id="icon1" width="128" height="128"></canvas>
      </div>
    <div id="weather-description">{description}</div>
    </div>
  </section>
    );
  }
}

export default Daily;
