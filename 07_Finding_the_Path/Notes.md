# Finding the Path — Notes

## 1. Various ways to add images into our App

There are 3 common ways to add images in a React app:

a) Import and use (for local images in `src/`)

```javascript
import logo from "./logo.png";

function App() {
  return <img src={logo} alt="Logo" />;
}
```

b) Use the `public` folder

```html
<img src="/logo.png" alt="Logo" />
```

Public folder images don’t need imports — just use the relative path from the public root.

c) Use online image URLs

```html
<img src="https://example.com/image.jpg" alt="Remote" />
```

---

## 2. What happens if we do `console.log(useState())`?

`useState()` returns an array with two elements: `[stateValue, setStateFunction]`. Logging it without an initial value shows:

```text
[undefined, ƒ]
```

Example:

```javascript
console.log(useState(0));
// Output: [0, ƒ]
```

---

## 3. How will `useEffect` behave if we don’t add a dependency array?

If you omit the dependency array, `useEffect` runs after every render (initial + every update).

```javascript
useEffect(() => {
  console.log("Runs every time component re-renders");
});
```

Warning: this can cause infinite loops if the effect updates state.

---

## 4. What is SPA (Single Page Application)?

An SPA loads a single HTML page and dynamically updates content as the user interacts. It avoids full page reloads; only parts of the UI change. React apps are SPAs by default.

Example: navigating between routes updates components without reloading the entire page.

---

## 5. Difference between Client-Side Routing and Server-Side Routing

|     Feature | Client-Side Routing          | Server-Side Routing                     |
| ----------: | ---------------------------- | --------------------------------------- |
| Page reload | No reload                    | Full page reload                        |
|  Handled by | Browser (e.g., React Router) | Server                                  |
|       Speed | Faster after first load      | Slower (reloads each page)              |
|     Example | React app navigating routes  | Traditional website with separate pages |

Client-side example (no reload):

```jsx
<Link to="/about">About</Link>
```

Server-side example (full reload):

```html
<a href="/about">About</a>
```

## How to create Routes/Routing in React with BrowserRouter

### step-1 create routes using createBrowserRoute

```react

import {createBrowserRoute} from "react-router-dom"

const AppRouter=()=>{[
  {
    path:'/'.
    element:<App/>
  },
  {
    path:'/login',
    element:<Login.>
  }
]}

export default AppRouter;
```
