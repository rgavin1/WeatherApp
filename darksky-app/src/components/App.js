import React from 'react';
import logo from '../logo.svg';
import '../Styles/App.css';
import Search from './Search';
import Daily from './Daily';
import Weekly from './Weekly';

function App() {
  return (
      <main className="container pt-5">
        <Search />
        <Daily  />
        <Weekly />
      </main>
  );
}

export default App;
