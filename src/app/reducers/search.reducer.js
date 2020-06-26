import {
	SEARCH_USER,
	USERS_SEARCH_SUCCEDDED,
	USERS_SEARCH_FAILED,
}
from '../actions';

const initialState = {
	user: '',
	isLoading: false,
	results: []
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_USER:
			return {
				...state,
				isLoading: true
			};
		case USERS_SEARCH_SUCCEDDED:
			return {
				...state,
				results: action.results,
					isLoading: false
			}
			case USERS_SEARCH_FAILED:
				return {
					...state,
					results: [],
						isLoading: false
				}
				default:
					return state;
	}
};

export default searchReducer;