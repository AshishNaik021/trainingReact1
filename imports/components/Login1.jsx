import React from 'react';

export default class Login extends React.Component{

	//--- Events ---
	handleSubmit(event){
		event.preventDefault();

		$('#signupForm').validate();

		var emailid 	 = this.refs.email.value;
		var password 	 = this.refs.password.value;

		if(emailid != '' && password != ''){
			Meteor.loginWithPassword(emailid,password,
				 function (error, result) {
			        if (error) {
			          Bert.alert('Either Mail Id Or Password is Wrong! :(', 'danger','growl-top-right');
			        } else {
			          Bert.alert('Welcome to The Magical World of MeteorJS!!','success','growl-top-right');
			          FlowRouter.go('/empform');
			        }
			     }
	        );
		}else{
			Bert.alert('Either Mail Id Or Password is Wrong! :(', 'danger','growl-top-right');
		}

	}


	//--- HTML ---
	render(){		
		return(
			<div className="signUpPageWrapper col-lg-12">
					<form id="signupForm" className="empForm col-lg-6 col-lg-offset-3">
						<div className="col-lg-12 pageTitle">
							<h3> Login </h3>
						</div>
						<div className="col-lg-10 col-lg-offset-1">
							<label> Login </label>
							<input className="col-lg-12 required" ref="email"/>
						</div>
						<div className="col-lg-10 col-lg-offset-1">
							<label> Password </label>
							<input type="password" className="col-lg-12" ref="password" />
						</div>

						<div className="col-lg-12 buttonDiv">
							<input type="submit" value="Login" 
								   className="col-lg-4 col-lg-offset-4 btn btn-primary" 
								   onClick={this.handleSubmit.bind(this)}
								   />
						</div>
						<br />						
						<a href="/signup" className="col-lg-6"> 
							<i className="fa fa-user-plus" aria-hidden="true"></i> &nbsp;
							Create new account 
						</a>
						<a href="/forgotPassword" className="col-lg-6 fp"> 
							<i className="fa fa-key" aria-hidden="true"></i> &nbsp;
							Forgot Password 
						</a>
					</form> 
			</div>
		)
	}

}