# Lets get Hooked — Notes

## 1. Difference between Named Export, Default Export, and `* as` Export

Answer:  
In JavaScript modules:

- Named Export: Export multiple items by name. Import using the same names inside curly braces.

  ```javascript
  // export
  export const add = () => {};

  // import
  import { add } from "./file";
  ```

- Default Export: Export a single main value per file; can be imported with any name.

  ```javascript
  // export
  export default add;

  // import
  import myAdd from "./file";
  ```

- `* as` Export (Namespace Import): Import all named exports together as an object.
  ```javascript
  import * as math from "./file";
  math.add();
  ```

Summary:

- Named → many exports
- Default → one main export
- `* as` → grouped imports under one name

---

## 2. Importance of config.js file

Answer:  
`config.js` stores configuration constants (API URLs, environment variables, keys) in one place. This centralization keeps code clean and makes updates easy — e.g., change the API URL once in `config.js` instead of many files.

---

## 3. What are React Hooks?

Answer:  
React Hooks (introduced in React 16.8) are functions that let functional components use state, lifecycle, and other React features without classes. Common hooks: `useState`, `useEffect`, `useContext`, `useRef`. Hooks improve simplicity, reusability, and testability.

---

## 4. Why do we need the useState Hook?

Answer:  
`useState` adds state to functional components. It stores data that changes over time and triggers re-renders on updates.

Example:

```javascript
import { useState } from "react";

const [count, setCount] = useState(0);

// count holds current value, setCount updates it
```

---

## Quick Recap

| Question                | Short Key Answer                                                    |
| ----------------------- | ------------------------------------------------------------------- |
| Named vs Default Export | Named → many exports; Default → one export; `* as` → grouped import |
| config.js               | Stores constants like API URLs; central config for maintainability  |
| React Hooks             | Functions that bring state & lifecycle to functional components     |
| useState                | Hook to manage dynamic state and trigger re-render                  |
