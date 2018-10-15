import * as React from "react";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const now = new Date();

        return <span>
            {now.toLocaleTimeString()}
        </span>
    }
}
