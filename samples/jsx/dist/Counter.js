class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return React.createElement("div", null, React.createElement("button", {
      onClick: () => this.dec()
    }, "Dec"), React.createElement("span", null, this.state.counter), React.createElement("button", {
      onClick: () => this.inc()
    }, "Inc"));
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