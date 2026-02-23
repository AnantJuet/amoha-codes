import React from "react";

const UseCallback: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      useCallback Hook
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>useCallback</b> Hook is a built-in React Hook that memoizes a callback function,
      preventing it from being recreated on every render unless its dependencies change. This
      is useful for optimizing performance, especially when passing functions as props to child components.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const memoizedCallback = useCallback(() => {
  // Function logic
}, [dependencies]);`}</pre>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>The function to be memoized is passed as a parameter to useCallback</li>
      <li>An array of dependencies determines when the function should be recreated</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Without the useCallback Hook</h2>

    <p className="leading-relaxed mt-3">
      This example creates a counter app without using the useCallback Hook.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState } from "react";

const funcSet = new Set();

const App = () => {
  const [cnt, setCnt] = useState(0);
  const [num, setNum] = useState(0);

  const incCnt = () => setCnt(cnt + 1);
  const decCnt = () => setCnt(cnt - 1);
  const incNum = () => setNum(num + 1);

  funcSet.add(incCnt);
  funcSet.add(decCnt);
  funcSet.add(incNum);

  alert(funcSet.size);

  return (
    <div>
      <h2>Without useCallback Hook</h2>
      <button onClick={incCnt}>Increase Counter</button>
      <button onClick={decCnt}>Decrease Counter</button>
      <button onClick={incNum}>Increase Number</button>
    </div>
  );
};

export default App;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>useState manages <code>cnt</code> and <code>num</code> states</li>
      <li>Functions update <code>cnt</code> and <code>num</code> values</li>
      <li>Functions are stored in a Set, which only keeps unique values</li>
      <li>Clicking a button updates the state and displays the function count in an alert</li>
    </ul>

    <p className="leading-relaxed mt-3">
      The issue here is that every time the component re-renders, new function references are
      created, causing unnecessary re-renders of child components and inefficient memory usage.
    </p>

    <h2 className="text-2xl font-bold mt-6">Using useCallback Hook</h2>

    <p className="leading-relaxed mt-3">
      To solve this problem, we can use the useCallback hook. The useCallback hook is essential
      for optimizing performance in React applications, especially when passing callbacks to
      child components.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState, useCallback } from "react";

const funcSet = new Set();

const App = () => {
  const [cnt, setCnt] = useState(0);
  const [num, setNum] = useState(0);

  const incCnt = useCallback(() => {
    setCnt(prevCnt => prevCnt + 1);
  }, []);

  const decCnt = useCallback(() => {
    setCnt(prevCnt => prevCnt - 1);
  }, []);

  const incNum = useCallback(() => {
    setNum(prevNum => prevNum + 1);
  }, []);

  funcSet.add(incCnt);
  funcSet.add(decCnt);
  funcSet.add(incNum);

  alert(funcSet.size);

  return (
    <div>
      <h2>With useCallback Hook</h2>
      <p>Counter: {cnt}</p>
      <p>Number: {num}</p>
      <button onClick={incCnt}>Increase Counter</button>
      <button onClick={decCnt}>Decrease Counter</button>
      <button onClick={incNum}>Increase Number</button>
    </div>
  );
};

export default App;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>useState manages <code>cnt</code> and <code>num</code> states</li>
      <li>useCallback memoizes <code>incCnt</code>, <code>decCnt</code>, and <code>incNum</code> to prevent unnecessary function re-creations</li>
      <li>Functions update <code>cnt</code> and <code>num</code> when called</li>
      <li>The funcSet keeps track of unique function references</li>
      <li>Clicking a button updates the corresponding state and displays the function count in an alert</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use useCallback?</h2>

    <p className="leading-relaxed mt-3">
      You should use useCallback when:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Passing functions as props to child components to prevent unnecessary re-renders</li>
      <li>Avoiding unnecessary function re-creations inside useEffect or event handlers</li>
      <li>Ensuring function references remain stable across renders</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">useCallback vs useMemo</h2>

    <p className="leading-relaxed mt-3">
      The useCallback and useMemo Hooks are similar, but they serve different purposes:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Aspect</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">useCallback</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">useMemo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Returns</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">A memoized function</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">A memoized value</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Purpose</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Stable function references</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Optimizing computations</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Use Case</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Passing functions as props</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Caching expensive calculations</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Performance Considerations</h2>

    <p className="leading-relaxed mt-3">
      Using useCallback correctly can enhance performance, but excessive use may introduce
      unnecessary complexity. Here are some best practices:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Use it when passing callbacks to memoized child components</li>
      <li>Avoid using it for every function - it has its own overhead</li>
      <li>Measure performance before and after optimization</li>
      <li>Consider using React DevTools to identify unnecessary re-renders</li>
    </ul>
  </>
);

export default UseCallback;
