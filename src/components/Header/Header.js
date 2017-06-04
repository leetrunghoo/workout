import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

export default class Header extends Component {
	render() {
		let onLeftIconClick = () => this.props.toggleDrawerActive();
		let leftIcon = 'menu';
		if (window.location.pathname !== '/') {
			onLeftIconClick = () => window.history.back();
			leftIcon = 'arrow_back';
		}
		return (
			<AppBar title='Workout' leftIcon={leftIcon} rightIcon='settings' onLeftIconClick={ onLeftIconClick } />
		);
	}
}
