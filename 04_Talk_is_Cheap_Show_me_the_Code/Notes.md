# Talk is Cheap — Show me the Code

## 1. Is JSX mandatory for React?

**Answer:**  
No, JSX is not mandatory in React. JSX is syntactic sugar for `React.createElement()` calls, making UI code more readable and declarative. You can write React components without JSX, though JSX is widely preferred.

Example without JSX:

```javascript
return React.createElement("h1", { className: "title" }, "Hello React");
```

Example with JSX:

```jsx
return <h1 className="title">Hello React</h1>;
```

---

## 2. Is ES6 mandatory for React?

**Answer:**  
No, ES6 is not strictly mandatory, but it’s highly recommended. Modern React codebases rely heavily on ES6+ features like arrow functions, classes, destructuring, modules (`import`/`export`), and `let`/`const`. Without ES6, writing React code becomes more verbose and harder to maintain.

---

## 3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

**Answer:**

- `{TitleComponent}` — Refers to the component variable or function itself (a reference), not its rendered output. (❌)
- `{<TitleComponent/>}` — Renders the component’s output. (✅)
- `{<TitleComponent></TitleComponent>}` — Same as the self-closing form, used when the component has children. (✅)

Example:

```javascript
const TitleComponent = () => <h1>Hello</h1>;

{
  TitleComponent;
} // ❌ Just a reference
{
  <TitleComponent />;
} // ✅ Renders <h1>Hello</h1>
{
  <TitleComponent></TitleComponent>;
} // ✅ Same as above
```

---

## 4. How can I write comments in JSX?

**Answer:**  
Inside JSX, use curly-braced comments:

```jsx
{
  /* This is a comment */
}
```

Outside JSX (plain JS), use `//` or `/* ... */` as usual.

---

## 5. What is `<React.Fragment></React.Fragment>` and `<>...</>`?

**Answer:**  
`<React.Fragment>` (or shorthand `<>...</>`) lets you group multiple JSX elements without adding extra nodes to the DOM.

Example:

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Subtitle</p>
  </>
);
```

Fragments avoid unnecessary wrapper elements like extra `<div>`s.

---

## 6. What is Virtual DOM?

**Answer:**  
The Virtual DOM (VDOM) is a lightweight in-memory representation of the real DOM maintained by React. When state changes:

- React updates the Virtual DOM.
- It diffs the new and old VDOM.
- Only the changed parts are updated in the real DOM.

This makes UI updates faster and more efficient than manipulating the DOM directly.

---

## 7. What is Reconciliation in React?

**Answer:**  
Reconciliation is React’s process of comparing the previous Virtual DOM tree with the new one and updating only the changed nodes in the real DOM. React’s diffing algorithm computes the minimal DOM operations needed for the update.

---

## 8. What is React Fiber?

**Answer:**  
React Fiber is the reconciliation engine introduced in React 16. It improves:

- Rendering performance (by splitting rendering into chunks)
- Priority-based updates (e.g., user input prioritized)
- Smooth animations and concurrency

Fiber makes React more responsive and interruptible.

---

## 9. Why do we need keys in React? When do we use them?

**Answer:**  
Keys help React identify which elements have changed, been added, or removed when rendering lists.

Usage example:

```jsx
{
  items.map((item) => <li key={item.id}>{item.name}</li>);
}
```

Without keys, React may re-render lists inefficiently and produce buggy reordering.

---

## 10. Can we use index as keys in React?

**Answer:**  
You can use the index as a key only for static lists (no additions, deletions, or reorderings). Avoid using index when list items change frequently or can be reordered — incorrect keys can cause wrong renders.

---

## 11. What is props in React?

**Answer:**  
Props (properties) are read-only inputs passed from a parent component to a child component.

Example:

```jsx
function Welcome({ name }) {
  return <h2>Hello, {name}</h2>;
}

<Welcome name="Wayne" />;
```

Props make components reusable and dynamic. They are immutable inside the child.

---

## 12. What is a Config Driven UI?

**Answer:**  
A Config Driven UI builds the UI based on configuration data (usually JSON) instead of hardcoded JSX.

Example config:

```javascript
const config = [
  { type: "text", label: "Name" },
  { type: "email", label: "Email" },
];
```

Render dynamically:

```jsx
{
  config.map((field) => (
    <input key={field.label} type={field.type} placeholder={field.label} />
  ));
}
```

Benefits:

- Highly reusable
- Easier to maintain
- No hardcoding for different layouts

Common in dashboards, form builders, and enterprise apps.
