import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {List, ListItem, Left, Right, Body, Thumbnail, Text} from 'native-base';
import {withNavigation} from 'react-navigation';

class CategoryItem extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const title = this.props.title;
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail source={require('../../images/logo.png')}/>
                </Left>
                <Body>
                <Text>{title}</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
                </Body>
                <Right>
                    <Text note>2:43 pm</Text>
                </Right>
            </ListItem>

        );
    }

}

export default withNavigation(CategoryItem)