import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class HeaderAfterLogin extends TrackerReact(React.Component){
	//--- Constructor ---
	constructor(){
		super();
		this.state = {
			"subscription" : {
				"logedInUserData" : Meteor.subscribe("logedInUserData"),
			}
		}

	}


	//--- HTML ---
	render(){
		if( Meteor.userId() ){
			var myProfileData = Meteor.users.findOne({'_id': Meteor.userId() });
			if(myProfileData){
				var fName 	  = myProfileData.profile.firstName;
				var lName 	  = myProfileData.profile.lastName;
			}			
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
				        <li><a href="/empform">Employee Form</a></li> 
				      </ul>
				      <ul className="nav navbar-nav navbar-right">
				        <li><span className="glyphicon glyphicon-user"></span> {fName} {lName} </li>
				        <li><a href="/"><span className="glyphicon glyphicon-log-out"></span> Logout </a></li>
				      </ul>
				    </div>
				  </div>
				</nav>		 

			</header>
		);
	}

}

