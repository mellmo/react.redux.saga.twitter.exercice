import React from 'react';
import Home from './home';
import Tweets from '../containers/tweets.container';
import {
	Switch,
	Route
} from 'react-router-dom';

const MainViewport = () => (
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route path="/tweets">
			<Tweets />
		</Route>
	</Switch>
);

export default MainViewport;