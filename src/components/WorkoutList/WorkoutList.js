import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {workoutListData} from '../../data';

export default class WorkoutList extends Component {
	render() {
		return (
			<div className="center-inline">
				<div className="workout-warper">
				{
					workoutListData.map((workout, i) => (
						<Card raised className="workout" key={i}>
					    <CardMedia
					      aspectRatio="wide"
					      image={workout.image}
					      className="bg-contain"
					    />
					    <CardTitle
					      title={workout.title}
					      subtitle={workout.subTitle}
					    />
					    <CardText>{workout.description}</CardText>
					    <CardActions className="center-inline">
					      <Button label="Start!" raised primary/>
					    </CardActions>
					  </Card>
					))
				}
				</div>
			</div>
		);
	}
}
