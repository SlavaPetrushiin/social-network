import React from 'react';
import classes from './Users.module.css'
import standartPhoto from './../../assets/image/standartPhoto.jpg';
import * as axios from 'axios';
import {NavLink} from "react-router-dom";

class Users extends React.Component {
	render(){
		let usersPages = Math.ceil(this.props.totalCount / this.props.sizePage);
		let paginationUsers = [];

		for (let i = 1; i <= usersPages; i++){
			if(this.props.page === i) {
				paginationUsers.push(<span onClick={this.props.handleClickPageUsers} key={i} className={`${classes.pageUser} ${classes.active}`}>{i}</span>)
			} else {
				paginationUsers.push(<span onClick={this.props.handleClickPageUsers} key={i} className={`${classes.pageUser}`}>{i}</span>)
			}
		}

		return (
			<div>
				<div>
				</div>
				<div>{paginationUsers}</div>
				{
					this.props.users.map(user => {
						return <div key={user.id}>
							<div>
								<NavLink to={'/profile/' + user.id}>
									<img src={(user.photos.small === null)
										? standartPhoto
										: user.photos.small
									} className={classes.photoUser} alt={"userPhoto"}/>
								</NavLink>
							</div>
							<div>
								{user.followed

									? <button onClick={() => {
										axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
											withCredentials : true,
											headers : {
												'API-KEY' : '4f784e15-0555-4b7d-a7c1-c9d2f74d92fa'
											}
										})
											.then(response => {
												if(response.data.resultCode === 0){
													this.props.follow(user.id);
												}
											})
											.catch(err => {
												console.log(err)
											})
												
										}
									}>UnFollow</button>

									: <button onClick={() => {
										axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, null, {
											withCredentials : true,
											headers : {
												'API-KEY' : '4f784e15-0555-4b7d-a7c1-c9d2f74d92fa'
											}
										})
											.then(response => {
												if(response.data.resultCode === 0){
													this.props.unfollow(user.id)
												}
											})
											.catch(err => {
												console.log(err)
											})																						
										}
									}>Follow</button>
								}
							</div>
							<div>
								<div>{user.name}</div>
								<div>{user.status}</div>
							</div>
							<div>
								<div>{'user.location.country'}</div>
								<div>{'user.location.city'}</div>
							</div>
						</div>
					})
				}
			</div>
		)		
	}

}

export default Users;