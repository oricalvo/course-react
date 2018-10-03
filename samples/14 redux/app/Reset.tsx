import * as React from "react";
import {store} from "./store";
import {DEC, INC, RESET} from "./actions";
import {connect} from "react-redux";
import {reset} from "./thunks";

class Reset extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const {counter} = store.getState();

        return <div className="App">
            <span>Click here to reset counter</span>
            <button onClick={this.props.onReset}>Reset</button>
        </div>
    }

    reset = () => {
        store.dispatch({
            type: RESET
        });
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = {
    onReset: reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
