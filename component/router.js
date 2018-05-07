import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import  Login  from './../page/login.js';
import  DashBoard  from './../page/dashboard.js';
import  NewEmployee  from './../page/addemployee.js';
import  NewBranch  from './../page/addbranch.js';
import  NewCar  from './../page/addcar.js';
import  EmployeeDetails  from './../page/viewemployee.js';
import Profile from './../page/profile.js'
import  CarDetails  from './../page/viewcar.js';
import { 

	loginURL,
	homeURL, 
	newempURL, 
	newcarURL, 
	newbranchURL, 
	employeedetailsURL, 
	cardetailsURL, 
	profileURL 

} from './../config/config.js';

class App extends Component 
{
	render() 
	{
		return(
			<MuiThemeProvider>
				<BrowserRouter>
					<div>
						
						<Route
							exact
							path={ loginURL }
							component={ Login }
						/>

						<Route
							exact
							path={ homeURL }
							component={ DashBoard }
						/>

						<Route
							exact
							path={ newempURL }
							component={ NewEmployee }
						/>

						<Route
							exact
							path={ newbranchURL }
							component={ NewBranch }
						/>

						<Route
							exact
							path={ newcarURL }
							component={ NewCar }
						/>

						<Route
							exact
							path={ employeedetailsURL }
							component={ EmployeeDetails }
						/>

						<Route
							exact
							path={ cardetailsURL }
							component={ CarDetails }
						/>

						<Route
							exact
							path={ profileURL }
							component={ Profile }
						/>

					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		)
	}
}

export default App;