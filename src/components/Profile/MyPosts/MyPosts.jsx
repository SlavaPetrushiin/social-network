import React from 'react';
import PropTypes from 'prop-types';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	
	let postsElements = props.posts.map(post => {
		return <Post message={post.message} likesCount={post.likesCount}/>
	});

	let onAddPost = () => {
		props.onNewAddPost();
	};

	let onPostChange = (e) => {
		props.onNewPostChange(e.currentTarget.value);
	};
	return (
		
		<div className={classes.posts}>
			MyPost
			<div>
				<div>
					<textarea
						value={props.newPostText}
						onChange={onPostChange}>
					</textarea>
				</div>
				<button onClick={ onAddPost }>Add post</button>
			</div>
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	)
}

MyPosts.defaultProps = {
	newPostText : ''
}

MyPosts.propTypes = {
	addPost : PropTypes.func,
	updateNewPostText : PropTypes.func,
	posts : PropTypes.array,
	newPostText : PropTypes.string
}

export default MyPosts;