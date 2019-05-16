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
	// state = {
	// 	cities: ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Quetta', 'Peshawer', 'Faisalabad']
	// }
	// changeTheState = () => {
	// 	this.setState(
	// 		(preState) => ({ cities: ['Mumbai', 'Patna', 'Amritsar', 'Dehli'] }) // Best Practice to use callback function in the setState too
	// 	)
	// }
	render() {
		return (
			<div>
				{/* <Cities pakCities={this.state.cities} changeTheState={this.changeTheState} /> */}
				{<Components />}
			</div>
		);
	}
}

class Form extends React.Component {
	state = { first_name: "", last_name: "" }
	
	whenChange = (event) => {
		console.log(event.target)
		const {name, value} = event.target
		this.setState({ [name]: value })
	}
	render() {
		return (
			<div className="col-sm-4">
				<div className="form-group mt-4">
					<input type="text" name="first_name" value={this.state.first_name} onChange={this.whenChange} placeholder="First Name" className="form-control" />
					<p>{this.state.first_name}</p>
					<input type="text" name="last_name" value={this.state.last_name} onChange={this.whenChange} placeholder="Last Name" className="form-control" />
					<p>{this.state.last_name}</p>
				</div>
			</div>
		);
	}
}

export default App;

class Components extends React.Component {
	state = { number: 0 }

	componentWillUnmount() {
		console.log("bye bye")
	}

	componentDidMount() {
		setInterval(() => {
			this.setState(() => ({
				number: Math.ceil(Math.random() * 1000)
			}))
		}, 2000);
	}
	render() {
		return (
			<ChildComponent num={this.state.number}/>
		)
	}
}

class ChildComponent extends React.Component {
	state = { text: this.props.num }

	static getDerivedStateFromProps(props) {
		return ({
			text: props.num
		})
	}
	render() {
		return (
			<div>
				<h1>The number is {this.state.text}</h1>
			</div>
		)
	}
}
