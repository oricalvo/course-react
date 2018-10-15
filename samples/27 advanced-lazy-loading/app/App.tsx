import * as React from "react";
import {Clock} from "./Clock";

export interface AppState {
    Clock: any;
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            Clock: null,
        }
    }

    render() {
        const {Clock} = this.state;

        return <div className="App">
            <h1>Hello React</h1>

            <button onClick={this.load}>Load</button>

            {Clock ? <Clock /> : null}
        </div>
    }

    load = async () => {
        let {Clock} = this.state;
        if(!Clock){
            const clockModule = await import("./Clock");
            Clock = clockModule.Clock;

            this.setState(state => ({
                Clock,
            }));
        }
    }
}
