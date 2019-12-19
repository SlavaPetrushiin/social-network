import React from 'react';
import classes from './Users.module.css'
import * as axios from 'axios';
import standartPhoto from './../../assets/image/standartPhoto.jpg';


class Users extends React.Component {

	componentDidMount(){
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUsers(response.data.items);
			})		
	}

	render(){
		return (
			<div>
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