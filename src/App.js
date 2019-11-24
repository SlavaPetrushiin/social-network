import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';

class  App extends React.Component {
	render(){
		return (
			<div className="app-wrapper">
				<Header />
				<Navbar sidebar={this.props.state.sidebar}/>
				<div className ='app-wrapper-content'>
					<Route
						path={'/profile'}
						render={ () => <Profile
											state={this.props.state.profilePage}
											dispatch={this.props.dispatch}/>
										}
					/>
					<Route
						path={'/dialogs'}
						render={ () => <Dialogs state={this.props.state.dialogsPage} dispatch={this.props.dispatch}/> }
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
