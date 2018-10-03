import * as React from "react";

interface ClockState {
    time: Date;
}

export class Clock extends React.Component<{}, ClockState> {
    intervalId;

    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.onTick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return <span>{this.state.time.toLocaleTimeString()}</span>
    }

    private onTick = () => {
        this.setState({
            time: new Date()
        });
    }

private onTick = () => {
    this.state.time = new Date();
}
}
