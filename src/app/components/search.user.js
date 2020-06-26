import React from 'react';
// technically we can user redux-saga delay effect...
import _ from 'lodash';
import { Search } from 'semantic-ui-react';

let SearchUser = ({
		isLoading,
		results,
		onUserSearch,
		onResultSelection
	}) => {
	const handleSearchChange = (event, { value }) => onUserSearch(value);
	const handleResultSelection = (event, value) => onResultSelection(value.result);

	return (
		<Search
				loading={isLoading}
				onSearchChange={_.debounce(handleSearchChange, 1000, {
					leading: true,
				})}
				onResultSelect={handleResultSelection}
				results={results}
			/>
	);
}


export default SearchUser;