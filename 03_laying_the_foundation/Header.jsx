import { FaUserCircle } from "react-icons/fa";


const Header = () => {
  return (
    <header className="header">
      {/* Left Section - Logo */}
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="Logo"
        />
        <h2>MyApp</h2>
      </div>

      {/* Middle Section - Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      {/* Right Section - User Icon */}
      <div className="user-icon">
        <FaUserCircle size={30} />
      </div>
    </header>
  );
};

export default Header;
