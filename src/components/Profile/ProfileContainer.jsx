import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom';
import {getProfileUser} from "../../Redux/profilePage-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{
	componentDidMount(){
		let userId = this.props.match.params.userId;
		if(!userId) userId = 2;
		this.props.getProfileUser(userId) //функция по запросу профиля thunk
	}

	render(){

		return (
			<div>
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		)
	}
};

let mapStateToProps = (state) =>  {
	return {
		profile : state.profilePage.profile,
	}
};

export default compose(
	connect(mapStateToProps, {getProfileUser}),
	withRouter
)(ProfileContainer);

