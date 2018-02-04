import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {MatchMakerMaster} from '/imports/api/matchMakerMaster.js';


class MatchMaker extends Component{
	constructor(){
		super();
		this.state = {
			"likings" : [],
			"foodHabits" : '',
		}
	}

	handleSubmit(event){
		event.preventDefault();

		var formValues = {
			"fullName" 		: this.refs.fullName.value,
			"height" 		: this.refs.height.value,
			"weight" 		: this.refs.weight.value,
			"dob" 			: this.refs.dob.value,
			"qual" 			: this.refs.qual.value,
			"occupation" 	: this.refs.occupation.value,
			"liking" 		: this.state.likings,
			"foodHabits" 	: this.state.foodHabits,
		}


		Meteor.call('insertMatchMakerMaster', formValues,
				(error,result) =>{
					if(error){
						Bert.alert("error");
					}else{
						Bert.alert("Success");						
					}
				}
		);

	}

	calcAge(event){
		event.preventDefault();
		// var dob = this.refs.dob.value;
		var dob = event.target.value;
		var cDate = new Date();
		if(cDate.getMonth() < 9){
			var curMonth = '0' + (cDate.getMonth() + 1);
		}
		else{
			var curMonth = (cDate.getMonth() + 1);
		}

		if(cDate.getDate() < 9){
			var curDate = '0' + (cDate.getDate());
		}
		else{
			var curDate = (cDate.getDate());
		}
		

		var currentDate = cDate.getFullYear() + '-' + curMonth + '-' + curDate;
		alert(currentDate);

		var days = moment({currentDate}).diff({dob}, 'days');
	}


	onChangeLiking(event){
		event.preventDefault();
		var likArr = this.state.likings;

		if(event.target.checked){
			likArr.push(event.target.value);
			console.log("checked = " + event.target.value);
		}else{
			var index = likArr.indexOf(event.target.value);
			likArr.splice(index,1);
			console.log("Unchecked = " + event.target.value);
		}

		this.setState({
			likings : likArr,
		});
		
	}

	onChangeRadio(event){
		event.preventDefault();
		this.setState({
			'foodHabits' : event.target.value,
		});
	}

	render(){
		console.log(this.state.foodHabits);
		return(
			<div className="col-lg-12 pageWrapper2">
				<div className="col-lg-6">
					<div className="col-lg-12 mainBlock">
						<form className="col-lg-12 empForm">
							<h3 className="text-center"> Enter Your Bride Groom Data </h3>
							<div className="col-lg-12">
								<label className="col-lg-12"> Full Name </label>
								  <div className="input-group">
								    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
								    <input type="text" className="form-control" name="fullName" ref="fullName" />
								  </div>
							</div>
							<div className="col-lg-6">
								<label className="col-lg-12"> Height </label>
								<div className="input-group">
								    <span className="input-group-addon"><i className="glyphicon glyphicon-resize-vertical"></i></span>
								    <input type="text" className="form-control" name="height" ref="height" />
								    <span className="input-group-addon"> Feet </span>
								</div>
							</div>
							<div className="col-lg-6">
								<label className="col-lg-12"> Weight </label>
								<div className="input-group">
								    <span className="input-group-addon"><i className="glyphicon glyphicon-dashboard"></i></span>
								    <input type="text" className="form-control" name="weight" ref="weight" />
								    <span className="input-group-addon"> Kg </span>
								</div>
							</div>
							<div className="col-lg-6">
								<label className="col-lg-12"> Date of Birth </label>
								<input type="date" className="col-lg-12" ref="dob"/>
							</div>
							<div className="col-lg-6">
								<label className="col-lg-12"> Age </label>
								<input className="col-lg-12" ref="age" />
							</div>
							<div className="col-lg-6">
								<label className="col-lg-12"> Highest Qualification </label>
								<select className="col-lg-12" ref="qual">
									<option value="SSC"> SSC </option>
									<option value="HSC"> HSC </option>
									<option value="Diploma"> Diploma </option>
									<option value="Graduate"> Graduate </option>
									<option value="Post-Graduate"> Post-Graduate </option>
									<option value="Doctorate"> Doctorate </option>
								</select>
							</div>
							<div className="col-lg-6">
								<label className="col-lg-12"> Occupation </label>
								<input className="col-lg-12" ref="occupation" />
							</div>
							<div className="col-lg-6">
								<label className="col-lg-12"> Likings </label>
								<input type="checkbox" name="Likings" value="Smoking" ref="liking" 
										onChange={this.onChangeLiking.bind(this)}
								/> Smoking<br />
								<input type="checkbox" name="Likings" value="Drinking" ref="liking" 
										onChange={this.onChangeLiking.bind(this)}
								/> Drinking
							</div>
							<div className="col-lg-6">
								<label className="col-lg-12"> Food Habits </label>
								<input type="radio" name="habits" value="veg"  ref="foodHabits"
									   onChange={this.onChangeRadio.bind(this)}
								/> Vegitarian <br />
								<input type="radio" name="habits" value="nonVeg" ref="foodHabits" 
									   onChange={this.onChangeRadio.bind(this)}
								/> Non-Vegitarian
							</div>

							<button className="col-lg-6 col-lg-offset-3 btn btn-primary myButton"
									onClick={this.handleSubmit.bind(this)}
							> Lets Begin Your Match Search! </button> 
						</form>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="col-lg-12 mainBlock">
					</div>
				</div>

			</div>
		)
	}



}

export default withTracker( props => {

	const handle = Meteor.subscribe('matchMakerData');

	return {
		"loading" 			: !handle.ready(),
		"matchMakerData" 	: MatchMakerMaster.find({}).fetch(),
	};

})(MatchMaker);