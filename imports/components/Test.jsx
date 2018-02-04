import React, {Component} from 'react';


export default class Test extends Component{

	constructor(){
		super();

		this.state = {
			"numberOfClicks" : 0,
			"empList" : "",
		}

	}

	handleClick(event){
		event.preventDefault();
		var newClick = this.state.numberOfClicks + 1 ;

		if(newClick == 1){
			var empName = "Ashish";
		}else if(newClick == 2){
			var empName = "Omkar";
		}else if(newClick == 3){
			var empName = "Namita";
		}else if(newClick == 4){
			var empName = "Manasi";
		}else if(newClick == 5){
			var empName = "Manisha";
		}else if(newClick == 6){
			var empName = "Asmita";
		}else if(newClick == 7){
			var empName = "Shashwati";
		}else if(newClick == 8){
			var empName = "Mayuri";
		}else if(newClick == 9){
			var empName = "Anuja";
		}else{
			var empName = "Suhas";
		}



		var empList = this.state.empList + "<li>" + newClick + ". " + empName +"</li>"

		this.setState({
			"numberOfClicks" : newClick,
			"empList" : empList,
		});	
		
	}

	render(){
		return(
			<div className="col-lg-12 pageWrapper2">
				<div className="col-lg-5 col-lg-offset-1">
					<div className="col-lg-12 mainBlock">
						<button className="col-lg-3 btn btn-primary myButton"
								onClick={this.handleClick.bind(this)}
						>

							Click Here
						</button>
					</div>
				</div>
				<div className="col-lg-5">
					<div className="col-lg-12 mainBlock">
						<span className="myText"> You have total {this.state.numberOfClicks} employees</span>
						<br />
						<h3> Employee List </h3>
						<ul dangerouslySetInnerHTML={{__html: this.state.empList}} > 
						</ul>
						
					</div>
				</div>
			</div>
		);
	}

}