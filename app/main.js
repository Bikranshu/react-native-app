import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import {Provider} from 'react-redux';
import {NativeRouter, Route, Switch} from 'react-router-native';
import {StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

import store from './store/store';

// Import custom components
import NotFound from './components/error/NotFound';
import Login from './containers/auth/Login';
import SignUp from './containers/auth/SignUp';
import Forgot from './containers/auth/Forgot';
import Dashboard from './containers/dashboard/Dashboard';

export default class Main extends Component {

    render() {
        return (
            <StyleProvider style={getTheme(platform)}>
                <Provider store={store}>
                    <NativeRouter>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route path="/signup" component={SignUp}/>
                            <Route path="/forgot" component={Forgot}/>

                            <Route path="/dashboard" component={Dashboard}/>

                            <Route component={NotFound}/>
                        </Switch>
                    </NativeRouter>
                </Provider>
            </StyleProvider>
        );
    }
}