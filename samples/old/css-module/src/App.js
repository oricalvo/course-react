import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hello React</h1>

          <Counter/>
      </div>
    );
  }
}

export default App;
