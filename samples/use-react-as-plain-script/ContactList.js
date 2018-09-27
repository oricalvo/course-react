class ContactList extends React.Component {
    render() {
        const contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];

        return e("ul", null, contacts.map(c => e(Contact, {
                contact: c,
                key: c.id,
            }))
        );
    }
}
