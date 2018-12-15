import React, { Component } from 'react';
import LandingPage from './components/LandingPage'
import Move from './components/Move'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Move />
      </div>
    );
  }
}

export default App;
