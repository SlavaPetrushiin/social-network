import React from 'react';
import {postActionCreator, upDateNewPostTextActionCreator} from '../../../Redux/profilePage-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {
	return (
		<StoreContext.Consumer>
			{
				store => {
					let state = store.getState();

					let onAddPost = () => {
						store.dispatch(postActionCreator());
					};

					let onPostChange = (text) => {
						store.dispatch(upDateNewPostTextActionCreator(text));
					};

					return <MyPosts
						postActionCreator = { onAddPost }
						upDateNewPostTextActionCreator = { onPostChange }
						posts = { state.profilePage.posts }
						newPostText = { state.profilePage.newPostText} />
				}
			}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer;