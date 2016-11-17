import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

//import api stuff here

//import components here
import AccountsUIWrapper from './AccountsUIWrapper.js';
import ChatWindow from './chatwindow.jsx'
import UserList from './userlist.jsx'

export default class App extends Component {

	render() {
		return (
			<div>	
			<AccountsUIWrapper />
      		<UserList />
      		</div>
		)
	}

}