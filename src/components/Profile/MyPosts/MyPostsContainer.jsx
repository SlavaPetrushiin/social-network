import {postActionCreator} from '../../../Redux/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {

	return {
		posts : state.profilePage.posts,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		onNewAddPost : (newPostText) => {
			dispatch(postActionCreator(newPostText));
		}
	}
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;