import { combineReducers } from 'redux';
import users from './users.reducer';
import search from './search.reducer';
import tweets from './tweets.reducer';

const appReducer = combineReducers({
	users,
	search,
	tweets
});

export default appReducer;