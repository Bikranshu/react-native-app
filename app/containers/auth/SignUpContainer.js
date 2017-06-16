import React, { Component } from 'react';

// Import custom components
import SignUpForm from '../../components/auth/SignUpForm';

class SignUpContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <SignUpForm/>
        );
    }

}

export default SignUpContainer