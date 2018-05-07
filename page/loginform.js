
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { validEmail, validPassword } from '../controller/validation';
import { loginAPI, homeURL, dealerprofileAPI } from '../config/config.js';
import { postCall, getCall } from '../config/api.js';


class LoginForm extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {

            Body:
            {
                username: '',
                password: ''
            },

            Error:
            {
                username:'',
                password:''
            }
            
        }

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    setErrorUserName(errormessage)
    {
        var error=this.state.Error
        error.username=errormessage
        this.setState({Error:error});
    }

    setErrorPassword(errormessage)
    {
        var error=this.state.Error
        error.password=errormessage
        this.setState({Error:error});
    }

    doValidation()
    {
        var Is_Valid=true;

        if(!validEmail(this.state.Body.username))
        {
            this.setErrorUserName('enter valid email');
            Is_Valid=false
        }
       
        if(!validPassword(this.state.Body.password))
        {
            this.setErrorPassword('enter valid password.');
            Is_Valid=false
        }
        
        return Is_Valid;
    }
    
    onUsernameChange(e) 
    {

        var body=this.state.Body;
        body.username=e.target.value;

        this.setState({ Body: body },() => {

                if (!validEmail(this.state.Body.username)) 
                {
                    this.setErrorUserName('enter valid email');
                }
                else 
                {
                    this.setErrorUserName('');
                }
            });
    }

    onPasswordChange(e) 
    {
        var body=this.state.Body;
        body.password=e.target.value;

        this.setState({ Body: body },() => {

                if (!validPassword(this.state.Body.password)) 
                {
                    this.setErrorPassword('Minimum contains 6 character')
                }
                else 
                {
                    this.setErrorPassword('');
                }
            });
    }

    goToHome()
    {
        this.props.history.push('/dashboard');
    }

    doLogin() 
    {
        var processURL = loginAPI;
        
        postCall(processURL,this.state.Body)
        .then((response) => {

            if(response.data==='invalid_username')
            {
                this.setErrorUserName('email does not exist')
            }
            else if(response.data==='invalid_password')
            {
                this.setErrorPassword('password does not matched')        
            }
            else
            {
                this.setErrorPassword('');
                this.setErrorUserName('');
                localStorage.setItem('Auth', response.headers['x-auth']);
                processURL=dealerprofileAPI;
                    
                getCall(processURL+this.state.Body.username)
                .then((profile)=>{

                    localStorage.setItem('LoginUserID',profile.data._id);
                    localStorage.setItem('Profile',JSON.stringify(profile.data));

                    this.goToHome();
                })
            }
        })
        .catch(function (error) {
            console.log(error);
            console.log("email or password is wrong");
        });
    }

    onLogin(e) 
    {
        if(this.doValidation())
        {
            this.doLogin();
        }
    }

    render() 
    {
        return (
            
            <div>

                <div id="div-login">

                    <div class="row form-group">
                        <div class="col-sm-12">
                            <input type="email" placeholder="email" class="form-control text" onChange={ this.onUsernameChange } />
                            <span id='spn-error'>{ this.state.Error.username }</span>
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-sm-12">
                            <input type="password" placeholder="******" class="form-control text" onChange={ this.onPasswordChange } />
                            <span id='spn-error'>{ this.state.Error.password }</span>
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-sm-12">
                            <button class="btn btn-success form-control" id="btn-login" onClick={ this.onLogin }> Login </button>
                        </div>
                    </div>

                </div>

                <div id="div-login-title">
                    <span>
                        <div id="div-login-img">
                            <img src='./img/user.jpeg' class="img-circle" id='img-logo' />
                        </div>
                    </span>
                </div>

            </div>
        )
    }
}

export default withRouter(LoginForm);