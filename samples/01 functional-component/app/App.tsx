import * as React from "react";
import {Contact, ContactItem} from "./ContactItem";

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ori: Contact = {
            id: 1,
            name: "Ori"
        };

        return <div className="App">
            <h1>Hello React</h1>

            <ContactItem contact={ori}/>
        </div>
    }
}

