const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';
const CHANGE_PAGE_USERS = 'CHANGE_PAGE_USERS';
const CHANGE_IS_LOADER = 'CHANGE_IS_LOADER';

let initialState = {
	users : [],
	totalCount : 0,
	sizePage : 50,
	page : 1,
	isLoader : false 
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
		case CHANGE_PAGE_USERS :
			return {
				...state,
				page : Number(action.page)
			}
		case CHANGE_IS_LOADER :
			console.log(action)
			return {
				...state,
				isLoader : action.bulLoader
			}			
		default : 
			return state
	}
}

export default usersReducer;

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users, totalCount) => ({ type: SETUSERS, users : users, totalCount : totalCount});

export const newPagewAC = (page) => ({ type: CHANGE_PAGE_USERS, page });

export const isLoaderAC = (bulLoader) => ({ type: CHANGE_IS_LOADER, bulLoader });