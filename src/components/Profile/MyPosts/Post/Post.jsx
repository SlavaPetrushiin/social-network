import React from 'react';
import PropTypes from 'prop-types';
import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img src="https://avatars.mds.yandex.net/get-pdb/912419/34c311bd-5c8b-418c-9d86-960f483e142c/orig" alt="User_photo"/>
			{props.message}
			<div>
				<span>like {props.likesCount}</span>
			</div>
		</div>
	)
};

Post.defaultProps = {
	likesCount : 0
}

Post.propTypes = {
	message : PropTypes.string,
	likesCount : PropTypes.number
}

export default Post;