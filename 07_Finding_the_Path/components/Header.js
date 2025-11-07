import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

    const [login, setLogin] = React.useState(false);
    const navigate = useNavigate();

    React.useEffect(() => {

    }, [login]);

    console.log("Header is re-rendered");


    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/FwS6zgoDlHymOLozVmU0bVBc8pEReirYhRNSJIrup10/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM5LzYzLzc4/LzM2MF9GXzIzOTYz/Nzg3Ml8yeUttWENS/OUdZOXlXeHp0eFNj/NUFBSTRiQld3YlFs/VC5qcGc" alt="Logo" />
            </div>
            <nav className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => navigate('/login')} > logout</button>
                </ul>

            </nav>
        </header >
    );
};

export default Header;
