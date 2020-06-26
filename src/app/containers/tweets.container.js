import { connect } from 'react-redux';
import Tweets from '../components/tweets';

const mapStateToProps = state => {
	if (state.tweets.userId) {
		return {
			tweets: state.users.filter(user => user.id == state.tweets.userId)[0].tweets
		}
	} else {
		return { tweets: [] }
	}
}


export default connect(mapStateToProps)(Tweets)