import React, { Component, PropTypes } from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router'

import {createContainer} from 'meteor/react-meteor-data';

class User extends Component {
	url(){
		return '/chatwindow/' + this.props.currentUser.username + '/' + this.props.user.username
	}

	onClick(event) {
		event.preventDefault()
		
	}

	render() {
		return (
			<li className='user' onClick = {this.onClick}>
				<Link to={this.url()}>
					<button className='user-button'>{this.props.user.username}</button>
				</Link>
			</li>
		)
	}
}

User.propTypes = {
	user: PropTypes.object
}

export default createContainer(() => {
	return {
		currentUser: Meteor.user()
	}
}, User);