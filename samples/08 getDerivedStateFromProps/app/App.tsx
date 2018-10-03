import * as React from "react";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
    }

    render() {
        return <div className="App">
            <h1>Hello React</h1>
        </div>
    }
}

