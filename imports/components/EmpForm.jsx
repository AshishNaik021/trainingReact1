import React from 'react';
import { EmployeeMaster } from '/imports/api/employeeMaster.js';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import EachEmployee from '/imports/components/EachEmployee.jsx';

export default class EmpForm extends TrackerReact(React.Component){
	//--- Constructor ---
	constructor(){
		super();
		this.state = {
			subscription : {
				'empData' : Meteor.subscribe("allEmployeesData"),
			},
			"empName" : Session.get("emp_id"),
		}

		// var emp_id = ;
		// 	console.log("session = " + emp_id);			
		// if(emp_id){
		// 	this.setState({"empName" : "Ashish Naik 1"});
		// 	console.log("state changed " + this.state.empName);
		// }

	}

	//--- Helper ---
	getEmployeeData(){
		return EmployeeMaster.find({},{sort: {"createdAt" : -1} }).fetch();
	}



	//--- Events ---
	handleSubmit(event){
		event.preventDefault();

		var empName = this.refs.employeeName.value;

		Meteor.call('insertEmpMaster', empName, 
			(error,result) => {
				if(error){
					Bert.alert("Sorry! Data insert FAILED!!!","danger",'growl-top-right');
				}else{
					Bert.alert("Data inserted Successfully","success",'growl-top-right');
					this.refs.employeeName.value = '';
				}
			}
		);

	}




	//--- Lifecycle functions







	//--- HTML ---

	render(){		


		return(
			<div className="empFormWrapper col-lg-10 col-lg-offset-1">
				<form className="empForm col-lg-12">
					<div className="col-lg-10 col-lg-offset-1">
						<label> Employee Name </label>
						<input className="col-lg-12" ref="employeeName" value={this.state.empName}/>
					</div>
					<div className="col-lg-10 col-lg-offset-1">
						<label> Mobile Number </label>
						<input className="col-lg-12" ref="mobileNumber" />
					</div>
					<div className="col-lg-5 col-lg-offset-1">
						<label> Date of Birth </label>
						<input type="date" className="col-lg-12" ref="dob" />
					</div>
					<div className="col-lg-5 col-lg-offset-1">
						<label className="col-lg-12"> Gender </label>
						<div className="col-lg-6">
							<input type="radio" className="col-lg-6" name="gender" ref="gender" value="M" /> M 
						</div>
						<div className="col-lg-6">
							<input type="radio" className="col-lg-6" name="gender" ref="gender" value="F" /> F
						</div>
					</div>
					<div className="col-lg-10 col-lg-offset-1">
						<label> Department  </label>
						<select className="col-lg-12" ref="dob">
							<option> Finance </option>
							<option> Marketing </option>
							<option> Quality </option>
							<option> Production </option>
							<option> HR </option>
							<option> IT </option>
						</select>
					</div>
					<div className="col-lg-12 buttonDiv">
						<button className="col-lg-4 col-lg-offset-4 btn btn-primary" onClick={this.handleSubmit.bind(this)}>
							Click Here To Submit
						</button>
					</div>
				</form> 
				<br /> 

				<div className="empForm col-lg-12">
					<h3 className="col-lg-6 col-lg-offset-4"> List of all Employees </h3>
					<br /><br />
					<ul>
						{this.getEmployeeData().map( 
							(oneEmp) => {
								return <EachEmployee key={oneEmp._id} emp={oneEmp} />							
							}
						)}
					</ul>
				</div>	
			</div>
		)
	}

}