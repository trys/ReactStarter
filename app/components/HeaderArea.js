import React from 'react';
import { Link } from 'react-router';

var HeaderArea = React.createClass({
  render: function() {
    return (
      <header>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </header>
    );
  }
});

export default HeaderArea;