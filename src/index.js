import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => Math.ceil(Math.random() * 1000);

const greeting = (u) =>{
	let response = (
	<div className="container">
		<h1>Hello, {u.name}</h1>
		<h2 className="text-muted">Your lucky number is: {u.luckyNumber}</h2>
	</div>
	);
	return response
} 

const user = {
	name: 'TM87 Master',
	luckyNumber: luckyNumber()
}

ReactDOM.render(
    greeting(user),

    document.getElementById('root')
);
