if(Meteor.isServer){
	Meteor.publish("loggedInUserData", function(userId){
		return Meteor.users.find({'_id':userId});
	})
}