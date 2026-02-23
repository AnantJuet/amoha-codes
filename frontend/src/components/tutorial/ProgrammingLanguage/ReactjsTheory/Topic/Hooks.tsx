import React from "react";

const Hooks: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Introduction to Hooks
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      In React, <b>Hooks</b> are functions that allow you to manage state and perform side effects
      without the involvement of class components. Hooks were introduced in v16.8 of React and
      they can be accessed only through functional components but not through class components
      (Hooks were specifically designed for that). Hooks allow you to "hook into" React state
      and lifecycle features from functional components.
    </p>

    <h2 className="text-2xl font-bold mt-6">What are React Hooks?</h2>

    <p className="leading-relaxed mt-3">
      React Hooks are functions that allow you to use state and other React features without
      writing a class. Prior to Hooks, stateful logic in React components was primarily encapsulated
      in class components using the <code>setState</code> method. Hooks provide a more functional
      approach to state management and enable the use of lifecycle methods, context, and other
      React features in functional components.
    </p>

    <p className="leading-relaxed mt-3">
      <b>Note:</b> React Hooks cannot be used inside of class components.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why React Hooks?</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Simplified Logic:</b> Hooks eliminate the need for class components, reducing boilerplate
        code and making components easier to understand and maintain.
      </li>
      <li>
        <b>Reusability:</b> With Hooks, you can extract stateful logic into custom hooks and reuse
        it across multiple components, promoting code reuse and modularity.
      </li>
      <li>
        <b>Improved Performance:</b> Hooks optimize the rendering process by allowing React to
        memoize the state and only re-render components when necessary.
      </li>
      <li>
        <b>Better Testing:</b> Functional components with Hooks are easier to test compared to
        class components, as they are purely based on input and output.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Rules of React Hooks</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Hooks should be called only at the top level</li>
      <li>Do not call hooks conditionally and inside a loop</li>
      <li>Hooks should be called only in a functional component but not through regular JavaScript functions</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Traditional Way vs Hooks</h2>

    <h3 className="text-xl font-semibold mt-4">Managing State with Class Component (Traditional)</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { Component } from 'react';

export default class Incrementor extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Managing State with Hooks (Modern)</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState } from 'react';

function Incrementor() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
    </div>
  );
}

export default Incrementor;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Types of Hooks</h2>

    <h3 className="text-xl font-semibold mt-4">useState</h3>
    <p className="leading-relaxed mt-2">
      State Hook allows us to manage component state directly within functional components,
      without the necessity of class components. State in React refers to any data or property
      that is dynamic and can change over time.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const [state, setState] = useState(initialState);`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">useEffect</h3>
    <p className="leading-relaxed mt-2">
      Effect Hook allows you to perform side effects in functional components. Side effects include
      data fetching, subscriptions, or manually changing the DOM.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`useEffect(() => {
  // Side effect code here
  return () => {
    // Cleanup code here
  };
}, [dependencies]);`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">useReducer</h3>
    <p className="leading-relaxed mt-2">
      An alternative to useState for complex state logic. It is preferred when you have complex
      state updates that involve multiple sub-values.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const [state, dispatch] = useReducer(reducer, initialState);`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">useLayoutEffect</h3>
    <p className="leading-relaxed mt-2">
      Similar to useEffect but fires synchronously after all DOM mutations. Use this for
      reading layout from the DOM and synchronously re-rendering.
    </p>

    <h2 className="text-2xl font-bold mt-6">Features of React Hooks</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Functional Components:</b> Allow using state and lifecycle methods in functional components without needing class syntax.</li>
      <li><b>Reusability:</b> Promote reusability of stateful logic by encapsulating it in custom hooks.</li>
      <li><b>Simplified Lifecycle:</b> Offer useEffect hook for handling side effects, replacing componentDidMount, componentDidUpdate, and componentWillUnmount.</li>
      <li><b>Clean Code:</b> Reduce boilerplate and improve readability by removing class components and HOCs.</li>
      <li><b>Improved Performance:</b> Optimize rendering performance by memoizing values with useMemo and callbacks with useCallback.</li>
      <li><b>Easier Testing:</b> Simplify unit testing of components with hooks by decoupling logic from the UI.</li>
    </ul>
  </>
);

export default Hooks;
