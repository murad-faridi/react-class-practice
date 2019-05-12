import React from 'react';
// import './App.css';

function Cities(props) {
	const cities = props.pakCities
	return (
		<ul>
			{
				cities.map((city,index) => <li key={index}>{city}</li>)
			}
		</ul>
	);
}

function App() {
	const cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Quetta', 'Peshawer', 'Faisalabad']
	return (
		<div>
			<Cities pakCities={cities}/>
		</div>
	);
}

export default App;
