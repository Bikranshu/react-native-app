import { NavigationActions } from 'react-navigation';

// Import custom components
import StackNavigation from '../navigators/StackNavigation';
import {LOG_IN, LOG_OUT, SIGN_UP} from '../constants/actionType';

const LoginAction = StackNavigation.router.getActionForPathAndParams('Login');

const initialNavState = StackNavigation.router.getStateForAction(
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
            nextState = StackNavigation.router.getStateForAction(
                NavigationActions.back(),
                state
            );

        case LOG_OUT:
            nextState = StackNavigation.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Login'}),
                state
            );
        case SIGN_UP:
            nextState = StackNavigation.router.getStateForAction(
                NavigationActions.navigate({routeName: 'SignUp'}),
                state
            );

        default:
            nextState = StackNavigation.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}