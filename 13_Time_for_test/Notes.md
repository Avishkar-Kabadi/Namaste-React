...existing code...

# Types of Testing (developer)

- Unit Testing
- Integration Testing
- End To End Testing (E2E)

## Setting up Testing in our App

- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure parcel to disable default Babel transpilation (if needed)
- Jest configuration (npm install --save-dev jest)
- Install jsdom environment (npm i --save-dev jest-environment-jsdom)
- Install @babel/preset-react and add it to Babel config
- Install @testing-library/jest-dom

---

## 🧪 What are Different Types of Testing?

Testing can generally be categorized into three main types based on scope and focus:

1. Unit Testing

   - Tests individual, isolated units (functions, classes, or components).
   - Tools: Jest.

2. Integration Testing

   - Verifies multiple parts/modules work together (interfaces and data flow).

3. End-to-End (E2E) Testing
   - Simulates real user scenarios across the full application stack.
   - Tools: Cypress, Playwright.

---

## 🧬 What is Enzyme?

- Enzyme is a React testing utility developed by Airbnb.
- Focus: Inspect, assert, and manipulate component output and internals.
- API: shallow, mount, render, instance(), setState(), etc.
- Status: Deprecated for modern React (17+). Usage discouraged for new projects; prefer React Testing Library.

---

## ⚖️ Enzyme vs React Testing Library (RTL)

- Philosophy:

  - Enzyme: Tests component internals (state, lifecycle).
  - RTL: User-centric — tests how users interact with the rendered DOM.

- Methods:

  - Enzyme: shallow(), mount(), instance(), setState().
  - RTL: getByRole(), getByText(), fireEvent, userEvent.

- Refactoring:

  - Enzyme: Fragile; tests break on implementation changes.
  - RTL: More robust; tests focus on visible behavior.

- Verdict:
  - Enzyme: Deprecated / less encouraged.
  - RTL: Recommended standard for modern React testing.

Summary: Enzyme tests the code; RTL tests the user experience.

---

## 🏎️ What is Jest and Why Use It?

- Jest is a JavaScript testing framework from Meta (Facebook).
- Role: Test runner, assertion library, and mocking library in one.
- Why use it:
  - Minimal config for React/Node projects.
  - Fast parallel test execution.
  - Built-in mocking and coverage reporting.
- Works well with React Testing Library (current recommended pairing).

---

## Quick Workflow Suggestion

1. Install Jest and React Testing Library.
2. Configure Babel to support JSX in tests (@babel/preset-react).
3. Use jsdom as the test environment for DOM-related tests.
4. Write unit tests with Jest + RTL (getBy\*, userEvent).
5. Add integration tests as needed.
6. Use Cypress/Playwright for E2E scenarios.

...existing code...

```//

```
