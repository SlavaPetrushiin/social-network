import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import AddPostForm from "./AddPostForm";

const MyPosts = (props) => {
	
	let postsElements = props.posts.map((post, i) => {
		return <Post message={post.message} likesCount={post.likesCount} key={i}/>
	});

	let onAddPost = (value) => {
		let newPostText = value.newPostText;
		props.onNewAddPost(newPostText);
	};

	return (
		<div className={classes.posts}>
			MyPost
			<div>
				<AddPostForm onSubmit={onAddPost} /> //Добавление формы для поста
			</div>
			<div className={classes.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;