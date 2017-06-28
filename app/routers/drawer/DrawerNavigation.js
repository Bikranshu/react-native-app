import React, {Component} from 'react';
import {DrawerNavigator, NavigationActions} from 'react-navigation';

// Import custom components
import DashboardNavigation from '../../containers/dashboard/DashboardContainer';
import CategoryNavigation from '../../containers/category/CategoryContainer';
import DrawerMenu from './DrawerMenu';


const drawerNavigationConfiguration = {
    headerMode: 'screen',
    contentComponent: props => <DrawerMenu {...props} />,
    contentOptions: {
        activeTintColor: 'steelblue'
    }
};

const DrawerNavigation = DrawerNavigator(
    {
        Dashboard: {
            screen: DashboardNavigation
        },
        Employees: {
            screen: DashboardNavigation
        },
        Categories: {
            screen: CategoryNavigation
        },
        Products: {
            screen: CategoryNavigation
        },
        Maps: {
            screen: CategoryNavigation
        },
        Events: {
            screen: DashboardNavigation
        },
        Notifications: {
            screen: DashboardNavigation
        },
        PrivacyPolicy: {
            screen: DashboardNavigation
        },
        Settings: {
            screen: DashboardNavigation
        },
        HelpFeedback: {
            screen: DashboardNavigation
        },
    },
    drawerNavigationConfiguration
);

export default Drawer = DrawerNavigation;