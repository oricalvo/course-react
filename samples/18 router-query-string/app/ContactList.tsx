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

        const {order} = parse(this.props.location.search);
        const contacts = appStore.contacts.slice();
        contacts.sort((c1,c2)=> {
            const res = (c1.name > c2.name ? 1 : (c1.name == c2.name ? 0 : -1));
            return res * (order=="desc" ? -1 : 1);
        });

        return <div className="ContactList">
            <h1>Home</h1>

            <div className={styles.header}>
                <a onClick={this.reorder}>Name</a>
            </div>

            <ul className={styles.contacts}>
                {contacts.map(c => <li className={styles.contactItem} key={c.id} onClick={() => this.onContactClicked(c)}>{c.name}</li>)}
            </ul>
        </div>
    }

    onContactClicked(contact: Contact) {
        this.history.push("/contact/" + contact.id + "?order=desc");
    }

    reorder = () => {
        const {order} = parse(this.props.location.search);
        this.history.push(`?order=${order=="desc" ? "asc" : "desc"}`);
    }
}
