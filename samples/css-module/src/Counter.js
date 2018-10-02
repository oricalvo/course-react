import React, { Component } from 'react';
import styles from './Counter.module.css';

console.log(styles);

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
          <button className={styles.btn}>Dec</button>
          <h2>Counter</h2>
      </div>
    );
  }
}

export default Counter;
