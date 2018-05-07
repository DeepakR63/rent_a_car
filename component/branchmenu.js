import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { newbranchURL } from './../config/config.js';

class BranchMenu extends Component
{
    render()
    {
        return(
            
            <div id="div-emp-menu">
                 
                <center>   
                    <div id="div-emp-menu-img">
                        <img src='./img/branchicon.png' class="img-circle" id='img-emp-menu'/>
                        <br/> <strong> Brach </strong>
                        <hr/>
                        <div class="vertical-menu">
                            <Link to={ newbranchURL }>New Details</Link>
                            <Link to={ newbranchURL }>View Details</Link>
                        </div>
                    </div>
                </center>

            </div>
        )
    }
}

export default BranchMenu;