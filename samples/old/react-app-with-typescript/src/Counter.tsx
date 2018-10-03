import * as React from 'react';
import './App.css';

export interface CounterState {
    counter: number;
}

class Counter extends React.Component<{}, CounterState> {
    constructor(props: any) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    public render() {
        return (
            <div className="Counter">
                <button onClick={this.dec}>Dec</button>
                <span>{this.state.counter}</span>
                <button onClick={this.inc}>Inc</button>
            </div>
        );
    }

    dec = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    inc = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}

export default Counter;
