import React, {Component} from 'react';
import {
    Text,
    View,
    Button,
    StyleSheet
} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import {Container, Content} from 'native-base';

import Logo from '../common/Logo';
import renderInput from '../common/form/renderInput';

class SignUpForm extends Component {

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
                    <View style={styles.container}>
                        <Logo/>

                        <View style={styles.formContainer}>
                            <Text style={styles.label}>First Name</Text>
                            <Field
                                name={'first_name'}
                                component={renderInput}
                            />

                            <Text style={styles.label}>Last Name</Text>
                            <Field
                                name={'last_name'}
                                component={renderInput}
                            />

                            <Text style={styles.label}>Email</Text>
                            <Field
                                name={'email'}
                                component={renderInput}
                            />

                            <View style={styles.button}>
                                <Button
                                    onPress={handleSubmit(this.submit)}
                                    title="Register"
                                    color="#9b59b6"
                                />
                            </View>
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

    return errors
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    formContainer: {
        flex: 3,
        padding: 20,
    },
    label: {
        fontSize: 18
    },
    button: {
        paddingVertical: 20
    }
});

export default reduxForm({
    form: 'SignUpForm', // ←A Unique identifier for this form
    validate: validateSignup  // ←Callback function for client-side validation
})(SignUpForm)