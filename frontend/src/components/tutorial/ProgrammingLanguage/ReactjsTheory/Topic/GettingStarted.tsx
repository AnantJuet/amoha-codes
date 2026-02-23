import React from "react";

const GettingStarted: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Getting Started with React
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>ReactJS</b>, often referred to as React, is a popular JavaScript library developed by Facebook
      for building user interfaces. It emphasizes a component-based architecture, where UIs are built
      using reusable components. React uses a declarative syntax to describe how UIs should look based
      on their state, simplifying development and enhancing code readability.
    </p>

    <p className="leading-relaxed mt-3">
      React also utilizes a virtual DOM to optimize rendering performance by minimizing actual DOM
      manipulations. React's unidirectional data flow and rich ecosystem of libraries and tools have
      made it a go-to choice for frontend development, especially in building single-page applications (SPAs).
    </p>

    <h2 className="text-2xl font-bold mt-6">Why ReactJS?</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Component-Based Architecture:</b> React emphasizes reusable components, making it easy to
        build modular UI elements that can be reused across the application.
      </li>
      <li>
        <b>Declarative Syntax:</b> React's approach focuses on describing how the UI should look based
        on its current state, leading to efficient updates and clear code readability.
      </li>
      <li>
        <b>Virtual DOM:</b> React uses a virtual DOM, an in-memory representation of the actual DOM,
        for efficient updates and minimal DOM manipulations, resulting in better performance.
      </li>
      <li>
        <b>Unidirectional Data Flow:</b> React follows a one-way data flow, ensuring that data flows
        down the component hierarchy via props. Any changes trigger re-renders, maintaining a
        predictable data flow pattern.
      </li>
      <li>
        <b>Rich Ecosystem:</b> React boasts a diverse ecosystem with numerous libraries, tools, and
        community contributions. This wealth of resources empowers developers to extend their
        applications with ease and add new features seamlessly.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Setting Up Your Development Environment</h2>

    <h3 className="text-xl font-semibold mt-4">Step 1: Install Node.js</h3>
    <p className="leading-relaxed mt-2">
      Ensure Node.js is installed on your system as it includes npm (Node Package Manager), which
      we will use to manage dependencies.
    </p>

    <h3 className="text-xl font-semibold mt-4">Step 2: Create React App</h3>
    <p className="leading-relaxed mt-2">
      Use Create React App to set up a new React project quickly:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`npx create-react-app my-app`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Step 3: Navigate to Project Directory</h3>
    <p className="leading-relaxed mt-2">
      Once the project is created, navigate to your project directory:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`cd my-app`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Step 4: Start the Development Server</h3>
    <p className="leading-relaxed mt-2">
      Start the development server to see your React application in action:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`npm start`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Understanding React Components</h2>

    <p className="leading-relaxed mt-3">
      In React, components are the building blocks of UIs. There are two types of components:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Functional Components:</b> Simple functions that return JSX (JavaScript XML) to describe the UI.
      </li>
      <li>
        <b>Class Components:</b> Traditional React components defined using ES6 classes with
        additional features like lifecycle methods.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Creating Your First React Component</h2>

    <p className="leading-relaxed mt-3">
      Here is an example of a simple functional component:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from 'react';

function Welcome() {
  return <h1>Welcome to React!</h1>;
}

export default Welcome;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Working with Props and State</h2>

    <p className="leading-relaxed mt-3">
      <b>Props</b> (short for properties) and <b>state</b> are two fundamental concepts in React:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Props:</b> Used to pass data from parent to child components</li>
      <li><b>State:</b> Used to manage component-specific data that can change over time</li>
    </ul>

    <p className="leading-relaxed mt-3">
      Example using props and state:
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

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>count</code> is a state managed by the <code>useState</code> hook</li>
      <li>There are no props being used in this component; it is a simple stateful functional component</li>
      <li>The state updates when the button is clicked</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Handling Events</h2>

    <p className="leading-relaxed mt-3">
      In React, you can handle user events like clicks and input changes using event handlers.
      Event handlers are functions that are called when a specific event occurs.
    </p>
  </>
);

export default GettingStarted;
