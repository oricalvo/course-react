import * as React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import {About} from "./About";
import styles from "./App.scss";
import {ContactDetails} from "./ContactDetails";
import {ContactList} from "./ContactList";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Router>
            <div className="App">
                <div className={styles.menu}>
                    <NavLink exact className={styles.link} activeClassName={styles.active} to="/">Home</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.active} to="/about">About</NavLink>
                </div>

                <Route exact path="/" component={ContactList}/>
                <Route path="/about" component={About}/>
                <Route path="/contact/:id" component={ContactDetails}/>
            </div>
        </Router>
    }
}

