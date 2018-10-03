import * as React from "react";
import {Child} from "./Child";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <h1>Hello React</h1>
            <Child/>
        </div>
    }
}

