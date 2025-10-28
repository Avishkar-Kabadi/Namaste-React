

import React from "react";
import ReactDOM from "react-dom/client";


// using React.createElement
const heading = React.createElement("h1",
    { id: "title", key: "heading" },
    "Namaste, React!"
);

//using JSX
// JSX is not HTML, it's a syntax extension to JavaScript/it is HTML like syntax or XML like syntax
//React component
const jsxHeading = <h1 id="heading">React using JSX (JSX component)</h1>


// JSX => React.createElement => ReactElement - JS Object => HTML(DOM API)

//JS does not understand JSX, so under the hood, Babel transpiles JSX into React.createElement calls
// The above jsxHeading is transpiled to the below code by Babel
// Babel is a JS compiler that converts modern JS code into backwards compatible version of JS code



const Title = () => {
    return <h1>Namaste React using JSX </h1>
}

// React Function Component
// A normal JS function that returns JSX know as React Function Component
const HeadingComponent = () => (
    <>
        {jsxHeading}
        <Title />  {/* Component Composition - Putting components inside components */}
        {Title()} {/* Invoking component as a normal function */}
        <h3>{100 + 200}</h3> {/* JS expression inside JSX */}
        <h2 className="heading">This is a React function component</h2>
    </>

);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);