import React, { Component } from 'react';
import '../Styles/Weekly.css';

class Weekly extends Component {
  render(){

    let one = this.props.one;
    let two = this.props.two;
    let three = this.props.three;

    

    return(
      <section id="weekly-forecast-section">
          <ul className="col">
            <li>{this.props.input}</li>
            <li>{one}</li>
            <li>HI/LO</li>
          </ul>
          <ul className="col">
            <li>Date</li>
            <li>{two}</li>
            <li>HI/LO</li>
          </ul>
          <ul className="col">
            <li>Date</li>
            <li>{three}</li>
            <li>HI/LO</li>
          </ul>
      </section>
    );
  }
}

export default Weekly;
