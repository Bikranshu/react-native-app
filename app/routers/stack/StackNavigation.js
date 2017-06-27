import {StackNavigator} from 'react-navigation';

// Import custom components
import LoginNavigation from '../../containers/auth/LoginContainer';
import SignUpNavigation from '../../containers/auth/SignUpContainer';
import ForgotNavigation from '../../containers/auth/ForgotContainer';
import DrawerNavigation from '../drawer/DrawerNavigation';

const stackNavigationConfiguration = { headerMode: 'none' };

const StackNavigation = StackNavigator({
    Login: {screen: LoginNavigation},
    SignUp: {screen: SignUpNavigation},
    Forgot: {screen: ForgotNavigation},
    Dashboard: {screen: DrawerNavigation},  // Drawer Navigation
}, stackNavigationConfiguration);

export default StackNavigation