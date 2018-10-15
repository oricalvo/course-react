import * as React from "react";
import Clock from "./Clock";

export class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Home</h1>

            <Clock />
        </div>;
    }
}
