import * as React from "react";
import {getContactById} from "./appService";
import {Contact} from "./appStore";
import styles from "./ContactDetails.scss";
import {History} from "history";
import {RouteComponentProps} from "react-router";

console.log(styles);

export interface RouteParams {
    id: string;
}

export interface ContactProps extends RouteComponentProps<RouteParams> {
}

export class ContactDetails extends React.Component<ContactProps> {
    contact: Contact;

constructor(props) {
    super(props);

    this.contact = getContactById(this.props.match.params.id);
}

    render() {
        return <div>
            <h1>Contact Details</h1>

            <div className={styles.field}>
                <span className={styles.fieldTitle}>ID:</span>
                <span>{this.contact.id}</span>
            </div>

            <div className={styles.field}>
                <span className={styles.fieldTitle}>Name:</span>
                <span>{this.contact.name}</span>
            </div>

            <div className="buttons">
                <button onClick={this.close}>Close</button>
            </div>
        </div>;
    }

    close = () => {
        this.props.history.goBack();
    }
}
