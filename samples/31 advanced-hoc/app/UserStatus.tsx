import * as React from "react";
import {connectToStore, User} from "./appStore";

export interface UserStatusProps {
    user: User;
}

export class UserStatus extends React.Component<UserStatusProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;

        return <span>
            Hello, {user.name}
        </span>
    }
}
