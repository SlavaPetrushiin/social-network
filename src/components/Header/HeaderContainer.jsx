import React from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import { setUserData } from '../../Redux/auth-reducer';
import { usersUPI } from './../../api/api';

class HeaderContainer extends React.Component{
	componentDidMount(){
		usersUPI.getAuthMe()
			.then(response => {
				if(response.resultCode === 0){
					let {id, email, login} = response.data;
					this.props.setUserData(id, email, login)
				}
			})		
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
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUserData : (id, email, login) => {
			dispatch(setUserData(id, email, login))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);