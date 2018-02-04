import React, {Component} from 'react';
import { EmployeeMaster } from '/imports/api/employeeMaster.js';
import { withTracker } from 'meteor/react-meteor-data';
import EachEmployee from '/imports/components/EachEmployee.jsx';

class EmpForm2 extends Component{
	//--- Constructor ---
	constructor(){
		super();
		this.state = {
			"empId" : "",
			"empName" : "",

		}

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

	editEmp(event){
		event.preventDefault();

		var editEmpId = event.target.id;

		var oneEmployee = EmployeeMaster.findOne({"_id": editEmpId});
		console.log(oneEmployee);

		this.setState({
			"empId"  : oneEmployee._id,
			"empName": oneEmployee.employeeName,
		});
	}


	handleChange(event){
		event.preventDefault();
		// console.log('value = ' + this.refs.empId.value);

		var empId 	= this.refs.empId.value;
		var empName = this.refs.employeeName.value;

		this.setState({
			"empId"  : empId,
			"empName": empName,
		});

		// console.log("new = " + this.state.empId);
	}

	//--- Lifecycle functions







	//--- HTML ---

	render(){		

		const { empList } = this.props;

		return(
			<div className="empFormWrapper col-lg-10 col-lg-offset-1">
				<form className="empForm col-lg-12">
					<input type="hidden" value={this.state.empId} ref="empId" />
					<div className="col-lg-10 col-lg-offset-1">
						<label> Employee Name </label>
						<input className="col-lg-12" ref="employeeName" 
							   value={this.state.empName}
							   onChange={this.handleChange.bind(this)}
							   />
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
						{empList.map( 
							(oneEmp) => {
								return (<li className="col-lg-12" key={oneEmp._id}> 
									{oneEmp.employeeName}  &nbsp; &nbsp;
									<span id={oneEmp._id} className="edit" onClick={this.editEmp.bind(this)}> edit </span>
								 </li>)						
							}
						)}
					</ul>
				</div>	
			</div>
		)
	}

}


export default withTracker(props=>{
	const handle = Meteor.subscribe('allEmployeesData');

	return{
		loading: !handle.ready(),
		empList: EmployeeMaster.find().fetch(),
	}
})(EmpForm2);












