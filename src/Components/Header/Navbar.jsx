import React, { useState } from 'react';
import '../../App.css';

function Navbar({ username }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLogout = () => {
        alert('Sesión cerrada');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/logo.png" alt="Logo" />
                <span className="navbar-company-name">Mi Empresa</span>
            </div>
            <div className="navbar-user">
                <span className="navbar-welcome">
                    <h1>Bienvenido, {username}</h1>
                </span>
                <div className="navbar-menu">
                    <button className="menu-toggle" onClick={toggleMenu}>
                        ▼
                    </button>
                    {menuOpen && (
                        <ul className="menu-dropdown">
                            <li onClick={handleLogout}>Cerrar sesión</li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar