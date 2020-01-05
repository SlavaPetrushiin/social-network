import React from 'react';
import Users from './Users';
import { connect } from 'react-redux'
import {follow, unfollow, setUsers, newPage, isLoader} from './..//../Redux/users-reducer'
import Preloader from '../common/Preloader/Preloader';
import { usersUPI } from './../../api/api';

class UsersAPI extends React.Component{
	componentDidMount(){
		this.props.isLoader(true) // Запускаю прелодер
		const { page, sizePage } = this.props //деструктурирую значения 
		usersUPI.getUsers(page, sizePage).then(response => {
				this.props.isLoader(false) // Отменяю запуск прелодер
				this.props.setUsers(response.items, response.totalCount);
			})		
	}

	handleClickPageUsers = (e) => {
		this.props.isLoader(true) // Запускаю прелодер
		let page = e.currentTarget.innerText;
		this.props.newPage(page);
		const { sizePage } = this.props
		usersUPI.getUsers(page, sizePage).then(response => {
			this.props.isLoader(false) // Отменяю запуск прелодер
			this.props.setUsers(response.items, response.totalCount);
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