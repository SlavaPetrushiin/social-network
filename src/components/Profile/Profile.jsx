import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div className={classes.main}>
			<div>
				<img src="http://u-f.ru/sites/default/files/styles/main_700/public/uploads/170851.jpg"/>
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile;