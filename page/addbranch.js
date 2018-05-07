import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  TopBanner  from './../component/topbanner.js';
import  BranchMenu  from './../component/branchmenu.js';

export default class NewBranch extends Component
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
                            <BranchMenu/>
                            <br/>
                        </div>
                        <div class="col-sm-10">
                            <AddBranch/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class AddBranch extends  Component
{
    render()
    {
        return(
            <div>
                
                <div class="row" id="new-emp-caption">
                    <div class="col-sm-12">
                        <span> <strong> New Employee </strong></span>
                        <hr/>
                    </div>
                </div>
                <div  id="div-emp-body">
                <div class="row form-group">
                        <div class="col-sm-4">
                        <span id="spn-update-label">Name : </span><input type="text" placeholder="name" class="form-control text"  />
                            <br />
                            <span id='spn-error'></span>
                        </div>
                        <div class="col-sm-4">
                        <span id="spn-update-label">Role : </span>
                            <select class="selectpicker form-control">
                                
                                <option value="manager">Manager</option>
                                <option value="salesman">Salesman</option>
                            </select>
                            <br />
                            <span id='spn-error'></span>
                        </div>
                </div>
                <div class="row form-group">
                
                        <div class="col-sm-8">
                        <span id="spn-update-label">Gender </span>
                            <label id="lbl"><input type="radio" value="Male" name="gender" /> <span id="input-radio-gender">Male</span>  </label>  
                            <label id="lbl"><input type="radio" value="Female" name="gender" /> <span id="input-radio-gender">Female</span> </label>   
                        </div>
                </div>
               
                <div class="row form-group">
                        <div class="col-sm-8">
                        <span id="spn-update-label">Address</span>
                            <textarea  placeholder="address" class="form-control text" row="5"/>
                            <br />
                            <span id='spn-error'></span>
                        </div>
                </div>
                <div class="row form-group">
                        <div class="col-sm-4">
                        <span id="spn-update-label">Dob : </span><input type="date"  class="form-control"/>    
                        </div>
                
                
                        <div class="col-sm-4">
                        <span id="spn-update-label">Doj : </span><input type="date"  class="form-control"/>    
                        </div>
                </div>
                <div class="row form-group">
                <div class="col-sm-4">
                            <span>Dealer</span>
                        
                            <select class="selectpicker form-control">
                                <option value="manager">Manager</option>
                                <option value="salesman">Salesman</option>
                            </select>
                            <br />
                            <span id='spn-error'></span>
                    </div> 
                    <div class="col-sm-4">
                            <span>Branch</span>
                        
                            <select class="selectpicker form-control">
                                <option value="manager">Manager</option>
                                <option value="salesman">Salesman</option>
                            </select>
                            <br />
                            <span id='spn-error'></span>
                    </div>    
                </div>
                <div class="row form-group">
                        <div class="col-sm-4">
                            <span>Email</span>
                            <input type="text" placeholder="email" class="form-control text" />
                            <br />
                            <span id='spn-error'></span>
                        </div>
                        <div class="col-sm-4">
                            <span>Mobile</span>
                            <input type="Number" placeholder="mobile" class="form-control text" />
                            <br />
                            <span id='spn-error'></span>
                        </div>
                </div>
            </div>
            <hr/>
            <div class="row">
            <div class="col-sm-8">
                    
                </div>
                <div class="col-sm-2">
                    <button class="btn btn-primary" id="btn-save">Save</button>
                </div>
            </div>
            <br/>
            <br/>
            </div>
        )
    }
}