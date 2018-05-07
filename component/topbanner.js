import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Profile  from './../page/profile.js';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

class TopBanner extends Component
{
    constructor(props)
	{
        super(props);

        this.state={
            isOpen: false
        }

        this.doLogout=this.doLogout.bind(this);
    }

    toggleModal() 
    {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    //Clear the Authentication details from the localstorage.
    doLogout()
    {
        localStorage.setItem('Auth', "");
    }

    render()
    {
        
        if(localStorage.getItem("Auth")==="")
        {
             (this.props.history.push('/'));
        }

        const actions = [
            <FlatButton
              label="Close"
              primary={true}
              onClick={this.toggleModal.bind(this)}
            />
        ];
        
        return(
            <div>
            <nav class="navbar navbar-inverse" id="div-top-banner">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Car-Port</a>
              </div>
              <ul class="nav navbar-nav navbar-right" id="top-menu-id">
                <li><a onClick={this.toggleModal.bind(this)}><span class="glyphicon glyphicon-user"></span> Profile</a></li>
                <li><Link to='/' onClick={ this.doLogout }><span class="glyphicon glyphicon-log-out"></span>Signout</Link></li>
              </ul>
            </div>
          </nav>
          
          <Dialog
          title="Profile"
          modal={false}
          open={this.state.isOpen}
          actions={actions}
          onRequestClose={this.toggleModal.bind(this)}
        >
        <hr/>
          <Profile/>
        </Dialog>
        </div>
        )
    }
}



export default withRouter(TopBanner);