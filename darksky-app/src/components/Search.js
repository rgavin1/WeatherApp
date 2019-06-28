import React, { Component } from 'react';
import '../Styles/Search.css';
import { FaSearch } from 'react-icons/fa';
import 'react-bootstrap';

class Search extends Component {
  render(){
    return (
      <section className="container d-flex justify-content-start " id="search-section">
          <FaSearch id="search-icon" />
        <input className="ml-1" id="search-box"></input>
      </section>
    );
  }
}

export default Search;
