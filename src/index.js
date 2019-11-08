import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
	{id : 1, name: 'Sveta'},
	{id : 2, name: 'Ruslan'},
	{id : 3, name: 'Slava'},
	{id : 4, name: 'Toma'},
	{id : 5, name: 'Nika'},
	{id : 6, name: 'Ivan'}
];

let messages = [
	{id : 1, message: 'Hi'},
	{id : 2, message: 'Moscow!!! It is good city!'},
];

let posts = [
	{message: "Hi, how are you", likesCount: 10},
	{message: "It's my first post", likesCount: 25},
	{message: "Hi, how are you", likesCount: 10},
	{message: "It's my first post", likesCount: 25}	
];

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
