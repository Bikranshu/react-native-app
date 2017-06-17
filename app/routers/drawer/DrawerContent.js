import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Container, Content, List, ListItem, Left, Right, Text, Icon, Separator} from 'native-base';
import {withNavigation} from 'react-navigation';

// Import custom components
import Logo from '../../components/common/Logo';

const dataSource = [
    {
        name: 'Dashboard',
        icon: 'ios-home',
        bg: '#C5F442',
    },
    {
        name: 'Users',
        icon: 'ios-person',
        bg: '#C5F442',
    },
    {
        name: 'Categories',
        icon: 'ios-paw',
        bg: '#C5F442',
    },
    {
        name: 'Products',
        icon: 'ios-car',
        bg: '#477EEA',
    },
    {
        name: 'Settings',
        icon: 'md-settings',
        bg: '#DA4437',
    },
    {
        name: 'Maps',
        icon: 'ios-pin',
        bg: '#4DCAE0',
    },
    {
        name: 'Notifications',
        icon: 'notifications',
        bg: '#1EBC7C',
    },
    {
        name: 'Log Out',
        icon: 'ios-power',
        bg: '#B89EF5',
    }

];

class DrawerContent extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Container>
                <Content bounces={false}
                         style={{flex: 1, backgroundColor: '#fff', top: -1}}>
                    <Logo/>
                    <Separator bordered/>
                    <List
                        dataArray={dataSource} renderRow={data =>
                        <ListItem button noBorder onPress={() => this.props.navigation.navigate(data.name)}>
                            <View>
                                <Left>
                                    <Icon active name={data.icon} style={{color: '#777', fontSize: 26, width: 30}}/>
                                    <Text>{data.name}</Text>
                                </Left>
                            </View>
                        </ListItem>}
                    />

                </Content>
            </Container>
        );
    }
}

// native base style
const styles = {
    label: {
        color: 'steelblue',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20
    }
};


export default withNavigation(DrawerContent)