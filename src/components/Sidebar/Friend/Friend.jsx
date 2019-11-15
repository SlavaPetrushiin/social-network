import React from 'react';
import PropTypes from 'prop-types';
import classes from './Friend.module.css';

const Friend = (props) => {
	return (
		<div className={classes.friend}>
			<div className={classes.friendImg}>
				<img src={props.friendUrl} alt={props.friendName}/>
			</div>
			<div className={classes.friendName}>{props.friendName}</div>
		</div>		
	);
};

Friend.propTypes = {
	friendUrl : PropTypes.string,
	friendName : PropTypes.string
}

export default Friend;