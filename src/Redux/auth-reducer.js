import {authIP, usersUPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

//Изначальное незалогиненое состояние
let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth : false
}

const authReduser = (state = initialState, action) => {
	switch(action.type){
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}
		default :
			return state
	}
}

export const setUserData = (id, email, login, isAuth) => {
	return {
		type: SET_USER_DATA,
		payload : {
			id, email, login, isAuth
		}
	}
};

//thunk
export const getAuthMe = () => (dispatch) => {
	authIP.getAuthMe()
		.then(response => {
			if(response.resultCode === 0){
				let {id, email, login} = response.data;
				dispatch(setUserData(id, email, login, true))
			} else {
				dispatch(setUserData(null, null, null, false))
			}
		})
}

//Логин
export const postAuthLogin = (email, password, rememberMe) => (dispatch) => {
	authIP.postAuthLogin(email, password, rememberMe)
		.then(response => {
			if(response.data.resultCode === 0){
				dispatch(getAuthMe()) //При положительном ответе диспатчу санку из header
			}
		})
}

//Вылогинизация
export const deleteAuthLogout = () => (dispatch) => {
	debugger
	authIP.deleteAuthLogout()
		.then(response => {
			if(response.data.resultCode === 0){
				dispatch(getAuthMe()) //При положительном ответе диспатчу санку из header
			}
		})
}

export default authReduser;