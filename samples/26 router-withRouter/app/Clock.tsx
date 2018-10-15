import * as React from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {History} from "history";

export interface ClockProps {
    history?: History;
}

class Clock extends React.Component<ClockProps> {
    constructor(props) {
        super(props);

        console.log("history", !!this.props.history);
    }

    render() {
        const now = new Date();

        return <span>
            {now.toLocaleTimeString()}
        </span>;
    }
}

export default withRouter(Clock);
