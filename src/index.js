import React from 'react';
import ReactDOM from 'react-dom';
import './Test.css';

const cities = ['Faisalabad', 'Lahore', 'Karachi', 'Islamabad', 'Quetta']

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

// Method 3
const DisplaybyJSX = <ul>
                        {
                            cities.map(city => <li key={city}>{city}</li>)
                        }
                    </ul> 
ReactDOM.render(DisplaybyJSX, document.getElementById('root'));
