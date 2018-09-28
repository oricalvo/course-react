import * as React from "react";
import {appStore} from "./store";

interface CounterState {
    counter: number;
}

class Counter extends React.Component<{}, CounterState> {
    constructor(props) {
        super(props);
    }

    render() {
        const {counter} = appStore;

        return <div>
            <button onClick={this.dec}>Dec</button>
            <span>{counter}</span>
        </div>
    }

    dec = () => {
        const {counter} = appStore;

        // this.setState({
        //     counter: counter - 1
        // });

        appStore.counter--;

        this.forceUpdate();
    }
}

export default Counter;
