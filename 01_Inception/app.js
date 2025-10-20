const heading1 = React.createElement("h1", { id: "heading1", xyz: "abc" }, "Hello World from React");
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading1);



/* 
<div id="parent">
    <div id="child">
        <h1>I am h1 tag inside child1 div</h1>
        <x  h2>I am h2 tag inside child1 div</h2>
    </div>
</div>
*/


const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1",
            {},
            "I am h1 tag inside child1 div"),
        React.createElement("h2",
            {},
            "I am h2 tag inside child1 div")]
    ), React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1",
            {},
            "I am h1 tag inside child2 div"),
        React.createElement("h2",
            {},
            "I am h2 tag inside child2 div")]
    )]
);



// To Avoid this nested structure we use JSX

console.log(parent);


const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);