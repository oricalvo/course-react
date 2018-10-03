import {Action, createStore} from "redux";
import {DEC, INC, RESET} from "./actions";

interface AppState {
    counter: number;
}

const initialState: AppState = {
    counter: 0,
};

export const store = createStore(reducer, initialState);

function reducer(state: AppState, action: Action): AppState {
    if(action.type == DEC) {
        return {
            ... state,
            counter: state.counter-1,
        }
    }

    if(action.type == INC) {
        return {
            ... state,
            counter: state.counter+1,
        }
    }

    if(action.type == RESET) {
        return {
            ... state,
            counter: 0,
        }
    }

    return state;
}
