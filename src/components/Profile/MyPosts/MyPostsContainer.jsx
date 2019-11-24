import React from 'react';
import {postActionCreator, upDateNewPostTextActionCreator} from '../../../Redux/profilePage-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

	let state = props.store.getState();

	let onAddPost = () => {
		props.store.dispatch(postActionCreator());
	};

	let onPostChange = (text) => {
		props.store.dispatch(upDateNewPostTextActionCreator(text));
	};

	return (
	<MyPosts
		postActionCreator = { onAddPost }
		upDateNewPostTextActionCreator = { onPostChange }
		posts = { state.profilePage.posts }
		newPostText = { state.profilePage.newPostText} />
	)
}

export default MyPostsContainer;