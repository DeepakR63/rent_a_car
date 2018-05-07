import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { newempURL, employeedetailsURL, homeURL } from './../config/config.js';

class EmployeeMenu extends Component
{
    render()
    {
        return(

            <div id="div-emp-menu">
                 
                <center>   
                    <div id="div-emp-menu-img">
                        <img src='./img/empicon.png' class="img-circle" id='img-emp-menu'/>
                        <br/><strong> Employee </strong>
                        <hr/>
                        <div class="vertical-menu">
                        <Link to={ homeURL }> Dashboard </Link>
                            <Link to={ newempURL }>New Employee</Link>
                            <Link to={ employeedetailsURL }>View Details</Link>
                        </div>
                    </div>
                </center>
                         
            </div>
        )
    }
}

export default EmployeeMenu;