import React from 'react';
import HeaderArea from './HeaderArea';

var User = React.createClass({

  getInitialState: function() {
    return {
      driver: {}
    }
  },

  componentDidMount: function() {
    fetch('../../data/drivers.json')
      .then(response => response.json())
      .then(body => {
        var users = body.MRData.DriverTable.Drivers;
        for (var i = 0; i < users.length; i++) {
          if ( users[i].driverId === this.props.params.userId ) {
            this.setState({
              driver: users[i]
            });
          }
        }
      });
  },

  render: function() {
    return (
      <article>
        <HeaderArea />
        <h1>{this.state.driver.givenName} {this.state.driver.familyName}</h1>
      </article>
    );
  }
});

export default User;