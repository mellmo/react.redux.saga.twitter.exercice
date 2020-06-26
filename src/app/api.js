export const searchUsers = async user => {
	const response = await fetch(`http://localhost:9000/search?user=${user}`);

	return response.json();
}

export const getUserTweets = async userId => {
		const response = await fetch(`http://localhost:9000/get_tweets?userid=${userId}`);

		return response.json();
}