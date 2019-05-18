import React, { Component } from 'react';

const IsLoggedIn = props => (
	<div>{props.isLoggedIn ? props.children : 'No way'}</div>
);

export default IsLoggedIn;
