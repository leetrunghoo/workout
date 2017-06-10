import React, { PureComponent } from 'react';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import { List, ListSubHeader, ListItem } from 'react-toolbox/lib/list';

export default class LeftSidebar extends PureComponent {
	render() {
		return (
			<NavDrawer
				active={this.props.drawerActive}
				permanentAt='xxxl'
        onOverlayClick={this.props.toggleDrawerActive}
      >
        <List selectable ripple>
  				<ListSubHeader caption='List of Exercises' />
  				<ListItem
			      avatar='/img/jumping-jack_1.svg'
			      caption='Jumping Jack'
			      className='bg-white'
			    />
  				<ListItem
			      avatar='/img/wall-sit.svg'
			      caption='Wall Sit'
			      className='bg-white'
			    />
		    </List>
      </NavDrawer>
		);
	}
}
