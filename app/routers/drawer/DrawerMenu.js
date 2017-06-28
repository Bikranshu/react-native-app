import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Content, Separator, List, ListItem, Text, Icon} from 'native-base';
import {withNavigation, NavigationActions} from 'react-navigation';

// Import custom components
import Logo from '../../components/common/Logo';
import * as authService from '../../services/authService';

const routes = [
    {
        name: 'Dashboard',
        route: 'Dashboard',
        icon: 'ios-home'
    },
    {
        name: 'Employees',
        route: 'Employees',
        icon: 'ios-person'
    },
    {
        name: 'Categories',
        route: 'Categories',
        icon: 'ios-paw'
    },
    {
        name: 'Products',
        route: 'Products',
        icon: 'ios-car'
    },
    {
        name: 'Maps',
        route: 'Maps',
        icon: 'ios-pin'
    },
    {
        name: 'Events',
        route: 'Events',
        icon: 'md-settings'
    },
    {
        name: 'Notifications',
        route: 'Notifications',
        icon: 'notifications'
    },
    {
        name: 'Privacy Policy',
        route: 'PrivacyPolicy',
        icon: 'md-settings'
    },
    {
        name: 'Settings',
        route: 'Settings',
        icon: 'md-settings'
    },
    {
        name: 'Log Out',
        route: 'LogOut',
        icon: 'ios-power'
    },
    {
        name: 'Help & Feedback',
        route: 'HelpFeedback',
        icon: 'help'
    }

];

class DrawerMenu extends Component {

    render() {
        const {navigate} = this.props.navigation;

        return (
            <Container>
                <Content>
                    <Logo/>
                    <Separator bordered/>

                    <List
                        dataArray={routes}
                        renderRow={data => {
                            return (
                                <ListItem
                                    noBorder
                                    button
                                    onPress={() => (data.route =='LogOut')? this.props.navigation.dispatch(authService.logout()) : navigate(data.route)}
                                >
                                    <Icon name={data.icon} style={{color: '#777', fontSize: 26, width: 30}}/>
                                    <Text>{data.name}</Text>
                                </ListItem>
                            );
                        }}
                    />
                </Content>
            </Container>
        );
    }

}

export default withNavigation(DrawerMenu)