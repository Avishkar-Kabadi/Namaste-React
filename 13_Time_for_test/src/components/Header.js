import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { logout } from "../../utils/userSlice";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const isOnline = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    // const user = useSelector((store) => store.user.user);
    // const [name, number] = user ? user.split("@")[0].split(/(\d+)/).filter(Boolean) : [""];
    const dispatch = useDispatch();


    // const loggedInUser = React.useContext(userContext);

    const handleAuth = () => {
        try {
            dispatch(logout())
            navigate("/");
        } catch (error) {

        }

    };

    return (
        <header className="flex items-center justify-between bg-amber-400 shadow-lg px-4 py-3 md:px-8 sticky top-0 z-50">
            {/* Logo */}
            <Link to="/" className="flex items-center">
                <img
                    className="w-20 rounded-lg"
                    src="https://imgs.search.brave.com/FwS6zgoDlHymOLozVmU0bVBc8pEReirYhRNSJIrup10/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM5LzYzLzc4/LzM2MF9GXzIzOTYz/Nzg3Ml8yeUttWENS/OUdZOXlXeHp0eFNj/NUFBSTRiQld3YlFs/VC5qcGc"
                    alt="App Logo"
                />
            </Link>

            {/* Hamburger (Mobile) */}
            <button
                className="md:hidden text-xl"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                ☰
            </button>

            {/* Navigation Links */}
            <nav
                className={`absolute left-0 w-full bg-amber-400 top-16 shadow-md transition-all duration-200
    md:static md:w-auto md:bg-transparent md:shadow-none
    ${menuOpen ? "block" : "hidden md:block"}`}
            >
                <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0 md:items-center">
                    <li className="px-2 text-sm md:text-base">
                        Online Status: {isOnline ? "🟢" : "🔴"}
                    </li>
                    <li className="px-2 hover:text-green-700">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2 hover:text-green-700">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2 hover:text-green-700">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2 hover:text-green-700">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2 hover:text-green-700">
                        <Link to="/cart">Cart 🛒 :{cartItems.length}</Link>
                    </li>

                </ul>
            </nav>


            {/* Login/Logout Button */}
            <div className="hidden md:block">
                <button
                    onClick={handleAuth}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors"
                >
                    Logout
                </button>

                {/* <p>{name}</p> */}
            </div>
        </header>
    );
};

export default Header;
