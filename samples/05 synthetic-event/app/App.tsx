import * as React from "react";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <h1>Hello React</h1>
            <button onClick={this.run}>Click me</button>
        </div>
    }

    run = (e) => {
        console.log(e == e.nativeEvent);
    }
}

