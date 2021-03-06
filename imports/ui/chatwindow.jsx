import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {Link} from 'react-router';

import {Messages} from '../api/messages.js'

//import components here
import Message from './message.jsx'

//Chatwindow component

class ChatWindow extends Component {

	componentDidUpdate() {
    const receivingUser = this.props.params.receivingUser
    const objDiv = document.getElementById('message-box');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  onSubmit(event) {
		event.preventDefault();
		const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    const userTo = this.props.params.receivinguser
    const userFrom = this.props.currentUser.username
		Meteor.call('messages.insert',text,userFrom,userTo)
		ReactDOM.findDOMNode(this.refs.textInput).value = ''
	}

	renderMessages() {
		let messages = this.props.messages;
		return messages.map((message, i) => {
			return (
				<Message
          className = 'message-text' 
					key={message._id}
					message = {message}
				/>
			);
		});
	};

	render() {
    return (
      <div className = 'chat-window'>
        <div className = 'chat-window-header'>
          <Link to ='/'>
            <h1 className = 'back-button'>←</h1>
          </Link>
          <h1 className ='chat-name-display'> Chat between {this.props.params.currentuser} and {this.props.params.receivinguser}</h1>
        </div>
        <div id = 'message-box'>
          {this.renderMessages()}
        </div>
        {this.props.currentUser ?
          <form className = 'input-box' onSubmit={this.onSubmit.bind(this)} >
            <input className = 'input-text' type='text' ref = 'textInput' placeholder='Type out message here' />
            <input className = 'submit-button' type='submit' />
          </form> : ''
        }
      </div>
    )
  }
}

ChatWindow.propTypes = {
  messages: PropTypes.array,
  currentUser: PropTypes.object
}

export default createContainer(({params}) => {
  Meteor.subscribe('Messages');
  return {
    currentUser: Meteor.user(),
    messages: Messages.find({
      $or: [
        {from: params.currentuser, to: params.receivinguser}, 
        {from:params.receivinguser, to: params.currentuser}
        ]
      })
    .fetch()
  }
}, ChatWindow)
