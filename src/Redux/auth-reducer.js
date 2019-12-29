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

export default authReduser;