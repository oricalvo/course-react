import * as React from "react";
import {appStore, Contact} from "./appStore";

export interface HomeState {
    contacts: Contact[];
}

export interface HomeProps {
    history: any;
}

export class Home extends React.Component<HomeProps, HomeState> {
    history;

    constructor(props) {
        super(props);

        this.history = this.props.history;
    }

    render() {
        const {contacts} = appStore;

        return <div>
            <h1>Home</h1>
            <ul>
                {contacts.map(c => <li key={c.id} onClick={() => this.onContactClicked(c)}>{c.name}</li>)}
            </ul>
        </div>
    }

    onContactClicked(contact: Contact) {
        this.history.push("/contact/" + contact.id);
    }
}
