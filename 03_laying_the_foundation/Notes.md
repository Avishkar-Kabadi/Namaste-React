# JSX in React — Questions & Answers

## 1. What is JSX in React?

**Answer:**  
JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the UI. It allows writing HTML-like code inside JavaScript, making code more readable and declarative. JSX is compiled into regular JavaScript using tools like Babel.

It is not a part of React. React apps can be built even
without JSX but the code will become very hard to read.
It is not HTML inside JavaScript.
JavaScript engine cannot understand JSX as it only
understands ECMAScript


Example:

```javascript
const element = <h1>Hello, React!</h1>;
```

This is transformed into:

```javascript
const element = React.createElement("h1", null, "Hello, React!");
```

---

## 2. What is the difference between React.createElement and JSX?

**Answer:**  
`React.createElement()` is the core API that creates a React element (an object describing the UI). JSX is syntactic sugar for `React.createElement()` — it makes the code more concise and readable.

| Aspect      |     React.createElement() | JSX                                        |
| ----------- | ------------------------: | ------------------------------------------ |
| Syntax      | Verbose, pure JS function | HTML-like syntax inside JS                 |
| Readability |      Harder for large UIs | Easier to read and maintain                |
| Compilation |          Written directly | Compiled by Babel to React.createElement() |

Example:
// Without JSX

```javascript
const element = React.createElement("h1", { className: "title" }, "Hello");
```

// With JSX

```javascript
const element = <h1 className="title">Hello</h1>;
```

---

## 3. What are the benefits of using JSX?

**Answer:**

- Improved Readability: Looks similar to HTML, easier to visualize component structure.
- Inline Expressions: Allows embedding JavaScript expressions using `{}`.
- Prevents Injection Attacks: JSX automatically escapes values before rendering.
- Better Developer Experience: Helps catch errors during compilation via Babel.
- Faster Development: Reduces the need to call `React.createElement()` manually.

---

## 4. What happens behind the scenes when JSX is compiled?

**Answer:**  
Babel (a JavaScript compiler) converts JSX into `React.createElement()` calls. Each JSX tag becomes a React element object that describes what should appear on the UI. That object is then rendered into the DOM by ReactDOM.

Example transformation:

```javascript
const element = <h1>Hello React!</h1>;
```

⬇️ Compiled to:

```javascript
const element = React.createElement("h1", null, "Hello React!");
```

---

## 5. What is the role of Babel and Parcel in JSX?

**Answer:**

- Babel:

  - Transpiles JSX into plain JavaScript (`React.createElement` calls).
  - Converts ES6+ features (arrow functions, classes) into browser-compatible JS.

- Parcel (or Webpack):
  - Acts as a bundler — packages JS, CSS, and assets into optimized bundles.
  - Automatically runs Babel under the hood.
  - Supports hot module replacement and fast rebuilds.

Summary:
| Tool | Role |
|---|---|
| Babel | Converts JSX/ES6 → Browser-compatible JS |
| Parcel | Bundles, optimizes, and serves the React app |

---

## 6. What are Components in React?

**Answer:**  
Components are the building blocks of a React application. Each component represents a part of the UI and can be reused across the app.

Main types:

- Functional Components — written as JavaScript functions.
- Class Components — written as ES6 classes (older style).

Example:

```javascript
function Welcome() {
  return <h1>Welcome to React!</h1>;
}
```

---

## 7. What are Functional Components?

**Answer:**  
Functional components are components defined as JavaScript functions. They take `props` as input and return JSX. They can be stateless or stateful using hooks.

Example:

```javascript
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
```

Features:

- Simpler syntax
- Easier to test
- Use React Hooks (`useState`, `useEffect`) for state and lifecycle
- Better performance compared to class components

---

## 8. What is Composing Components in React?

**Answer:**  
Component composition means combining multiple small components to create a more complex UI. It follows React’s principle: "Build UIs from small, reusable pieces."

Example:

```javascript
function Header() {
  return <h1>Dashboard</h1>;
}

function UserInfo() {
  return <p>Welcome, User!</p>;
}

function Dashboard() {
  return (
    <div>
      <Header />
      <UserInfo />
    </div>
  );
}
```

Benefits:

- Code reusability
- Easier to maintain and debug
- Improved readability



## 9. Is JSX a valid JavaScript?

 **Answer:**
The answer is yes and no.
JSX is not a valid Javascript syntax as it’s not pure HTML or
pure JavaScript for a browser to understand. JS does not have
built-in JSX. The JS engine does not understand JSX because
the JS engine understands ECMAScript or ES6+ code


## 10. If the browser can’t understand JSX how is it still working?

**Anser:**
This is because of Parcel because “Parcel is a Beast”.
Before the code gets to JS Engine it is sent to Parcel and
Transpiled there. Then after transpilation, the browser gets the
code that it can understand.
Transpilation ⇒ Converting the code in such a format that the
browsers can understand.
Parcel is like a manager who gives the responsibility of
transpilation to a package called Babel.
Babel is a package that is a compiler/transpiler of JavaScript
that is already present inside ‘node-modules’. It takes JSX and
converts it into the code that browsers understand, as soon as
we write it and save the file. It is not created by Facebook.
Learn more about Babel on babeljs.io
JSX (transpiled by Babel) ⇒ React.createElement ⇒ ReactElement
⇒ JS Object ⇒ HTML Element(render)

## 11 What is the difference between HTML and JSX?

**Anser:**
JSX is not HTML. It’s HTML-like syntax.
Laying the Foundation! (Namaste-React) 7
HTML uses ‘class’ property whereas JSX uses ‘className’
property
HTML can use hypens in property names whereas JSX uses
camelCase syntax. 