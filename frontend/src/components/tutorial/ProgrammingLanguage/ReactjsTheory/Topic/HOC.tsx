import React from "react";

const HOC: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Higher Order Components
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Higher-order components (HOC)</b> are an advanced technique in React that is used for
      reusing component logic. It is the function that takes the original component and returns
      the new enhanced component.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic HOC Syntax</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const EnhancedComponent = higherOrderComponent(OriginalComponent);`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this syntax:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>higherOrderComponent</code> is a function that takes an existing component (<code>OriginalComponent</code>) as an argument</li>
      <li>It returns a new component (<code>EnhancedComponent</code>) with additional functionality or behavior</li>
      <li>The <code>EnhancedComponent</code> behaves like the original component but with enhanced features provided by the HOC</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Characteristics of HOCs</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>It does not modify the input component directly. Instead, they return a new component with enhanced behavior.</li>
      <li>They allow you to reuse component logic across multiple components without duplicating it.</li>
      <li>They are pure functions that accept a component and return a new component.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Implementation of Higher-Order Components</h2>

    <h3 className="text-xl font-semibold mt-4">Step 1: Create a React Application</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`npm create vite@latest foldername`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Step 2: Move into the Folder</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`cd foldername`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example 1: Adding Props with HOC</h2>

    <p className="leading-relaxed mt-3">
      Let's say we need to reuse the same logic, like passing on the name to every component:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// withName.js - The HOC
import React from 'react';

function withName(WrappedComponent) {
  return function EnhancedComponent(props) {
    return <WrappedComponent {...props} name="GeeksforGeeks" />;
  };
}

export default withName;

// App.js - Using the HOC
import React from 'react';
import withName from './withName';

function App({ name }) {
  return <h1>{name}</h1>;
}

const EnhancedComponent = withName(App);

export default EnhancedComponent;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><b>HOC Definition:</b> <code>withName</code> is a Higher-Order Component that adds a <code>name</code> prop with the value "GeeksforGeeks" to any component passed into it.</li>
      <li><b>Original Component:</b> The <code>App</code> component simply renders the <code>name</code> prop inside an <code>&lt;h1&gt;</code> element.</li>
      <li><b>Applying the HOC:</b> The <code>App</code> component is passed to the <code>withName</code> HOC, creating a new component, <code>EnhancedComponent</code>.</li>
      <li><b>Enhanced Component:</b> The <code>EnhancedComponent</code> now has the <code>name</code> prop and will display "GeeksforGeeks" when rendered.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example 2: Counter Logic with HOC</h2>

    <p className="leading-relaxed mt-3">
      Let's implement a counter app where the HOC provides the counter logic:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// withCounter.jsx - The HOC
import React, { useState } from 'react';

function withCounter(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    );
  };
}

export default withCounter;

// Counter.jsx - The Component
import React from 'react';

function Counter({ count, increment, decrement, reset }) {
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;

// App.jsx - Using the HOC
import React from 'react';
import Counter from './Counter';
import withCounter from './withCounter';

const EnhancedCounter = withCounter(Counter);

function App() {
  return <EnhancedCounter />;
}

export default App;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><b>App.jsx:</b> The <code>App</code> component imports and uses the <code>EnhancedCounter</code>, which is the <code>Counter</code> component wrapped by the <code>withCounter</code> HOC.</li>
      <li><b>withCounter.jsx:</b> The <code>withCounter</code> HOC takes a component and adds state logic for counting.</li>
      <li><b>Counter.jsx:</b> The <code>Counter</code> component displays the current count and provides buttons to increment, decrement, or reset the counter value.</li>
      <li><b>State Management:</b> The <code>withCounter</code> HOC uses <code>useState</code> to manage the count and passes the count and its control functions as props to the <code>Counter</code> component.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Reason to Use Higher-Order Components</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Code Reusability:</b> Share common logic across multiple components</li>
      <li><b>Separation of Concerns:</b> Keep component logic separate from presentation</li>
      <li><b>Abstraction:</b> Hide complex implementation details</li>
      <li><b>Composition:</b> Combine multiple HOCs to add multiple features</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Best Practices for Using HOC</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Do not mutate the original component; always return a new component</li>
      <li>Pass through unrelated props to the wrapped component</li>
      <li>Maximize composability by keeping HOCs focused on a single purpose</li>
      <li>Consider using hooks as an alternative for simpler cases</li>
    </ul>
  </>
);

export default HOC;
