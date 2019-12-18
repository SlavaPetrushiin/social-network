import React from 'react';
import classes from './Users.module.css'
import * as axios from 'axios';
import standartPhoto from './../../assets/image/standartPhoto.jpg';

let Users = props => {

	let getUsers = () =>{
		if(props.users.length === 0){
			axios.get('https://social-network.samuraijs.com/api/1.0/users')
				.then(response => {
					props.setUsers(response.data.items);
				})
		}
	}


	return (
		<div>
			<button onClick={getUsers}>Get User</button>
			{
				props.users.map(user => {
					return <div key={user.id}>
						<button onclick={getUsers}>Get Users</button>
						<div>
							<img src={(user.photos.small === null)
								? standartPhoto
								: user.photos.small
							} className={classes.photoUser}/>
						</div>
						<div>
							{user.followed
								? <button onClick={() => props.follow(user.id)}>UnFollow</button>
								: <button onClick={() => props.unfollow(user.id)}>Follow</button>
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

export default Users;