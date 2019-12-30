import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

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

const ProfileInfo = ({profile}) => {
	return (
		<div>
			<div className={classes.infoImg}>
				<img src="http://u-f.ru/sites/default/files/styles/main_700/public/uploads/170851.jpg" alt="air"/>
			</div>
			<div className={classes.descriptionBlock}>
				{!profile 
					? <Preloader />
					: showUserProfile(profile)
				}
				
				Ava + description gg
			</div>
		</div>
	)
}

export default ProfileInfo;