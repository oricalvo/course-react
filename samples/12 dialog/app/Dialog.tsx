import * as React from "react";
import styles from "./Dialog.scss";

export class Dialog extends React.Component {
    content;

    constructor(props) {
        super(props);

        dialogService.register(this);
    }

render() {
    if(!this.content) {
        return null;
    }

    return <div className={styles.Dialog} onClick={this.onOverlayClick}>
        <div className={styles.content} onClick={this.onContentClick}>
            {this.content}
        </div>
    </div>
}

    show(dom) {
        this.content = dom;

        console.log(dom);

        this.forceUpdate();
    }

    onOverlayClick = ()=> {
        this.close();
    }

    onContentClick = (e) => {
        e.stopPropagation();
    }

    close(instance?: any) {
        console.log("close", instance);

        this.content = null;

        this.forceUpdate();
    }
}

export class DialogService {
    component: Dialog;

    register(component: Dialog) {
        this.component = component;
    }

    show(dom) {
        this.component.show(dom);
    }

    close(instance) {
        this.component.close(instance);
    }
}

export const dialogService = new DialogService();
