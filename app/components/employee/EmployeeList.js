import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {List, ListItem} from 'native-base';
import {withNavigation} from 'react-navigation';

// Import custom components
import EmployeeItem from './EmployeeItem';

class EmployeeList extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const items = this.props.items;

        return (

            <List dataArray={items}
                  renderRow={(item) =>
                      <EmployeeItem title={item}/>
                  }>
            </List>

        );
    }

}

export default withNavigation(EmployeeList)