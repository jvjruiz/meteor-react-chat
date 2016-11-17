import React, { Component, PropTypes } from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router'

export default class User extends Component {

	onClick(event) {
		event.preventDefault()
		
	}

	render() {
		return (
			<li className='user' onClick = {this.onClick}>
				<Link to='/chatwindow/jayyahh/matcodes'>
					<button>{this.props.user.username}</button>
				</Link>
			</li>
		)
	}
}

User.propTypes = {
	user: PropTypes.object
}

