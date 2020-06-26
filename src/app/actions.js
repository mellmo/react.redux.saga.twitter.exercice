export const SEARCH_USER = 'SEARCH_USER';
export const ADD_USER = 'ADD_USER';
export const USERS_SEARCH_SUCCEDDED = 'USERS_SEARCH_SUCCEDDED';
export const USERS_SEARCH_FAILED = 'USERS_SEARCH_FAILED';
export const GET_TWEETS = 'GET_TWEETS';
export const TWEET_SEARCH_SUCCEDDED = 'TWEET_SEARCH_SUCCEDDED';
export const TWEET_SEARCH_FAILED = 'TWEET_SEARCH_FAILED';
export const NEW_TWEET_FEED = 'NEW_TWEET_FEED';

export function searchUser (user) {
	return {
		type: SEARCH_USER,
		user
	};
}

export function addUser(user) {
	return {
		type: ADD_USER,
		user
	};
}

export function getTweets(userId) {
	return {
		type: GET_TWEETS,
		userId
	}
}