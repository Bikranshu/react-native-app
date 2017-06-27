import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {reduxForm, Field} from 'redux-form';
import {Container, Content, Button, Text} from 'native-base';
import {withNavigation} from 'react-navigation';
import {ThemeProvider, Toolbar} from 'react-native-material-ui';

// Import custom components
import Logo from '../common/Logo';
import renderInput from '../common/form/renderInput';

const uiTheme = {
    palette: {
        primaryColor: '#3F51B5',
    }
};

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

                <ThemeProvider uiTheme={uiTheme}>
                    <Toolbar
                        leftElement="arrow-back"
                        onLeftElementPress={() => this.props.navigation.goBack()}
                        centerElement='Forgot Password'
                    />
                </ThemeProvider>

                <Content>
                    <Logo/>

                    <View style={styles.formContainer}>

                        <Text>Email</Text>
                        <Field
                            name={'email'}
                            component={renderInput}
                        />

                        <View style={styles.button}>
                            <Button full block onPress={handleSubmit(this.submit)} style={{backgroundColor: '#9b59b6'}}>
                                <Text>Send</Text>
                            </Button>
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
    formContainer: {
        padding: 20
    },
    button: {
        paddingVertical: 20
    }
});

export default reduxForm({
    form: 'ForgotForm', // ←A Unique identifier for this form
    validate: validateForgot  // ←Callback function for client-side validation
})(withNavigation(ForgotForm))