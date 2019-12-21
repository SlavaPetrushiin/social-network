import React from 'react';
import classes from './Users.module.css'
import standartPhoto from './../../assets/image/standartPhoto.jpg';

class Users extends React.Component {
	render(){
		let usersPages = Math.ceil(this.props.totalCount / this.props.sizePage);
		let paginationUsers = [];

		for (let i = 1; i <= usersPages; i++){
			if(this.props.page === i) {
				paginationUsers.push(<span onClick={this.props.handleClickPageUsers} className={`${classes.pageUser} ${classes.active}`}>{i}</span>)
			} else {
				paginationUsers.push(<span onClick={this.props.handleClickPageUsers} className={`${classes.pageUser}`}>{i}</span>)
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
								<img src={(user.photos.small === null)
									? standartPhoto
									: user.photos.small
								} className={classes.photoUser} alt={"userPhoto"}/>
							</div>
							<div>
								{user.followed
									? <button onClick={() => this.props.follow(user.id)}>UnFollow</button>
									: <button onClick={() => this.props.unfollow(user.id)}>Follow</button>
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