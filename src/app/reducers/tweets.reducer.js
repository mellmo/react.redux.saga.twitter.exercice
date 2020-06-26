import {
	TWEET_SEARCH_SUCCEDDED
} from '../actions';

const initialState = {
	userId: undefined
}

const tweetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case TWEET_SEARCH_SUCCEDDED:
			return {
				...state,
				userId: action.userId
			}
		default:
			return state;
	}
};


export default tweetsReducer;