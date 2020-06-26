import {
	call,
	put,
	all,
	takeLatest
} from 'redux-saga/effects';
import {
	SEARCH_USER,
	GET_TWEETS,
	USERS_SEARCH_SUCCEDDED,
	USERS_SEARCH_FAILED,
	TWEET_SEARCH_SUCCEDDED,
	TWEET_SEARCH_FAILED,
	NEW_TWEET_FEED
} from '../actions';
import {
	searchUsers,
	getUserTweets
} from '../api';
// import { eventChannel } from 'redux-saga';
// import io from 'socket.io-client';

// const socket = io('http://127.0.0.1:9000');

function* searchUser(action) {
	try {
		const results = yield call(searchUsers, action.user);

		yield put({ type: USERS_SEARCH_SUCCEDDED, results});
	} catch (error) {
		yield put({ type: USERS_SEARCH_FAILED, error});
	}
}

function* getTweets(action) {
	try {
		const results = yield call(getUserTweets, action.userId);

		yield put({ type: TWEET_SEARCH_SUCCEDDED, userId: action.userId, results});
	} catch (error) {
		yield put({ type: TWEET_SEARCH_FAILED, error});
	}
}

function* watchUserSearch() {
	yield takeLatest(SEARCH_USER, searchUser);
}

function* watchTweetFetch() {
	yield takeLatest(GET_TWEETS, getTweets);
}


// async function createEventChannel (socket) {

// 	return eventChannel(emit => {
// 		socket.on('tweet', emit);

// 		return () => socket.close();
// 	})
// }

// function* subscribeToUserStream(action) {
// 	const channel = yield call(createEventChannel, socket);

// 	socket.emit('getUserTweets', action.userId);
// 	socket.on('tweet', console.log)
// 	// while (true) {
// 	// 	const { message } = yield take(channel);
// 	// 	yield put({ type: NEW_TWEET_FEED, message})
// 	// }
// }

// function* getUserTweetStream() {
// 	yield takeLatest(TWEET_SEARCH_SUCCEDDED, subscribeToUserStream);
// }

function* TwitterSaga() {
	yield all([
		watchUserSearch(),
		watchTweetFetch(),
		// getUserTweetStream()
	]);
}

export default TwitterSaga;