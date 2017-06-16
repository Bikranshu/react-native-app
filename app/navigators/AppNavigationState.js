import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';

// Import custom components
import AppNavigation from '../navigators/AppNavigation';

class AppNavigationState extends Component {
    render() {
        return (
            <AppNavigation navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        );
    }
}

// const AppNavigationState = ({dispatch, nav}) => (
//     <AppNavigation navigation={addNavigationHelpers({dispatch, state: nav})}/>
// );

AppNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigationState);