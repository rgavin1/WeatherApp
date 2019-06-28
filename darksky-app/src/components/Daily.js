import React, { Component } from 'react';
import 'react-bootstrap';
import '../Styles/Daily.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

class Daily extends Component {
  render(){
    return (
  <section className="container" id="daily-forecast-section">
    <div class="row" id="location">
      <FaMapMarkerAlt id="marker-icon" />
    <h1 id="timezone">Akron, Ohio</h1>
    </div>
    <div className="container row" id="time-day-date">
      <div id="time">5:00pm -</div>
      <div id="day">Thursday, </div>
      <div id="date">Date</div>
    </div>
    <div className="row container" id="daily-temp-wrapper">
      <div id="temperature">61°c</div>
      <div className="ml-auto" id="unit">
        <button id="celsius">C</button>
        <button id="fahrenheit">F</button>
      </div>
    </div>
    <div className="container d-flex" id="skycon-desc-wrapper">
      <div id="weather-icon">weather icon</div>
    <div id="weather-description">Cloudy</div>
    </div>
  </section>
    );
  }
}

export default Daily;
