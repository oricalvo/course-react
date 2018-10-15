import * as React from "react";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";
import {About} from "./About";
import styles from "./App.scss";
import {Home} from "./Home";
import {Admin} from "./Admin";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
<div className="App">
    <div className={styles.menu}>
        <NavLink exact className={styles.link} activeClassName={styles.active} to="/">Home</NavLink>
        <NavLink className={styles.link} activeClassName={styles.active} to="/admin">Admin</NavLink>
        <NavLink className={styles.link} activeClassName={styles.active} to="/about">About</NavLink>
    </div>

    <Route exact path="/" component={Home}/>
    <Route path="/admin" component={Admin}/>
    <Route path="/about" component={About}/>
</div>
        </Router>
    }
}

