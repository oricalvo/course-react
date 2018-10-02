import * as React from 'react';
import styles from "./Counter.module.scss";

console.log(styles);

class Counter extends React.Component {
    public render() {
        return (
            <div className="Counter">
                <button>Dec</button>
                <span>0</span>
                <button>Inc</button>
            </div>
        );
    }
}

export default Counter;
