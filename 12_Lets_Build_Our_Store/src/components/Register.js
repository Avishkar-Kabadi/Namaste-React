import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../utils/userSlice";
import { showAlert, showToast } from "neon-alerts";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = React.useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });




    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            });

            const data = await response.json();

            dispatch(register(data));

            setUserInfo({
                name: "",
                email: "",
                phone: "",
                password: ""
            });

            showToast(data.message || "Registration Successful!", { type: "success" });

            navigate('/');
        } catch (error) {
            showToast(error.message || "Registration Failed!", { type: "error" });
        }
    };




    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({ ...prev, [name]: value }));
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-yellow-300">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={userInfo.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                        type="email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                        type="text"
                        name="phone"
                        value={userInfo.phone}
                        onChange={handleChange}
                        required
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <input
                        type="password"
                        name="password"
                        value={userInfo.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    <button
                        type="submit"
                        className="mt-4 bg-black text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-sm text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <span className="text-blue-500 cursor-pointer hover:underline">
                        <Link to="/login">Sign In</Link>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
