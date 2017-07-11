import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content, List, ListItem, Left, Right, Body, Thumbnail, Text} from 'native-base';
import {withNavigation} from 'react-navigation';

// Import custom components
import HamburgerHeader from '../common/HamburgerHeader';

class Dashboard extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        let items = ['Krishna Timilsina', 'Ram Sharma', 'Jony Lever', 'Parker Teracy', 'Emre Can'];
        const { navigate } = this.props.navigation;

        return (
            <Container>

                <HamburgerHeader
                    title='Dashboard'
                    icon="menu"
                    onPress={() => navigate('DrawerOpen')}
                />

                <Content>
                    <List dataArray={items}
                          renderRow={(item) =>
                              <ListItem avatar>
                                  <Left>
                                      <Thumbnail source={require('../../images/logo.png')}/>
                                  </Left>
                                  <Body>
                                  <Text>{item}</Text>
                                  <Text note>Doing what you like will always keep you happy . .</Text>
                                  </Body>
                                  <Right>
                                      <Text note>2:43 pm</Text>
                                  </Right>
                              </ListItem>
                          }>
                    </List>
                </Content>

            </Container>

        );
    }

}

export default withNavigation(Dashboard)