import React from 'react';
// import './App.css';
import PropTypes from 'prop-types';

/* 
*	Impotant Note:
*	Use Class when need to use "state"
*/

class Cities extends React.Component {
	static propTypes = {
		pakCities: PropTypes.array
	}
	render() {
		return (
			<div>
				<ul>
					{
						this.props.pakCities.map((city, index) => <li key={index}>{city}</li>)
					}
				</ul>
				<button onClick={this.props.changeTheState}>Change the State</button>
			</div>
		);
	}
}

class App extends React.Component {
	state = {
		cities: ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Quetta', 'Peshawer', 'Faisalabad']
	}
	changeTheState = () => {
		this.setState(
			(preState) => ({ cities: ['Mumbai', 'Patna', 'Amritsar', 'Dehli'] }) // Best Practice to use callback function in the setState too
		)
	}
	render() {
		return (
			<div>
				<Cities pakCities={this.state.cities} changeTheState={this.changeTheState} />
			</div>
		);
	}
}

export default App;
