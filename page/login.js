import React, { Component } from 'react';
import Head from './../component/head.js';

import LoginForm from './loginform.js';

 class Login extends Component 
 {
    render() 
    {
        return (

            <div>

                <div id="div-nav">
                    <Head />
                </div>
                <LoginForm />
                <br />
                
            </div>
        )
    }
}

export default Login;



