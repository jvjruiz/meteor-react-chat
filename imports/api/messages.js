import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

if(Meteor.isServer) {
	Meteor.publish('Messages', function() {
		return Messages.find({
			
		})
	})
}

Meteor.methods({
	'messages.fetch'(from,to) {
		if(!this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Messages.find({
			from: from, 
			to: to
		})
	},

	'messages.insert'(text, from, to) {
		if(! this.userId) {
			throw new Meteor.Error('not-authorized');
		}

		Messages.insert({
			message: text,
			createdAt: new Date(),
			from: from,
			to: to
		})
	}
})