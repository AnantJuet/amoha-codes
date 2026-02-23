import React from "react";

const ClassComponents: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Class Components
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Class components</b> are ES6 classes that extend <code>React.Component</code>. They allow
      state management and lifecycle methods for complex UI logic.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Class Component</h2>

    <p className="leading-relaxed mt-3">
      The <code>render()</code> method in React class components returns JSX elements describing
      the UI of the Application. Here is a simple class component in React:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// Filename: App.js
import React from "react";

class App extends React.Component {
  render() {
    return <h1>GeeksForGeeks</h1>;
  }
}

export default App;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      Now your React application has a component called App, which returns an <code>&lt;h1&gt;</code> element.
      To use this component in your application, use similar syntax as normal HTML: <code>&lt;App /&gt;</code>
    </p>

    <h2 className="text-2xl font-bold mt-6">Structure of React Class Components</h2>

    <p className="leading-relaxed mt-3">
      A typical React class component consists of the following parts:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Used for stateful components before Hooks</li>
      <li>Support lifecycle methods for mounting, updating, and unmounting</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">1. Class Declaration</h3>
    <p className="leading-relaxed mt-2">
      The component is declared as a class that extends <code>React.Component</code>. This inheritance
      gives the class access to React's methods and properties.
    </p>

    <h3 className="text-xl font-semibold mt-4">2. Constructor</h3>
    <p className="leading-relaxed mt-2">
      The <code>constructor()</code> method is used to initialize the component's state and bind
      event handlers. It is optional, but if used, it must call <code>super(props)</code> to
      initialize the parent Component class.
    </p>

    <h3 className="text-xl font-semibold mt-4">3. Render Method</h3>
    <p className="leading-relaxed mt-2">
      The <code>render()</code> method is the only required method in a class component. It returns
      JSX, which represents the structure of the UI. Whenever the state or props change, the
      render() method is re-invoked.
    </p>

    <h3 className="text-xl font-semibold mt-4">4. State</h3>
    <p className="leading-relaxed mt-2">
      Class components can manage their own internal state using the <code>this.state</code> property.
      The state is mutable and is used to store values that change over time, such as user input
      or API responses.
    </p>

    <h2 className="text-2xl font-bold mt-6">Complete Class Component Example</h2>

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

    <h2 className="text-2xl font-bold mt-6">Implementing State in Class Components</h2>

    <p className="leading-relaxed mt-3">
      In React, State is an object that holds some information which can be changed over time.
      Whenever a State is updated, it triggers re-rendering of the component.
    </p>

    <p className="leading-relaxed mt-3">
      To implement state in a class component:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li>Create a class component by extending Component class</li>
      <li>Inside the constructor, call the parent constructor using <code>super()</code> method</li>
      <li>Initialize state using the <code>this.state</code> object</li>
      <li>Pass the values in key-value pair</li>
      <li>You can update this state using the <code>this.setState</code> method</li>
      <li>To access the state, we use JSX syntax and access its value</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Lifecycle Methods</h2>

    <p className="leading-relaxed mt-3">
      Class components have access to lifecycle methods that allow you to run code at specific
      points in the component's life:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>componentDidMount():</b> Called after the component is rendered to the DOM</li>
      <li><b>componentDidUpdate():</b> Called after the component updates</li>
      <li><b>componentWillUnmount():</b> Called before the component is removed from the DOM</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">When to Use Class Components</h2>

    <p className="leading-relaxed mt-3">
      While functional components with hooks are now the recommended approach, class components
      are still useful in certain scenarios:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Working with legacy React codebases</li>
      <li>Using error boundaries (though hooks can now handle this too)</li>
      <li>When you prefer the explicit lifecycle method syntax</li>
    </ul>

    <p className="leading-relaxed mt-3">
      <b>Note:</b> States are useful as they are mutable unlike props and can help us to create
      dynamic and interactive interfaces.
    </p>
  </>
);

export default ClassComponents;
