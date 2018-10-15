"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ContactItem_scss_1 = require("./ContactItem.scss");
function ContactItem(props) {
    var contact = props.contact;
    return <div className={ContactItem_scss_1.default.ContactItem}>
        <span>{contact.name}</span>
    </div>;
}
exports.ContactItem = ContactItem;
//# sourceMappingURL=ContactItem.js.map