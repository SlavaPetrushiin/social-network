import React from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import {deleteAuthLogout, getAuthMe} from "../../Redux/auth-reducer";

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
		getAuthMe : () => {
			dispatch(getAuthMe())
		},
		deleteAuthLogout : () => {
			dispatch(deleteAuthLogout())
		}
	}
};



export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);