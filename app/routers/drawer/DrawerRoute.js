import {DrawerNavigator} from 'react-navigation';

// Import custom components
import DashboardNavigation from '../../containers/dashboard/DashboardContainer';
import CategoryNavigation from '../../containers/category/CategoryContainer';

const drawerNavigationConfiguration = {headerMode: 'none'};

const DrawerRoute = StackNavigator({
    Login: {
        screen: DashboardNavigation,
        navigationOptions: {
            drawer: {label: 'Dashboard'},
        }
    },
    SignUp: {
        screen: CategoryNavigation,
        navigationOptions: {
            drawer: {label: 'Users'},
        }
    },
    Forgot: {
        screen: CategoryNavigation,
        navigationOptions: {
            drawer: {label: 'Categories'},
        }
    },
    Dashboard: {
        screen: DashboardNavigation,
        navigationOptions: {
            drawer: {label: 'Log Out'},
        }
    },
}, drawerNavigationConfiguration);

export const Drawer = DrawerNavigator(routeConfiguration);