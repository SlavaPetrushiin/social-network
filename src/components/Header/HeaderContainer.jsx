import React from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import {getAuthMe, setUserData} from '../../Redux/auth-reducer';
import { usersUPI } from './../../api/api';

class HeaderContainer extends React.Component{
	componentDidMount(){
		this.props.getAuthMe(); //функция thunk
	}

	render(){
		return(
			<Header {...this.props}/>
		) 
	}
}

const mapStateToProps = (state) => {
	return {
		isAuth : state.auth.isAuth,
		login : state.auth.login,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUserData : (id, email, login) => {
			dispatch(setUserData(id, email, login))
		},
		getAuthMe : () => {
			dispatch(getAuthMe())
		}
	}
};



export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);