import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className={'content'}>
                    <Navbar/>
                    <main className='app-wrapper-content'>
                        <Route
                            path={'/profile/:userId?'}
                            render={() => <ProfileContainer/>}
                        />
                        <Route
                            path={'/dialogs'}
                            render={() => <DialogsContainer/>}
                        />
                        <Route path={'/news'} render={() => <News/>}/>
                        <Route path={'/musics'} render={() => <Musics/>}/>
                        <Route path={'/settings'} render={() => <Settings/>}/>
                        <Route path={'/users'} render={() => <UsersContainer/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                    </main>
                </div>
            </div>
        );
    }

}

let mapStateToProps = state => {
    return {
        initialized: state.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
