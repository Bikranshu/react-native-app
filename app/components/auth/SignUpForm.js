import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {Container, Content, Header, Title, Left, Right, Body, Button, Text, Icon} from 'native-base';
import {withNavigation} from 'react-navigation';

// Import custom components
import Logo from '../common/Logo';
import renderInput from '../common/form/renderInput';
import renderPassword from '../common/form/renderPassword';
import * as authService from '../../services/authService';

class SignUpForm extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);

    }

    submit(formProps) {

        this.props.actions.signup(formProps);
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent
                                onPress={() => this.props.navigation.navigate("Login")}>
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Sign Up</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Logo/>

                    <View style={styles.formContainer}>
                        <Text>First Name</Text>
                        <Field
                            name={'first_name'}
                            component={renderInput}
                        />

                        <Text>Last Name</Text>
                        <Field
                            name={'last_name'}
                            component={renderInput}
                        />

                        <Text>Email</Text>
                        <Field
                            name={'email'}
                            component={renderInput}
                        />

                        <Text>Password</Text>
                        <Field
                            name={'password'}
                            component={renderPassword}
                        />

                        <View style={styles.button}>
                            <Button full block onPress={handleSubmit(this.submit)}
                                    style={{backgroundColor: '#9b59b6'}}>
                                <Text>Register</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const validateSignup = values => {
    const errors = {};
    if (!values.first_name) {
        errors.first_name = '(The first name field is required.)'
    }

    if (!values.last_name) {
        errors.last_name = '(The last name field is required.)'
    }

    if (!values.email) {
        errors.email = '(The email field is required.)'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address.'
    }

    if (!values.password) {
        errors.password = '(The password field is required.)'
    }else if(values.password.length < 6){
        errors.password= '(The password length min 6 characters.)';
    }

    return errors
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 20,
    },
    button: {
        paddingVertical: 20
    }
});


/**
 * Map the state to props.
 */
const mapStateToProps = state => ({
    nav: state.nav
});

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Object.assign({}, authService), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'SignUpForm', // ←A Unique identifier for this form
    validate: validateSignup  // ←Callback function for client-side validation
})(withNavigation(SignUpForm)))