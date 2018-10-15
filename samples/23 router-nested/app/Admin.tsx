import * as React from "react";
import {Route} from "react-router";
import {Link} from "react-router-dom";
import {Users} from "./Users";
import {Customers} from "./Customers";
import styles from "./Admin.scss";

export const Admin = () => (
<div>
    <h1>Admin</h1>

    <div>
        <Link className={styles.link} to="/admin/users">Users</Link>
        <Link className={styles.link} to="/admin/customers">Customers</Link>
    </div>


    <Route path="/admin/users" component={Users} />
    <Route path="/admin/customers" component={Customers} />
</div>
);

