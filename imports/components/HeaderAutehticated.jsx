import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class HeaderAutehticated extends TrackerReact(Component){
	constructor(){
		super();
		this.state = {
			subscription : {
				"loggedInUserData" : Meteor.subscribe("loggedInUser", Meteor.userId() )
			}
		}
	}

	getUserData(){
		return Meteor.users.find({"_id":Meteor.userId()}).fetch();
	}

	handleLogout(event){
		event.preventDefault();

		Meteor.logout(function(error,result){
			if(error){
				Bert.alert("There was some error in Logout","danger","growl-top-right");
			}else{
				Bert.alert("You are Logged out Successfully! ","success","growl-top-right");				
				FlowRouter.go("/");
			}
		});

	}

	//--- HTML ---
	render(){
		if(this.getUserData().length > 0 ){
			var allUsers = this.getUserData();
			var firstName =  allUsers[0].profile.firstName ;
			var lastName =  allUsers[0].profile.lastName ;
		}
		return(
			<header>
				<nav className="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span> 
				      </button>
				      <a className="navbar-brand" href="#">WebSiteName</a>
				    </div>
				    <div className="collapse navbar-collapse" id="myNavbar">
				      <ul className="nav navbar-nav">
				        <li className="active"><a href="/">Home</a></li>
				        <li><a href="/about-us">About Us</a></li>
				        <li><a href="/services">Services</a></li> 
				        <li><a href="/contact">Contact Us</a></li> 
				        <li><a href="/matchMaking">Match Making</a></li> 
				      </ul>
				      <ul className="nav navbar-nav navbar-right">
				        <li> <a href="#"> <span className="glyphicon glyphicon-user"></span> Welcome {firstName} {lastName} </a></li>
				        <li><a href="#" onClick={this.handleLogout.bind(this)}><span className="glyphicon glyphicon-log-out"></span> Logout </a></li>
				      </ul>
				    </div>
				  </div>
				</nav>		

			</header>
		);
	}

}



