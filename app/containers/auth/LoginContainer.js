import React, { Component } from 'react';

// Import custom components
import LoginForm from '../../components/auth/LoginForm';

class LoginContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <LoginForm/>
        );
    }

}


export default LoginContainer