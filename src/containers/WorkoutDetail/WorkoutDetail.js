import React, { PureComponent } from 'react';
// import { Link } from 'react-router-dom';
import { workoutListData } from '../../data/workoutList';
import Counter from '../../components/Counter/Counter';
import Exercise from '../../components/Exercise/Exercise';
import { speak } from '../../helpers/util';

let timeout = null;
const countBack = (counter, countCallback, doneCallback) => {
  if (counter > 0) {
    const _counter = counter - 1;
    timeout = setTimeout(() => countCallback(_counter), 1000);
  } else {
  	doneCallback();
  }
}

export default class WorkoutDetail extends PureComponent {
	state = {
		workoutData: [],
		stepActive: 0,
		playing: false,
		counterWaiting: 10,
		counterExercise: 30,
		done: false,
	}
  componentDidMount() {
		const workoutData = workoutListData.find(workout => workout.id === this.props.match.params.id);
		this.setState({
			workoutData,
			stepActive: 0,
		});
		if (workoutData) {
			speak(`Starting with ${workoutData.steps[0].name}`);
		}
  }

  componentDidUpdate() {
  	const { playing, workoutData, stepActive, counterWaiting, counterExercise } = this.state;
  	if (!playing) {
	  	countBack(
	  		counterWaiting, 
	  		(second) => this.setState({
					counterWaiting: second,
				}),
				() => this.setState({
					playing: true,
					counterExercise: workoutData.steps[stepActive].times,
				})
			);
	  } else {
			countBack(
				counterExercise, 
				(second) => this.setState({
					counterExercise: second,
				}),
				() => {
					if (stepActive < workoutData.steps.length - 1) {
						const _stepActive = stepActive + 1;
						this.setState({
							playing: false,
							counterWaiting: workoutData.waitingTimes,
							stepActive: _stepActive,
						});
					} else {
						this.setState({
							playing: false,
							done: true,
						})
					}
				}
			);
		}
  }

  componentWillUnmount() {
  	window.clearTimeout(timeout);
  }

	render() {
		const { done, playing, counterWaiting, counterExercise, workoutData, stepActive } = this.state;
		const step = workoutData.steps ? workoutData.steps[stepActive] : {};
		if (!playing && counterWaiting <= 3) {
			const message = counterWaiting || 'go';
			speak(message);
		}
		if (playing && counterExercise <= 3) {
			let message = counterExercise;
			if (counterExercise === 0) {
				const nextStep = workoutData.steps[stepActive+1];
				if (nextStep) {
					message = `next, ${nextStep.name}`;
				}
			}
			speak(message);
		}
		if (done) {
			speak("Congratulation! You've finished. Want to try again?");
		}
		return (
			<div className="workout-detail">
				{
					done ? 
						<div>Congratulation! You've finished. Want to try again?</div>
					: (
							!playing ? 
								<Counter 
									nextStepName={stepActive ? `Next: ${step.name}` : `Start with: ${step.name}`}
									count={counterWaiting}
									photos={step.photos}
								/>
							: <Exercise data={step} count={counterExercise} />
						)
				}
			</div>
		);
	}
}
