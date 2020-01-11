import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Credits extends Component {
    constructor(props){
	super(props);
	this.state = {
	    description: '',
	    amount: ''
	};
    }
    
    display() {
	if(this.props.credits.length === 0){
	    return null;
	}
	else {
	    let items = this.props.credits.map( (element) => {
		return (
			<div key={element} className="container">
			Credit Description: {element.description}<br/>
			Credit amount: {element.amount}<br/>
			Credit date: {element.date}<br/>
			</div>
		);
	    });
	    return items;
	}
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value});
    }

    handleAmountChange = (event) => {
        this.setState({amount: event.target.value });
    }

    save = (event) => {
	var today = new Date();
	var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	var dateTime = date+time;
    }

    form() {
        return (
                <form onSubmit={this.save}>
                <label>
                Description:
                <input type="text" value={this.state.description} onChange={this.handleDescriptionChange} name="first_name" />
                </label>

                <label>
                Amount:
                <input type="text" value={this.state.amount} onChange={this.handleAmountChange} name="last_name" />
                </label>
                <input type="submit" value="save" />
                </form>

        );
    }
    render() {
      return(<div>
      	     <h1>Credits</h1>

	     <div className="navbar">
	     <Link to="/">Home</Link>
             <Link to="/UserProfile">User Profile</Link>
	     <Link to="/Debits">Debits</Link>
	     <Link to="/Credits">Credits</Link>
	     </div>

	     <div className="container">
	     {this.form()}
	    </div>

	     <div className="container">
      	     <AccountBalance accountBalance={this.props.accountBalance}/>
	     </div>
	     
          {this.display()}
      	     </div>);
    }
}

export default Credits;
