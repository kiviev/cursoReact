import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// components
import {Weather} from './components/index';

class App extends Component {
  render() {
    return (
      <div className="App container">
      <div className="jumbotron padded">
          <div className='row'>
            <Weather />
          </div>
      </div>
      </div>
    );
  }
}

export default App;
