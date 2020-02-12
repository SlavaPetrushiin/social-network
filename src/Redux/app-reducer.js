import {authIP} from "../api/api";
import {getAuthMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'SET-INITIALIZED';

//Изначальное незалогиненое состояние
let initialState = {
	initialized: false
}

const appReduser = (state = initialState, action) => {
	switch(action.type){
		case INITIALIZED_SUCCESS:
			return {
				...state,
				initialized: true
			}
		default :
			return state
	}
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

//thunk
export const initializeApp = () => (dispatch) => {
	let propise = dispatch(getAuthMe()); //Возвращается промис
	debugger
	Promise.all([propise])
		.then(() => {
			dispatch(initializedSuccess())
		})
}


export default appReduser;