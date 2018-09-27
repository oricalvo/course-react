class App extends React.Component {
    render() {
        const contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];

        return <div>
            <h1>Hello React</h1>
            <Counter />
        </div>;
    }
}
