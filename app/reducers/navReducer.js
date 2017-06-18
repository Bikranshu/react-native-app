import {NavigationActions} from 'react-navigation';

// Import custom components
import StackNavigation from '../routers/stack/StackNavigation';
import {LOG_OUT_SUCCESS} from '../constants/actionType';

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
        case LOG_OUT_SUCCESS:
            nextState = StackNavigation.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Login'}), state);
            break;
        default:
            nextState = StackNavigation.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}