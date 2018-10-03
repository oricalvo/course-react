import * as React from "react";
import {Counter} from "./Counter";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <Counter count={5}/>
        </div>
    }
}

