import * as React from "react";
import {appStore, Contact} from "./appStore";
import styles from "./ContactList.scss";
import {parse} from "query-string";

export interface ContactListState {
    contacts: Contact[];
}

export interface ContactListProps {
    history: any;
    location: any;
}

export class ContactList extends React.Component<ContactListProps, ContactListState> {
    history;

    constructor(props) {
        super(props);

        this.history = this.props.history;
    }

    render() {
        console.log("ContactList.render");

        const {contacts} = appStore;

        return <div className="ContactList">
            <h1>Home</h1>

            <div className={styles.header}>
                <a>Name</a>
            </div>

            <ul className={styles.contacts}>
                {contacts.map(c => <li className={styles.contactItem} key={c.id} onClick={() => this.onContactClicked(c)}>{c.name}</li>)}
            </ul>
        </div>
    }

    onContactClicked(contact: Contact) {
        this.history.push("/contact/" + contact.id);
    }
}
