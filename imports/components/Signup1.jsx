import React from 'react';

export default class Signup extends React.Component{

	//--- Events ---
	handleSubmit(event){
		event.preventDefault();

		$('#signupForm').validate();

		var firstName 	 = this.refs.firstName.value;
		var lastName 	 = this.refs.lastName.value;
		var mobileNumber = this.refs.mobileNumber.value;
		var emailidId 	 = this.refs.emailid.value;
		var password1 	 = this.refs.password1.value;
		var password2 	 = this.refs.password2.value;

		if(password1 == password2){
			Accounts.createUser({
		        email: emailidId,
		        password: password1,
		        profile :{
			        "firstName" 	: firstName,
			        "lastName"		: lastName,
			        "mobileNumber"	: mobileNumber
		        }
		    }, function (error) {
		        if (error) {
		          Bert.alert('Account creation failed for unknown reasons :(', 'danger','growl-top-right');
		        } else {
		          Bert.alert('Account Created Successfully! You may Login now','success','growl-top-right');
		          FlowRouter.go('/login');
		        }
		    });			
		}

	}


	//--- HTML ---
	render(){		
		return(
			<div className="signUpPageWrapper col-lg-12">
					<form id="signupForm" className="empForm col-lg-6 col-lg-offset-3">
						<div className="col-lg-12 pageTitle">
							<h3> Signup Form </h3>
						</div>
						<div className="col-lg-5 col-lg-offset-1">
							<label> First Name </label>
							<input className="col-lg-12 required" ref="firstName"/>
						</div>
						<div className="col-lg-5">
							<label> Last Name </label>
							<input className="col-lg-12" ref="lastName"/>
						</div>
						<div className="col-lg-10 col-lg-offset-1">
							<label> Mobile Number </label>
							<input className="col-lg-12" ref="mobileNumber" />
						</div>
						<div className="col-lg-10 col-lg-offset-1">
							<label> Email Id </label>
							<input type="email" className="col-lg-12 required email" ref="emailid" />
						</div>
						<div className="col-lg-10 col-lg-offset-1">
							<label> Password </label>
							<input type="password" className="col-lg-12" ref="password1" />
						</div>
						<div className="col-lg-10 col-lg-offset-1">
							<label> Confirm Password </label>
							<input type="password" className="col-lg-12" ref="password2" />
						</div>
						<div className="col-lg-12 buttonDiv">
							<input type="submit" value="Sign Up" 
								   className="col-lg-4 col-lg-offset-4 btn btn-primary" 
								   onClick={this.handleSubmit.bind(this)}
								   />
						</div>
						<br />						
						<a href="/login" className="col-lg-12"> 
							<i class="fa fa-arrow-left" aria-hidden="true"></i> &nbsp;
							Click here to login 
						</a>
					</form> 
			</div>
		)
	}

}