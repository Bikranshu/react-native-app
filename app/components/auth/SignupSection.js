import React, {Component} from 'react';
import {View, Text, StyleSheet,} from 'react-native';
import {Link} from 'react-router-native';
import {Left, Right} from 'native-base';

export default class SignupSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Left>
                    <Link to="/signup">
                        <Text style={styles.text}>Already have and account?</Text>
                    </Link>
                </Left>
                <Right>
                    <Link to="/forgot">
                        <Text style={styles.text}>Forgot Password?</Text>
                    </Link>
                </Right>
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
        color: 'steelblue',
        backgroundColor: 'transparent'
    },
});
