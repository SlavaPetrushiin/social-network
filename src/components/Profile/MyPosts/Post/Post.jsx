import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<div className={classes.photoUser}/>
			<p className={classes.messagesUser}>{props.message}</p>
			{/*<span>like {props.likesCount}</span>*/}
		</div>
	)
};


export default Post;