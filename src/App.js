import React from 'react';
// import './App.css';

function Cities() {
	const cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Quetta', 'Peshawer', 'Faisalabad']
	return (
		<ul>
			{
				cities.map((city,index) => <li key={index}>{city}</li>)
			}
		</ul>
	);
}

function App() {
	return (
		<div>
			<Cities />
			<Cities />
		</div>
	);
}

export default App;
