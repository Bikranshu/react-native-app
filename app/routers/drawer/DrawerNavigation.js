import {DrawerNavigator} from 'react-navigation';

// Import custom components
import DashboardNavigation from '../../containers/dashboard/DashboardContainer';
import CategoryNavigation from '../../containers/category/CategoryContainer';
import DrawerContent from './DrawerContent';

const drawerNavigationConfiguration = {headerMode: 'screen'};

const DrawerNavigation = DrawerNavigator(
    {
        Dashboard: {screen: DashboardNavigation},
        Users: {screen: CategoryNavigation},
        Categories: {screen: DashboardNavigation},
        Products: {screen: CategoryNavigation},
        Settings: {screen: DashboardNavigation},
        Maps: {screen: CategoryNavigation},
        Notifications: {screen: DashboardNavigation},
        LogOut: {screen: DashboardNavigation},
    },
    drawerNavigationConfiguration
);

export default Drawer = DrawerNavigation;