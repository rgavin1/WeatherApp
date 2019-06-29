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
      icon: ''
    }
 }

 componentDidMount(){
   const proxy = "http://cors-anywhere.herokuapp.com/";
   let api = `${proxy}https://api.darksky.net/forecast/097c7bf15268f6a946965b9b602e6121/37.8267,-122.4233`;

   fetch(api).then(response => {
     return response.json();
   }).then(data => {
     let icon = data.currently.icon.toUpperCase().replace(/-/g, "_");
     this.setState({
       city: data.timezone,
       current: data.currently,
       icon: icon
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
          <Weekly />
        </main>
    );
  }
}

export default App;
