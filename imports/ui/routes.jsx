import React from 'react';
import {Router, Route, browserHistory} from 'react-router'

import App from './App.jsx'
import ChatWindow from './chatwindow.jsx'

export const Routes = () = (
	<Router history={browserHistory}>
		<Route path="/" component={App} />
    <Route path="/chatwindow" component={ChatWindow} />
  </Router>
);
