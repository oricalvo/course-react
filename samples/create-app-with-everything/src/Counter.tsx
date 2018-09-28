import * as React from 'react';
import './App.scss';

interface CounterState {
  counter: number;
}

class Counter extends React.Component<{}, CounterState> {
  public render() {
    const {counter} = this.state;

    return (
      <div className="Counter">
        <button>Dec</button>
        <span>{counter}</span>
      </div>
    );
  }
}

export default Counter;
