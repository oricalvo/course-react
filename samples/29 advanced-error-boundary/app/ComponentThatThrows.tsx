import * as React from "react";

export interface Props {
    throwError: boolean;
}

export class ComponentThatThrows extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const {throwError} = this.props;

        if (throwError) {
            throw new Error("Ooops");
        }

        return <div className="App">
            Did not throw
        </div>
    }
}
