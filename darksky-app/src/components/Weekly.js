import React, { Component } from 'react';
import '../Styles/Weekly.css';
import { Skycons } from '../skycons.js';

class Weekly extends Component {
  render(){
    function nxtDate(today, nxtday){
      var tomorrow = new Date();
      tomorrow.setDate(today.getDate()+ nxtday);
      tomorrow = tomorrow.toString().split(" ", 3);
      return tomorrow[0] + ' ' + tomorrow[1] + '/' + tomorrow[2];
    }

    let one = Math.floor(this.props.one);
    let two = Math.floor(this.props.two);
    let three = Math.floor(this.props.three);
    let four = Math.floor(this.props.four);
    let five = Math.floor(this.props.five);
    let six = Math.floor(this.props.six);
    let iconWk1 = this.props.iconWk1;
    let iconWk2 = this.props.iconWk2;
    let iconWk3 = this.props.iconWk3;

    var current = new Date();

    var skycons = new Skycons({"color": "rgba(229, 229, 229, 1)"});
    skycons.set("icon2", Skycons[iconWk1]);
    skycons.set("icon3", Skycons[iconWk2]);
    skycons.set("icon4", Skycons[iconWk3]);
    skycons.play();

    return(
      <section className="d-flex justify-content-around pt-4" id="weekly-forecast-section">
          <ul>
            <li>{nxtDate(current, 1)}</li>
            <li><canvas id="icon2" width="50" height="50"></canvas></li>
            <li>{one}/{four}</li>
          </ul>
          <ul>
            <li>{nxtDate(current, 2)}</li>
            <li><canvas id="icon3" width="50" height="50"></canvas></li>
            <li>{two}/{five}</li>
          </ul>
          <ul>
            <li>{nxtDate(current, 3)}</li>
            <li><canvas id="icon4" width="50" height="50"></canvas></li>
            <li>{three}/{six}</li>
          </ul>
      </section>
    );
  }
}

export default Weekly;
