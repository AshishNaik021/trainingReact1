import React, {Component} from 'react';


export default class Login extends Component{

	handleLogin(event){
		event.preventDefault();


		var emailId 	= this.refs.email.value;
		var password 	= this.refs.password.value;


		if(emailId.length > 0 && emailId != ''){
			if(password.length > 0 && password != ''){				
				Meteor.loginWithPassword(
					emailId, password,
				 	function(error,result){
					if(error){
						Bert.alert('Either Email or Password is wrong! :-(  ','danger', 'growl-top-right');
					}else{
						Bert.alert('Welcome to the Magical world of Meteor!','success','growl-top-right');
						FlowRouter.go('/dashboard');
					}
				});

			}else{
				Bert.alert('Password is must for Login!','danger', 'growl-top-right');
			}


		}else{
			Bert.alert('Please Enter EmailId To Login!','danger', 'growl-top-right');
		}

		


	}


	render(){
		return(
			<div className="col-lg-12 pageWrapper">
				<form className="col-lg-6 col-lg-offset-3 loginForm">	
					<div className="col-lg-12 pageTitle row">
						<h3> Login </h3>
					</div>

					<div className="col-lg-10 col-lg-offset-1 inpField">
						<label> Email ID </label>
						<input type="email" className="col-lg-12" ref="email" />
					</div>

					<div className="col-lg-10 col-lg-offset-1 inpField">
						<label> Password </label>
						<input type="password" className="col-lg-12" ref="password" />
					</div>

					<div className="col-lg-10 col-lg-offset-1 inpField">
						<button type="submit" className="col-lg-4 col-lg-offset-4 btn btn-success" 
							    onClick={this.handleLogin.bind(this)}>
							Login
						</button>
					</div>


				</form>
			</div>
		);
	}
}