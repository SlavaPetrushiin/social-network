import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
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
				<Navbar store={this.props.store}/>
				<div className ='app-wrapper-content'>
					<Route
						path={'/profile'}
						render={ () => <Profile store={this.props.store}/>}
					/>
					<Route
						path={'/dialogs'}
						render={ () => <DialogsContainer store={this.props.store}/> }
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
