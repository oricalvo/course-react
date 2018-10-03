import * as React from "react";
import {Dialog, dialogService} from "./Dialog";
import {About} from "./About";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <h1>Hello React</h1>

            <button onClick={this.showDialog}>Show Dialog</button>

            <Dialog />
        </div>
    }

    showDialog = () => {
        dialogService.show(<About />);
    }
}

