import React, { PureComponent } from 'react';

let interval = null;
const runTimeout = (doSomething) => {
	interval = setTimeout(doSomething, 500);
}
export default class AnimatePhoto extends PureComponent {
	state = {
		photoIndex: 0,
	}

  componentWillUnmount() {
  	window.clearTimeout(interval);
  }

	render() {
		const photos = this.props.photos || [];
		const photoIndex = this.state.photoIndex;
		let photoLink = photos[photoIndex];
		if (photos.length > 1) {
			runTimeout(() => {
				if (photoIndex === photos.length - 1) {
					this.setState({photoIndex: 0});
				} else {
					const _photoIndex = photoIndex + 1;
					this.setState({photoIndex: _photoIndex});
				}
			});
		}
		return (
			<img src={photoLink} alt="example" />
		);
	}
}
