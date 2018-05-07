import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { timingSafeEqual } from 'crypto';

import  TopBanner  from './../component/topbanner.js';
import  SideMenu  from './../component/sidemenu.js';
import { getCall, postCall } from '../config/api.js';
import { carAPI, carmodelAPI, cartypeAPI, carfuelAPI, carmakeAPI, carimageURL} from '../config/config.js';
import { 

    validKilometer, 
    validMileage, 
    validYear, 
    validColour, 
    validEngine, 
    validSeater, 
    validPrice 

} from '../controller/validation';


class NewCar extends Component
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
                                <SideMenu />
                                <br/>
                            </div>
                            <div class="col-sm-10">
                                <AddCar/>
                            </div>
                        </div>

                    </div>

                </div>
            )
    }
}

class AddCar extends  Component
{

    constructor(props)
    {
        super(props);

        this.state={

            Body:
            {
                kilometers:'',
                is_Active:false,
                is_Rented:false,
                mileage:'',
                year:'', 
                Type_ID:'',
                Make_ID:'',
                Dealer_ID:localStorage.getItem('LoginUserID'),
                Model_ID:'',
                features: [{

                    fuel_Type_ID:'',
                    exterior_Colour:'',
                    interior_Colour:'',
                    price:'',
                    seater:'',
                    is_AC:false,
                    has_ABS:false,
                    has_EBD:false,
                    engine:'',

                }]
            },

            Error:
            {
                kilometers:'',
                mileage:'',
                year:'',
                exterior_Colour:'',
                interior_Colour:'',
                price:'',
                seater:'',
                engine:''
            },

            models:[],
            types:[],
            fuelmodels:[],
            makes:[],

            loadingcarmakes:false,
            loadingcarmodel:false,
            loadingcartype:false,
            loadingcarfueltype:false,
            loading:true
        }

        this.onKilometerChange=this.onKilometerChange.bind(this);
        this.onMileageChange=this.onMileageChange.bind(this);
        this.onYearChange=this.onYearChange.bind(this);
        this.onTypeChange=this.onTypeChange.bind(this);
        this.onMakeChange=this.onMakeChange.bind(this);
        this.onModelChange=this.onModelChange.bind(this);
        this.onFuelTypeChange=this.onFuelTypeChange.bind(this);
        this.onExteriorColourChange=this.onExteriorColourChange.bind(this);
        this.onInteriorColourChange=this.onInteriorColourChange.bind(this);
        this.onPriceChange=this.onPriceChange.bind(this);
        this.onSeaterChange=this.onSeaterChange.bind(this);
        this.onACChange=this.onACChange.bind(this);
        this.onABSChange=this.onABSChange.bind(this);
        this.onEBDChange=this.onEBDChange.bind(this);
        this.onEngineChange=this.onEngineChange.bind(this);
        this.onSave=this.onSave.bind(this);
    }


    componentDidMount()
    {
        this.setState({ loading:false },()=>{
            this.getCarMakes();
            this.getCarFuelModel();
            this.getCarModel();
            this.getCarType();
            console.log('on didi');
        });          
    }

    getCarMakes()
    {
        var processURL=carmakeAPI;

        getCall(processURL)
        .then((response)=>{

            this.setState({makes:response.data});
            this.setState({loadingcarmakes:true});
           
        })
        .catch((error)=>{

            console.log('Error on employee details.',error);   
        })
    }

    getCarModel()
    {
        var processURL=carmodelAPI;

        getCall(processURL).then((response)=>{

            this.setState({models:response.data});
            this.setState({loadingcarmodel:true});   
            console.log('models:',this.state.models);
        })
        .catch((error)=>{

            console.log('Error on employee details.',error);   
        })
    }

    getCarType()
    {
        var processURL=cartypeAPI;

        getCall(processURL).then((response)=>{

            this.setState({types:response.data});
            this.setState({loadingcartype:true});   
        })
        .catch((error)=>{

            console.log('Error on employee details.',error);   
        })
    }

    getCarFuelModel()
    {
        var processURL=carfuelAPI;

        getCall(processURL).then((response)=>{

            this.setState({fuelmodels:response.data});
            this.setState({loadingcarfueltype:true});   
        })
        .catch((error)=>{

            console.log('Error on employee details.',error);  
        })
    }

