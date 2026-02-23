import React from "react";

const UseEffect: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      useEffect Hook
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>useEffect</b> hook is one of the most commonly used hooks in ReactJS, used to handle
      side effects in functional components. Before hooks, these kinds of tasks were only possible
      in class components through lifecycle methods like componentDidMount, componentDidUpdate,
      and componentWillUnmount.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`useEffect(() => {
  // Code to run on each render
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);`}</pre>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Effect function:</b> This is where your side effect code runs</li>
      <li><b>Cleanup function:</b> This optional return function cleans up side effects like subscriptions or timers when the component unmounts</li>
      <li><b>Dependencies array:</b> React re-runs the effect if any of the values in this array change</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Common Use Cases for useEffect</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Fetching data from an API</li>
      <li>Setting up event listeners or subscriptions</li>
      <li>Manipulating the DOM directly (although React generally handles DOM manipulation for you)</li>
      <li>Cleaning up resources when a component unmounts</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Working of useEffect</h2>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li><b>Initial Render Happens:</b> React renders the component and updates the DOM</li>
      <li><b>useEffect Executes After Render:</b> It runs after the paint, not during render</li>
      <li><b>Dependencies Are Checked:</b> If there is no dependency array, the effect runs after every render; if the array is empty ([]), it runs once on mount; if dependencies are provided, it runs only when those values change</li>
      <li><b>Cleanup Function Runs:</b> Before the effect re-runs or the component unmounts, the cleanup function (returned from useEffect) is executed</li>
      <li><b>Effect Re-runs:</b> If dependencies changed, the effect runs again, after cleanup</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Controlling Side Effects in useEffect</h2>

    <h3 className="text-xl font-semibold mt-4">1. Run on Every Render</h3>
    <p className="leading-relaxed mt-2">
      To run useEffect on every render, do not pass any dependency:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`useEffect(() => {
  console.log('This runs on every render');
});`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Run Only Once on Mount</h3>
    <p className="leading-relaxed mt-2">
      To run useEffect only once on the first render, pass an empty array in the dependency:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`useEffect(() => {
  console.log('This runs only once on mount');
}, []);`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Run on Change of a Particular Value</h3>
    <p className="leading-relaxed mt-2">
      To run useEffect on change of a particular value, pass the state and props in the dependency array:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`useEffect(() => {
  console.log('Count changed to:', count);
}, [count]);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complete Example</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// HookCounterOne.js
import { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>useEffect triggers a function on every component render</li>
      <li>Positioned within the component, it grants easy access to state and props without additional coding</li>
      <li>The effect only runs when <code>count</code> changes</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Ways to Mimic Lifecycle Methods Using useEffect</h2>

    <h3 className="text-xl font-semibold mt-4">Mimicking componentDidMount</h3>
    <p className="leading-relaxed mt-2">
      To run code once when the component mounts, pass an empty dependency array ([]) to useEffect:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`useEffect(() => {
  // This code runs once when component mounts
  console.log('Component mounted');
}, []);`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Mimicking componentDidUpdate</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`useEffect(() => {
  // This code runs when 'value' changes
  console.log('Value updated:', value);
}, [value]);`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Mimicking componentWillUnmount</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`useEffect(() => {
  // Setup code

  return () => {
    // Cleanup code runs when component unmounts
    console.log('Component will unmount');
  };
}, []);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Cleaning Up Side Effects</h2>

    <p className="leading-relaxed mt-3">
      useEffect allows you to clean up after your effects by returning a cleanup function.
      This is particularly useful for:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Clearing timers or intervals</li>
      <li>Removing event listeners</li>
      <li>Canceling API requests</li>
      <li>Unsubscribing from subscriptions</li>
    </ul>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer tick');
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(timer);
    console.log('Timer cleared');
  };
}, []);`}</pre>
    </div>
  </>
);

export default UseEffect;
