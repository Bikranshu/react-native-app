import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import {Container, Content, Header, Title, Left, Right, Body, Button, Text, Icon} from 'native-base';
import {Link} from 'react-router-native';

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
                <Header>
                    <Left>
                        <Button transparent>
                            <Link to="/">
                                <View>
                                    <Icon name='arrow-back'/>
                                </View>
                            </Link>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Sign Up</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.container}>
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

                            <View style={styles.button}>
                                <Button full rounded onPress={handleSubmit(this.submit)}
                                        style={{backgroundColor: '#9b59b6'}}>
                                    <Text>Register</Text>
                                </Button>
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
    button: {
        paddingVertical: 20
    }
});

export default reduxForm({
    form: 'SignUpForm', // ←A Unique identifier for this form
    validate: validateSignup  // ←Callback function for client-side validation
})(SignUpForm)