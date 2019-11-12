import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postsElements = props.posts.map(post => {
		return <Post message={post.message} likesCount={post.likesCount}/>
	})

	let newPostElement = React.createRef();

	let onAddPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	};

	return (
		<div className={classes.posts}>
			MyPost
			<div>
				<div>
					<textarea ref={newPostElement}></textarea>
				</div>
				<button onClick={ onAddPost }>Add post</button>
			</div>
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;