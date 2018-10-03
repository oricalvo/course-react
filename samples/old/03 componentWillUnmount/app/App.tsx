import * as React from "react";
import {Clock} from "./Clock";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <Clock/>
        </div>
    }
}

