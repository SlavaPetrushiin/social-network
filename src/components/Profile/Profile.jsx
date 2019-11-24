import React from 'react';
import PropTypes from 'prop-types';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				posts={props.state.posts}
				newPostText={props.state.newPostText}
				dispatch={props.dispatch}
			/>
		</div>
	)
};

Profile.propTypes = {
	state : PropTypes.object,
	addPost : PropTypes.func,
	updateNewPostText : PropTypes.func
};

export default Profile;