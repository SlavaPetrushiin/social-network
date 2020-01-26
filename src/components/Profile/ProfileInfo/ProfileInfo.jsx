import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";

function showUserProfile(profile){
	return(
		<div>
			<div className={classes.blockUserPhoto}>
				<img src={profile.photos.small} alt='User_avatar'/>
			</div>
			<div>
				<h2>{profile.fullName}</h2>
				<p>{profile.aboutMe}</p>
			</div>
		</div>
	)
}

const ProfileInfo = (props) => {
	debugger
	return (
		<div>
			<div className={classes.descriptionBlock}>
				{!props.profile
					? <Preloader />
					: showUserProfile(props.profile)
				}
				
				<ProfileStatus status={"Hello my friends"}/>
			</div>
		</div>
	)
}

export default ProfileInfo;