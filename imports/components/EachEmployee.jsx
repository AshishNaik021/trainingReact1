import React from 'react';

export default class EachEmployee extends React.Component{

	//--- events ---
	deleteEmp(emp_id, event){
		event.preventDefault();

		Meteor.call('deleteEmployee', emp_id, 
			(error,result)=>{
				if(error){
					Bert.alert("Sorry... Some error occured while deleting this employee!", "danger", "growl-top-right");
				}else{
					Bert.alert("Congrats! One employee got deleted!", "success", "growl-top-right");
				}
			}
		);
	}

	updateEmployee(emp_id, event){
		event.preventDefault();		

		emp_id = event.target.id;
		Session.set('emp_id', emp_id);
		
	}

	//--- html ---
	render(){
		return(
			<li>
				<div className="col-lg-12">
					<div className="col-lg-8">
						{this.props.emp.employeeName}
					</div>
					<div className="col-lg-1">
						<i className="fa fa-pencil-square-o" id={this.props.emp._id} aria-hidden="true" onClick={this.updateEmployee.bind(this,  this.props.emp._id)}></i>
					</div>
					<div className="col-lg-1">
						<i className="fa fa-trash" id={this.props.emp._id} aria-hidden="true" onClick={this.deleteEmp.bind(this, this.props.emp._id)}></i>
					</div>
				</div>
			</li>
		);
	}

}