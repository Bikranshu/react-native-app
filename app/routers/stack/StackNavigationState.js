import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers} from 'react-navigation';

// Import custom components
import StackNavigation from './StackNavigation';

class StackNavigationState extends Component {
    render() {
        return (
            <StackNavigation
                ref={(ref) => { this.navigator = ref; }}
                navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav,
            })} />
        );
    }
}

// const StackNavigationState = ({dispatch, nav}) => (
//     <StackNavigation navigation={addNavigationHelpers({dispatch, state: nav})}/>
// );

StackNavigationState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(StackNavigationState);