import { createStore, combineReducers } from 'redux';
import dialogsPageReducer from './dialogsPage-reducer';
import profilePageReducer from './profilePage-reducer';
import sidebarPageReducer from './sidebar-reducer';

let reducers = combineReducers({
	profilePage : profilePageReducer,
	dialogsPage : dialogsPageReducer,
	sidebar : sidebarPageReducer
});

let store = createStore(reducers);

export default store;