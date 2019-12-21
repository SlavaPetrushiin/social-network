import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux'
import {follow, unfollow, setUsers, newPage, isLoader} from './..//../Redux/users-reducer'
import Preloader from '../common/Preloader/Preloader';

class UsersAPI extends React.Component{
	componentDidMount(){
		this.props.isLoader(true) // Запускаю прелодер

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=15&page=${this.props.page}`)
			.then(response => {
				this.props.isLoader(false) // Отменяю запуск прелодер
				this.props.setUsers(response.data.items, response.data.totalCount);
			})		
	}

	handleClickPageUsers = (e) => {
		this.props.isLoader(true) // Запускаю прелодер
		let page = e.currentTarget.innerText;
		this.props.newPage(page);
		
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=15&page=${page}`)
		.then(response => {
			this.props.isLoader(false) // Отменяю запуск прелодер
			this.props.setUsers(response.data.items, response.data.totalCount);
		}) 
	}

	render(){
		let isPreloader = this.props.isPreloader;
		return (
			<>
				{
					(isPreloader)
						? <Preloader />
						: <Users 
							totalCount={this.props.totalCount}
							sizePage={this.props.sizePage}
							users={this.props.users}
							page={this.props.page}
							handleClickPageUsers={this.handleClickPageUsers}
							follow={this.props.follow}
							unfollow={this.props.unfollow}
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

/* let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId))
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId))
		},
		setUsers: (users, totalCount) => {
			dispatch(setUsersAC(users, totalCount))
		},
		changePage: (page) => {
			dispatch(newPagewAC(page))
		},
		changeIsLoader: (bulLoader) => {
			dispatch(isLoaderAC(bulLoader))
		}
	}
} */

export default connect (mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	newPage,
	isLoader
})(UsersAPI);