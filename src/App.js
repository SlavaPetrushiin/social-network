import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


class  App extends React.Component {
	render(){

		return (
			<div className="app-wrapper">
				<Header />
				<Navbar/>
				<div className ='app-wrapper-content'>
					<Route
						path={'/profile/:userId'}
						render={ () => <ProfileContainer/>}
					/>
					<Route
						path={'/dialogs'}
						render={ () => <DialogsContainer/> }
					/>
					<Route path={'/news'} render={ () => <News /> }/>
					<Route path={'/musics'} render={ () => <Musics /> }/>
					<Route path={'/settings'} render={ () => <Settings /> }/>
					<Route path={'/users'} render={ () => <UsersContainer /> }/>
				</div>
			</div>
		);
	}

}

export default App;
