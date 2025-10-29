

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import Header from "./Header";
import Practice from "./Practice";


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
        <Header />
        {jsxHeading}
        <Title />  {/* Component Composition - Putting components inside components */}
        {Title()} {/* Invoking component as a normal function */}
        <h3>{100 + 200}</h3> {/* JS expression inside JSX */}
        <h2 className="heading">This is a React function component</h2>
        <Practice />
    </>

);


// Assignment 

const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div",
        { id: "child2" },
        [React.createElement("h1", {}, "I am h1 tag inside child2 div"),
        React.createElement("h2", {}, "I am h2 tag inside child2 div")],
        React.createElement("h3", {}, "I am h3 tag inside child2 div")

    )

);


const parentJSX = (
    <div id="parentJSX">
        <div id="child2JSX">
            <h1>I am h1 tag inside child2JSX div</h1>
            <h2>I am h2 tag inside child2JSX div</h2>
            <h3>I am h3 tag inside child2JSX div</h3>
        </div>
    </div>
);

function TitleComponent() {
    return (
        <div className="title" id="header-section" style={{ textAlign: "center" }}>
            <h1 style={{ color: "blue" }}>This is H1</h1>
            <h2 title="subtitle">This is H2</h2>
            <h3 data-level="heading">This is H3</h3>
        </div>
    );
}






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);