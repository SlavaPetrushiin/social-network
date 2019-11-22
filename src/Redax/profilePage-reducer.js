const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profilePageReducer = (state, action) => { //принимет state и action
	// eslint-disable-next-line default-case
	debugger
	switch(action.type){
		case ADD_POST: 
			let newPost = {
				id: state.posts.length + 1,
				message: state.newPostText,
				likesCount: 0
			}
			state.posts.push(newPost);
			state.newPostText = '';
			break;
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newText;
			break;
	}

	return state
}

export default profilePageReducer;