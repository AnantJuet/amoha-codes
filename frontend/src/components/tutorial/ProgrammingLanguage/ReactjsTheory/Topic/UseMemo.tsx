import React from "react";

const UseMemo: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      useMemo Hook
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>useMemo</b> Hook is a built-in React Hook that helps optimize performance by memoizing
      the result of a computation and reusing it unless its dependencies change. This prevents
      expensive computations from being re-executed unnecessarily during component re-renders.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`}</pre>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>The first argument is a function that returns the computed value</li>
      <li>The second argument is an array of dependencies. When any of these dependencies change, the function gets re-evaluated</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">1. Optimizing Expensive Calculations</h2>

    <p className="leading-relaxed mt-3">
      Let us take an example where we have an expensive computation that should not be
      recalculated on every render.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState, useMemo } from "react";

function squareNum(number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  // Memoize the squared value
  const squaredNum = useMemo(() => squareNum(number), [number]);

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  const counterHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <h1>Welcome to Geeksforgeeks</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      />
      <div>OUTPUT: {squaredNum}</div>
      <button onClick={counterHandler}>Counter++</button>
      <div>Counter: {counter}</div>
    </div>
  );
}

export default App;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>useState</code> manages <code>number</code> (user input) and <code>counter</code> (button clicks)</li>
      <li><code>useMemo</code> caches <code>squareNum(number)</code>, recalculating only when <code>number</code> changes</li>
      <li>The input field updates the <code>number</code> state when changed</li>
      <li>Clicking "Counter ++" increases the counter state</li>
      <li>The component displays the input, memoized squared value, and counter</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">2. Preventing Unnecessary Re-renders</h2>

    <p className="leading-relaxed mt-3">
      Sometimes, passing objects or arrays as props to child components can trigger unnecessary
      re-renders due to reference changes. useMemo can help stabilize such values.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState, useMemo, memo } from 'react';

const ChildComponent = memo(({ userInfo }) => {
  console.log('ChildComponent rendered');
  return <div>Name: {userInfo.name}</div>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoize the object to prevent unnecessary re-renders
  const userInfo = useMemo(() => ({
    name: 'John Doe'
  }), []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent userInfo={userInfo} />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default ParentComponent;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>React, useState, and useMemo are imported for state management and optimization</li>
      <li><code>ChildComponent</code> displays <code>userInfo.name</code> and logs renders</li>
      <li><code>ParentComponent</code> memoizes <code>userInfo</code> to prevent re-creation</li>
      <li>Clicking the button updates count, re-rendering ParentComponent</li>
      <li>ParentComponent displays count, ChildComponent, and the button</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use useMemo?</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>You have expensive calculations that do not need to be re-executed unless certain dependencies change</li>
      <li>You are dealing with large data sets and need to optimize performance</li>
      <li>You want to prevent unnecessary re-renders of child components by ensuring stable references</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Performance Optimization Using useMemo</h2>

    <p className="leading-relaxed mt-3">
      However, avoid overusing useMemo as it can add complexity and memory overhead.
      Use it only when necessary.
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Avoid using useMemo for trivial calculations:</b> If the computation is lightweight, memoization may introduce unnecessary complexity</li>
      <li><b>Use it for expensive calculations:</b> Tasks such as filtering large datasets or performing intensive calculations can benefit from useMemo</li>
      <li><b>Stabilize object and array references:</b> When passing objects or arrays to child components, useMemo helps maintain the same reference and prevents unnecessary re-renders</li>
      <li><b>Measure before optimizing:</b> Always analyze your app's performance using React DevTools or profiling tools before introducing useMemo</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Takeaways</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>useMemo returns a memoized value</li>
      <li>It only recalculates when dependencies change</li>
      <li>Use it for expensive computations and stable references</li>
      <li>Do not overuse it for simple calculations</li>
    </ul>
  </>
);

export default UseMemo;
