import React, { Component } from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';
import Search from './Search';
import Daily from './Daily';
import Weekly from './Weekly';


class App extends Component {
  constructor(){
    super();
    this.state = {
      city: '',
      current: [],
      icon: '',
      dailyOne: '',
      dailyTwo: '',
      dailyThree: '',
      timezone: ''
    }
 }

 componentDidMount(){
   const api_key= '097c7bf15268f6a946965b9b602e6121';
   const proxy = "http://cors-anywhere.herokuapp.com/";
   let api = `${proxy}https://api.darksky.net/forecast/${api_key}/37.8267,-122.4233`;

   fetch(api).then(response => {
     return response.json();
   }).then(data => {
     let icon = data.currently.icon.toUpperCase().replace(/-/g, "_");
     this.setState({
       city: data.timezone,
       current: data.currently,
       icon: icon,
       dailyOne: data.daily.data[0].apparentTemperatureHigh,
       dailyTwo: data.daily.data[1].apparentTemperatureHigh,
       dailyThree: data.daily.data[2].apparentTemperatureHigh,
       timezone: data.timezone
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
          <Weekly  one={this.state.dailyOne} two={this.state.dailyTwo} three={this.state.dailyThree} input={this.state.timezone}/>
        </main>
    );
  }
}

export default App;
