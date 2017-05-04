// Import actionType constants
import {LOG_IN_SUCCESS, LOG_IN_FAILURE} from '../constants/actionType';

export function loginSuccess(data) {
    return {
        type: LOG_IN_SUCCESS,
        data
    }
}

export function loginFailure(error) {
    return {
        type: LOG_IN_FAILURE,
        error
    }
}