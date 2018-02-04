
export const EmployeeMaster = new Mongo.Collection("employeeMaster");

if(Meteor.isServer){
	Meteor.publish("allEmployeesData", function(){
		return EmployeeMaster.find({});
	});
}

Meteor.methods({

	insertEmpMaster(empName){
		EmployeeMaster.insert({
			"employeeName" 	: empName,
			"createdAt" 	: new Date(),
		}, function(error,result){
			if(error){
				return error;
			}else{
				return result;
			}
		}
		);
	},

	updateEmpMaster(empId, empName){
		EmployeeMaster.update(
			{"_id": empId},
			{$set: 
				{
					"employeeName" 	: empName,
					"createdAt" 	: new Date(),
				}
			}
			, function(error,result){
				if(error){
					return error;
				}else{
					return result;
				}
		});
	},

	deleteEmployee(emp_id){
		EmployeeMaster.remove({"_id":emp_id},
			function(error,result){
				if(error){
					return error;
				}else{
					return result;
				}
			}
		);
	},

});