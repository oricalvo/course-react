class App extends React.Component {
  render() {
    const contacts = [{
      id: 1,
      name: "Ori"
    }, {
      id: 2,
      name: "Roni"
    }];
    return React.createElement("div", null, React.createElement("h1", null, "Hello React"), React.createElement(Counter, null));
  }

}