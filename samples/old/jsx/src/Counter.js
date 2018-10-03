class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    render() {
        return <div>
            <button onClick={()=>this.dec()}>Dec</button>
            <span>{this.state.counter}</span>
            <button onClick={()=>this.inc()}>Inc</button>
        </div>;
    }

    dec() {
        this.setState({counter: this.state.counter - 1});
    }

    inc() {
        this.setState({counter: this.state.counter + 1});
    }
}
