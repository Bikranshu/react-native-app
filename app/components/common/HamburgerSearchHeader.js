import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider, Toolbar} from 'react-native-material-ui';

const uiTheme = {
    palette: {
        primaryColor: '#3F51B5',
    }
};

// const HamburgerSearchHeader = (props) => (
//     <ThemeProvider uiTheme={uiTheme}>
//         <Toolbar
//             leftElement={props.icon}
//             onLeftElementPress={props.onPress}
//             centerElement={props.title}
//             searchable={{
//                 autoFocus: true,
//                 placeholder: 'Search',
//                 onChangeText: value =>  props.onSetText(value),
//                 onSearchClosed: () => props.onClearText(),
//             }}
//         />
//     </ThemeProvider>
// );

class HamburgerSearchHeader extends Component {

    constructor(props) {
        super(props);

    }

    static defaultProps = {
        icon: 'menu',
        title: 'Dashboard'
    };

    handleSetText = (value) => {
        this.props.onSetText(value);
    }

    handleClearText = () => {
        this.props.onClearText();
    }

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
                        onChangeText: value => this.handleSetText(value),
                        onSearchClosed: () => this.handleClearText(),
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

export default HamburgerSearchHeader