import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import {Container, Content, Button, Text} from 'native-base';

import Logo from '../common/Logo';
import SignupSection from './SignupSection';
import renderInput from '../common/form/renderInput';
import renderPassword from '../common/form/renderPassword';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);

    }

    submit(formProps) {

        console.log('submitting form', formProps)
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <Container>
                <Content>

                    <Logo/>

                    <View style={styles.formContainer}>
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
                            <Button full block onPress={handleSubmit(this.submit)} style={{backgroundColor: '#9b59b6'}}>
                                <Text>Login</Text>
                            </Button>
                        </View>
                    </View>

                    <SignupSection/>

                </Content>
            </Container>
        );
    }
}

const validateLogin = values => {
    const errors = {};
    if (!values.email) {
        errors.email = '(The email field is required.)'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address.'
    }

    if (!values.password) {
        errors.password = '(The password field is required.)'
    }
    return errors
};

const styles = StyleSheet.create({
    formContainer: {
        padding: 20
    },
    button: {
        paddingVertical: 20
    }
});

export default reduxForm({
    form: 'LoginForm', // ←A Unique identifier for this form
    validate: validateLogin  // ←Callback function for client-side validation
})(LoginForm)