import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';
import Search from './Search';
import Daily from './Daily';
import Weekly from './Weekly';
import dotenv from 'dotenv';

require('dotenv').config();

class App extends Component {
  constructor(){
    super();
    this.state = {
      city: '',
      current: [],
      icon: '',
      dailyHiOne: '',
      dailyHiTwo: '',
      dailyHiThree: '',
      timezone: '',
      dailyLoOne: '',
      dailyLoTwo: '',
      dailyLoThree: '',
      iconWk1: '',
      iconWk2: '',
      iconWk3: ''
    }
 }

 componentDidMount(){
   const api_key= process.env.REACT_APP_API_KEY;
   const proxy = "http://cors-anywhere.herokuapp.com/";
   let api = `${proxy}https://api.darksky.net/forecast/${api_key}/37.8267,-122.4233`;

   fetch(api).then(response => {
     return response.json();
   }).then(data => {
     let icon = data.currently.icon.toUpperCase().replace(/-/g, "_");
     let iconWk1 = data.daily.data[0].icon.toUpperCase().replace(/-/g, "_");
     let iconWk2 = data.daily.data[1].icon.toUpperCase().replace(/-/g, "_");
     let iconWk3 = data.daily.data[2].icon.toUpperCase().replace(/-/g, "_");

     this.setState({
       city: data.timezone,
       current: data.currently,
       icon: icon,
       dailyHiOne: data.daily.data[0].temperatureHigh,
       dailyHiTwo: data.daily.data[1].temperatureHigh,
       dailyHiThree: data.daily.data[2].temperatureHigh,
       timezone: data.timezone,
       dailyLoOne: data.daily.data[0].temperatureLow,
       dailyLoTwo: data.daily.data[1].temperatureLow,
       dailyLoThree: data.daily.data[2].temperatureLow,
       iconWk1: iconWk1,
       iconWk2: iconWk2,
       iconWk3: iconWk3
     });
   })
 }

  render(){
    return (
        <main>
          <div className="container">
          <Search />
          <Daily place={this.state.city} current={this.state.current} icon={this.state.icon}/>
          </div>
          <Weekly  one={this.state.dailyHiOne} two={this.state.dailyHiTwo} three={this.state.dailyHiThree} input={this.state.timezone}
          four={this.state.dailyLoOne} five={this.state.dailyLoTwo} six={this.state.dailyLoThree} iconWk1={this.state.iconWk1}
          iconWk2={this.state.iconWk2} iconWk3={this.state.iconWk3}
          />
        </main>
    );
  }
}

export default App;
