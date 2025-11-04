# Exploring the World — Notes

## 1. What is a Microservice?

A Microservice is a small, independent service that performs one specific business function.  
Each microservice runs on its own, can be developed and deployed separately, and communicates with other services through APIs.

## 2. What is Monolith architecture?

A Monolith architecture is a single, large application where all components (UI, business logic, database) are combined into one unit.  
If one part fails or needs updating, the entire application must be redeployed.

## 3. Difference between Monolith and Microservice

|     Feature | Monolith               | Microservice                         |
| ----------: | ---------------------- | ------------------------------------ |
|   Structure | Single codebase        | Multiple small services              |
|  Deployment | Whole app redeployed   | Independent deployment               |
| Scalability | Hard to scale parts    | Easy to scale specific services      |
| Maintenance | Complex                | Easier and modular                   |
|  Technology | Usually one tech stack | Can use different stacks per service |

## 4. Why do we need a useEffect Hook?

The `useEffect` Hook is used in React to perform side effects like fetching data, updating the DOM, or setting up timers. It runs after the component renders.

Example:

```javascript
useEffect(() => {
  fetchData();
}, []); // [] runs once after initial render
```

## 5. What is Optional Chaining?

Optional Chaining (`?.`) allows safe access to nested object properties without causing errors if a property is `undefined` or `null`.

Example:

```javascript
console.log(user?.address?.city); // returns undefined instead of throwing an error
```

## 6. What is Shimmer UI?

Shimmer UI (or Skeleton Loading) shows a placeholder or animated preview while real data is loading. It improves user experience by indicating that content is on the way.

## 7. Difference between JS Expression and JS Statement

|       Type | Description        | Example                                     |
| ---------: | ------------------ | ------------------------------------------- |
| Expression | Produces a value   | `2 + 2`, `name.toUpperCase()`               |
|  Statement | Performs an action | `if(condition) { ... }`, `for(...) { ... }` |

Note: In JSX you can only use expressions, not statements.

## 8. What is Conditional Rendering (with example)?

Conditional Rendering means displaying different UI based on a condition.

Example:

```jsx
{
  isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>;
}
```

React renders UI depending on the value of `isLoggedIn`.

## 9. What is CORS?

CORS (Cross-Origin Resource Sharing) is a browser security feature that restricts web pages from making API requests to different domains.  
Servers specify who can access resources via response headers, e.g.:

```
Access-Control-Allow-Origin: *
```

## 10. What is async and await?

`async` and `await` are used to handle asynchronous operations (like API calls) in a simpler, synchronous-looking way compared to `.then()` chains.

Example:

```javascript
async function getData() {
  const res = await fetch("/api/data");
  const json = await res.json();
  console.log(json);
}
```

## 11. What is the use of `const json = await data.json();` in `getRestaurants()`?

After fetching data from an API, `data.json()` converts the raw response into a JavaScript object.  
`await` ensures the conversion completes before storing it in `json`.

Example:

```javascript
const data = await fetch("/api/restaurants");
const json = await data.json(); // converts response to usable JS object
```
