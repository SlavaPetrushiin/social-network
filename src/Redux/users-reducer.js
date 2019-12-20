const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';
const CHANGEPAGEUSERS = 'CHANGE_PAGE_USERS';

let initialState = {
	users : [],
	totalCount : 0,
	sizePage : 50,
	page : 1
};

const usersReducer = (state = initialState, action) => { //принимет state и action
	// eslint-disable-next-line default-case
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
				users : action.users,
				totalCount : action.totalCount
			}
		case CHANGEPAGEUSERS :
			return {
				...state,
				page : Number(action.page)
			}				
	}

	return state
}

export default usersReducer;

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users, totalCount) => ({ type: SETUSERS, users : users, totalCount : totalCount});

export const newPagewAC = (page) => ({ type: CHANGEPAGEUSERS, page });