import React from "react";

const PureComponents: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Pure Components
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>ReactJS Pure Components</b> are similar to regular class components but with a key
      optimization. They skip re-renders when the props and state remain the same. While class
      components are still supported in React, it is generally recommended to use functional
      components with hooks in new code for better performance and simplicity.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Pure Component Example</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from "react";

export default class Test extends React.PureComponent {
  render() {
    return <h1>Welcome to GeeksforGeeks</h1>;
  }
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">How Does a Pure Component Work?</h2>

    <p className="leading-relaxed mt-3">
      A PureComponent works by implementing the <code>shouldComponentUpdate()</code> lifecycle
      method with a shallow comparison of props and state. This method determines whether a
      component needs to re-render. When the component's state or props are updated, React
      performs the shallow comparison and decides if the component should update.
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        If the props or state of the component have changed (using a shallow comparison),
        the component re-renders.
      </li>
      <li>
        If they have not changed, React skips the re-render, thus improving performance by
        preventing unnecessary updates.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When Should You Use Pure Components?</h2>

    <p className="leading-relaxed mt-3">
      Pure Components are most beneficial in scenarios where performance is a concern,
      especially when dealing with large and dynamic applications. Here are some common use cases:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Performance Optimization:</b> If your application has many components that do not need
        to re-render on every update (e.g., static or rarely changing data), using Pure Components
        can help improve performance by reducing unnecessary re-renders.
      </li>
      <li>
        <b>Large Lists and Tables:</b> When working with large lists or tables where only a small
        subset of data changes at a time, Pure Components can significantly reduce the amount of
        rendering. For instance, if you are rendering hundreds of rows in a table and only a few
        of them need updating, a Pure Component ensures that only those rows are re-rendered.
      </li>
      <li>
        <b>Immutable Data:</b> If your app relies on immutable data structures (such as using
        libraries like Immutable.js or always creating new objects/arrays), Pure Components are
        highly effective because they will correctly detect changes based on reference equality.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use React.memo()</h2>

    <p className="leading-relaxed mt-3">
      For functional components, React provides <code>React.memo()</code> which serves the same
      purpose as Pure Components:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Nested Data Structures:</b> If you are dealing with nested objects or arrays in
        functional components, <code>React.memo()</code> will not perform deep comparisons, but you
        can optimize the comparison by providing a custom comparison function if necessary.
      </li>
      <li>
        <b>Pure Functional Components:</b> When working with functional components and you want to
        prevent unnecessary re-renders for components that receive the same props,
        <code>React.memo()</code> can be used.
      </li>
    </ul>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { memo } from 'react';

const MyComponent = memo(function MyComponent({ name }) {
  return <h1>Hello, {name}</h1>;
});

export default MyComponent;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Difference Between Pure Components and Regular Components</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Aspect</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Regular Component</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Pure Component</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Re-rendering</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Re-renders every time the parent component re-renders</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Re-renders only if props or state have changed</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Performance</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Can cause unnecessary re-renders</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Optimized for performance</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">shouldComponentUpdate</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Must be manually implemented</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Automatically implemented with shallow comparison</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Conclusion</h2>

    <p className="leading-relaxed mt-3">
      Pure Components and <code>React.memo()</code> are valuable tools for optimizing React
      applications. They help prevent unnecessary re-renders by performing shallow comparisons
      of props and state. Use them when you have components that render frequently but often
      receive the same props.
    </p>
  </>
);

export default PureComponents;
