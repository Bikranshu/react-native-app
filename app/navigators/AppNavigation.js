import {StackNavigator} from 'react-navigation';

// Import custom components
import LoginNavigation from '../containers/auth/LoginContainer';
import SignUpNavigation from '../containers/auth/SignUpContainer';
import ForgotNavigation from '../containers/auth/ForgotContainer';
import DashboardNavigation from '../containers/dashboard/DashboardContainer';

const AppNavigation = StackNavigator({
    Login: {screen: LoginNavigation},
    SignUp: {screen: SignUpNavigation},
    Forgot: {screen: ForgotNavigation},
    Dashboard: {screen: DashboardNavigation},
});

export default AppNavigation
