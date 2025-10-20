# Web & React Fundamentals — Short Q&A

---

## 1. What is Emmet?
Emmet is a developer productivity tool that helps write HTML and CSS faster using abbreviations that expand into full code.

Example:
```html
div.container>ul>li.item*3
```

Expands to:
```html
<div class="container">
  <ul>
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
  </ul>
</div>
```

## 2. Difference between Library and Framework
| Aspect | Library | Framework |
|---|---:|---|
| Control | You call it | It calls your code |
| Flexibility | Flexible; use anywhere | Opinionated; defines structure |
| Purpose | Provides specific functionality | Provides a full application structure |
| Examples | React, jQuery, Axios | Angular, Django, Spring |
| Key Difference | You control the flow | Framework controls the flow (Inversion of Control) |

## 3. What is CDN? Why do we use it?
CDN (Content Delivery Network) is a group of distributed servers that deliver static assets quickly to users.

Why use it:
- Faster page loads
- Reduced latency
- Decreased server load
- Improved reliability

Example:
```html
<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
```

## 4. Why is React known as React?
Because React "reacts" to state or data changes and updates only the necessary parts of the UI using the Virtual DOM.

## 5. What is crossorigin in <script> tag?
Specifies how to handle cross-origin requests when loading external scripts.

Values:
- `anonymous` — no credentials sent
- `use-credentials` — sends cookies/auth headers

Example:
```html
<script src="react.js" crossorigin="anonymous"></script>
```

## 6. Difference between React and ReactDOM
| Feature | React | ReactDOM |
|---|---:|---|
| Purpose | Core library for creating UI components | Renders components to the DOM |
| Includes | Hooks, components, JSX logic | createRoot(), render() methods |
| Usage | Defines component logic | Handles rendering in the browser |

Example:
```javascript
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

## 7. Difference between react.development.js and react.production.js
| File | Use | Description |
|---|---:|---|
| react.development.js | Development | Includes debugging info and warnings |
| react.production.js | Production | Minified and optimized for performance |

Example:
```html
<!-- Development -->
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>

<!-- Production -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
```

## 8. What is async and defer in <script> tag?
Attributes that control how external JavaScript files are loaded and executed.

| Attribute | Download | Execute | Use case |
|---|---:|---:|---|
| async | In parallel with HTML parsing | Immediately after download | Independent scripts (e.g., analytics) |
| defer | In parallel with HTML parsing | After HTML parsing completes | DOM-dependent scripts |

Examples:
```html
<script src="analytics.js" async></script>
<script src="main.js" defer></script>
```