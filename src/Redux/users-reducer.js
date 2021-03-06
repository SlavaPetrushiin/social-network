import {usersUPI} from "../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';
const CHANGE_PAGE_USERS = 'CHANGE_PAGE_USERS';
const CHANGE_IS_LOADER = 'CHANGE_IS_LOADER';

let initialState = {
	users : [],
	totalCount : 0,
	sizePage : 40,
	page : 1,
	isPreloader : false 
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
			return {
				...state,
				isPreloader : action.bulLoader
			}			
		default : 
			return state
	}
}

export const followSucces = (userId) => ({ type: FOLLOW, userId });

export const unfollowSucces = (userId) => ({ type: UNFOLLOW, userId });

export const setUsers = (users, totalCount) => ({ type: SETUSERS, users, totalCount});

export const newPage = (page) => ({ type: CHANGE_PAGE_USERS, page });

export const isLoader = (bulLoader) => ({ type: CHANGE_IS_LOADER, bulLoader });

//thunks
export const getUsersThunkCreator = (page, sizePage) => {
	return (dispatch) => {
		dispatch(isLoader(true)) // Запускаю прелодер
		usersUPI.getUsers(page, sizePage).then(response => {
			dispatch(isLoader(false)) // Отменяю запуск прелодер
			dispatch(setUsers(response.items, response.totalCount));
		})
	}
};

//Санка по клику на новую страницу
export const getNewPageUsersThank = (page, sizePage) => (dispatch) => {
	dispatch(isLoader(true)) // Запускаю прелодер
	dispatch(newPage(page));
	usersUPI.getUsers(page, sizePage).then(response => {
		dispatch(isLoader(false)) // Отменяю запуск прелодер
		dispatch(setUsers(response.items, response.totalCount));
	})
};

export const follow = (userId) => (dispatch) => {
	usersUPI.follow(userId)
		.then(response => {
			if(response.resultCode === 0){
				dispatch(unfollowSucces(userId))
			}
		})
		.catch(err => {
			console.log(err)
		})
};

export const unfollow = (userId) => (dispatch) => {
	usersUPI.unFollow(userId)
		.then(response => {
			if(response.resultCode === 0){
				dispatch(followSucces(userId));
			}
		})
		.catch(err => {
			console.log(err)
		})
}


export default usersReducer;