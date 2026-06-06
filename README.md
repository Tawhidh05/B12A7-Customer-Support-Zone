## 1. What is JSX and Why is it Used?

**JSX** stands for **JavaScript XML**. It is a syntax extension for JavaScript that allows developers to write HTML-like markup directly inside JavaScript code.

JSX is not valid JavaScript on its own — it gets transformed into regular JavaScript by a compiler like **Babel** before running in the browser. Under the hood, every JSX element becomes a `React.createElement()` call.

### Why JSX is Used

- Makes UI code **easier to read and write** by combining structure and logic in one place
- Allows developers to **visualize the UI** directly in the component file
- Reduces the need to write verbose `React.createElement()` calls manually
- Supports **embedding JavaScript expressions** directly inside markup using curly braces `{}`
- Encourages a **component-based** way of thinking about UI

---

## 2. What is the Difference Between State and Props?

**State** and **Props** are both used to manage and pass data in React, but they serve different purposes and behave differently.

### Props (Properties)

- Props are **inputs passed from a parent component to a child component**
- They are **read-only** — a child component cannot modify the props it receives
- Props make components **reusable and dynamic** by allowing different data to be passed each time
- They flow in **one direction** — from parent to child (unidirectional data flow)
- Changes in props from the parent will cause the child to **re-render**

### State

- State is **data owned and managed internally** by a component
- It is **mutable** — the component itself can update its own state
- When state changes, the component **automatically re-renders** to reflect the new value
- State is used for data that **changes over time** such as user input, toggles, counters, or fetched data
- State is **private** to the component unless it is lifted up and shared via props

### Key Differences

| | Props | State |
|---|---|---|
| Owned by | Parent component | The component itself |
| Mutable | ❌ Read only | ✅ Can be updated |
| Purpose | Pass data down | Track internal changes |
| Triggers re-render | ✅ Yes | ✅ Yes |
| Accessible by | Child component | Only the owning component |

---

## 3. What is the useState Hook and How Does it Work?

**useState** is a built-in React Hook that allows functional components to **create and manage state**.

Before hooks were introduced in React 16.8, only class components could have state. The `useState` hook brought this capability to functional components.

### How it Works

- `useState` is called inside a functional component and accepts an **initial value** as its argument
- It returns an **array of two items** — the current state value and a function to update it
- The **setter function** is used to update the state value
- Every time the state is updated using the setter, React **re-renders the component** with the new value
- The initial value is only used on the **first render** — after that, React keeps track of the current value

### Important Rules

- `useState` must be called at the **top level** of a component — not inside loops, conditions, or nested functions
- **Never mutate state directly** — always use the setter function
- When the new state depends on the previous state, it is best to pass a **callback function** to the setter to safely access the previous value
- State can hold any data type — numbers, strings, booleans, arrays, or objects

---

## 4. How Can You Share State Between Components?

React follows a **unidirectional data flow**, meaning data flows from parent to child. To share state between components, there are several strategies depending on the relationship between components.

### A) Lifting State Up

The most common pattern for sharing state between sibling components is to **move the state to their closest common parent**. The parent then passes the state value and the updater function down to the children as props.

- The parent **owns the state**
- Children can **read** the state via props
- Children can **update** the state by calling the setter function passed as a prop
- This keeps state in **one source of truth**

### B) Passing setState as a Prop

A parent can pass its **state setter function** down to a child as a prop. The child can then call this function to update the parent's state — which in turn updates any other component that reads that state.

This is the pattern used throughout this project — `setInProgressData`, `setResolvedData`, and `handleToggle` are all passed as props to child components.

### C) Context API

When state needs to be shared across **many deeply nested components**, passing props through every level (called **prop drilling**) becomes messy. The **React Context API** solves this by creating a global value that any component in the tree can access directly — without passing it through every parent.

- Useful for global data like themes, authentication, or language settings
- Avoids prop drilling across many levels
- Components **subscribe** to the context and re-render when the context value changes

### D) State Management Libraries

For very large applications, external libraries like **Redux**, **Zustand**, or **Recoil** provide more powerful and structured ways to manage and share state globally across the entire app.

---

## 5. How is Event Handling Done in React?

React uses a **synthetic event system** that wraps the browser's native events. This ensures consistent behavior across all browsers.

### How it Works

- Event handlers in React are written as **camelCase attributes** on JSX elements — for example `onClick`, `onChange`, `onSubmit`
- The value of the event attribute is always a **JavaScript function** — either defined separately or as an inline arrow function
- React attaches a **single event listener** at the root of the app and delegates events, rather than attaching listeners to every element directly

### Common Events

| Event | Trigger |
|---|---|
| `onClick` | When an element is clicked |
| `onChange` | When an input value changes |
| `onSubmit` | When a form is submitted |
| `onMouseEnter` | When the mouse enters an element |
| `onKeyDown` | When a key is pressed |

### The Event Object

Every event handler automatically receives a **synthetic event object** as its argument. This object contains useful information such as the target element, key pressed, or current input value.

### Important Methods

- **`e.preventDefault()`** — Stops the browser's default behavior, such as a page reload on form submission
- **`e.stopPropagation()`** — Stops an event from bubbling up to parent elements. Commonly used in modals to prevent closing when clicking inside the modal content

### Key Rules

- Always pass a **function reference** to event handlers — do not call the function directly with `()` unless you are wrapping it in an arrow function
- Use `e.stopPropagation()` when nested elements have their own click handlers and you don't want both to fire
- Use `e.preventDefault()` on form submissions to handle the logic manually in JavaScript

