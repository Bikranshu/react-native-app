import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {List, ListItem} from 'native-base';
import {withNavigation} from 'react-navigation';

// Import custom components
import CategoryItem from './CategoryItem';

class CategoryList extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const items = this.props.items;

        return (

            <List dataArray={items}
                  renderRow={(item) =>
                      <CategoryItem title={item}/>
                  }>
            </List>

        );
    }

}

export default withNavigation(CategoryList)