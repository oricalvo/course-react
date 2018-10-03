import * as React from "react";
import {Contact, ContactItem} from "./ContactItem";

interface AppState {
    contacts: Contact[];
}

export class App extends React.Component<{}, AppState> {
    constructor(props) {
        super(props);

        this.state = {
            contacts: contacts
        };
    }

render() {
    const {contacts} = this.state;

    return <div className="App">
        <div>
            <button onClick={this.refresh}>Refresh</button>
        </div>

        <ul>
            {contacts.map(c => <li key={c.id}>
                <ContactItem contact={c} onDelete={this.onDeleteContact}/>
            </li>)}
        </ul>
    </div>
}

    refresh = () => {
        this.setState({
            contacts: randomSort(contacts)
        });
    }

    onDeleteContact = (contact) => {
        console.log(contact.id);

        const {contacts} = this.state;
        const index = contacts.indexOf(contact);
        if(index!=-1) {
            contacts.splice(index, 1);
            this.setState({
                contacts
            });
        }
    }
}

const contacts = [
    {"id": 1, "name": "Ori"},
    {"id": 2, "name": "Roni"},
    {"id": 3, "name": "Udi"},
    {"id": 4, "name": "Tommy"},
];

function randomSort(arr) {
    const clone = arr.slice();
    arr.splice(0, arr.length);

    while(clone.length) {
        const index = Math.floor(Math.random() * clone.length);
        arr.push(clone[index]);
        clone.splice(index, 1);
    }

    return arr;
}
