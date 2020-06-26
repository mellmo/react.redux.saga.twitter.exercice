import React from 'react';
import { Card } from "semantic-ui-react";
import Tweet from './tweet';

const Tweets = ({tweets}) => (
	<Card.Group stackable={true}>
		{tweets.map(tweet => (
			<Tweet
				key={tweet.id}
				{...tweet}
			/>
		))}
	</Card.Group>
);

export default Tweets;