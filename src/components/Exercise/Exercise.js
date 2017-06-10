import React from 'react';

import AnimatePhoto from '../AnimatePhoto/AnimatePhoto';

export default function Exercise({data, count}) {
	return (
		<div className="exercise">
			<h3 className="color-primary">{data ? data.name : ''}</h3>
			<h1>{count}</h1>
			{
				<AnimatePhoto photos={data.photos} />
			}
		</div>
	)
} 
