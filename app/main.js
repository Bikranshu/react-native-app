import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import SplashScreen from 'react-native-splash-screen'

import platform from '../native-base-theme/variables/platform';
import material from '../native-base-theme/variables/material';

// Import custom components
import store from './store/store';
import StackNavigationState from './routers/stack/StackNavigationState';

export default class Main extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Provider store={store}>

                    <StackNavigationState />

                </Provider>
            </StyleProvider>
        );
    }
}