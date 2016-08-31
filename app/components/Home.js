import React from 'react';
import HeaderArea from './HeaderArea';

var Home = React.createClass({
  render: function() {
    return (
      <div className="app-wrapper">
        <HeaderArea />
        <h1>Homes!5</h1>
      </div>
    );
  }
});

export default Home;