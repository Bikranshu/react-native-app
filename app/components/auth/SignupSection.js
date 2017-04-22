import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import { NativeRouter, Link } from 'react-router-native';

export default class SignupSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Link to="/signup">
                    <Text style={styles.text}>Already have and account?</Text>
                </Link>
                <Link to="/forgot">
                    <Text style={styles.text}>Forgot Password?</Text>
                </Link>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: 'row',
        padding: 20
    },
    text: {
        color: 'rgb(0, 179, 134)',
        backgroundColor: 'transparent',
        marginRight: 75
    },
});
