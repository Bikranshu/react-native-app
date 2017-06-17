import {NavigationActions} from 'react-navigation';

// Import custom components
import StackNavigation from '../routers/stack/StackNavigation';

const LoginAction = StackNavigation.router.getActionForPathAndParams('Login');

const initialNavState = StackNavigation.router.getStateForAction(
    LoginAction
);

/**
 * A reducer takes two arguments, the current state and an action.
 */
export default function (state, action) {
    state = state || initialNavState;
    const nextState = StackNavigation.router.getStateForAction(action, state);
    return nextState || state;
}