import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = ({ active }) => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div className={`nav-container ${visible ? '' : 'nav-hidden'}`}>
            <nav className="navbar">
                <div className="nav-background">
                    <ul className="nav-list">
                        {['home', 'articles', 'projects', 'about'].map(item => (
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
