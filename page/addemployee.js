import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  TopBanner  from './../component/topbanner.js';
import  EmployeeMenu  from './../component/employeemenu.js';
import { employeeAPI } from '../config/config.js';
import { postCall } from '../config/api.js';
import  SideMenu  from './../component/sidemenu.js';
import { 

    validName,
    validAddress,
    validCode,
    validEmail,
    validMobile, 

} from '../controller/validation';

class NewEmployee extends Component
{
    render()
    {

        return(

            <div class="row" id="div-emp">
                <div class="col-sm-12">

                    <div class="row">
                        <TopBanner/>
                    </div>

                    <div class="row">
                        <div class="col-sm-2" id="mnu">
                        <SideMenu/>
                            <br/>
                        </div>

                        <div class="col-sm-10">
                            <AddEmployee/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

class AddEmployee extends  Component
{
    constructor(props)
    {
        super(props);

        this.state={

            Body:
            {
                code:'',
                name:'',
                role:'',
                gender:'',
                address:'',
                dob:'',
                doj:'',
                password:'exp@123',
                email:'',
                mobile:'',
                dealer_ID:localStorage.getItem('LoginUserID')
            },

            Error:
            {
                code:'',
                name:'',
                address:'',
                email:'',
                mobile:''
            }
        }

        this.onCodeChange=this.onCodeChange.bind(this);
        this.onNameChange=this.onNameChange.bind(this);
        this.onRoleChange=this.onRoleChange.bind(this);
        this.onGenderChange=this.onGenderChange.bind(this);
        this.onAddressChange=this.onAddressChange.bind(this);
        this.onDobChange=this.onDobChange.bind(this);
        this.onDojChange=this.onDojChange.bind(this);
        this.onEmailChange=this.onEmailChange.bind(this);
        this.onMobileChange=this.onMobileChange.bind(this);
        this.onSave=this.onSave.bind(this);
    }

    setErrorName(errormessage)
    {
        var error=this.state.Error
        error.name=errormessage
        this.setState({ Error:error });
    }

    setErrorCode(errormessage)
    {
        var error=this.state.Error
        error.code=errormessage
        this.setState({ Error:error });
    }

    setErrorEmail(errormessage)
    {
        var error=this.state.Error
        error.email=errormessage
        this.setState({ Error:error });
    }

    setErrorMobile(errormessage)
    {
        var error=this.state.Error
        error.mobile=errormessage
        this.setState({ Error:error });
    }

    setErrorAddress(errormessage)
    {
        var error=this.state.Error
        error.address=errormessage
        this.setState({ Error:error });
    }

    onCodeChange(e)
    {
        var body=this.state.Body;
        body.code=e.target.value;

        this.setState({ Body: body },() => {

            if (!validCode(this.state.Body.code)) 
            {
                this.setErrorCode('enter valid code');
            }
            else 
            {
                this.setErrorCode('');
            }
        });
    }

    onNameChange(e)
    {
        var body=this.state.Body;
        body.name=e.target.value;

        this.setState({ Body: body },() => {

            if (!validName(this.state.Body.name)) 
            {
                this.setErrorName('enter valid name');
            }
            else 
            {
                this.setErrorName('');
            }
        });
    }

    onRoleChange(e)
    {
        var body=this.state.Body;
        body.role=e.target.value;

        this.setState({ Body: body });
    }

    onGenderChange(e)
    {
        var body=this.state.Body;
        body.gender=e.target.value;

        this.setState({ Body: body });
    }

    onAddressChange(e)
    {
        var body=this.state.Body;
        body.address=e.target.value;

        this.setState({ Body: body },() => {

            if (!validAddress(this.state.Body.address)) 
            {
                this.setErrorAddress('enter valid address');
            }
            else 
            {
                this.setErrorAddress('');
            }
        });
    }

    onDobChange(e)
    {
        var body=this.state.Body;
        body.dob=e.target.value;

        this.setState({ Body: body });
    }

    onDojChange(e)
    {
        var body=this.state.Body;
        body.doj=e.target.value;

        this.setState({ Body: body });
    }

    onEmailChange(e)
    {
        var body=this.state.Body;
        body.email=e.target.value;

        this.setState({ Body: body },() => {

            if (!validEmail(this.state.Body.email)) 
            {
                this.setErrorEmail('enter valid email');
            }
            else 
            {
                this.setErrorEmail('');
            }
        });
    }

    onMobileChange(e)
    {
        var body=this.state.Body;
        body.mobile=e.target.value;

        this.setState({ Body: body },() => {

            if (!validMobile(this.state.Body.mobile)) 
            {
                this.setErrorMobile('value should be numeric and maximum length is 10');
            }
            else 
            {
                this.setErrorMobile('');
            }
        });
    }

    doValidation()
    {
        var Is_Valid=true;

        if (!validCode(this.state.Body.code)) 
        {
            this.setErrorCode('enter valid code');
            Is_Valid=false;
        }

        if (!validName(this.state.Body.name)) 
        {
            this.setErrorName('enter valid name');
            Is_Valid=false;
        }

        if (!validAddress(this.state.Body.address)) 
        {
            this.setErrorAddress('enter valid address');
            Is_Valid=false;
        }

        if (!validEmail(this.state.Body.email)) 
        {
            this.setErrorEmail('enter valid email');
            Is_Valid=false;
        }

        if (!validMobile(this.state.Body.mobile)) 
        {
            this.setErrorMobile('enter valid mobile');
            Is_Valid=false;
        }

        return Is_Valid;
    }

    doSave()
    {
        var processURL = employeeAPI+this.state.Body.dealer_ID+'/null/null' ;

        postCall(processURL,this.state.Body)
        .then((response) => {

            console.log(response);
            if (response.status==200) 
            {
                alert('Employee saved.');        
            }
            else 
            {
                alert('Error on process');
            }
        })
        .catch(function (error) {

            alert('Error on process;details:'+error);
        });
    }

    onSave()
    {
        if(this.doValidation())
        {
            this.doSave();
        } 
    }

    render()
    {
       

        return(

            <div>
                
                <div class="row" id="new-emp-caption">
                    <div class="col-sm-12">
                        <span id="spn-caption-profile"> <strong> New Employee </strong></span>
                        <hr/>
                    </div>
                </div>

                <div  id="div-emp-body">

                    <div class="row form-group">
                        <div class="col-sm-4">
                            <span id="spn-update-label"> Name : </span><input type="text"  class="form-control text" onChange={ this.onNameChange } />
                            <span id='spn-error'>{ this.state.Error.name }</span>
                        </div>

                        <div class="col-sm-4">
                            <span id="spn-update-label"> Code : </span><input type="text"  class="form-control text" onChange={ this.onCodeChange } />
                            <span id='spn-error'>{ this.state.Error.code }</span>
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-sm-4">
                            <span> Gender </span><br/>
                            <label id="lbl"><input type="radio" value="Male" name="gender" onChange={ this.onGenderChange } /> <span id="input-radio-gender">Male</span>  </label>  
                            <label id="lbl"><input type="radio" value="Female" name="gender" onChange={ this.onGenderChange } /> <span id="input-radio-gender">Female</span> </label>   
                        </div>

                        <div class="col-sm-4">
                            <span id="spn-update-label"> Role : </span>
                            <select class="selectpicker form-control" onChange={ this.onRoleChange }>
                                <option value="--select--"> --SELECT-- </option>
                                <option value="manager"> Manager </option>
                                <option value="salesman"> Salesman </option>
                            </select>
                        </div>
                    </div>
               
                    <div class="row form-group">
                        <div class="col-sm-8">
                            <span id="spn-update-label"> Address </span>
                            <textarea   class="form-control text" row="5" onChange={ this.onAddressChange } />
                            <span id='spn-error'>{ this.state.Error.address }</span>
                        </div>
                    </div>

                    <div class="row form-group">
                        <div class="col-sm-4">
                            <span id="spn-update-label"> Dob : </span><input type="date"  class="form-control" onChange={ this.onDobChange } />    
                        </div>

                        <div class="col-sm-4">
                            <span id="spn-update-label"> Doj : </span><input type="date"  class="form-control" onChange={ this.onDojChange } />    
                        </div>
                    </div>
               
                    <div class="row form-group">
                        <div class="col-sm-4">
                            <span> Email </span>
                            <input type="text"  class="form-control text" onChange={ this.onEmailChange } />
                            <span id='spn-error'>{ this.state.Error.email }</span>
                        </div>

                        <div class="col-sm-4">
                            <span> Mobile</span>
                            <input type="Number"  class="form-control text" onChange={ this.onMobileChange } />
                            <span id='spn-error'>{ this.state.Error.mobile }</span>
                        </div>
                    </div>

                </div>
                <hr/>

                <div class="row">
                    <div class="col-sm-8"> 
                    </div>

                    <div class="col-sm-2">
                        <button class="btn btn-primary" id="btn-save" onClick={ this.onSave }>Save</button>
                    </div>
                </div>
                <br/>
                <br/>
                
            </div>
        )
    }
}

export default  NewEmployee;