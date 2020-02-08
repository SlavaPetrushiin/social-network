import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom';
import {getProfileUser, getUserStatus, putProfileUserStatus} from "../../Redux/profilePage-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
	componentDidMount(){
		debugger
		let userId = this.props.match.params.userId;
		if (!userId) userId = 2;
		this.props.getProfileUser(userId); //функция по запросу профиля thunk
		this.props.getUserStatus(userId);
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
		status : state.profilePage.status,
		// posts : state.profilePage.posts //мне не нравится ! используется только для отправки запроса при добавлнеии поста
	}
};

export default compose(
	connect(mapStateToProps, {getProfileUser, getUserStatus, putProfileUserStatus}),
	withRouter,
	// withAuthRedirect
)(ProfileContainer);

