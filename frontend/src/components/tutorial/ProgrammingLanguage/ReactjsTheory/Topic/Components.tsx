import React from "react";

const Components: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      React Components
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>React components</b> are reusable UI units that handle their own logic, accept data through
      props, manage state, and efficiently update only the parts of the UI that change.
    </p>

    <h2 className="text-2xl font-bold mt-6">Types of React Components</h2>

    <p className="leading-relaxed mt-3">
      There are two primary types of React components:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Functional Components:</b> JavaScript functions that return React elements</li>
      <li><b>Class Components:</b> ES6 classes that extend React.Component</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">1. Functional Components</h2>

    <p className="leading-relaxed mt-3">
      Functional components are JavaScript functions that return React elements and are the
      preferred way to build modern React applications.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from 'react';

// Creating a simple functional component
function Greeting() {
  return (
    <h1>Hello, welcome to React!</h1>
  );
}

export default Greeting;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      Functional components:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>Can manage state and lifecycle logic using React Hooks</li>
      <li>Use a simpler syntax, making them ideal for reusable components</li>
      <li>Offer better performance by avoiding the use of the <code>this</code> keyword</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">2. Class Components</h2>

    <p className="leading-relaxed mt-3">
      Class components are ES6 classes in React that extend React.Component and support
      state and lifecycle handling.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h1>Hello, welcome to React!</h1>;
  }
}

export default Greeting;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      Class components:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>Manage component data using the <code>this.state</code> property</li>
      <li>Use lifecycle methods such as <code>componentDidMount</code> and <code>componentDidUpdate</code></li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">3. Props in React Components</h2>

    <p className="leading-relaxed mt-3">
      <b>Props</b> (short for properties) are read-only inputs passed from a parent component to
      a child component. They enable dynamic data flow and reusability.
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Props are immutable</li>
      <li>They enable communication between components</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">4. State in React Components</h2>

    <p className="leading-relaxed mt-3">
      <b>State</b> is a component-controlled JavaScript object used to store and manage dynamic
      data over time.
    </p>

    <h2 className="text-2xl font-bold mt-6">5. Rendering a Component</h2>

    <p className="leading-relaxed mt-3">
      Rendering in React means displaying a component in the browser's DOM.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return <h1>Hello, welcome to React!</h1>;
}

// Render the component to the DOM
ReactDOM.render(<Greeting />, document.getElementById('root'));`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>Greeting</code> is a React functional component</li>
      <li>It returns JSX: <code>&lt;h1&gt;Hello, welcome to React!&lt;/h1&gt;</code></li>
      <li><code>ReactDOM.render</code> mounts it to the DOM at an element with id "root"</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">6. Components in Components</h2>

    <p className="leading-relaxed mt-3">
      In React, you can nest components inside other components to build a modular and
      hierarchical structure.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`function Header() {
  return <h1>Welcome to My App</h1>;
}

function Content() {
  return <p>This is the main content.</p>;
}

function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Component Lifecycle</h2>

    <p className="leading-relaxed mt-3">
      The React component lifecycle follows this flow:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li><b>User Action</b> triggers an event (click, input, etc.)</li>
      <li><b>setState / useState</b> updates the component's state</li>
      <li><b>React Component</b> uses props, state, JSX, and event handlers to define UI logic</li>
      <li><b>State Update</b> changes dynamic data inside the component</li>
      <li><b>Re-render</b> is triggered for the affected component</li>
      <li><b>Updated UI</b> is generated as a new Virtual DOM</li>
      <li><b>Diffing</b> compares the new Virtual DOM with the previous one</li>
      <li><b>Real DOM</b> updates only the changed parts for better performance</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Best Practices for React Components</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Keep components small and focused on a single responsibility</li>
      <li>Use functional components with hooks for most use cases</li>
      <li>Use descriptive names for components</li>
      <li>Extract reusable logic into custom hooks</li>
      <li>Use PropTypes or TypeScript for type checking</li>
    </ul>
  </>
);

export default Components;
