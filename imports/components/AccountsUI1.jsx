import React from 'react';
import ReactDOM from 'react-dom';

export default class AccountsUI extends React.Component{
	componentDidMount(){
		this.view = Blaze.render(Template.loginButtons,
						ReactDOM.findDOMNode(this.refs.loginContainer) );			
		
	}

	render(){

		return (
			<span ref="loginContainer" />
		);

	}

		
}