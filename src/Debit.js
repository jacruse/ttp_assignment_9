import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Debits extends Component {
    constructor(props){
	super(props)
	this.state = {
	    description: '',
	    amount: '',
	    debits: []
	};
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
	let newSubmission = {
	    decription: this.state.description,
	    amount: this.state.amount,
	    date: {dateTime}
	};
	this.state.debits.push(newSubmission);
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
    
    display() {
	if(this.props.debits.length === 0){
	    return null;
	}
	else {
	    let items = this.props.debits.map( (element) => {
		return (
			<div key={element} className="container">
			Debit Description: {element.description}<br/>
			Debit amount: {element.amount}<br/>
			Debit date: {element.date}<br/>
			</div>
		);
	    });
	    return items;
	}
    }

    render() {
	return(
		<div>
		<h1>Debits</h1>
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

export default Debits;
