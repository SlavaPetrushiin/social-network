const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts : [
		{id: 1, message: "Hi, how are you", likesCount: 10},
		{id: 2, message: "It's my first post", likesCount: 25},
	],
	newPostText: 'it-kamasutra.com'		
}

const profilePageReducer = (state = initialState, action) => { //принимет state и action
	// eslint-disable-next-line default-case
	switch(action.type){
		case ADD_POST: 
			let newPost = {
				id: state.posts.length + 1,
				message: state.newPostText,
				likesCount: 0
			}
			return {
				posts:[...state.posts, newPost], newPostText:''
			}

		case UPDATE_NEW_POST_TEXT:{
			return{
				...state,
				newPostText:action.newText
			}
		}
				
	}

	return state
}

export default profilePageReducer;

export const postActionCreator = () => ({ type: 'ADD-POST' });

export const upDateNewPostTextActionCreator = (text) => {
	return {
		type: 'UPDATE-NEW-POST-TEXT',
		newText : text
	}
};