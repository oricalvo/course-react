'use strict';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            {  },
            React.createElement("h1", {}, "Hello"),
            React.createElement("button", {onClick: ()=>this.inc()}, "Inc"),
        );
    }

    inc() {
        console.log("inc");
    }
}