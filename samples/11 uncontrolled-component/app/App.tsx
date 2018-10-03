import * as React from "react";
import {RefObject} from "react";

interface AppState {
    name: string;
}

export class App extends React.Component<{}, AppState> {
    inputName: RefObject<HTMLInputElement>;

    constructor(props) {
        super(props);

        this.state = {
            name: "Ori",
        }

        this.inputName = React.createRef();
    }

    render() {
        return <div className="App">
            <h1>Hello React</h1>

            <span>Name:</span>
            <input value={this.state.name} onChange={this.onInputChange} ref={this.inputName}/>

            <div>
                <button onClick={this.sayHello}>Say Hello</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        </div>
    }

    onInputChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    sayHello = () => {
        alert("Hello " + this.inputName.current.value);
    }

    reset = () => {
        this.inputName.current.value = "";
    }
}

