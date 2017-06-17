import React, {Component} from 'react';
import {View} from 'react-native';
import {Container, Content, Separator} from 'native-base';
import {DrawerItems} from 'react-navigation';

// Import custom components
import Logo from '../../components/common/Logo';

class DrawerContent extends Component {

    render() {

        return (
            <Container>
                <Content>
                    <Logo/>
                    <Separator bordered/>

                    <DrawerItems {...this.props} />

                </Content>
            </Container>
        );
    }
}

export default DrawerContent