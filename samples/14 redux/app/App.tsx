import * as React from "react";
import {connect} from "react-redux";
import {store} from "./store";
import {DEC, INC} from "./actions";
import Reset from "./Reset";
import {dec, inc, reset} from "./thunks";

class App extends React.Component<any, any> {
    constructor(props) {
        super(props);

        store.subscribe(()=> {
            this.forceUpdate();
        });
    }

    render() {
        const {counter, onDec, onInc} = this.props;

        return <div className="App">
            <h1>Hello React</h1>

            <button onClick={onDec}>Dec</button>
            <span>{counter}</span>
            <button onClick={onInc}>Inc</button>

            <div>
                <Reset />
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
    };
};

const mapDispatchToProps = {
    onDec: dec,
    onInc: inc,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
