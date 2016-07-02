import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home';
import Users from './components/Users';
import User from './components/User';
import NotFound from './components/NotFound';

var routes = (
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/users/:userId" component={User} />
      <Route path="*" component={NotFound} />
    </Router>
  </div>
)
ReactDOM.render( routes, document.getElementById('app') );