import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          <b>Balance: </b>{this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;
