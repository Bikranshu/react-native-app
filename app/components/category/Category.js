import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content, ListItem, Footer, FooterTab, Button, Icon, Text} from 'native-base';

// Import custom components
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

                <Footer>
                    <FooterTab>
                        <Button vertical active>
                            <Icon active name="calendar"/>
                            <Text>Calendar</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera"/>
                            <Text>Camera</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person"/>
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>

        );
    }

}

export default Category