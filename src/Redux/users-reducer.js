const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';

let initialState = {users : []};

const usersReducer = (state = initialState, action) => { //принимет state и action
	// eslint-disable-next-line default-case
			debugger
	switch(action.type){

		case FOLLOW :
			return {
				...state,
				users : state.users.map(user => {
					if(user.id === action.userId) return {...user, followed : false}; 
					return user;
				})
			}
		case UNFOLLOW :
			return {
				...state,
				users : state.users.map(user => {
					if(user.id === action.userId) return {...user, followed : true};
					return user;
				})
			}
			case SETUSERS :
				return {
					...state,
					users : [...state.users, ...action.users ]
				}			
	}

	return state
}

export default usersReducer;

export const followAC = (userId) => ({ type: 'FOLLOW', userId });

export const unfollowAC = (userId) => ({ type: 'UNFOLLOW', userId });

export const setUsersAC = (users) => ({ type: 'SET_USERS', users});