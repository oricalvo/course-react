import * as React from "react";

export interface User {
    id: number;
    name: string;
}

export interface AppStore {
    user: User;
}

export const appStore: AppStore = {
    user: {
        id:1,
        name:"Ori",
    }
}

export function connectToStore(Comp: any) {
    // return () => React.createElement(Comp, appStore);

    return () => <Comp {...appStore} />;

    // return class Connected extends React.Component {
    //     render() {
    //         return <Comp {...appStore} />;
    //     }
    // }
}
