import React from 'react';
import { NavLink } from "react-router-dom";

import './Header.css';

const Header = () => (
    <nav className="HeaderNav">
        <NavLink to="/histories" className="HeaderLink" activeClassName="HeaderActiveLink">History</NavLink>
        <NavLink to="/payloads" className="HeaderLink" activeClassName="HeaderActiveLink">Payload</NavLink>
    </nav>
);

export default Header;
