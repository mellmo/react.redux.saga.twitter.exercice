import {
	ADD_USER,
	TWEET_SEARCH_SUCCEDDED
} from '../actions';


const initialState = [{
	id: "25073877",
	title: "Donald J. Trump",
	description: "45th President of the United States of America🇺🇸",
	image: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_normal.jpg",
	followers: 82481564,
	created_at: new Date("Wed Mar 18 13:46:38 +0000 2009").toLocaleString(),
	tweets: []
}, {
	id: "1339835893",
	title: "Hillary Clinton",
	description: "2016 Democratic Nominee, SecState, Senator, hair icon. Mom, Wife, Grandma x3, lawyer, advocate, fan of walks in the woods & standing up for our democracy.",
	image: "https://pbs.twimg.com/profile_images/1265671910169489410/qO82RUjP_normal.jpg",
	followers: 28173986,
	created_at: "2013-4-9 14:04:35",
	tweets: []
}];

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return [
				...state,
				action.user
			]
		case TWEET_SEARCH_SUCCEDDED:
			return state.map(user => {
				if (user.id === action.userId) {
					user.tweets = [
						...user.tweets,
						action.results
					];

					return user;
				} else {
					return user;
				}
			})
		default:
			return state;
	}
};

export default userReducer;