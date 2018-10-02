import React, { Component } from 'react';
import styles from './App.module.css';

console.log(styles);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>

        <button className={styles.btn}>Inc</button>
      </div>
    );
  }
}

export default App;
