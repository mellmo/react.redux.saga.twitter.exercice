import { call, put, all, takeLatest } from 'redux-saga/effects';
import {
	SEARCH_USER,
	GET_TWEETS,
	USERS_SEARCH_SUCCEDDED,
	USERS_SEARCH_FAILED,
	TWEET_SEARCH_SUCCEDDED,
	TWEET_SEARCH_FAILED
} from '../actions';
import {
	searchUsers,
	getUserTweets
} from '../api';

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

function* TwitterSaga() {
	yield all([
		watchUserSearch(),
		watchTweetFetch()
	]);
}

export default TwitterSaga;