import * as React from "react";

export class App extends React.Component {
    title: string = "<h1>Hello React</h1>";

    constructor(props) {
        super(props);

        console.log("App.ctor");
    }

    render() {
        return <div className="App">
            {this.title}
            <div dangerouslySetInnerHTML={{__html: this.title}}></div>
        </div>
    }
}

