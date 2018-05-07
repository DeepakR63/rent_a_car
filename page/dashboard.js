import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import  TopBanner  from './../component/topbanner.js';
import { employeedetailsURL, cardetailsURL, profileURL } from './../config/config.js';
import Profile  from './profile.js';
import  SideMenu  from './../component/sidemenu.js';
import  RevenueReport  from './../component/simplechart.js';

const data = [
    { name: 'Trivandrum', running: 24, rev: 430000, month: 'Jan' },
    { name: 'Kollam', running: 13, rev: 24000, month: 'May' },
    { name: 'Ernakulam', running: 21, rev: 340000, month: 'Oct' }
]

class DashBoard extends Component
{
    constructor(props)
    {
        super(props);
    }

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
                                <SideMenu />
                            <br/>
                        </div>
                        <div class="col-sm-10">
                        {/* s */}
                                <Content/>
                        </div>
                    </div>

                </div>

            </div>
            
        )
    }
}

class Content extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            isOpen: false
        }
    }

    toggleModal() 
    {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render()
    {
       

        return(

            <div>
                <div class="row" id="new-emp-caption">
                    <div class="col-sm-12">
                        <span id="spn-caption-profile"> <strong> Dashboard </strong></span>
                        <hr/>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12">
                        <div class="col-sm-4">
                            <Card id="car-card">
                                <CardHeader
                                    title="Car"
                                    subtitle="Top running-5"
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                    
                                />
                                <CardText expandable={true}>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Audi : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>46 </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Mahendra : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>34 </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Ford : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>27 </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Mercedez : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>13 </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Maruthi </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>11 </span><br/>
                                        </div>
                                    </div>
                                </CardText>
                            </Card>
                        </div>
                        <div class="col-sm-4">
                        <Card id="revenue-card">
                            <CardHeader
                                title="Revenue"
                                subtitle="114350$"
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                                <CardText expandable={true}>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Audi : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>34400$ </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Mahendra : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>27500$ </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Ford : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>18500$ </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Mercedez : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>18400$ </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Maruthi </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>15550$ </span><br/>
                                        </div>
                                    </div>
                                </CardText>
                            </Card>
                        </div>
                        <div class="col-sm-4">
                        <Card id="branch-card">
                            <CardHeader
                            title="Branch"
                            subtitle="3"
                            actAsExpander={true}
                            showExpandableButton={true}
                            />
                            <CardText expandable={true}>
                                    <hr/>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Ernakulam : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>Vivek Narayanan </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Kollam : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>Manoj Nair </span><br/>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label> Trivandrum : </label>
                                        </div>
                                        <div class="col-sm-6">
                                            <span>Mahesh </span><br/>
                                        </div>
                                    </div>
                                </CardText>
                            </Card>
                        </div>

                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-sm-4">
                       <center> 
                           <span><strong>Branch Revenue</strong></span>
                            <RevenueReport data={ data }/>
                        </center>
                    </div> 
                </div>
            </div>
        )
    }
}

export default withRouter(DashBoard);