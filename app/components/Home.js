import React from 'react';
import HeaderArea from './HeaderArea';

var Home = React.createClass({
  render: function() {
    return (
      <div className="app-wrapper">
        <h1>Home</h1>
        <HeaderArea />
      </div>
    );
  }
});

export default Home;