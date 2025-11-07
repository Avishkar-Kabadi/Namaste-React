import React from "react";

const User = ({ user }) => {

    React.useEffect(() => {
        const timer = setInterval(() => {
            console.log("Namaste");

        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className="user-card">
            <h2>Name: {user.name}</h2>
            <h3>Location: {user.location}</h3>
            <h4>Contact: avishkarkabadi@gmail.com</h4>

        </div>
    )
}

export default User;