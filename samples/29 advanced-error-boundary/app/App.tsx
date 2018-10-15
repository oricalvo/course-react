import * as React from "react";
import {ErrorBoundary} from "./ErrorBoundary";
import {ComponentThatThrows} from "./ComponentThatThrows";

export interface AppState {
    throwError: boolean;
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            throwError: false,
        }
    }

    render() {
        const {throwError} = this.state;

        return <div className="App">
            <h1>Hello React</h1>

            <ErrorBoundary>
                <ComponentThatThrows throwError={throwError}/>
            </ErrorBoundary>

            <button onClick={this.rerenderWithError}>Throw error during next render</button>
        </div>
    }

    rerenderWithError = () => {
        this.setState({
            throwError: true,
        });
    }
}


