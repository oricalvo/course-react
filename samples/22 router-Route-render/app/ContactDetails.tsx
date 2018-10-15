import * as React from "react";
import {getContactById} from "./appService";
import {Contact} from "./appStore";
import styles from "./ContactDetails.scss";
import queryString from "query-string";

console.log(styles);

export interface ContactProps {
    contact: Contact;
}

export class ContactDetails extends React.Component<ContactProps> {
    constructor(props) {
        super(props);

        console.log("ContactDetails.ctor", this.props.contact);
    }

    render() {
        console.log("ContactDetails.render");

        const {contact} = this.props;

        return <div>
            <h1>Contact Details</h1>

            <div className={styles.field}>
                <span className={styles.fieldTitle}>ID:</span>
                <span>{contact.id}</span>
            </div>

            <div className={styles.field}>
                <span className={styles.fieldTitle}>Name:</span>
                <span>{contact.name}</span>
            </div>

            <div className="buttons">
                <button onClick={this.close}>Close</button>
            </div>
        </div>;
    }

    close = () => {
        window.history.back();
    }
}
