import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider, Toolbar} from 'react-native-material-ui';
import {withNavigation} from 'react-navigation';

const uiTheme = {
    palette: {
        primaryColor: '#3F51B5',
    }
};

class HamburgerSearchHeader extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Toolbar
                    leftElement="menu"
                    onLeftElementPress={() => this.props.navigation.navigate('DrawerOpen')}
                    centerElement={(this.props.title) ? this.props.title : 'Dashboard'}
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                    }}
                />
            </ThemeProvider>
        );
    }
}

HamburgerSearchHeader.propTypes = {
    title: PropTypes.string
};

export default withNavigation(HamburgerSearchHeader)