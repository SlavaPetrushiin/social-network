import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";
import classes from './Friend.module.css';

const Friend = (props) => {
	return (
		<div className={classes.friend}>
			<div className={classes.friendImg}>
				<img src={props.friendUrl} alt={props.friendName}/>
			</div>
			<NavLink
				to={`/${props.friendName}`}
				className={classes.friendName}
				activeClassName={classes.activeLink}
			>
				{props.friendName}
			</NavLink>
		</div>		
	);
};

Friend.propTypes = {
	friendUrl : PropTypes.string,
	friendName : PropTypes.string
}

export default Friend;