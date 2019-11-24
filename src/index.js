import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';

let rerenderEntreTree = function(store){
		return ReactDOM.render(
			<BrowserRouter>
				<App
					store={store}/>
			</BrowserRouter>,
			document.getElementById('root')
		);
};

rerenderEntreTree(store); 

store.subscribe(() => {
	rerenderEntreTree(store)
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
