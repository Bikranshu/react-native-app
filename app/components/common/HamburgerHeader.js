import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header, Left, Right, Button, Icon, Body, Title} from 'native-base';
import {withNavigation} from 'react-navigation';

class HamburgerHeader extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                        <Icon active name="menu"/>
                    </Button>
                </Left>

                <Body>
                <Title>{(this.props.title) ? this.props.title : 'Dashboard'}</Title>
                </Body>
            </Header>
        );
    }
}

HamburgerHeader.propTypes = {
    title: PropTypes.string
};

export default withNavigation(HamburgerHeader)