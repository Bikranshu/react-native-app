// Import actionType constants
import {API_REQUEST, API_RESPONSE} from '../constants/actionType';

/**
 * These are the actions dispatched whenever the API is used
 */
export function apiRequest() {
    return {
        type: API_REQUEST
    }
}
export function apiResponse() {
    return {
        type: API_RESPONSE
    }
}