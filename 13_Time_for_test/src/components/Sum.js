import React from "react";

// export const sum = (a, b) => {
//     return a + b;
// }



export const Sum = () => {
    const [message, setMessage] = React.useState(false);

    return <button onClick={() => setMessage(prev => !prev)} >{message ? "Logout" : "Login"}</button>


}


export default Sum;