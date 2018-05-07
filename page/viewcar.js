import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  TopBanner  from './../component/topbanner.js';
import  CarMenu  from './../component/carmenu.js';
import { carAPI } from '../config/config.js';
import { getCall } from '../config/api.js';
import  SideMenu  from './../component/sidemenu.js';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


class CarDetails extends Component
{
    render()
    {
        console.log('PrePAth',this.props);
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

var carDetails='';

class Details extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            cardetails:[],
            loading:false,
            year:'null',
            pageindex:0,
            requestsent:false,
            carcount:0
        }

        this.onSearchChange=this.onSearchChange.bind(this); 
    }

    getCars()
    {
        if(this.state.year=='')
        {
            this.state.year='null';
        }

        if (this.state.requestsent) 
        {
            console.log('request true..');
            return;
        }

        this.setState({pageindex:this.state.pageindex+1},()=>{

            var dealer_ID=localStorage.getItem('LoginUserID');
            var processURL=carAPI+dealer_ID+'/'+this.state.year+'/'+this.state.pageindex;
            console.log('path:::;;;',processURL);
            getCall(processURL).then((response)=>{

                if(this.state.cardetails.length==0)
                { 
                    console.log('In length..0');
                    console.log('cars::::',response.data.carcount);
                    this.setState({cardetails:response.data.allcars, carcount:response.data.carcount});
                    this.setState({loading:true,requestsent:false});
                }
                else
                {
                    console.log('In length..>>0');
                    var newdata=this.state.cardetails.concat(response.data.allcars);
                    this.setState({cardetails:newdata,requestsent:false});
                }  
            })
            .catch((error)=>{

                console.log('Error on employee details.',error);  
            })
        });   
    }

    componentDidMount()
    {
        window.addEventListener('scroll', this.handleOnScroll);
        this.setState({loading:true},()=>{
            this.getCars();
        })
        carDetails=this;
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
        
        if (scrolledToBottom && (carDetails.state.cardetails.length<carDetails.state.carcount)) {
            console.log('Scroll:::',scrolledToBottom);
            carDetails.getCars();
            carDetails.setState({requestsent:true});
            //document.documentElement.scrollTop = Math.ceil(scrollTop -clientHeight) ;
        }

    }

    onSearchChange(e)
    {
        this.setState({ year:e.target.value, pageindex:0, cardetails:[] },()=>{
            this.getCars();
            
        })
    }

    render()
    {
        return(
            <div>
                <div class="row form-group" id="new-emp-caption">
                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-sm-6">
                                <span id="spn-caption-profile"> <strong> Car Details </strong></span>
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
                        { this.state.cardetails.map((car)=>
                    
                            <div class="col-sm-6">
                                <Card id="card">
                                    <CardHeader
                                        title={ car.Make_ID[0].name }
                                        subtitle={ car.Model_ID[0].name }
                                        actAsExpander={true}
                                        showExpandableButton={true}
                                        id="card-header"
                                    />
                                    <hr/>
                                    <CardText expandable={true} >
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Price : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{  car.features[0].price } </span><br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Type : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{ car.Type_ID[0].name } </span><br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Year : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{ car.year } </span><br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Kilometers : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{ car.kilometers } </span><br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Mileage : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{ car.mileage } </span><br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Engine : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{ car.features[0].engine } </span><br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Exterior Colour : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{ car.features[0].exterior_Colour } </span><br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Interior Color : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{ car.features[0].interior_Colour } </span><br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Seater : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{ car.features[0].seater } </span><br/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <label> Fuel Model : </label>
                                            </div>
                                            <div class="col-sm-8">
                                                <span>{ car.features[0].fuel_Type_ID[0].name } </span><br/>
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

export default CarDetails ;