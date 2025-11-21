import { showToast } from "neon-alerts";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../utils/userSlice";
import "./styles.css";
const Login = () => {

    const [userInfo, setUserInfo] = React.useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userInfo),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Login failed!");
            }

            dispatch(register(data));
            setUserInfo({
                email: "",
                password: ""
            });

            showToast(data.message || "Login Successful!", { type: "success" });
            navigate('/');

        } catch (error) {
            console.log(error);

            showToast(error.message || "Login Failed!", { type: "error" });
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-300">
            <div className="bg-white p-8 rounded-md shadow-xl  w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="password"
                        name="password"
                        value={userInfo.password}
                        required
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-black text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                        Sign In
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-4">
                    Don't have an account?{" "}
                    <span className="text-blue-500 cursor-pointer hover:underline">
                        <Link to="/register">Sign Up</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login;