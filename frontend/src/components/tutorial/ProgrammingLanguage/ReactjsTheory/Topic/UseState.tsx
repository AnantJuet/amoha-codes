import React from "react";

const UseState: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      useState Hook
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>useState</b> hook is a function that allows you to add state to a functional component.
      It is an alternative to the useReducer hook that is preferred when we require the basic update.
      useState Hooks are used to add the state variables in the components.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const [state, setState] = useState(initialState);`}</pre>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>state:</b> It is the value of the current state</li>
      <li><b>setState:</b> It is the function that is used to update the state</li>
      <li><b>initialState:</b> It is the initial value of the state</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Working of useState()</h2>

    <p className="leading-relaxed mt-3">
      The useState() hook allows you to add state to functional components in React. It works by:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li>
        <b>Initialize State:</b> When you call <code>useState(initialValue)</code>, it creates a
        state variable and an updater function.
      </li>
      <li>
        <b>State is Preserved Across Renders:</b> React remembers the state value between re-renders
        of the component. Each time the component renders, React keeps the latest value of count.
      </li>
      <li>
        <b>State Updates with the Updater Function:</b> When you call <code>setCount(newValue)</code>,
        React updates the state and it re-renders the component to reflect the new state value.
      </li>
      <li>
        <b>Triggers Re-render:</b> React will re-render only the component where useState was used,
        ensuring your UI updates automatically when the state changes.
      </li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">1. Counter using useState</h2>

    <p className="leading-relaxed mt-3">
      A common example of using useState is managing the state of a counter with actions to
      increment and decrement the value.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>useState(0)</code>: Initializes count with 0</li>
      <li><code>setCount(count + 1)</code>: Updates the state by adding 1 to the current value</li>
      <li><code>setCount(count - 1)</code>: Decreases the state by 1</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">2. Managing Form Input State</h2>

    <p className="leading-relaxed mt-3">
      useState is also useful for handling form input fields dynamically.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState } from 'react';

function FormExample() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter age"
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <p>Name: {name}, Age: {age}</p>
      )}
    </div>
  );
}

export default FormExample;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>useState('')</code>: Initializes name and age with an empty string</li>
      <li><code>onChange=&#123;(e) =&gt; setName(e.target.value)&#125;</code>: Updates name state as the user types</li>
      <li><code>onChange=&#123;(e) =&gt; setAge(e.target.value)&#125;</code>: Updates age state as the user types</li>
      <li><code>setSubmitted(true)</code>: Marks the form as submitted</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Interesting Things About the useState Hook</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Manages Simple State Easily:</b> useState is ideal for managing simple state updates,
        such as toggling values, counters, and form inputs.
      </li>
      <li>
        <b>Functional Updates for Previous State:</b> When updating state based on the previous
        state, always use a function to ensure the correct value:
      </li>
    </ul>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// Using functional update
setCount(prevCount => prevCount + 1);

// This is better than:
setCount(count + 1);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use useState</h2>

    <p className="leading-relaxed mt-3">
      We should use the useState Hook when:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>You need to track simple values like strings, numbers, or booleans</li>
      <li>You need to manage form inputs</li>
      <li>You need to toggle UI states (show/hide, enabled/disabled)</li>
      <li>State updates are independent and do not depend on each other</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">useState vs useReducer</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Aspect</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">useState</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">useReducer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Best For</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Simple state</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Complex state logic</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">State Updates</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Direct value</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Action-based</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Complexity</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Low</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Higher</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Performance Considerations</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Avoid creating new objects or arrays in useState initialization unless necessary</li>
      <li>Use lazy initialization for expensive computations</li>
      <li>Batch related state updates together when possible</li>
    </ul>
  </>
);

export default UseState;
