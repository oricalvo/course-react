import * as React from "react";
import styles from "./ContactItem.scss";

export interface Contact {
    id: number;
    name: string;
}

export interface ContactProps {
    contact: Contact;
}

export function ContactItem(props: ContactProps) {
    const {contact} = props;

    return <div className={styles.ContactItem}>
        <span>{contact.name}</span>
    </div>;
}
