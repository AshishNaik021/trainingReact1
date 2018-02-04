import React from 'react';


export default class Header extends React.Component{
	//--- HTML ---
	render(){
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
				      </ul>
				      <ul className="nav navbar-nav navbar-right">
				        <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
				        <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
				      </ul>
				    </div>
				  </div>
				</nav>		

			</header>
		);
	}

}



