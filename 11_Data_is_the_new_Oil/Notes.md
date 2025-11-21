# Data is the New Oil — Notes

## 1. What is prop drilling?

Prop drilling means passing data from a parent component down to deeply nested child components, even if some intermediate components don't need that data — they just forward it.

Example:
Component A → B → C → D (D needs data, A passes it through B and C)

Problem:
Makes code messy and hard to maintain.

---

## 2. What is lifting the state up?

Lifting state up means moving shared state to the nearest common parent so multiple child components can read/update the same data.

Why:
When two or more components need the same state, keep the state in their parent and pass it down via props.

---

## 3. What is Context Provider and Context Consumer?

- Context Provider  
  A component that provides data (state/values) to all components inside it. Wraps part of the component tree.

  Example:

  ```jsx
  <UserContext.Provider value={user}>
    <App />
  </UserContext.Provider>
  ```

- Context Consumer  
  A component that reads/uses data from the context.

  Example using hook:

  ```javascript
  const user = useContext(UserContext);
  ```

---

## 4. If you don’t pass a value to the provider, does it take the default value?

Yes. If no value is provided to the Provider, the context uses the default value given when the context was created.

Example:

```javascript
const ThemeContext = createContext("light");

<ThemeContext.Provider>
  <Component />
</ThemeContext.Provider>;

// inside Component
const theme = useContext(ThemeContext); // "light"
```
