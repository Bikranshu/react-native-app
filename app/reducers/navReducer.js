import { NavigationActions } from 'react-navigation';

// Import custom components
import AppNavigation from '../navigators/AppNavigation';
import {LOG_IN, LOG_OUT} from '../constants/actionType';

const LoginAction = AppNavigation.router.getActionForPathAndParams('Login');

const initialNavState = AppNavigation.router.getStateForAction(
    LoginAction
);

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialNavState;
    let nextState;
    switch (action.type) {
        case LOG_IN:
            nextState = AppNavigation.router.getStateForAction(
                NavigationActions.back(),
                state
            );

        case LOG_OUT:
            nextState = AppNavigation.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Login'}),
                state
            );

        default:
            nextState = AppNavigation.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}