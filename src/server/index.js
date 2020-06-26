/**
 * didn't focus on the backend too much, need refactoring
 */

const express = require('express');
const cors = require('cors');
const Twitter = require('twitter-lite');
const IO = require('socket.io');
const app = express();

app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true,
}));

const twitterClient = new Twitter(require('./twitter.keys.json'));

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

// const http = require('http').Server(app);
// let io = IO(http, {
// 	handlePreflightRequest: (req, res) => {
// 		const headers = {
// 			"Access-Control-Allow-Headers": "Content-Type, Authorization",
// 			"Access-Control-Allow-Origin": 'http://localhost:3000',
// 			"Access-Control-Allow-Credentials": true
// 		};
// 		res.writeHead(200, headers);
// 		res.end();
// 	}
// });

// io.on('connection', async socket => {
// 	socket.on('getUserTweets', async userId => {
// 		if (socket.stream) {
// 			process.nextTick(() => socket.stream.destroy());
// 		}

// 		socket.stream = twitterClient
// 			.stream(`statuses/filter`, { follow: userId })
// 			.on('data', tweet => socket.emit('tweet', tweet))
// 	});
// });

process.on('unhandledRejection', error => {
	console.log('unhandledRejection', error);
});