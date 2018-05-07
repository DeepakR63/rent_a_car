import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { newempURL, newcarURL, cardetailsURL, employeedetailsURL, homeURL } from './../config/config.js';

class SideMenu extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(

            <div id="div-emp-menu">
                 
                  
                    <div id="div-emp-menu-img">
                    {/* <center>   <img src={ this.props.imageURL } class="img-circle" id='img-emp-menu'/>
                        <br/><strong> { this.props.title } </strong></center>
                        <hr/> */}
                        <div class="vertical-menu">
                            <ul class="nav" id="side-bar-menu">
                                
                                <li id="li-dashboard"><Link to={ homeURL } ><img src='./img/dash.png' class="img-circle" id='img-side-menu'/> Dashboard </Link><hr/></li>
                                <li class="dropdown-toggle">
                                    <a  class="dropdown " data-toggle="dropdown" href="#"><img src='./img/emp.png' class="img-circle" id='img-side-menu'/>Employee <span class="caret"/></a>
                                    <ul class="dropdown-menu">
                                        <li><Link to={ newempURL } > Add </Link></li>
                                        <li><Link to={ employeedetailsURL } > View </Link></li>
                                        
                                    </ul><hr/>
                                </li> 
                                <li class="dropdown-toggle">
                                    <a  class="dropdown " data-toggle="dropdown" href="#"><img src='./img/car.png' class="img-circle" id='img-side-menu'/>Car<span class="caret"/></a>
                                    <ul class="dropdown-menu">
                                        <li><Link to={ newcarURL } > Add </Link></li>
                                        <li><Link to={ cardetailsURL } > View </Link></li>
                                        
                                    </ul><hr/>
                                </li>   
                            </ul>
                        </div>
                    </div>                 
            </div>
        )
    }
}

export default SideMenu;