import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
/* import state from './Redax/state';*/
import {addPost, updateNewPostText, addNewMessage, updateNewMessage} from './Redax/state'; 

export let rerenderEntreTree = (state) => {
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

