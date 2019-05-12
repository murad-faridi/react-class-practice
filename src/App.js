import React from 'react';
// import './App.css';

class Cities extends React.Component {
	render() {
		const { pakCities, pakProvinces } = this.props
		return (
			<ul>
				{
					pakCities.map((city, index) => <li key={index}>{city}</li>)
				}
				<li><strong>Provinces</strong></li>
				{
					pakProvinces.map((city, index) => <li key={index}>{city}</li>)
				}
			</ul>
		);
	}
}

class App extends React.Component {
	render() {
		const cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Quetta', 'Peshawer', 'Faisalabad']
		const provinces = ['Punjab', 'Sindh', 'KPK', 'Balochistan', 'Capital']
		return (
			<div>
				<Cities pakCities={cities} pakProvinces={provinces} />
			</div>
		);
	}
}

export default App;