    setErrorKilometer(errormessage)
    {
        var error=this.state.Error
        error.kilometers=errormessage
        this.setState({ Error:error });
    }

    setErrorMileage(errormessage)
    {
        var error=this.state.Error
        error.mileage=errormessage
        this.setState({ Error:error });
    }

    setErrorYear(errormessage)
    {
        var error=this.state.Error
        error.year=errormessage
        this.setState({ Error:error });
    }

    setErrorExteriorColour(errormessage)
    {
        var error=this.state.Error
        error.exterior_Colour=errormessage
        this.setState({ Error:error });
    }

    setErrorInteriorColour(errormessage)
    {
        var error=this.state.Error
        error.interior_Colour=errormessage
        this.setState({ Error:error });
    }

    setErrorPrice(errormessage)
    {
        var error=this.state.Error
        error.price=errormessage
        this.setState({ Error:error });
    }

    setErrorSeater(errormessage)
    {
        var error=this.state.Error
        error.seater=errormessage
        this.setState({ Error:error });
    }

    setErrorEngine(errormessage)
    {
        var error=this.state.Error
        error.engine=errormessage
        this.setState({ Error:error });
    }

    onKilometerChange(e)
    {
        var body=this.state.Body;
        body.kilometers=e.target.value;

        this.setState({ Body: body },() => {

            if (!validKilometer(this.state.Body.kilometers)) 
            {
                this.setErrorKilometer('value should be numeric');
            }
            else 
            {
                this.setErrorKilometer('');
            }
        });
    }

    onMileageChange(e)
    {
        var body=this.state.Body;
        body.mileage=e.target.value;

        this.setState({ Body: body },() => {

            if (!validMileage(this.state.Body.mileage)) 
            {
                this.setErrorMileage('value should be numeric');
            }
            else 
            {
                this.setErrorMileage('');
            }
        });
    }

    onYearChange(e)
    {
        var body=this.state.Body;
        body.year=e.target.value;

        this.setState({ Body: body },() => {

            if (!validYear(this.state.Body.year)) 
            {
                this.setErrorYear('value should be numeric');
            }
            else 
            {
                this.setErrorYear('');
            }
        });
    }

    onTypeChange(e)
    {
        var body=this.state.Body;
        body.Type_ID=e.target.value;

        this.setState({ Body: body });
    }

    onMakeChange(e)
    {
        var body=this.state.Body;
        body.Make_ID=e.target.value;

        this.setState({ Body: body });
    }

    onModelChange(e)
    {
        var body=this.state.Body;
        body.Model_ID=e.target.value;

        this.setState({ Body: body });
    }

    onFuelTypeChange(e)
    {
        const feature=this.state.Body.features;
        feature[0].fuel_Type_ID=e.target.value;
        this.state.Body.features=feature;
    }

    onExteriorColourChange(e)
    {
        const feature=this.state.Body.features;
        feature[0].exterior_Colour=e.target.value;
        this.state.Body.features=feature;

        if (!validColour(feature[0].exterior_Colour)) 
        {
            this.setErrorExteriorColour('value should be alphabets');
        }
        else 
        {
            this.setErrorExteriorColour('');
        }       
    }

    onInteriorColourChange(e)
    {
        const feature=this.state.Body.features;
        feature[0].interior_Colour=e.target.value;
        this.state.Body.features=feature;
        
        if (!validColour(feature[0].interior_Colour)) 
        {
            this.setErrorInteriorColour('value should be alphabets');
        }
        else 
        {
            this.setErrorInteriorColour('');
        }
    }

    onPriceChange(e)
    {
        const feature=this.state.Body.features;
        feature[0].price=e.target.value;
        this.state.Body.features=feature;
        
        if (!validPrice(feature[0].price)) 
        {
            this.setErrorPrice('value should be decimal');
        }
        else 
        {
            this.setErrorPrice('');
        }
    }

    onSeaterChange(e)
    {
        const feature=this.state.Body.features;
        feature[0].seater=e.target.value;
        this.state.Body.features=feature;
        
        if (!validSeater(feature[0].seater)) 
        {
            this.setErrorSeater('value should be numeric');
        }
        else 
        {
            this.setErrorSeater('');
        }
    }

