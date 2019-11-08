import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={classes.infoImg}>
				<img src="http://u-f.ru/sites/default/files/styles/main_700/public/uploads/170851.jpg"/>
			</div>
			<div className={classes.descriptionBlock}>
				Ava + description gg
			</div>
		</div>
	)
}

export default ProfileInfo;