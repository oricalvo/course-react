import * as React from "react";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

render() {
    return <div className="App">
        <h1>Hello React</h1>

        <button onClick={this.load}>Load</button>
    </div>
}

load = async () => {
    const {LazyService} = await import("./lazy.service");
    const service = new LazyService();
    service.run();
}
}

