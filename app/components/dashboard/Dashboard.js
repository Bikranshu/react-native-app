import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Header, Title, Content, Button, Left, Right, Body, Icon} from 'native-base'

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Dashboard</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>

                </Content>
            </Container>
        );
    }

}

export default Dashboard