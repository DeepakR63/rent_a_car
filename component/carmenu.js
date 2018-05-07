import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { newcarURL, cardetailsURL, homeURL  } from './../config/config.js';

class CarMenu extends Component
{
    render()
    {
        return(
            <div id="div-emp-menu">
                 
                <center>   
                    <div id="div-emp-menu-img">
                        <img src='./img/caricon.png' class="img-circle" id='img-emp-menu'/>
                        <br/><strong> Car </strong>
                        <hr/>
                        <div class="vertical-menu">
                            <ul class="nav navbar-nav navbar-right" >
                      
                                <li class="dropdown-toggle">
                                    <a  class="dropdown " data-toggle="dropdown" href="#">Employee</a>
                                    <ul class="dropdown-menu">
                                        <li><Link to="/newemployee" > New </Link></li>
                                        <li><Link to="/car" > List </Link></li>
                                        <li><Link to="/" onClick={ this.doLogout }><img src='./img/user.png' id='img-user-menu'/> SignOut </Link></li>
                          </ul>
                      </li>    
                  </ul>


                            <Link to={ homeURL }> Dashboard </Link>
                            <Link to={ newcarURL }> New Car </Link>
                            <Link to={ cardetailsURL }> View Details </Link>
                        </div>
                    </div>
                </center>
                    
            </div>
        )
    }
}

export default CarMenu;