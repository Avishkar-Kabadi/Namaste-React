import Logo from "../Assets/logo.jpg";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img className="logo" src={Logo} alt="Logo" />
            </div>
            <nav className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
