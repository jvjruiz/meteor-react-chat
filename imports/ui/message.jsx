import React, { Component, PropTypes } from 'react';
import {Meteor} from 'meteor/meteor';

export default class Message extends Component {

	render() {
		return (
			<li className = 'message'>
				<span className = 'messageText'>
					<strong>{this.props.message.from}</strong>: {this.props.message.message}
				</span>
			</li>
		);
	}
}

Message.propTypes = {
	message: PropTypes.object
}