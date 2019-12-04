import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

class  App extends React.Component {
	render(){

		return (
			<div className="app-wrapper">
				<Header />
				<Navbar/>
				<div className ='app-wrapper-content'>
					<Route
						path={'/profile'}
						render={ () => <Profile/>}
					/>
					<Route
						path={'/dialogs'}
						render={ () => <DialogsContainer/> }
					/>
					<Route path={'/news'} render={ () => <News /> }/>
					<Route path={'/musics'} render={ () => <Musics /> }/>
					<Route path={'/settings'} render={ () => <Settings /> }/>
				</div>
			</div>
		);
	}

}

export default App;
