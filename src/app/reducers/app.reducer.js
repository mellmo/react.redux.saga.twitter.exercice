import { combineReducers } from 'redux';
import users from './users.reducer';
import search from './search.reducer';

const appReducer = combineReducers({
	users,
	search
});

export default appReducer;