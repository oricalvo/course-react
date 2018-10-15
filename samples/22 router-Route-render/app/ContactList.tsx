import * as React from "react";
import {appStore, Contact} from "./appStore";
import styles from "./ContactList.scss";
import {parse} from "query-string";
import {Route, RouteComponentProps, Prompt} from "react-router";
import {ContactDetails} from "./ContactDetails";
import {getContactById} from "./appService";

export interface RouteParams {
    id: string;
}

export interface ContactListState {
    contacts: Contact[];
}

export interface ContactListProps extends RouteComponentProps<RouteParams>{
}

export class ContactList extends React.Component<ContactListProps, ContactListState> {
    constructor(props) {
        super(props);

        console.log("ContactList.ctor");
    }

    render() {
        console.log("ContactList.render");

        const {contacts} = appStore;
        const {id} = this.props.match.params;
        const contact = id ? getContactById(id) : null;

        return <div className="ContactList">
            <h1>Contacts</h1>

            <div className={styles.header}>
                <a>Name</a>
            </div>

            <ul className={styles.contacts}>
                {contacts.map(c => <li className={styles.contactItem} key={c.id} onClick={() => this.onContactClicked(c)}>{c.name}</li>)}
            </ul>

            {/*<Route path="/contacts/:id" component={ContactDetails} contact={contact} />*/}
            {/*<Route path="/contacts/:id" component={() => <ContactDetails contact={contact} />} />*/}
            {/*<Route path="/contacts/:id" render={props => <ContactDetails contact={contact} />} />*/}
            <Route path="/contacts/:id">
                <ContactDetails contact={contact}/>
            </Route>
        </div>
    }

    onContactClicked(contact: Contact) {
        this.props.history.push("/contacts/" + contact.id);
    }
}
