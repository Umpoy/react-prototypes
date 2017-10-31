import React from 'react';
import puppy from './images/puppy.jpg';
import './scrapbook.css';


export default props => {
	return (
		<div className="scrapbook-container">
			<img src={puppy}/>
		</div>
	)
}