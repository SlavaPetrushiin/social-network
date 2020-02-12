import {createStore, combineReducers, applyMiddleware} from 'redux';
import dialogsPageReducer from './dialogsPage-reducer';
import profilePageReducer from './profilePage-reducer';
import sidebarPageReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReduser from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReduser from "./app-reducer";

let reducers = combineReducers({
	profilePage : profilePageReducer,
	dialogsPage : dialogsPageReducer,
	sidebar : sidebarPageReducer,
	usersPage : usersReducer,
	auth : authReduser,
	form: formReducer,
	initialized : appReduser
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store

export default store;