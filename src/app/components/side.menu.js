import React from 'react';
import Users from '../containers/users.container';
import 'semantic-ui-css/semantic.min.css'
import { Container, Divider } from 'semantic-ui-react';
import SearchUser from '../containers/search.container';

const SideMenu = () => (
	<Container textAlign = 'center'>
		<SearchUser />
		<Divider horizontal>Or</Divider>
		<Users />
	</Container>
);

export default SideMenu;