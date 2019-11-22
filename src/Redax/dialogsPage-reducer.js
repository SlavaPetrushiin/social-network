const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsPageReducer = (state, action) => {
	// eslint-disable-next-line default-case
	switch(action.type){
		case ADD_NEW_MESSAGE:
			let message = state.newTextMessage;
			let newMessage = {id : 0, message: message};
			state.messages.push(newMessage);
			state.newTextMessage = '';
			break;
		case UPDATE_NEW_MESSAGE:
			state.newTextMessage = action.newText;
			break;
	}
	return state
}

export default dialogsPageReducer;