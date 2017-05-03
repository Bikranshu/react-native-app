import {OPEN_DRAWER, CLOSE_DRAWER} from '../constants/actionType';

var initialState = {
    drawer: 'close'
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case OPEN_DRAWER:
            return Object.assign({}, state, {
                drawer: 'open'
            });

        case CLOSE_DRAWER:
            return Object.assign({}, state, {
                drawer: 'close'
            });

        default:
            return state;
    }
}