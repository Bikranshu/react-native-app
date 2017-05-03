import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Import custom components
import Category from '../../components/category/Category';

class CategoryContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Category/>
        );
    }

}

export default CategoryContainer