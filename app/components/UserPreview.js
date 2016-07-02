import React from 'react';
import { Link } from 'react-router';

var UserPreview = React.createClass({
  render: function() {
    return (
      <article>
        <Link to={ '/users/' + this.props.details.driverId }>
          {this.props.details.givenName} {this.props.details.familyName}
        </Link>
      </article>
    );
  }
});

export default UserPreview;