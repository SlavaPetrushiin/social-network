import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux'
import {followAC, unfollowAC, setUsersAC, newPagewAC} from './..//../Redux/users-reducer'

class UsersAPI extends React.Component{

	componentDidMount(){
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=15&page=${this.props.page}`)
			.then(response => {
				this.props.setUsers(response.data.items, response.data.totalCount);
			})		
	}

	handleClickPageUsers = (e) => {
		let page = e.currentTarget.innerText;
		this.props.changePage(page);
		
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=15&page=${page}`)
		.then(response => {
			this.props.setUsers(response.data.items, response.data.totalCount);
		}) 
	}

	render(){
		return (
			<Users 
				totalCount={this.props.totalCount}
				sizePage={this.props.sizePage}
				users={this.props.users}
				page={this.props.page}
				handleClickPageUsers={this.handleClickPageUsers}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
			/>
		)
	}
}


let mapStateToProps = (state) => {
	return {
		users : state.usersPage.users,
		totalCount : state.usersPage.totalCount,
		sizePage : state.usersPage.sizePage,
		page : state.usersPage.page,
	}
}

let mapDispatchToProps = (dispatch) => {
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
		}
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(UsersAPI);