import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom';
import {getProfileUser, getUserStatus, putProfileUserStatus} from "../../Redux/profilePage-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
	componentDidMount(){
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = this.props.authorizedUserId
			if(!userId) {
				userId = this.props.history.push('/login')
			}
		};
		this.props.getProfileUser(userId); //функция по запросу профиля thunk
		this.props.getUserStatus(userId);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.match.params.userId !== this.props.match.params.userId){
			this.props.history.push('/login');
		}
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
		authorizedUserId  : state.auth.id, //получение id
		isAuth : state.auth.isAuth,
	}
};

export default compose(
	connect(mapStateToProps, {getProfileUser, getUserStatus, putProfileUserStatus}),
	withRouter
)(ProfileContainer);

