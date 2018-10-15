import * as React from "react";
import {appStore, connectToStore} from "./appStore";
import {UserStatus} from "./UserStatus";

const ConnectedUserStatus = connectToStore(UserStatus);

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = appStore;

        return <div className="App">
            <h1>Hello React</h1>

            {
                user
                    ?
                <>
                    <ConnectedUserStatus />
                    <button onClick={this.logout}>Logout</button>
                </>
                    :
                <button onClick={this.login}>Login</button>
            }
        </div>
    }

    logout = ()=> {
        appStore.user = null;

        this.forceUpdate();
    }

    login = ()=> {
        appStore.user = {
            id: 1,
            name: "Roni",
        };

        this.forceUpdate();
    }
}

