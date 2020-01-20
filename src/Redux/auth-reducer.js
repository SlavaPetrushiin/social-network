import {authIP, usersUPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth : false
}

const authReduser = (state = initialState, action) => {
	switch(action.type){
		case SET_USER_DATA:
			debugger
			return {
				...state,
				...action.data,
				isAuth : true
			}
		default :
			return state
	}
}

export const setUserData = (id, email, login) => {
	return {
		type: SET_USER_DATA,
		data : {
			id, email, login
		}
	}
};

//thunk
export const getAuthMe = () => (dispatch) => {
	authIP.getAuthMe()
		.then(response => {
			if(response.resultCode === 0){
				let {id, email, login} = response.data;
				dispatch(setUserData(id, email, login))
			}
		})
}

export default authReduser;