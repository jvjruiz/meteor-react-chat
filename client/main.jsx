import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx'
import ChatWindow from '../imports/ui/chatwindow.jsx'


Meteor.startup(() => {
	render(
		<Router history={browserHistory}>
			<Route path ='/' component={App} />
    		<Route path="/chatwindow/:currentuser/:receivinguser" component={ChatWindow} />
  		</Router>, 
  		document.getElementById('render-target')
  	);
});