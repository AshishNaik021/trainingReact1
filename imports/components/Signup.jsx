import React, {Component} from 'react';


export default class Signup extends Component{

	handleSubmit(event){
		event.preventDefault();


		var firstName 	= this.refs.firstName.value;
		var lastName 	= this.refs.lastName.value;
		var mobileNum 	= this.refs.mobileNum.value;
		var emailId 	= this.refs.email.value;
		var password1 	= this.refs.password1.value;
		var password2 	= this.refs.password2.value;


		if(emailId.length > 0 && emailId != ''){
			if(password1 == password2){				
				Accounts.createUser({
					"email"		: emailId,
					"password"	: password1,
					"profile" 	: {
						"firstName" : firstName,
						"lastName" 	: lastName,
						"mobileNum" : mobileNum,
					}
				}, function(error,result){
					if(error){
						Bert.alert('Some error occurred... Account not Created :-(  ','danger', 'growl-top-right');
					}else{
						Bert.alert('Account Created Successfully!','success','growl-top-right');
						FlowRouter.go("/login");
					}
				});

			}else{
				Bert.alert('Passwords are not matching!','danger', 'growl-top-right');
			}


		}else{
			Bert.alert('Email Id is missing!','danger', 'growl-top-right');
		}

		


	}


	render(){
		return(
			<div className="col-lg-12 pageWrapper">
				<form className="col-lg-6 col-lg-offset-3 signupForm">	
					<div className="col-lg-12 pageTitle row">
						<h3> Create New Account </h3>
					</div>

					<div className="col-lg-5 col-lg-offset-1 inpField">
						<label> First Name </label>
						<input className="col-lg-12" ref="firstName" />
					</div>
					<div className="col-lg-5 inpField">
						<label> Last Name </label>
						<input className="col-lg-12" ref="lastName" />
					</div>

					<div className="col-lg-10 col-lg-offset-1 inpField">
						<label> Mobile Number </label>
						<input className="col-lg-12" ref="mobileNum" />
					</div>

					<div className="col-lg-10 col-lg-offset-1 inpField">
						<label> Email ID </label>
						<input type="email" className="col-lg-12" ref="email" />
					</div>

					<div className="col-lg-10 col-lg-offset-1 inpField">
						<label> Password </label>
						<input type="password" className="col-lg-12" ref="password1" />
					</div>
					<div className="col-lg-10 col-lg-offset-1 inpField">
						<label> Confirm Password </label>
						<input type="password" className="col-lg-12" ref="password2" />
					</div>

					<div className="col-lg-10 col-lg-offset-1 inpField">
						<button type="submit" className="col-lg-4 col-lg-offset-4 btn btn-success" 
							    onClick={this.handleSubmit.bind(this)}>
							Sign Up
						</button>
					</div>


				</form>
			</div>
		);
	}
}