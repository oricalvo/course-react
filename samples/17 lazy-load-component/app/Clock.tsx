import * as React from "react";

export interface ClockState {
    time: Date;
}

export default class Clock extends React.Component<{}, ClockState> {
    intervalId: any;

    constructor(props) {
        super(props);

        console.log("Clock.ctor");

        this.state = {
            time: new Date(),
        };
    }

    componentWillMount() {
        console.log("Clock.componentWillMount");

        this.intervalId = setInterval(()=> {
            this.setState({
                time: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        console.log("Clock.componentWillUnmount");

        clearInterval(this.intervalId);
    }

    render() {
        const {time} = this.state;

        return <span>{time.toLocaleTimeString()}</span>
    }
}
