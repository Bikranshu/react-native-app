// Import actionType constants
import {OPEN_DRAWER, CLOSE_DRAWER} from '../constants/actionType';

export function openDrawer() {
    return {
        type: OPEN_DRAWER,
    };
}

export function closeDrawer() {
    return {
        type: CLOSE_DRAWER,
    };
}