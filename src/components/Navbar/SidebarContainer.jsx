import Sidebar from './../Sidebar/Sidebar';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
	return {
		friends : state.sidebar.friends
	}
}

let mapDispatchToProps = (dispatch) => {
	return {}
}

let SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)


export default SidebarContainer;