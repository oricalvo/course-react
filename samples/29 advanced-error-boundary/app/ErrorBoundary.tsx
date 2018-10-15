import * as React from "react";

export class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
        console.log("componentDidCatch", error, info);
    }

    render() {
        //
        //  In case of an error can render fallback UI
        //
        return this.props.children;
    }
}
