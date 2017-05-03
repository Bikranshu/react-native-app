import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content, ListItem, Text} from 'native-base';

import HamburgerHeader from '../common/HamburgerHeader';

class Category extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <Container>

                <HamburgerHeader title='Category'/>

                <Content>
                    <ListItem>
                        <Text>Comedy</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Serious</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Horrible Bosses</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Conjuring</Text>
                    </ListItem>
                    <ListItem >
                        <Text>Action</Text>
                    </ListItem>
                </Content>

            </Container>

        );
    }

}

export default Category