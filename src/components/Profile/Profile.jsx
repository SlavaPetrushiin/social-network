import React from 'react';
import PropTypes from 'prop-types';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
	const {profile, status, putProfileUserStatus} = props;
	return (
		<>
			<ProfileInfo profile={profile} putProfileUserStatus={putProfileUserStatus} status={status}/>
			<MyPostsContainer />
		</>
	)
};

Profile.propTypes = {
	state : PropTypes.object,
	addPost : PropTypes.func,
	updateNewPostText : PropTypes.func
};

export default Profile;