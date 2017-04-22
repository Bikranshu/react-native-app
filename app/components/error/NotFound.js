import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

class NotFound extends Component {
    render(){
        return (
            <View>
                <Text>404 - Page Not Found</Text>
                <Text>I'm sorry, the page you were looking for cannot be found!</Text>
            </View>
        );
    }
}

export default NotFound