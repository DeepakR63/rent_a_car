import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import  TopBanner  from './../component/topbanner.js';

class Profile extends Component
{
    constructor(props)
    {
        super(props);

        this.state={
            profile:JSON.parse(localStorage.getItem('Profile'))
        }
    }

    render()
    {   
        return(

            <div id="div-modal-screen">
                   
                <center>
                    <div class="row">
                        <div class="col-sm-12">
                            <About profile={ this.state.profile }/>
                        </div>
                    </div>
                </center>

                <div class="row">
                    <div class="col-sm-12">
                        <DealerShip profile={ this.state.profile }/>
                    </div>
                </div>

                <div class="modal-footer" id="div-profile-footer">  
                </div>

            </div>

        )
    }
}

class About extends Component
{
    render()
    {
        return(

                <div id="div-body-about">

                    <div class="row">
                        <div class="col-sm-10">
                            <div id="div-profile-img">
                                 <center> <img src='./img/dealericon.png' class="img-circle" id='img-dlr-menu'/> </center>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-10">
                            <center> <label>{ this.props.profile.contact_Name }</label> </center>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-10">
                            <center><label> <span id="spn-profile-about" class="glyphicon glyphicon-envelope"> {this.props.profile.email} </span></label></center>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-10">
                            <center> <label><span id="spn-profile-about" class="glyphicon glyphicon-phone">{this.props.profile.contact_Mobile} </span></label></center>
                        </div>
                    </div>

                </div>
        )
    }
}

class DealerShip extends Component
{
    
    render()
    {
        return(
                <div id="div-body-dealership">

                    <div class="row">
                        <div class="col-sm-6">
                            <label><span > Dealer Name : </span></label>{ this.props.profile.dealer_Name }
                        </div>
                        <div class="col-sm-6">
                            <label><span > Active      : </span></label>{ this.props.profile.is_Active.toString() }
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <label><span > Address     : </span></label>{ this.props.profile.address }
                        </div>
                        <div class="col-sm-6">
                            <label><span > Pincode     : </span></label>{ this.props.profile.pincode }
                        </div>
                    </div>
                    
                </div>
        )
    }
}

  export default Profile;