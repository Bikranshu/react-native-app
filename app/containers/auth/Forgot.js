import React, { Component } from 'react';

// Import custom components
import ForgotForm from '../../components/auth/ForgotForm';

class Forgot extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ForgotForm/>
        );
    }

}

export default Forgot