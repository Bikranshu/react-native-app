// Import custom components
import {SEARCH} from '../constants/actionType';

var initialState = {
    title: null
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case SEARCH:
            return Object.assign({}, state, {
                title: action.data.title,
            });

        default:
            return state;
    }
}