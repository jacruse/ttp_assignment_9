import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component{
  render(){
    return (
            <div>
	    <h1>User Profile</h1>

	     <div className="navbar">
	     <Link to="/">Home</Link>
             <Link to="/UserProfile">User Profile</Link>
	     <Link to="/Debits">Debits</Link>
	     <Link to="/Credits">Credits</Link>
	     </div>
	
	    <br/>
            <div className="container">
	    <b>Username: </b>{this.props.userName}<br/>
            <b>Member Since: </b>{this.props.memberSince}
	</div>
        </div>
    );
  }
}

export default UserProfile;
