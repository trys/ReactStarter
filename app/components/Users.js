import React from 'react';
import HeaderArea from './HeaderArea';
import UserPreview from './UserPreview';
import 'whatwg-fetch';

var Users = React.createClass({

  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    fetch('../../data/drivers.json')
      .then(response => response.json())
      .then(body => {
        this.setState({
          users: body.MRData.DriverTable.Drivers
        });
      });
  },

  renderUser: function(key) {
    return <UserPreview key={key} index={key} details={this.state.users[key]} />;
  },

  render: function() {
    return (
      <div className="app-wrapper">
        <HeaderArea />
        <h1>Users</h1>
        <div className="users">
          {Object.keys(this.state.users).map(this.renderUser)}
        </div>
      </div>
    );
  }

});

export default Users;