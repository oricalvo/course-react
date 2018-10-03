import * as React from "react";
import {Dialog, dialogService} from "./Dialog";

export class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <h2>About My App</h2>

            <button onClick={this.onOK}>OK</button>
        </div>
    }

    onOK = () => {
        dialogService.close(this);
    }
}

