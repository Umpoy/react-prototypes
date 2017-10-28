import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => {
	return (
		<ul className="nav nav-tabs mt-3">
			<li className="nav-item">
				<NavLink exact to="/" className="nav-link">Welcome</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to="/our_macarons" className="nav-link">Our Macarons</NavLink>
			</li>
			<li className="nav-item">
			    <NavLink to="/gifts_parties" className="nav-link">Gifts &amp; Parties</NavLink>
			</li>
			<li className="nav-item">
			    <NavLink to="/contact" className="nav-link">Contact</NavLink>
			</li>
		</ul>
	)
}