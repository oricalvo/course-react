import * as React from "react";
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import {About} from "./About";
import styles from "./App.scss";
import {Admin} from "./Admin";
import {Prompt} from "react-router";
import {Home} from "./Home";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <BrowserRouter getUserConfirmation={myConfirmation}>
            <div className="App">
                <div className={styles.menu}>
                    <NavLink exact className={styles.link} activeClassName={styles.active} to="/">Home</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.active} to="/admin">Admin</NavLink>
                    <NavLink className={styles.link} activeClassName={styles.active} to="/about">About</NavLink>
                </div>

                <Route exact path="/" component={Home}/>
                <Route path="/admin" component={Admin}/>
                <Route path="/about" component={About}/>

                <Prompt message="Are you sure"/>
            </div>
        </BrowserRouter>
    }
}

function myConfirmation(message, callback) {
    console.log("myConfirmation");

    callback(true);
}
