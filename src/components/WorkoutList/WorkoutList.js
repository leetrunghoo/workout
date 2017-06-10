import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-toolbox/lib/button/Button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

import { workoutListData } from '../../data/workoutList';

export default class WorkoutList extends PureComponent {
	render() {
		return (
			<div className="center-inline">
				<div className="workout-warper">
				{
					workoutListData.map(workout => (
						<Card raised className="card-workout" key={workout.id}>
					    <CardMedia
					      aspectRatio="wide"
					      image={workout.img}
					      className="bg-contain"
					    />
					    <CardTitle
					      title={workout.title}
					      subtitle={workout.subTitle}
					    />
					    <CardText>{workout.description}</CardText>
					    <CardActions className="center-inline">
					      <Link to={workout.id}><Button label="Start!" raised primary /></Link>
					    </CardActions>
					  </Card>
					))
				}
				</div>
			</div>
		);
	}
}
