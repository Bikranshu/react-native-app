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
import material from '../native-base-theme/variables/material';

import store from './store/store';

// Import custom components
import NotFound from './components/error/NotFound';
import Login from './containers/auth/Login';
import SignUp from './containers/auth/SignUp';
import Forgot from './containers/auth/Forgot';
import Dashboard from './containers/dashboard/DashboardContainer';
import Category from './containers/category/CategoryContainer';
import NavigationDrawer from './components/common/NavigationDrawer';

export default class Main extends Component {

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Provider store={store}>
                    <NativeRouter>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route path="/signup" component={SignUp}/>
                            <Route path="/forgot" component={Forgot}/>

                            <NavigationDrawer>
                                <Route path="/dashboard" component={Dashboard}/>
                                <Route path="/category" component={Category}/>
                            </NavigationDrawer>

                            <Route component={NotFound}/>
                        </Switch>
                    </NativeRouter>
                </Provider>
            </StyleProvider>
        );
    }
}