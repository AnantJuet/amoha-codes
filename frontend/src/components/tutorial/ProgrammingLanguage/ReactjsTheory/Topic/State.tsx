import React from "react";

const State: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      State in React
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>ReactJS State</b> is a built-in object used to store and manage data that changes over time
      in a component. It allows React components to respond dynamically to user actions and application events.
    </p>

    <h2 className="text-2xl font-bold mt-6">Key Points About State</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>State is mutable and can be updated using <code>setState</code> or the <code>useState</code> hook</li>
      <li>When state changes, React automatically re-renders the component</li>
      <li>State helps control dynamic content like form inputs, UI toggles, and fetched data</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Creating State Object</h2>

    <p className="leading-relaxed mt-3">
      Creating a state in React is essential to building dynamic and interactive components.
      We can create a state object within the constructor of the class component.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Ford',
      // Example property in the state
    };
  }

  render() {
    return (
      <div>
        <h1>My Car</h1>
        <p>Brand: {this.state.brand}</p>
      </div>
    );
  }
}

export default MyComponent;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>The <code>MyComponent</code> class extends <code>React.Component</code></li>
      <li>Inside the constructor, it initializes the component's state with a <code>brand</code> property set to 'Ford'</li>
      <li>The <code>render()</code> method returns JSX that displays an <code>&lt;h1&gt;</code> heading with the text "My Car" and renders the component's content</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">State with useState Hook</h2>

    <p className="leading-relaxed mt-3">
      In functional components, we use the <code>useState</code> hook to manage state:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const [state, setState] = useState(initialState);`}</pre>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>state:</b> The current state value</li>
      <li><b>setState:</b> A function that is used to update the state</li>
      <li><b>initialState:</b> The initial value that the state will hold when the component is first rendered</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Updating State in React</h2>

    <p className="leading-relaxed mt-3">
      We are using the ES6 arrow function format to take the previous state and props of the
      component as parameters and update the counter.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">State vs Props</h2>

    <p className="leading-relaxed mt-3">
      While both state and props store data in React, they serve different purposes:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Aspect</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">State</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Props</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Definition</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Stores data that belongs to a component</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Data passed from a parent to a child component</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Mutability</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Can be changed within the component</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Read-only and cannot be changed by the child</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Control</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Controlled by the component itself</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Controlled by the parent component</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Best Practices for State Management</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Keep state as minimal as possible</li>
      <li>Do not duplicate state that can be computed from other state or props</li>
      <li>Lift state up to the common ancestor when multiple components need the same state</li>
      <li>Use immutable update patterns when updating state</li>
      <li>Consider using useReducer for complex state logic</li>
    </ul>
  </>
);

export default State;
