import React, { useState } from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLogout = () => {        
        localStorage.removeItem('authToken');
        window.location.reload();
    };

    const data = JSON.parse(localStorage.getItem('authToken'));

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/src/Assets/img/logo.jpg" alt="Logo" className='image_logo'/>
                <span className="navbar-company-name">Reposteria Chefcito</span>
                <span className="navbar-welcome">
                    <Link to="/home">/Productos</Link>
                </span>
            </div>
            <div className="navbar-user">                
                <span className="navbar-welcome">
                    <h1>Bienvenido {data.userName}</h1>
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