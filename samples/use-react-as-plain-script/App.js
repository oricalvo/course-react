class App extends React.Component {
    render() {
        const contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];

        return e("div", null,
            e("h1", null, "Hello React"),
            e(Counter),
            e(ContactList),
        );
    }
}
