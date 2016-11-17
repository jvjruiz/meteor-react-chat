import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import User from './user.jsx'

class UserList extends Component {
	renderUserList() {
		let users = this.props.users;
		return users.map((user) => {
			return (
				<User 
					key={user._id}
					user = {user}
					className = 'user'
				/>
			)
		})
	}

	render() {
		console.log(this.props.users)
		return (
			<div className = 'user-list'>
				<h1>Who would you like to chat with?</h1>
				<ul>
				{this.renderUserList()}
				</ul>
			</div>
		)
	}
}

UserList.propTypes = {
	users:PropTypes.array,
}

export default createContainer(() => {
	Meteor.subscribe('users');

	return {
		users: Meteor.users.find({username: {$ne: 'jayyahh'}}).fetch(),
	}
}, UserList)

