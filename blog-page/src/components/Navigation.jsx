import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Ministry_of_Truth_Insignia.png'; // Replace with the actual path to your logo file

const Navigation = () => (
<nav>
<div className="navbar-container">
    <Link to="/">
    <img src={logo} alt="Helldivers Logo" className="navbar-logo" />
    </Link>
    <ul className="navbar-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    </ul>
</div>
</nav>
);

export default Navigation;

