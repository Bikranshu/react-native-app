import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/logo.png')} style={styles.image} />
                <Text style={styles.text}>REACT NATIVE</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'steelblue',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    }
});