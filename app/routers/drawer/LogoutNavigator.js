import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Text} from 'native-base';

// Import custom components
import * as authService from '../../services/authService';

class LogoutNavigator extends Component {

    render() {
        if (this.props.isAuthenticated) {
            this.props.actions.logout();
            this.props.navigation.navigate("Login");
            return null;
        }
        return (
            <Button
                full
                rounded
                primary
                onPress={() => this.props.navigation.navigate("Login")}>
                <Text>Log Out</Text>
            </Button>
        )
    }
}

/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    nav: state.nav,
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, authService), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LogoutNavigator)
