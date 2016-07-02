import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import Users from './components/Users';
import NotFound from './components/NotFound';

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="*" component={NotFound} />
    </Router>
)
ReactDOM.render( routes, document.getElementById('app') );