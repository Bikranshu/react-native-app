import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content, ListItem, Text} from 'native-base';

// Import custom components
import HamburgerHeader from '../common/HamburgerHeader';

class Dashboard extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Container>

                <HamburgerHeader title='Dashboard'/>

                <Content>
                    <ListItem itemHeader first>
                        <Text>COMEDY</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Hangover</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Horrible Bosses</Text>
                    </ListItem>
                    <ListItem last>
                        <Text>Conjuring</Text>
                    </ListItem>
                    <ListItem itemHeader>
                        <Text>ACTION</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Terminator Genesis</Text>
                    </ListItem>
                </Content>

            </Container>

        );
    }

}

export default Dashboard