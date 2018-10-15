import * as React from "react";
import {Home} from "./Home";
import {User, UserContext} from "./UserContext";

export interface AppState {
    user: User;
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                id:1,
                name: "Ori",
                email: "ori.calvo@gmail.com",
            }
        }
    }

    render() {
        const {user} = this.state;

        return <UserContext.Provider value={user}>
            <div className="App">
                <h1>React App</h1>

                <button onClick={this.logout}>Logout</button>

                <Home/>
            </div>
        </UserContext.Provider>
    }

    logout = () => {
        this.setState({
            user: null
        });
    }
}

