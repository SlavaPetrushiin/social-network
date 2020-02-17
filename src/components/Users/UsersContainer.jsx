import React from 'react';
import Users from './Users';
import { connect } from 'react-redux'
import Preloader from '../common/Preloader/Preloader';
import {follow, getNewPageUsersThank, getUsersThunkCreator, unfollow} from "../../Redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getPage, getPageSize, getPreloader, getTotalCount, getUsers, getUsersSuper} from "../../Redux/users-selectors";

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

//Используем селекторы
let mapStateToProps = (state) => {
	return {
		users : getUsersSuper(state),
		totalCount : getTotalCount(state),
		sizePage :  getPageSize(state),
		page : getPage(state),
		isPreloader : getPreloader(state)
	}
}

export default compose(connect(mapStateToProps, {
		follow,
		unfollow,
		getNewPageUsersThank,
		getUsersThunkCreator
	}))(UsersAPI)