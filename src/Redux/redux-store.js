import { createStore, combineReducers } from 'redux';
import dialogsPageReducer from './dialogsPage-reducer';
import profilePageReducer from './profilePage-reducer';
import sidebarPageReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReduser from './auth-reducer';

let reducers = combineReducers({
	profilePage : profilePageReducer,
	dialogsPage : dialogsPageReducer,
	sidebar : sidebarPageReducer,
	usersPage : usersReducer,
	auth : authReduser
});

let store = createStore(reducers);

window.store = store

export default store;