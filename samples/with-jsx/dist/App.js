class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      contacts: [{
        id: 1,
        name: "Ori"
      }, {
        id: 2,
        name: "Roni"
      }, {
        id: 3,
        name: "Udi"
      }]
    };
    this.inputRef = React.createRef();
  }

  render() {
    return React.createElement("div", null, React.createElement("button", {
      onClick: () => this.dec()
    }, "Dec"), React.createElement("span", null, this.state.counter), React.createElement("button", {
      onClick: () => this.inc()
    }, "Inc"), React.createElement("div", null, React.createElement("input", {
      ref: this.inputRef
    }), React.createElement("button", {
      onClick: () => this.add()
    }, "Add")), React.createElement("ul", null, this.state.contacts.map(c => React.createElement("li", {
      key: c.id
    }, React.createElement("span", null, c.name), React.createElement("button", {
      onClick: () => this.removeContact(c)
    }, "Delete")))));
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

  removeContact(c) {
    const {
      contacts
    } = this.state;

    if (confirm("Delete contact " + c.name + "?")) {
      const index = contacts.indexOf(c);

      if (index != -1) {
        contacts.splice(index, 1);
        this.setState({
          contacts: contacts
        });
      }
    }
  }

  add() {
    const name = this.inputRef.current.value;
    const contact = {
      id: -1,
      name
    };
    const {
      contacts
    } = this.state;
    contacts.push(contact);
    this.setState({
      contacts: contacts
    });
  }

}