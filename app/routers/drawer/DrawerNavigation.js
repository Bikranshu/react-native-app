import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';

// Import custom components
import Drawer from './DrawerRoute';

const DrawerNavigation = ({dispatch, nav}) => (
    <Drawer
        navigation={
            addNavigationHelpers({
                dispatch,
                state: nav,
            })
        }
    />
);

DrawerNavigation.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.drawer,
});

export default connect(mapStateToProps)(DrawerNavigation);