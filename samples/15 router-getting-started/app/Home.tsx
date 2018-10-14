import * as React from "react";

export interface HomeState {
    contacts: Contact[];
}

export interface Contact {
    id: number;
    name: string;
}


export class Home extends React.Component<{}, HomeState> {
    constructor(props) {
        super(props);

        this.state = {
            contacts: [
                {"id": 1, "name": "Ori"},
                {"id": 2, "name": "Roni"},
                {"id": 3, "name": "Udi"},
                {"id": 4, "name": "Tommy"},
            ]
        }
    }

    render() {
        const {contacts} = this.state;

        return <div>
            <h1>Home</h1>
            <ul>
                {contacts.map(c => <li onClick={() => this.onContactClicked(c)}>{c.name}</li>)}
            </ul>
        </div>
    }

    onContactClicked(contact: Contact) {
    }
}
