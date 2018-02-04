import React, {Component} from 'react';
import {EmployeeMaster} from '/imports/api/employeeMaster.js';
import {withTracker} from 'meteor/react-meteor-data';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class EmpInduction extends Component{

	constructor(){
		super();

		this.state = {
			"totalEmp" : 0,
			"empId"   : "",
			"empName" : "",
			"mobileNum" : "",
		}

	}

	getEmployeeData(){
		return EmployeeMaster.find({}).fetch();
	}

	handleChange(event){
		event.preventDefault();
		var newEmpName = this.refs.empName.value;
		this.setState({
			"empName" : newEmpName,
		});

		// Meteor.call('insertEmpMaster', empName, 
		// 	(error,result) => {
		// 		if(error){
		// 			Bert.alert("Sorry! Data insert FAILED!!!","danger",'growl-top-right');
		// 		}else{
		// 			Bert.alert("Data inserted Successfully","success",'growl-top-right');
		// 			this.refs.employeeName.value = '';
		// 		}
		// 	}
		// );

	}

	handleSubmit(event){
		event.preventDefault();
		var newEmpName = this.refs.empName.value;
		var newEmpId = this.refs.empId.value;

		if(this.state.action == "Insert"){
			Meteor.call('insertEmpMaster', newEmpName, 
				(error,result) => {
					if(error){
						Bert.alert("Sorry! Data insert FAILED!!!","danger",'growl-top-right');
					}else{
						Bert.alert("Data inserted Successfully","success",'growl-top-right');
						this.setState({empName : ''});
					}
				}
			);			
		}else{

			Meteor.call('updateEmpMaster', newEmpId, newEmpName, 
				(error,result) => {
					if(error){
						Bert.alert("Sorry! Data Update FAILED!!!","danger",'growl-top-right');
					}else{
						Bert.alert("Data Updated Successfully","success",'growl-top-right');
						this.setState({empId:"", empName:""});
					}
				}
			);						
		}


	}

	handleEdit(event){
		event.preventDefault();
		var empId = event.target.id;
		var editEmpData = EmployeeMaster.findOne({"_id":empId});

		this.setState({
			"empId"   : empId,
			"empName" : editEmpData.employeeName,
		});

		// console.log("editEmpData = " + JSON.stringify(editEmpData,null,4));


	}

	render(){
		if(this.state.empId == ""){
			var buttonText = "Submit";
		}else{
			var buttonText = "Update";
		}
		return(
			<div className="col-lg-12 pageWrapper2">
				<div className="col-lg-5 col-lg-offset-1">
					<div className="col-lg-12 mainBlock">
						<form className="col-lg-12 empForm">
							<input value={this.state.empId} type="hidden" ref="empId" />
							<div className="col-lg-12">
								<label className="col-lg-12"> Employee Name </label>
								<input className="col-lg-12" type="text" ref="empName" 
									   value={this.state.empName}
									   onChange={this.handleChange.bind(this)}
								/>
							</div>
							<div className="col-lg-12">
								<label className="col-lg-12"> Mobile Number </label>
								<input className="col-lg-12" type="text" ref="mobileNum" value={this.state.mobileNum} />
							</div>
							<button className="col-lg-4 col-lg-offset-4 btn btn-primary myButton"
									onClick={this.handleSubmit.bind(this)}
							>
								{buttonText}
								
							</button>
								
						</form>
					</div>
				</div>
				<div className="col-lg-5">
					<div className="col-lg-12 mainBlock">
						<span className="myText"> You have total {this.state.numberOfClicks} employees</span>
						<br />
							<h3> Employee List </h3>
							<ul>
								{this.getEmployeeData().map(
									(oneEmp)=>{
										return (<li key={oneEmp._id}>{oneEmp.employeeName} 
													<span id={oneEmp._id} className="edit pull-right" onClick={this.handleEdit.bind(this)}> edit </span> 
												</li> );
									}
								)}
							</ul>
					</div>
				</div>
			</div>
		);
	}

}


export default withTracker(props => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted
  const handle = Meteor.subscribe('allEmployeesData');

  return {
    "loading"			: !handle.ready(),
    "allEmployeesData"	: EmployeeMaster.find({}).fetch(),
  };
})(EmpInduction);