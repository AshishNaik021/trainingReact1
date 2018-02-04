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
				'empData' : Meteor.subscribe('allEmployeeData'),
			}
		}
	}

	//--- Helper ---
	getEmpData(){
		return EmployeeMaster.find({}).fetch();
	}


	//--- Events ---
	handleSubmit(event){
		event.preventDefault();
		var empName = this.refs.employeeName.value;

		Meteor.call('insertEmpMaster', empName);

	}


	//--- Lifecycle functions



	//--- HTML ---

	render(){
		let emps = this.getEmpData();
		// console.log(this.getEmpData());
		if(emps.length < 1){
			return (<div> Loading ... </div>)
		}
		

		return(
			<div className="empFormWrapper col-lg-10 col-lg-offset-1">
				<form className="empForm col-lg-12" onSubmit={this.handleSubmit.bind(this)}>
					<div className="col-lg-10 col-lg-offset-1">
						<label> Employee Name </label>
						<input className="col-lg-12" ref="employeeName" />
					</div>
				</form>
				
				<br/>

				<h3> Employee List </h3>
				<ul>
					{this.getEmpData().map( 
						(oneEmp)=>{
							return <EachEmployee key={oneEmp._id} empData={oneEmp} />
						}
					)}
				</ul>
			</div>
		)
	}

}