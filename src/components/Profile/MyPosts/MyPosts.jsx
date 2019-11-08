import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
	let postsElements = props.posts.map(post => {
		return <Post message={post.message} likesCount={post.likesCount}/>
	})

	return (
		<div className={classes.posts}>
			MyPost
			<div>
				<div>
					<textarea></textarea>
				</div>
				<button>Add post</button>
			</div>
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;