// Import actionType constants
import {SEARCH} from '../constants/actionType';

export function search(data) {
    return {
        type: SEARCH,
        data
    }
}
