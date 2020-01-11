import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import Login from './Login';
import Debits from './Debit.js';
import Credits from './Credit.js';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
  	super();
  	this.state = {
        currentUser: {
          userName: "j'acruse",
          memberSince: '10/10/10',
          credit:0,
          debit:0
        },
        debits:[],
        credits:[]
  	}
  }
  mockLogin = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  accountBalance = () => {
    let creditTotal = 0
    let debitTotal = 0
    for (let i = 0; i < this.state.credits.length; i++) {
      creditTotal += this.state.credits[i].amount
    }
    for (let i = 0; i < this.state.debits.length; i++) {
      debitTotal += this.state.debits[i].amount
    }
    return creditTotal - debitTotal;
  }

  async componentDidMount(){
    const debitEndpoint = 'https://moj-api.herokuapp.com/debits'
    const creditEndpoint = 'https://moj-api.herokuapp.com/credits'
    const debits = await axios.get(debitEndpoint)
    const credits = await axios.get(creditEndpoint)
    this.setState({debits:debits.data, credits:credits.data})
  }

    render() {
	const HomeComponent = () => (<Home accountBalance={this.accountBalance()}/>);
	const UserProfileComponent = () => (
		<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
	);
	const LoginComponent = () => (<Login user={this.state.currentUser} mockLogin={this.mockLogin} {...this.props}/>);
	const DebitsComponent = () => (<Debits accountBalance={this.accountBalance()} debits={this.state.debits}/>);
	const CreditsComponent = () => (<Credits accountBalance={this.accountBalance()} credits={this.state.credits}/>);
	return (
  		<Router>
    		<div>
      		<Route exact path="/" render={HomeComponent}/>
		<Route exact path="/UserProfile" render={UserProfileComponent}/>
		<Route exact path="/login" render={LoginComponent}/>
		<Route exact path="/Debits" render={DebitsComponent}/>
		<Route exact path="/Credits" render={CreditsComponent}/>
    		</div>
  		</Router>
      );
  }
}

export default App;
