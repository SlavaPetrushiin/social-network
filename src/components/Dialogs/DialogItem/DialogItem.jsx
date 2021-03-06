import React from 'react';
import PropTypes from 'prop-types';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
	const divStyle = {
		backgroundImage: 'url(' + props.url + ')',
	}

	return (
		<div className={classes.dialogsBlock}>
			<div className={classes.avatarImg} style={divStyle}></div>
			<NavLink to={`/dialogs/${props.id}`} className={classes.userName}>{props.name}</NavLink>
		</div>
	)
}

DialogItem.propTypes = {
	name : PropTypes.string.isRequired,
	id : PropTypes.number.isRequired,
	url : PropTypes.string.isRequired
}

export default DialogItem;