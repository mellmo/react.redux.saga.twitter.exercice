const express = require('express');
const cors = require('cors');
const Twitter = require('twitter-lite');
const { result } = require('lodash');
const app = express();

app.use(cors());

const twitterClient = new Twitter({
	consumer_key: "dWYqynBQWh60JZiJJdH13Km06", // from Twitter.
	consumer_secret: "htLEsKtuVlm88y5AMTCsgwNbRWdKWXIsWjJLPiVc49X1ZLSHt3", // from Twitter.
	access_token_key: "1276238143147184129-Zt6ytC3VeHFiRcoKLVeC2z83rJIIGe",
	access_token_secret: "lHFfQssyyKkCYNKWW2Tv2N4r1i0gN8PhpDf4k9o5Fhk82"
});

app.get('/', function (request, response) {
	return response.send('polfeed backend');
});

app.get('/search', function (request, response) {
	console.log (`looking up: ${request.query.user}`);

	twitterClient
		.get(`users/search`, {
			q: request.query.user,
			count: 5
		})
		.then(results => results.map(entry => ({
			id: entry.id_str,
			title: entry.name,
			description: entry.description,
			image: entry.profile_image_url_https,
			followers: entry.followers_count,
			created_at: new Date(entry.created_at).toLocaleString(),
			tweets: []
		})))
		.then(results => response.json(results))
		.catch(results => response.status(404).send(results));
});

app.get('/get_tweets', function (request, response) {
	console.log (`looking up: ${request.query.user}`);

	twitterClient
		.get(`statuses/user_timeline`, {
			user_id: request.query.userid
		})
		.then(results => response.json(results))
		.catch(results => response.status(404).send(results));
});

app.listen(process.env.PORT || 9000);

process.on('unhandledRejection', error => {
	console.log('unhandledRejection', error);
});