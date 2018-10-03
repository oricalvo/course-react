class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
    }

    render() {
        const {counter} = this.state;

        return e("div", null,
            e("button", {onClick: ()=>this.dec()}, "Dec"),
            e("span", null, counter),
            e("button", {onClick: ()=>this.inc()}, "Inc")
        );
    }

    dec() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    inc() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}
