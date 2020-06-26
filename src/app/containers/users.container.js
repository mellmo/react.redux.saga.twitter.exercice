import { getTweets } from '../actions';
import { connect } from 'react-redux';
import Users from '../components/users';

const mapStateToProps = state => {
	return {
		users: state.users
	}
};

const mapDispatchToProps = dispatch => {
	return {
		getTweets: userId => dispatch(getTweets(userId))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)