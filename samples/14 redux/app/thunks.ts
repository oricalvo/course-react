import {DEC, INC, RESET} from "./actions";

export function reset() {
    return {
        type: RESET
    };
}

export function dec() {
    return {
        type: DEC
    };
}

export function inc() {
    return {
        type: INC
    };
}
