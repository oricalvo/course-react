import * as React from 'react';
import './App.scss';
import Counter from "./Counter";

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <h1>Hello React</h1>
                <Counter/>
            </div>
        );
    }
}

export default App;
