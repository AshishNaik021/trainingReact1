import React, {Component} from 'react';


export default class Chess extends Component{

	constructor(){
		super();

		this.state = {
			"rows" 		: [1,2,3,4,5,6,7,8],
			"columns" 	: [1,2,3,4,5,6,7,8],
		}

	}

	handleClick(event){
		event.preventDefault();

		alert("clicked!");
		
	}

	render(){
		var chessTable = "";
		for(var i=0; i<8; i++){
			chessTable += "<tr class='chessRow'>"; 
			for(var j=0; j<8; j++){
				if(j%2 != 0){
					if(i%2 == 0){
						var checks = "dark";
					}else{
						var checks = "light";
					}
				}else{
					if(i%2 == 0){
						var checks = "light";
					}else{
						var checks = "dark";
					}
				}

				chessTable += "<td class='"+ checks +"' onClick=this.handleClick.bind(this)>"+ 
							  "</td>"	
			}
			chessTable += "</tr>"; 
		}

		return(
			<div className="col-lg-12 pageWrapper2">
				<div className="col-lg-10 col-lg-offset-1 chessBlock">
					<table className="table table-striped table-hover">
						{this.state.rows.map(
							()=>{}
						)}
					</table>
				</div>
			</div>
		);
	}

}