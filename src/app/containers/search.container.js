import {
	searchUser,
	addUser
}
from '../actions';
import { connect } from 'react-redux';
import SearchUser from '../components/search.user';


const mapStateToProps = state => {
	return {
		isLoading: state.search.isLoading,
		results: state.search.results
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onUserSearch: user => dispatch(searchUser(encodeURIComponent(user))),
		onResultSelection: user => dispatch(addUser(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);