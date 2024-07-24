import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = ({ active }) => {

    return (
        <div className='nav-container'>
            <nav className="navbar">
                <div className="nav-background">
                    <ul className="nav-list">
                        {['home', 'journal', 'projects', 'about'].map(item => (
                            <li key={item} className={`nav-item ${active === item ? 'active' : ''}`}>
                                <Link to={`/${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
