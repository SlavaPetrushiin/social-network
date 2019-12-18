import {postActionCreator, upDateNewPostTextActionCreator} from '../../../Redux/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {

	return {
		posts : state.profilePage.posts,
		newPostText : state.profilePage.newPostText
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onNewAddPost : () => {
			dispatch(postActionCreator());
		},
		onNewPostChange : (text) => {
			dispatch(upDateNewPostTextActionCreator(text));
		}
	}
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;