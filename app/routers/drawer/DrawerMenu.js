import React, {Component} from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {connect} from 'react-redux';
import {DrawerRoute} from './DrawerRoute';

class DrawerMenu extends Component {

    render() {
        const {dispatch, nav} = this.props;

        return (
            <DrawerRoute
                ref={(ref) => {
                    this.navigator = ref;
                }}
                navigation={
                    addNavigationHelpers({
                        dispatch,
                        state: nav,
                    })
                }
            />
        );
    }
}

export default connect(state => ({nav: state.stack}))(DrawerMenu);