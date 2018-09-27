class Contact extends React.Component {
    render() {
        const {contact} = this.props;

        return e("li", null,
            e("span", null, contact.name),
        );
    }
}
