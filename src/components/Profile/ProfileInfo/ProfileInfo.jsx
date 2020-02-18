import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";
import ProfileHookStatus from "./ProfileHooKStatus";

function ShowUserProfile(props){
	let avatar = props.profile.photos ? <img src={props.profile.photos.small} alt='User_avatar'/> : <p>1111</p>
	return(
		<div>
			<div className={classes.blockUserPhoto}>
				{avatar}

			</div>
			<div>
				<h2>{props.profile.fullName}</h2>
				<p>{props.profile.aboutMe}</p>
			</div>
		</div>
	)
}

const ProfileInfo = (props) => {
	return (
		<div>
			<div className={classes.descriptionBlock}>
				{/*{!props.profile
					? <Preloader />
					: showUserProfile(props.profile)
				}*/}
				{props.profile ? <ShowUserProfile profile={props.profile}/> : <p>loading</p>}
				
				{/*<ProfileStatus status={props.status} putProfileUserStatus={props.putProfileUserStatus}/>*/}
				<ProfileHookStatus status={props.status} putProfileUserStatus={props.putProfileUserStatus}/>
			</div>
		</div>
	)
}

export default ProfileInfo;