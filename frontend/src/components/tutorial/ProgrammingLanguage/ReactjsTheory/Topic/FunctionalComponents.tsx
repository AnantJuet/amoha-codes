import React from "react";

const FunctionalComponents: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Functional Components
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      In <b>ReactJS</b>, functional components are a core part of building user interfaces.
      They are simple, lightweight, and powerful tools for rendering UI and handling logic.
      Functional components can accept props as input and return JSX that describes what
      the component should render.
    </p>

    <h2 className="text-2xl font-bold mt-6">Functional Component with Props</h2>

    <p className="leading-relaxed mt-3">
      When a functional component receives input and is rendered, React uses props and updates
      the virtual DOM to ensure the UI reflects the current state.
    </p>

    <p className="leading-relaxed mt-3">
      In React, a functional component with props is a JavaScript function that receives an
      object called <b>props</b> as its argument. Props (short for "properties") are used to
      pass data from a parent component to a child component.
    </p>

    <p className="leading-relaxed mt-3">
      This allows components to be dynamic and reusable, as the data displayed can change
      based on what is passed in.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Hello World!");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
      <button onClick={() => setMessage("Welcome to React!")}>
        Click Me!
      </button>
    </div>
  );
}

export default App;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">How Functional Components Work</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Props:</b> Functional components receive input data through props, which are
        objects containing key-value pairs.
      </li>
      <li>
        <b>Processing Props:</b> After receiving props, the component processes them and
        returns a JSX element that defines the component's structure and content.
      </li>
      <li>
        <b>Virtual DOM:</b> When the component is rendered, React creates a virtual DOM
        tree that represents the current state of the application.
      </li>
      <li>
        <b>Re-rendering:</b> If the component's props or state change, React updates the
        virtual DOM tree accordingly and triggers the component to re-render.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use ReactJS Functional Components</h2>

    <p className="leading-relaxed mt-3">
      Functional components should be used whenever possible because they are simpler, easier
      to test, and more performant than class components. However, there are a few cases where
      functional components may not be suitable:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Stateful components:</b> Functional components cannot hold state on their own
        without hooks. Use the <code>useState</code> hook for state management.
      </li>
      <li>
        <b>Lifecycle methods:</b> If you need to use lifecycle methods such as
        <code>componentDidMount</code>, <code>componentDidUpdate</code>, or
        <code>componentWillUnmount</code>, use the <code>useEffect</code> hook.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Passing Props to a Functional Component</h2>

    <h3 className="text-xl font-semibold mt-4">1. Passing a Single Prop</h3>
    <p className="leading-relaxed mt-2">
      Props are used to pass data from a parent component to a child component. Props are
      read-only and allow you to make a component dynamic by passing different values into it.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// App.js
import Greeting from './Greeting';

function App() {
  return <Greeting message="Hello from App!" />;
}

// Greeting.js
function Greeting(props) {
  return <h1>{props.message}</h1>;
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>In the App.js component, the <code>message</code> prop is passed to the Greeting component</li>
      <li>In the Greeting.js component, <code>props.message</code> is used to access the passed prop and dynamically render it</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">2. Destructuring Props</h3>
    <p className="leading-relaxed mt-2">
      Instead of using <code>props.name</code>, you can destructure the props object directly
      in the function's argument to make the code cleaner.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`function Welcome({ name }) {
  return <h1>Welcome, {name}!</h1>;
}

// Usage
<Welcome name="John" />`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>The Welcome component receives the <code>name</code> prop using destructuring in the function argument</li>
      <li>Instead of writing <code>props.name</code>, we now directly use <code>&#123; name &#125;</code> within the component</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">React Functional Components Vs. Class Components</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Aspect</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Functional Components</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Class Components</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Syntax</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Simple function</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">ES6 class extending React.Component</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">State</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">useState hook</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">this.state</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Lifecycle</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">useEffect hook</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Lifecycle methods</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Performance</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Generally better</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Slightly more overhead</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Recommended</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Yes (modern React)</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Legacy support</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default FunctionalComponents;
