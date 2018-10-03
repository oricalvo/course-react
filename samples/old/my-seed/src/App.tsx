import * as React from "react";
import Counter from "./Counter";

class App extends React.Component<{}, {}> {
    constructor(props) {
        console.log("App.ctor");

        super(props);
    }

    render() {
        return <div>
            <h1>My Seed 9</h1>
            <Counter/>
        </div>;
    }
}

export default App;
