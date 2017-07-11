import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Import custom components
import Employee from '../../components/employee/Employee';

class EmployeeContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Employee/>
        );
    }

}

export default EmployeeContainer