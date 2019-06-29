import React, { Component } from 'react';
import '../Styles/Weekly.css';

class Weekly extends Component {
  render(){

    let one = this.props.one;
    let two = this.props.two;
    let three = this.props.three;
    
    return(
      <section id="weekly-forecast-section">
          <div className="col">{one}</div>
          <div className="col">{two}</div>
          <div className="col">{three}</div>
      </section>
    );
  }
}

export default Weekly;
