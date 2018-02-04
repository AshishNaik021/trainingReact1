
export const MatchMakerMaster = new Mongo.Collection('matchMakerMaster');

if(Meteor.isServer){

	Meteor.publish("matchMakerData", function(){
		return MatchMakerMaster.find({});
	});
	
}


Meteor.methods({
	'insertMatchMakerMaster' : function(formValues){
		MatchMakerMaster.insert({
			"fullName" 		: formValues.fullName,
			"height" 		: formValues.height,
			"weight" 		: formValues.weight,
			"dob" 			: formValues.dob,
			"qual" 			: formValues.qual,
			"occupation" 	: formValues.occupation,
			"liking" 		: formValues.liking,
			"foodHabits" 	: formValues.foodHabits,			
		}, function(error,result){
			if(error){
				return error;
			}else{
				return result;
			}
		});
	},



});