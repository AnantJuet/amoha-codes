import React from "react";

const Introduction: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Introduction to React
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>ReactJS</b> is a component-based JavaScript library used to build dynamic and interactive
      user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus
      on performance and maintainability.
    </p>

    <p className="leading-relaxed mt-3">
      React operates by creating an in-memory <b>virtual DOM</b> rather than directly manipulating
      the browser's DOM. It performs necessary manipulations within this virtual representation
      before applying changes to the actual browser DOM.
    </p>

    <h2 className="text-2xl font-bold mt-6">Hello World in React</h2>

    <p className="leading-relaxed mt-3">
      Here is a simple "Hello, World!" program in React:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;`}</pre>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-4">
      <li><code>import React from 'react'</code>: Imports React to create components and use JSX.</li>
      <li><code>function App() &#123; ... &#125;</code>: Defines a functional component called App.</li>
      <li><code>return ( ... )</code>: Returns JSX that represents the UI (a div with an h1 tag displaying "Hello, World!").</li>
      <li><code>export default App</code>: Exports the App component so it can be used elsewhere.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Features of React</h2>

    <h3 className="text-xl font-semibold mt-4">1. Virtual DOM</h3>
    <p className="leading-relaxed mt-2">
      React uses a Virtual DOM to optimize UI rendering. Instead of updating the entire real DOM directly, React:
    </p>
    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>Creates a lightweight copy of the DOM (Virtual DOM)</li>
      <li>Compares it with the previous version to detect changes (diffing)</li>
      <li>Updates only the changed parts in the actual DOM (reconciliation), improving performance</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">2. Component-Based Architecture</h3>
    <p className="leading-relaxed mt-2">
      React follows a component-based approach, where the UI is broken down into reusable components. These components:
    </p>
    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>Can be reused across the application</li>
      <li>Have their own logic and rendering</li>
      <li>Make code modular and maintainable</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">3. JSX (JavaScript XML)</h3>
    <p className="leading-relaxed mt-2">
      React uses JSX, a syntax extension that allows developers to write HTML inside JavaScript. JSX makes the code:
    </p>
    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>More readable and expressive</li>
      <li>Easier to understand the UI structure</li>
      <li>Combines HTML and JavaScript logic in one place</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">4. One-Way Data Binding</h3>
    <p className="leading-relaxed mt-2">
      React uses one-way data binding, meaning data flows in a single direction from parent components
      to child components via props. This provides better control over data and helps maintain
      predictable behavior.
    </p>

    <h3 className="text-xl font-semibold mt-4">5. State Management</h3>
    <p className="leading-relaxed mt-2">
      React manages component state efficiently using the <code>useState</code> hook (for functional
      components) or <code>this.state</code> (for class components). State allows dynamic updates
      without reloading the page.
    </p>

    <h3 className="text-xl font-semibold mt-4">6. React Hooks</h3>
    <p className="leading-relaxed mt-2">
      Hooks allow functional components to use state and lifecycle features without needing class
      components. Common hooks include:
    </p>
    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>useState</code> - for state management</li>
      <li><code>useEffect</code> - for side effects</li>
      <li><code>useContext</code> - for context consumption</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">7. React Router</h3>
    <p className="leading-relaxed mt-2">
      React provides React Router for managing navigation in single-page applications (SPAs).
      It enables dynamic routing without requiring full-page reloads.
    </p>

    <h2 className="text-2xl font-bold mt-6">How Virtual DOM Works</h2>

    <p className="leading-relaxed mt-3">
      The Virtual DOM update process follows these steps:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li><b>Initial State:</b> There is an Actual DOM (Real DOM) containing the current UI elements.</li>
      <li><b>State Change:</b> When a change occurs (e.g., adding a new element), React generates a New Virtual DOM.</li>
      <li><b>Diffing:</b> React compares the previous Virtual DOM with the New Virtual DOM using a process called reconciliation.</li>
      <li><b>Patching:</b> React identifies the differences and updates only the changed part in the New Actual DOM, making the update process more efficient.</li>
    </ol>
  </>
);

export default Introduction;
