import React from 'react';
// import './App.css';

/* 
*	Impotant Note:
*	Use Class when need to use "state"
*/

class Cities extends React.Component {
	state = {
		cities: this.props.pakCities
	}
	render() {
		return (
			<ul>
				{
					this.state.cities.map((city, index) => <li key={index}>{city}</li>)
				}
			</ul>
		);
	}
}

class App extends React.Component {
	render() {
		const cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Quetta', 'Peshawer', 'Faisalabad']
		return (
			<div>
				<Cities pakCities={cities} />
			</div>
		);
	}
}

export default App;
