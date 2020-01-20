import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {Redirect} from "react-router-dom";

const Profile = (props) => {
	const {profile} = props;
	if(props.isAuth === false) return <Redirect to="/login"/> //Если не авторизован, то на страницу Login
	return (
		<div>
			<ProfileInfo profile={profile}/>
			<MyPostsContainer />
		</div>
	)
};

Profile.propTypes = {
	state : PropTypes.object,
	addPost : PropTypes.func,
	updateNewPostText : PropTypes.func
};

export default Profile;