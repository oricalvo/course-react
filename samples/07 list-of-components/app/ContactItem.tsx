import * as React from "react";

export interface Contact {
    id: number;
    name: string;
}

export interface ContactProps {
    contact: Contact;
    onDelete: (c: Contact)=>void;
}

export interface ContactState {
    counter: number;
}

export class ContactItem extends React.Component<ContactProps, ContactState> {
    static nextId: number = 0;

    constructor(props) {
        super(props);

        console.log("Contact.ctor");

        this.state = {
            counter: 0,
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.contact == this.props.contact) {
            return;
        }

        console.log("props.contact CHNAGED", this.props, nextProps);
    }

render() {
    console.log("ContactItem.render");

    const {contact} = this.props;

    return <div>
        <span>{contact.name}</span>
        <button onClick={this.dec}>Dec</button>
        <span>{this.state.counter}</span>
        <button onClick={this.inc}>Inc</button>
        <button onClick={()=>this.props.onDelete(contact)}>Delete</button>
    </div>
}

    dec = ()=> {
        this.setState({
            counter: this.state.counter-1
        })
    }

    inc = ()=> {
        this.setState({
            counter: this.state.counter+1
        })
    }
}

