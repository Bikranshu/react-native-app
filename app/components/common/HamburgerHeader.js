import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Header, Left, Right, Button, Icon, Body, Title} from 'native-base';
import {withNavigation} from 'react-navigation';

class HamburgerHeader extends Component {

    constructor(props) {
        super(props);

    }

    static defaultProps = {
        icon: 'menu',
        title: 'Dashboard'
    };

    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.onPress}>
                        <Icon active name={this.props.icon}/>
                    </Button>
                </Left>

                <Body>
                <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
}

HamburgerHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
};

export default withNavigation(HamburgerHeader)