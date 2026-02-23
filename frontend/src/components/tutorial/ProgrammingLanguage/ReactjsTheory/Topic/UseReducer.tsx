import React from "react";

const UseReducer: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      useReducer Hook
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>useReducer</b> hook is an alternative to the useState hook that is preferred when you
      have complex state logic. It is useful when the state transitions depend on previous state
      values or when you need to handle actions that can update the state differently.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const [state, dispatch] = useReducer(reducer, initialState);`}</pre>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>reducer:</b> A function that defines how the state should be updated based on the action. It takes two parameters: the current state and the action.</li>
      <li><b>initialState:</b> The initial value of the state.</li>
      <li><b>state:</b> The current state returned from the useReducer hook.</li>
      <li><b>dispatch:</b> A function used to send an action to the reducer to update the state.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">1. Basic Counter using useReducer</h2>

    <p className="leading-relaxed mt-3">
      A common example of using useReducer is managing the state of a counter with actions to
      increment and decrement the value.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>counterReducer</code>: A reducer function that handles two actions, INCREMENT and DECREMENT, updating the count value accordingly.</li>
      <li><code>dispatch</code>: This function triggers the reducer with the action type (INCREMENT or DECREMENT), which updates the state.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">2. Managing Complex State with Multiple Actions</h2>

    <p className="leading-relaxed mt-3">
      For more complex state management, you can use useReducer to handle actions that affect
      different parts of the state, such as managing a form or multiple values at once.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useReducer } from 'react';

const initialState = {
  name: '',
  age: '',
  submitted: false
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_AGE':
      return { ...state, age: action.payload };
    case 'SUBMIT':
      return { ...state, submitted: true };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

function FormExample() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.name}
          onChange={(e) => dispatch({
            type: 'SET_NAME',
            payload: e.target.value
          })}
          placeholder="Enter name"
        />
        <input
          type="number"
          value={state.age}
          onChange={(e) => dispatch({
            type: 'SET_AGE',
            payload: e.target.value
          })}
          placeholder="Enter age"
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch({ type: 'RESET' })}>
          Reset
        </button>
      </form>
      {state.submitted && (
        <p>Submitted: {state.name}, Age: {state.age}</p>
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
      <li><code>formReducer</code>: The reducer function handles three actions: SET_NAME, SET_AGE, and SUBMIT. Each action updates the corresponding part of the state.</li>
      <li><code>dispatch</code>: Dispatches actions to modify the state (e.g., setting the name or age, or marking the form as submitted).</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use useReducer</h2>

    <p className="leading-relaxed mt-3">
      The state logic is complex and involves multiple sub-values or requires sophisticated updates.
      You should use useReducer when:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>You need to manage state transitions in a predictable manner (such as when working with forms or handling multiple actions)</li>
      <li>You have multiple state variables that depend on each other and need to be updated together</li>
      <li>The logic for updating the state is not just a simple assignment but involves computations, conditions, or complex updates</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">useReducer vs useState</h2>

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
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Complexity</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Simple state</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Complex state logic</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Updates</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Direct value assignment</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Action-based transitions</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">State Shape</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Single value</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Multiple related values</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Testing</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Simpler</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Reducer can be tested separately</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default UseReducer;
