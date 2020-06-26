import React from 'react';
import Home from './home';
import SearchResults from './search.results';
import {
	Switch,
	Route
} from 'react-router-dom';

const MainViewport = () => (
	<Switch>
		<Route exact path="/">
			<Home />
		</Route>
		<Route path="/search">
			<SearchResults />
		</Route>
	</Switch>
);

export default MainViewport;