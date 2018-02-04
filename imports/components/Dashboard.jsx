import React from 'react';

export default class Dashboard extends React.Component{
	//--- HTML ---
	render(){

		if(Meteor.userId()){
			return(
				<div className="dashboardContent">
					<img src="images/dashboard.png" width="100%" />			
				</div>
			);			
		}else{
			return(
				<div className="dashboardContent">
					<img src="images/error404.jpg" width="100%" />			
				</div>
			);						
		}


	}

}