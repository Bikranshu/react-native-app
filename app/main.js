import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import material from '../native-base-theme/variables/material';

import store from './store/store';
import AppNavigationState from './navigators/AppNavigation';

export default class Main extends Component {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Provider store={store}>

                    <AppNavigationState />

                </Provider>
            </StyleProvider>
        );
    }
}