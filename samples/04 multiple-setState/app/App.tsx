import * as React from "react";

interface AppState {
    counter: number;
}

export class App extends React.Component<{}, any> {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    render() {
        return <div className="App">
            <h1>Hello React</h1>

            <button onClick={this.inc}>Inc</button>
            <span>{this.state.counter}</span>
        </div>
    }

inc = () => {
    this.setState((state, props) => {
        return {
            // counter: this.state.counter + 1,
            counter: state.counter + 1,
        }
    });

    this.setState((state, props) => {
        return {
            // counter: this.state.counter + 1,
            counter: state.counter + 1,
        }
    });
}
}

inc = () => {
    this.setState((state, props) => {
        return {
            counter: state.counter + 1,
        }
    });

    this.setState((state, props) => {
        return {
            counter: state.counter + 1,
        }
    });
}

