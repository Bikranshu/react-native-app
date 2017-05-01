import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import {Container, Content, Header, Title, Left, Right, Body, Button, Text, Icon} from 'native-base';

import Logo from '../common/Logo';
import renderInput from '../common/form/renderInput';

class ForgotForm extends Component {

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
                            <Icon name='arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Forgot Password</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Logo/>

                        <View style={styles.formContainer}>

                            <Text>Email</Text>
                            <Field
                                name={'email'}
                                component={renderInput}
                            />

                            <View style={styles.button}>
                                <Button full rounded onPress={handleSubmit(this.submit)} style={{backgroundColor: '#9b59b6'}}>
                                    <Text>Send</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const validateForgot = values => {
    const errors = {};
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
        padding: 20
    },
    button: {
        paddingVertical: 20
    }
});

export default reduxForm({
    form: 'ForgotForm', // ←A Unique identifier for this form
    validate: validateForgot  // ←Callback function for client-side validation
})(ForgotForm)