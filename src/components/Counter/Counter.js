import React from 'react';

export default function Counter({nextStepName, count}) {
	return (
		<div style={{textAlign: 'center'}}>
			<h3 className="color-primary">{nextStepName}</h3>
			<h1 className="color-primary-dark">{count}</h1>
		</div>
	)
} 
