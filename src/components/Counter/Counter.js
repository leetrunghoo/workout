import React from 'react';

export default function Counter({nextStepName, count, photos}) {
	return (
		<div style={{textAlign: 'center'}}>
			<h3 className="color-primary">{nextStepName}</h3>
			<h1 className="color-primary-dark">{count}</h1>
			{
				photos && photos.length > 0 ? 
					<img src={photos[0]} alt="next step" />
					: ''
			}
		</div>
	)
} 
