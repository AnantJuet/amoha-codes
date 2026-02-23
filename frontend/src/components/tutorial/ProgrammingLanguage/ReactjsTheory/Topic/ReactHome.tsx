import React from "react";

const ReactHome: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      React.js Tutorial
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      Welcome to the <b>React.js Tutorial</b>! React is a powerful JavaScript library for building
      fast, scalable front-end applications. Created by Facebook, it is known for its component-based
      structure, single-page applications (SPAs), and virtual DOM, enabling efficient UI updates
      and a seamless user experience.
    </p>

    <h2 className="text-2xl font-bold mt-6">What You Will Learn</h2>

    <p className="leading-relaxed mt-3">
      This tutorial covers all the essential concepts of React.js, from basics to advanced topics:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>React Basics:</b> Introduction, JSX, Virtual DOM, Environment Setup</li>
      <li><b>Components:</b> Functional Components, Class Components, Lifecycle Methods</li>
      <li><b>Props and State:</b> Data passing, State management, PropTypes</li>
      <li><b>React Hooks:</b> useState, useEffect, useContext, useRef, useMemo, useCallback</li>
      <li><b>Event Handling:</b> Forms, Controlled Components</li>
      <li><b>React Router:</b> Navigation, Route Parameters</li>
      <li><b>State Management:</b> Redux, Redux Toolkit</li>
      <li><b>Advanced Topics:</b> Code Splitting, Performance Optimization</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Why Learn React?</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Most popular JavaScript library for building user interfaces</li>
      <li>Component-based architecture for reusable code</li>
      <li>Virtual DOM for efficient rendering</li>
      <li>Large ecosystem with extensive community support</li>
      <li>Used by major companies like Facebook, Instagram, Netflix, and Airbnb</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Prerequisites</h2>

    <p className="leading-relaxed mt-3">
      Before starting this tutorial, you should have basic knowledge of:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>HTML and CSS</li>
      <li>JavaScript (ES6+ features)</li>
      <li>Basic understanding of DOM manipulation</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Quick Example</h2>

    <p className="leading-relaxed mt-3">
      Here is a simple React component that displays "Hello, World!":
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

    <p className="leading-relaxed mt-4">
      Click on the topics in the sidebar to start learning React.js!
    </p>
  </>
);

export default ReactHome;
