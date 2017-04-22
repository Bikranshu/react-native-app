import {LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_SUCCESS} from '../constants/actionType';

var initialState = {
    token: null,
    isAuthenticated: false,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case LOG_IN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true,
                token: action.payload,
            });

        case LOG_IN_FAILURE:
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
            });

        case LOG_OUT_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
            });

        default:
            return state;
    }
}