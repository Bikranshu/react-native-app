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

    static defaultProps = {
        icon: 'menu',
        title: 'Dashboard'
    };

    render() {
        return (
            <ThemeProvider uiTheme={uiTheme}>
                <Toolbar
                    leftElement={this.props.icon}
                    onLeftElementPress={this.props.onPress}
                    centerElement={this.props.title}
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
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
};

export default withNavigation(HamburgerSearchHeader)