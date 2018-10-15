import * as React from "react";
import {LazyClock} from "./LazyClock";

export interface AppState {
    showClock: boolean,
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            showClock: false,
        };
    }

    render() {
        const {showClock} = this.state;

        return <div className="App">
            <h1>Hello React</h1>

            <button onClick={this.toggle}>Toggle</button>

            {
                showClock ? <LazyClock/> : null
            }
        </div>
    }

    toggle = () => {
        this.setState(state => ({
            showClock: !state.showClock,
        }));
    }
}

