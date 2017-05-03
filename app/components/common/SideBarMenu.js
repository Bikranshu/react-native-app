import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Image, StyleSheet} from 'react-native';
import {Container, Content, Header, List, ListItem, Left, Right, Button, Text, Icon, Thumbnail} from 'native-base';
import {Link} from 'react-router-native';

const logoImage = require('../../images/logo.png');

const dataSource = [
    {
        name: 'Dashboard',
        route: '/dashboard',
        icon: 'ios-home',
        bg: '#C5F442',
    },
    {
        name: 'Users',
        route: '/user',
        icon: 'ios-person',
        bg: '#C5F442',
    },
    {
        name: 'Categories',
        route: '/category',
        icon: 'ios-paw',
        bg: '#C5F442',
    },
    {
        name: 'Products',
        route: '/product',
        icon: 'ios-car',
        bg: '#477EEA',
    },
    {
        name: 'Settings',
        route: '/setting',
        icon: 'md-settings',
        bg: '#DA4437',
    },
    {
        name: 'Maps',
        route: '/maps',
        icon: 'ios-pin',
        bg: '#4DCAE0',
    },
    {
        name: 'Notifications',
        route: '/notification',
        icon: 'notifications',
        bg: '#1EBC7C',
    },
    {
        name: 'Log Out',
        route: '/logout',
        icon: 'ios-power',
        bg: '#B89EF5',
    },
    {
        name: 'Help & Feedback',
        route: '/help',
        icon: 'help',
        bg: '#B89EF5',
    }

];

export class SideBarMenu extends Component {

    constructor(props) {
        super(props);

        this.closeDrawer = this.closeDrawer.bind(this);

    }

    closeDrawer = () => {
        this.context.closeDrawer();
    };

    render() {

        return (
            <Container>
                <Content>
                    <Thumbnail
                        square
                        source={logoImage}
                    />
                    <Text style={styles.label}>REACT NATIVE</Text>

                    <List
                        dataArray={dataSource} renderRow={data =>
                        <ListItem button noBorder onPress={this.closeDrawer}>
                            <Link to={data.route}>
                                <View>
                                    <Left>
                                        <Icon active name={data.icon} style={{color: '#777', fontSize: 26, width: 30}}/>
                                        <Text>{data.name}</Text>
                                    </Left>
                                </View>
                            </Link>
                        </ListItem>}
                    />

                </Content>
            </Container>
        );
    }
}

SideBarMenu.contextTypes = {
    closeDrawer: PropTypes.func
};

// native base style
const styles = {
    label: {
        color: 'steelblue',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20
    }
};

// const styles = StyleSheet.create({
//     label: {
//         color: 'steelblue',
//         fontWeight: 'bold',
//         backgroundColor: 'transparent',
//         marginTop: 20
//     }
//
// });

export default SideBarMenu