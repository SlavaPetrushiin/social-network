import React from 'react';
import Users from './Users';
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader';
import {follow, getNewPageUsersThank, getUsersThunkCreator, unfollow} from "../../Redux/users-reducer";

class UsersAPI extends React.Component{
	componentDidMount(){
		const { page, sizePage } = this.props //деструктурирую значения
		this.props.getUsersThunkCreator(page, sizePage); //thunk
	}

	handleClickPageUsers = (e) => {
		let page = e.currentTarget.innerText;
		const { sizePage } = this.props;
		this.props.getNewPageUsersThank(page, sizePage);
	}

	render(){
		let isPreloader = this.props.isPreloader;
		return (
			<>
				{
					(isPreloader)
						? <Preloader />
						: <Users {...this.props} handleClickPageUsers={this.handleClickPageUsers}
					/>
				}
			</>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users : state.usersPage.users,
		totalCount : state.usersPage.totalCount,
		sizePage : state.usersPage.sizePage,
		page : state.usersPage.page,
		isPreloader : state.usersPage.isPreloader
	}
}


export default connect (mapStateToProps, {
	follow,
	unfollow,
	getNewPageUsersThank,
	getUsersThunkCreator
})(UsersAPI);