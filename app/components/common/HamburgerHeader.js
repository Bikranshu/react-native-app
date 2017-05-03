import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header, Left, Right, Button, Icon, Body, Title} from 'native-base';

export class HamburgerHeader extends Component {

    constructor(props) {
        super(props);

        this.openDrawer = this.openDrawer.bind(this);

    }

    openDrawer = () => {
        this.context.openDrawer();
    };

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.openDrawer}>
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

HamburgerHeader.contextTypes = {
    openDrawer: PropTypes.func
};

export default HamburgerHeader