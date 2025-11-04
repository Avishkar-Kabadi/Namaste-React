import Logo from "../Assets/logo.jpg";
import React from "react";

const Header = () => {

    const [login, setLogin] = React.useState(false);


    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/FwS6zgoDlHymOLozVmU0bVBc8pEReirYhRNSJIrup10/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM5LzYzLzc4/LzM2MF9GXzIzOTYz/Nzg3Ml8yeUttWENS/OUdZOXlXeHp0eFNj/NUFBSTRiQld3YlFs/VC5qcGc" alt="Logo" />
            </div>
            <nav className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => setLogin(prev => !prev)}>{login ? "logout" : "login"}</button>
                </ul>
                
            </nav>
        </header>
    );
};

export default Header;
