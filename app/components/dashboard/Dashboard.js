import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content, List, ListItem, Left, Right, Body, Thumbnail, Text} from 'native-base';

// Import custom components
import HamburgerSearchHeader from '../common/HamburgerSearchHeader';

class Dashboard extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        let items = ['Krishna Timilsina', 'Ram Sharma', 'Jony Lever', 'Parker Teracy', 'Emre Can'];
        return (
            <Container>

                <HamburgerSearchHeader title='Dashboard'/>

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

export default Dashboard