const dotenv = require('dotenv');
dotenv.config();
const Twitter = require('twitter');
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const client = new Twitter({
	consumer_key: process.env.API_KEY,
	consumer_secret: process.env.API_SECRET,
	access_token_key: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

//POST request

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/twitter', (req, res) => {
	const tweet = req.body.tweet;

	const params = { status: tweet };

	client.post('statuses/update', params, function (error, tweet, response) {
		if (error) {
			res.status(500).json({
				message: 'We were not able to tweet this for you',
			});
			return;
		}

		res.json({
			message: 'Tweet was successfully sent',
		});
	});
});

// GET REQUEST
// const params = { screen_name: 'prod_arbour' };
// client.get(
// 	'statuses/user_timeline',
// 	params,
// 	function (error, tweets, response) {
// 		if (!error) {
// 			console.log(tweets);
// 		} else {
// 			console.log('Oops! There was an error:', error);
// 		}
// 	}
// );

app.listen(3000, console.log('Server is running at port ', 3000));
