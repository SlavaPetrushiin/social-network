import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './Redax/state';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import {addPost, updateNewPostText, addNewMessage, updateNewMessage, subscribe} from './Redax/state'; 

let rerenderEntreTree = function(state){
		return ReactDOM.render(
			<BrowserRouter>
				<App
					state={state}
					addPost={addPost}
					updateNewPostText={updateNewPostText}
					addNewMessage = {addNewMessage}
					updateNewMessage = {updateNewMessage}/>
			</BrowserRouter>,
			document.getElementById('root')
		);
};

rerenderEntreTree(state);

subscribe(rerenderEntreTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
