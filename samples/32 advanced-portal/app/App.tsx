import * as React from "react";
import {Modal} from "./Modal";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <h1>Hello React</h1>

            <Modal>
                <h2>Inside a modal and outside of App component</h2>
            </Modal>
        </div>
    }
}

