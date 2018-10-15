import * as React from "react";
import {UserStatus} from "./UserStatus";

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="App">
            <h1>Home</h1>

            <UserStatus />
        </div>
    }
}

