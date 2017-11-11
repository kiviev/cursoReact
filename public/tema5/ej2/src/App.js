import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// components
import {Weather} from './components/index';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App container">
      <div className="jumbotron padded">
          <div className='container'>
            <Weather />
          </div>
      </div>
      </div>
    );
  }
}

export default App;