    onACChange(e)
    {
        const feature=this.state.Body.features;
        feature[0].is_AC=!this.state.Body.features[0].is_AC;
        this.state.Body.features=feature;
    }

    onABSChange(e)
    {
        const feature=this.state.Body.features;
        feature[0].has_ABS=!this.state.Body.features[0].has_ABS;
        this.state.features=feature;
    }

    onEBDChange(e)
    {
        const feature=this.state.Body.features;
        feature[0].has_EBD=!this.state.Body.features[0].has_EBD;
        this.state.features=feature;
    }

    onEngineChange(e)
    {
        const feature=this.state.Body.features;
        feature[0].engine=e.target.value;
        this.state.Body.features=feature;
        
        if (!validEngine(feature[0].engine)) 
        {
            this.setErrorEngine('enter valid name');
        }
        else 
        {
            this.setErrorEngine('');
        }
    }

    doValidation()
    {
        var Is_Valid=true;

        if (!validKilometer(this.state.Body.kilometers)) 
        {
            this.setErrorKilometer('enter valid kilometers');
            Is_Valid=false;
        }
       
        if (!validMileage(this.state.Body.mileage)) 
        {
            this.setErrorMileage('enter valid mileage');
            Is_Valid=false;
        }

        if (!validYear(this.state.Body.year)) 
        {
            this.setErrorYear('enter valid year');
            Is_Valid=false;
        }

        if (!validColour(this.state.Body.features[0].exterior_Colour)) 
        {
            this.setErrorExteriorColour('enter valid colour');
            Is_Valid=false;
        }
                
        if (!validColour(this.state.Body.features[0].interior_Colour)) 
        {
            this.setErrorInteriorColour('enter valid colour');
            Is_Valid=false;
        }
         
        if (!validPrice(this.state.Body.features[0].price)) 
        {
            this.setErrorPrice('enter valid price');
            Is_Valid=false;
        }

        if (!validSeater(this.state.Body.features[0].seater)) 
        {
            this.setErrorSeater('enter valid seater');
            Is_Valid=false;
        }

        if (!validEngine(this.state.Body.features[0].engine)) 
        {
            this.setErrorEngine('enter valid engine');
            Is_Valid=false;
        }
        
        return Is_Valid;    
    }

    addCar()
    {
        var processURL = carAPI+this.state.Body.Dealer_ID+'/null/null' ;

        postCall(processURL+this.state.Body.Dealer_ID,this.state.Body)
        .then((response) => {
            
            console.log(response);
            if (response.status==200) 
            {
                alert('Car saved.')
            }
            else 
            {
                alert('Error on process.')      

            }
        })
        .catch(function (error) {
                
            alert('Error on process; details:'+error);
            console.log("Error on process.");
        });
    }

    onSave()
    {
        if(this.doValidation())
        {
            this.addCar();
        }   
    }

