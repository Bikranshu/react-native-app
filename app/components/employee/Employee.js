import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import {withNavigation} from 'react-navigation';

// Import custom components
import HamburgerSearchHeader from '../common/HamburgerSearchHeader';
import EmployeeList from './EmployeeList';

class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };

    }

    handleTextChange = (value) => {
        this.setState({searchText: value});
    };

    handleTextClear = () => {
        this.setState({searchText: ''})
    };

    render() {
        const {navigate} = this.props.navigation;

        let items;
        const searchText = this.state.searchText.toLowerCase();
        if (searchText == 'krishna') {
            items = ['Krishna Timilsina', 'Ram Sharma'];
        } else if (searchText == 'jony') {
            items = ['Jony Lever', 'Parker Teracy'];
        } else {
            items = ['Krishna Timilsina', 'Ram Sharma', 'Jony Lever', 'Parker Teracy', 'Emre Can'];
        }

        return (
            <Container>

                <HamburgerSearchHeader
                    title='Employee'
                    icon="menu"
                    onPress={() => navigate('DrawerOpen')}
                    onSetText={this.handleTextChange}
                    onClearText={this.handleTextClear}
                />

                <Content>

                    <EmployeeList items={items}/>

                </Content>

            </Container>

        );
    }

}

Employee.propTypes = {
    onPress: PropTypes.func,
};

export default (withNavigation(Employee))