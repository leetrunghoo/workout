import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

export default class Header extends Component {
	render() {
		return (
			<AppBar title='Workout' leftIcon='menu' rightIcon='settings'>
		  </AppBar>
		);
	}
}
