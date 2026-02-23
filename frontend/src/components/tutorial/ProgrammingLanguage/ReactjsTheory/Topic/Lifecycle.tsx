import React from "react";

const Lifecycle: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Component Lifecycle
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      In React, <b>State</b> is an object that holds some information which can be changed over time.
      Whenever a State is updated, it triggers re-rendering of the component. In React components,
      State can be implemented by default in class components and in functional components we have
      to implement state using hooks.
    </p>

    <h2 className="text-2xl font-bold mt-6">Approaches To Implementing State in React</h2>

    <p className="leading-relaxed mt-3">
      There are two ways to implement state in React Components based upon the type of component:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Using the <code>this.state</code> object (Class Component)</li>
      <li>Using the <code>useState</code> hook (Functional Components)</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Implementing State Using this.state Object</h2>

    <p className="leading-relaxed mt-3">
      This example creates a counter in React by implementing state using the class component approach:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li>Create a class component by extending Component class</li>
      <li>Inside the constructor, call the parent constructor using <code>super()</code> method</li>
      <li>Initialize state using the <code>this.state</code> object</li>
      <li>Pass the values in key-value pair</li>
      <li>You can update this state using the <code>this.setState</code> method</li>
      <li>To access the state, we use JSX syntax and access its value</li>
    </ol>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { Component } from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <h1>Welcome to GeeksforGeeks</h1>
        <h3>Counter App using Class Component:</h3>
        <h2>{this.state.count}</h2>
        <button onClick={this.increase}>Add</button>
      </div>
    );
  }
}

export default App;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Implementing State using useState Hook</h2>

    <p className="leading-relaxed mt-3">
      This example creates a counter by implementing state using the useState hook:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li>Import the useState hook from react</li>
      <li>Create a functional component</li>
      <li>Create a state object using useState hook</li>
      <li>The second parameter in useState hook is used to update the state</li>
      <li>The state can be accessed using the JSX syntax</li>
    </ol>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "50px" }}>
      <h1>Welcome to GeeksforGeeks</h1>
      <h3>Counter App using Functional Component:</h3>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
}

export default Counter;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Class Component Lifecycle Methods</h2>

    <p className="leading-relaxed mt-3">
      Class components have lifecycle methods that run at specific points:
    </p>

    <h3 className="text-xl font-semibold mt-4">Mounting Phase</h3>
    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>constructor()</code>: Called when the component is created</li>
      <li><code>render()</code>: Returns the JSX to be rendered</li>
      <li><code>componentDidMount()</code>: Called after the component is mounted to the DOM</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Updating Phase</h3>
    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>shouldComponentUpdate()</code>: Determines if the component should re-render</li>
      <li><code>render()</code>: Re-renders the component</li>
      <li><code>componentDidUpdate()</code>: Called after the component updates</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Unmounting Phase</h3>
    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>componentWillUnmount()</code>: Called before the component is removed from the DOM</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Conclusion</h2>

    <p className="leading-relaxed mt-3">
      States can be implemented in React by both functional and class components, but to implement
      state in functional components, we have to import the <code>useState</code> hook. State can
      be implemented directly in class components using the <code>this.state</code> object. States
      are useful as they are mutable unlike props and can help us to create dynamic and interactive
      interfaces.
    </p>
  </>
);

export default Lifecycle;
