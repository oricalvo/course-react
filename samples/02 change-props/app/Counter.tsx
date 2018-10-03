import * as React from "react";

interface CounterProps {
    count: number;
}

export class Counter extends React.Component<CounterProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const {count} = this.props;

        return <div>
            <button onClick={this.dec}>Dec</button>
            <span>{count}</span>
            <button>Inc</button>
        </div>
    }

    dec = () => {
        this.props.count--;
    }
}
