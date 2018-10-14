import * as React from "react";

export class ContactDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            Contact Details {props.match.params.id}
        </div>;
    }
}
