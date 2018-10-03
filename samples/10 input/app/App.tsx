import * as React from "react";

interface AppState {
    name: string;
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            name: "Ori",
        }
    }

render() {
    return <div className="App">
        <h1>Hello React</h1>

        <span>Name:</span>
        <input value={this.state.name} onChange={this.onInputChange} />
    </div>
}

onInputChange = (e) => {
    this.setState({
        name: e.target.value
    });
}
}

