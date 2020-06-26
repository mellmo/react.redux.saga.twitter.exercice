import React from 'react';
import './flex.css';

const Users = props => (
	<div className="item">
		<div className="flexgrid">
			<img
				src={props.icon}
				alt="icon"
			/>
			<div className="content">
				<span className="username">{props.title}</span>
			</div>
		</div>
	</div>
);

export default Users;