import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './Test.css';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// const cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Quetta']

/*
// Method 1
const DisplayByElement = React.createElement('ul', {
    className : 'colorRed'
},
    cities.map(city => React.createElement('li', {
        key: city
    }, city))
)
ReactDOM.render(DisplayByElement, document.getElementById('root'));
*/

/*
// Method 2
const DisplayElementAndJSX = React.createElement('ul', {
    className: 'colorGreen'
},
    cities.map(city => <h1 key={city}>{city}</h1>)
)
ReactDOM.render(DisplayElementAndJSX, document.getElementById('root'));
*/

/*
// Method 3
const DisplaybyJSX = <ul>
                        {
                            cities.map(city => <li key={city}>{city}</li>)
                        }
                    </ul> 
ReactDOM.render(DisplaybyJSX, document.getElementById('root'));
*/