    render()
    {
        
        if(this.state.loadingcartype && this.state.loadingcarmakes && this.state.loadingcarmodel && this.state.loadingcarfueltype)
        {
            return(
            
                <div>
                    
                    <div class="row" id="new-emp-caption">
                        <div class="col-sm-12">
                            <span id="spn-caption-profile"> <strong> New Car </strong></span>
                            <hr/>
                        </div>
                    </div>

                    <div class="row panel panel-default" id="div-form-body form-group">
                        <div class="col-sm-6">
                            <div  id="div-car-body" >

                                <div class="row form-group">

                                    <div class="col-sm-4">
                                        <span id="spn-update-label">Model : </span>
                                        <select class="selectpicker form-control" onChange={ this.onModelChange } >
                                            <option value='select'>--SELECT--</option>
                                            {this.state.models.map((model)=>
                                                (<option value={ model._id }>{ model.name }</option>)
                                            )}
                                        </select>
                                    </div>

                                    <div class="col-sm-4">
                                        <span id="spn-update-label">Type : </span>
                                        <select class="selectpicker form-control" onChange={ this.onTypeChange } >    
                                            <option value='select'>--SELECT--</option>
                                            {this.state.types.map((type)=>
                                                <option value={ type._id }>{ type.name }</option>
                                            )}
                                        </select>
                                    </div>

                                </div>

                                <div class="row form-group">
                    
                                    <div class="col-sm-4">
                                        <span id="spn-update-label">Make : </span>
                                        <select class="selectpicker form-control" onChange={ this.onMakeChange } >    
                                            <option value='select'>--SELECT--</option>
                                            {this.state.makes.map((make)=>
                                                <option value={ make._id }>{ make.name }</option>
                                            )}
                                        </select>
                                    </div>

                                    <div class="col-sm-4">
                                        <span id="spn-update-label">Fuel Type : </span>
                                        <select class="selectpicker form-control" onChange={ this.onFuelTypeChange } >   
                                            <option value='select'>--SELECT--</option>
                                            {this.state.fuelmodels.map((fueltype)=>
                                                <option value={ fueltype._id }>{ fueltype.name }</option>
                                            )}
                                        </select>
                                    </div>

                                </div>
                
                                <div class="row form-group">

                                    <div class="col-sm-8">
                                        <span id="spn-update-label">Kilometer</span>
                                        <input type="Number"  class="form-control text" onChange={ this.onKilometerChange } />
                                        <span id='spn-error'>{ this.state.Error.kilometers }</span>
                                    </div>

                                </div>

                                <div class="row form-group">

                                    <div class="col-sm-8">
                                        <span id="spn-update-label">Mileage</span>
                                        <input type="Number"  class="form-control text" onChange={ this.onMileageChange } />
                                        <span id='spn-error'>{ this.state.Error.mileage }</span>
                                    </div>
                                
                                </div>

                                <div class="row form-group">

                                    <div class="col-sm-8">
                                        <span id="spn-update-label">Year</span>
                                        <input type="Number"  class="form-control text" onChange={ this.onYearChange } />
                                        <span id='spn-error'>{ this.state.Error.year }</span>
                                    </div>    

                                </div>
                    
                            </div>
                        </div>

                        <div class="col-sm-6">

                            <div  id="div-car-availability-body" >

                                <div class="row form-group">
                                    <div class="col-sm-4">
                                        <span id="spn-update-label">Exterior Colour : </span>
                                        <input type="text"  class="form-control text" onChange={ this.onExteriorColourChange } />
                                        <span id='spn-error'>{ this.state.Error.exterior_Colour }</span>
                                    </div>

                                    <div class="col-sm-4">
                                        <span id="spn-update-label">Interior Colour : </span>
                                        <input type="text"  class="form-control text" onChange={ this.onInteriorColourChange } />
                                        <span id='spn-error'>{ this.state.Error.interior_Colour }</span>
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-sm-4">
                                        <span id="spn-update-label">Engine : </span>
                                        <input type="text"  class="form-control text" onChange={ this.onEngineChange }/>
                                        <span id='spn-error'>{ this.state.Error.engine }</span>
                                    </div>

                                    <div class="col-sm-4">
                                        <span id="spn-update-label">Seater</span>
                                        <input type="Number"  class="form-control text" onChange={ this.onSeaterChange }/>
                                        <span id='spn-error'>{ this.state.Error.seater }</span>
                                    </div>
                                </div>
                
                                <div class="row form-group">
                                    <div class="col-sm-8">
                                        <span id="spn-update-label">Price</span>
                                        <input type="Number"  class="form-control text" onChange={ this.onPriceChange }/>
                                        <span id='spn-error'>{ this.state.Error.price }</span>
                                    </div>
                                </div>

                                <div class="row form-group">
                                    <div class="col-sm-8">
                                        <span id="spn-update-label"> Features</span>
                                        <div id="car-availability">
                                            <label id="lbl"><input type="checkbox"   onChange={ this.onACChange }/> <span id="input-radio-gender">Ac</span>  </label>  
                                            <label id="lbl"><input type="checkbox"   onChange={ this.onABSChange } /> <span id="input-radio-gender">ABS</span> </label> 
                                            <label id="lbl"><input type="checkbox"    onChange={ this.onEBDChange }/> <span id="input-radio-gender">EBD</span> </label>     
                                        </div>
                                    </div>    
                                </div>

                            </div>


                        </div>

                    </div>
                    <hr/>

                    <div class="row">
                        <div class="col-sm-10">
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
        else
        {
            return null;
        } 
    }
}

export default NewCar;