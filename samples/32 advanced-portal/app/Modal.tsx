import * as React from "react";
import * as ReactDOM from "react-dom";

export class Modal extends React.Component {
    el: HTMLElement;
    root: HTMLElement;

    constructor(props) {
        super(props);

        this.root = document.querySelector("body");
        this.el = document.createElement('div');
    }

    componentDidMount() {
        this.root.appendChild(this.el);
    }

    componentWillUnmount() {
        this.root.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

