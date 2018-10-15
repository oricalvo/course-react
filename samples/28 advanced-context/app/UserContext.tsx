import * as React from "react";

export interface User {
    id:number,
    name: string,
    email: string,
}

export const UserContext = React.createContext(null);
