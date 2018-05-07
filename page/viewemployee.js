import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import moment from 'moment';

import  TopBanner  from './../component/topbanner.js';
import  EmployeeMenu  from './../component/employeemenu.js';
import { employeeAPI } from '../config/config.js';
import { getCall } from '../config/api.js';
import  SideMenu  from './../component/sidemenu.js';

class EmployeeDetails extends Component
{

    render()
    {
        console.log('PrePAth',this.props.location);
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
                            <Details/>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

var employeeDetails='';

class Details extends Component
{
    constructor(props)
    {
        super(props);
        this.state={

            employeedetails:[],
            loading:false,
            employeename:'null',
            pageindex:0,
            requestsent:false,
            employeecount:0
        }
        
        this.onSearchChange=this.onSearchChange.bind(this);
    }

    componentDidMount()
    {
        window.addEventListener('scroll', this.handleOnScroll);
        this.setState({loading:true},()=>{
            this.getEmployees();
        })
        employeeDetails=this;
    }

    componentWillUnmount()
    {
        window.removeEventListener('scroll', this.handleOnScroll);
    }

    handleOnScroll()
    {
        var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || window.innerHeight;
        var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
        
        if (scrolledToBottom && (employeeDetails.state.employeedetails.length<employeeDetails.state.employeecount)) {
            console.log('Scroll:::',scrolledToBottom);
            employeeDetails.getEmployees();
            employeeDetails.setState({requestsent:true});
           // document.documentElement.scrollTop = Math.ceil(scrollTop -clientHeight) ;
        }

    }

    onSearchChange(e)
    {
        this.setState({ employeename:e.target.value, pageindex:0, employeedetails:[] },()=>{
            this.getEmployees();

        })
    }

    getEmployees()
    {
        if(this.state.employeename=='')
        {
            this.state.employeename='null';
        }

        if (this.state.requestsent) 
        {
            console.log('request true..');
            return;
        }

        this.setState({pageindex:this.state.pageindex+1},()=>{
            var dealer_ID=localStorage.getItem('LoginUserID');
            var processURL=employeeAPI+dealer_ID+'/'+this.state.employeename+'/'+this.state.pageindex;

            getCall(processURL).then((response)=>{

                if(this.state.employeedetails.length==0)
                { 
                    console.log('In length..0');
                    console.log('cars::::',response.data.employeecount);
                    this.setState({employeedetails:response.data.employees, employeecount:response.data.employeecount});
                    this.setState({loading:true,requestsent:false});
                }
                else
                {
                    console.log('In length..>>0');
                    var newdata=this.state.employeedetails.concat(response.data.employees);
                    this.setState({employeedetails:newdata,requestsent:false});
                } 
            
            })
            .catch((error)=>{

                console.log('Error on employee details.',error);
            
            })
        })
    }



    render()
    {
        return(

            <div>
                <div class="row" id="new-emp-caption">
                    <div class="col-sm-12">
                    <div class="row">
                            <div class="col-sm-6">
                                <span id="spn-caption-profile"> <strong> Employee Details </strong></span>
                            </div>
                            <div class="col-sm-6">
                                <input type="text"  placeholder="Search Year.." id="text-search" onChange={ this.onSearchChange }/>    
                                <button id="btn-search" class="btn"><span class="glyphicon glyphicon-search" id="spn-search" /></button>
                            </div>
                        </div>
                        
                         <hr/>
                    </div>
                </div>
                <div>
                <div class="row">
                    { this.state.employeedetails.map((employee)=>  
                        <div class="col-sm-6">
                            <Card id="card">
                                <CardHeader
                                    title={ employee.name }
                                    subtitle={ employee.role }
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                    id="card-header"
                                />
                                <hr/>
                                <CardText expandable={true} >
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label>Active :</label>
                                        </div>
                                        <div class="col-sm-8">
                                            <span>{  employee.is_Active.toString() } </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label>Code : </label>
                                        </div>
                                        <div class="col-sm-8">
                                            <span>{ employee.code } </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label>Gender : </label>
                                        </div>
                                        <div class="col-sm-8">
                                            <span>{ employee.gender } </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label>Dob : </label>
                                        </div>
                                        <div class="col-sm-8">
                                            <span>{ moment(employee.dob).format('DD/MM/YYYY') } </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label>Address : </label>
                                        </div>
                                        <div class="col-sm-8">
                                            <span>{ employee.address } </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label>Doj : </label>
                                        </div>
                                        <div class="col-sm-8">
                                            <span>{ moment(employee.doj).format('DD/MM/YYYY') } </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label>Email : </label>
                                        </div>
                                        <div class="col-sm-8">
                                            <span>{ employee.email } </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-4">
                                            <label>Mobile : </label>
                                        </div>
                                        <div class="col-sm-8">
                                            <span>{ employee.mobile } </span><br/>
                                        </div>
                                    </div>
                                </CardText>
                            </Card>
                        </div>
                    
                    )}
                </div>
                </div>
                {(() => {
                    if (this.state.requestsent) 
                    {
                        return(
                            <div class="data-loading">
                                <i class="fa fa-spinner fa-spin" id="refresh-icon"></i>
                            </div>
                        );
                    } 
                                    
                })()}
            </div>
        )
    }
}

export default EmployeeDetails;