import React from 'react';
import { Card } from "semantic-ui-react";
import User from './user';
import { useHistory } from 'react-router-dom';

const Users = ({users, getTweets}) => {
	let history = useHistory();

	function handleClick (userId) {
		history.push('/tweets');
		getTweets(userId);
	}

	return (
		<Card.Group stackable={true}>
			{users.map(user => (
				<User
					key={user.id}
					{...user}
					onClick={() => handleClick(user.id)}
				/>
			))}
		</Card.Group>
	);
}

export default Users;