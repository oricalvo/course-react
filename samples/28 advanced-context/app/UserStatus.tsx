import * as React from "react";
import {UserContext} from "./UserContext";

export class UserStatus extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const now = new Date();

        return <UserContext.Consumer>
            {
                user => (user ? <span>Hello, {user.name}</span> : null)
            }
        </UserContext.Consumer>

    }
}

