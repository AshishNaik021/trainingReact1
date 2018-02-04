import React from 'react';
import ReactDOM from 'react-dom';


export default class AccountUI extends React.Component{

	componentDidMount(){
		this.view = Blaze.render(Template.loginButtons,
						ReactDOM.findDOMNode(this.refs.loginLink)  );
	}


	render(){
		return(
			<span ref="loginLink" >  </span>
		) 
	}


}