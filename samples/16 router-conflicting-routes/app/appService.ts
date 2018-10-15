import {appStore} from "./appStore";

export function getContactById(id) {
    const c = appStore.contacts.find(c => c.id == id);
    if(!c) {
        throw new Error("Contac with id " + id + " was not found");
    }

    return c;
}
