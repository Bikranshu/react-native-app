import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Container, Content, Text, Body, Thumbnail} from 'native-base';

export default class Logo extends Component {
    render() {
        return (
            <Content style={{paddingVertical: 20, paddingHorizontal: 20}}>
                <Body>
                <Thumbnail square size={80} source={require('../../images/logo.png')}/>
                <Text style={{color: 'steelblue', fontWeight: 'bold'}}>REACT NATIVE</Text>
                </Body>
            </Content>
        );
    }
}
