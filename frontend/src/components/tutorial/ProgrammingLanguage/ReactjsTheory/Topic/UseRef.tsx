import React from "react";

const UseRef: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      useRef Hook
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>useRef</b> Hook is a built-in React Hook that returns a mutable reference object (ref)
      that persists across renders. Unlike state variables, updating a ref does not trigger a
      component re-render.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const refContainer = useRef(initialValue);`}</pre>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><code>useRef</code> returns an object <code>&#123; current: initialValue &#125;</code></li>
      <li>The <code>current</code> property can be updated without re-rendering the component</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Purpose of useRef</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Direct DOM Manipulation:</b> You can directly access and manipulate DOM elements without triggering a re-render</li>
      <li><b>Persisting Values Across Renders:</b> Use useRef to store values (such as previous state values) that should persist across renders without triggering unnecessary updates</li>
      <li><b>Optimizing Performance:</b> Avoiding re-renders, useRef can help optimize performance, especially when managing timers, DOM references, or other non-UI values</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">1. Accessing the DOM using useRef</h2>

    <p className="leading-relaxed mt-3">
      In this example, we have a button called ACTION, whenever we click on the button the
      onClickHandler gets triggered and it focuses the textarea with the help of useRef hook.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { Fragment, useRef } from 'react';

function App() {
  const focusPoint = useRef(null);

  const onClickHandler = () => {
    focusPoint.current.value =
      "The quick brown fox jumps over the lazy dog";
    focusPoint.current.focus();
  };

  return (
    <Fragment>
      <div>
        <button onClick={onClickHandler}>ACTION</button>
      </div>
      <label>
        Click on the action button to focus and populate the text.
      </label>
      <br />
      <textarea ref={focusPoint} />
    </Fragment>
  );
}

export default App;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>useRef</code> creates a reference <code>focusPoint</code>, which allows direct manipulation of the DOM element</li>
      <li>Clicking the "ACTION" button triggers <code>onClickHandler</code>, which sets text in the textarea and focuses it</li>
      <li><code>&lt;Fragment&gt;</code> (<code>&lt;&gt;...&lt;/&gt;</code>) is used to group multiple elements without adding extra wrappers in the DOM</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">2. Persisting Values Across Renders</h2>

    <p className="leading-relaxed mt-3">
      In addition to accessing DOM elements, useRef is useful for storing values that persist
      across renders. A common use case is storing a previous value, such as the previous
      state or props.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState, useRef, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <div>
      <h1>Now: {count}, Before: {prevCount}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
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
      <li><code>count</code> is a state variable that tracks the current count</li>
      <li><code>prevCountRef</code> is a reference created with <code>useRef</code> to store the previous count value</li>
      <li>Whenever <code>count</code> changes, the <code>useEffect</code> hook updates <code>prevCountRef.current</code> to store the previous count</li>
      <li>Clicking the button increases the count by 1 and updates both the current and previous counts</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">3. Storing Timer References</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState, useRef, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current) return; // Already running

    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Performance Considerations</h2>

    <p className="leading-relaxed mt-3">
      Using useRef correctly can enhance performance, but excessive use may introduce
      unnecessary complexity.
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Use it for non-rendered values:</b> Ideal for persisting values like timers, previous states, or DOM elements</li>
      <li><b>Avoid using it as state replacement:</b> If UI updates are needed, use <code>useState</code> instead</li>
      <li><b>Measure before optimizing:</b> Use React DevTools to analyze performance</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">useRef vs useState</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Aspect</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">useRef</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">useState</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Triggers Re-render</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">No</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Yes</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Persists Across Renders</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Yes</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Yes</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Best For</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">DOM refs, timers, previous values</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">UI state that needs to update the view</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default UseRef;
