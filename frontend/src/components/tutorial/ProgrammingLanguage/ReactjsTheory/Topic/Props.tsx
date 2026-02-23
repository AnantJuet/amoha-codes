import React from "react";

const Props: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Props in React
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The react <b>props</b> refer to properties in React that are passed down from parent component
      to child to render the dynamic content.
    </p>

    <h2 className="text-2xl font-bold mt-6">What are Props?</h2>

    <p className="leading-relaxed mt-3">
      Props in React are the objects used to <b>pass data/information to a Component</b>. It is short
      for Properties. It is responsible for passing the data to components and render the dynamic content.
    </p>

    <h2 className="text-2xl font-bold mt-6">Passing and Accessing Props</h2>

    <p className="leading-relaxed mt-3">
      We can pass props to any component as we declare attributes for any HTML tag.
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax - Passing Props</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// Passing Props
<DemoComponent sampleProp="HelloProp" />`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In the above code snippet, we are passing a prop named <code>sampleProp</code> to the component
      named <code>DemoComponent</code>. This prop has the value "HelloProp".
    </p>

    <h3 className="text-xl font-semibold mt-4">Syntax - Accessing Props</h3>

    <p className="leading-relaxed mt-3">
      We can access any props inside from the component's class to which the props are passed.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// Accessing props in class components
this.props.propName;

// Accessing props in functional components
props.propName;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      The <code>this.props</code> is a kind of global object which stores all of a component's props.
      The propName, that is the names of props are keys of this object.
    </p>

    <h2 className="text-2xl font-bold mt-6">Passing Information from One Component to Another</h2>

    <p className="leading-relaxed mt-3">
      Let us see an example where we will implement passing and accessing props.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// Parent Component (App.js)
import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div>
      <Greeting name="John" age={25} />
      <Greeting name="Jane" age={30} />
    </div>
  );
}

export default App;

// Child Component (Greeting.js)
import React from 'react';

function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Greeting;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">What is this.props in React?</h2>

    <p className="leading-relaxed mt-3">
      In the below example, we will use a class-based component to illustrate the props.
      But we can also pass props to function-based components.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// Class Component with Props
import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default Greeting;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Accessing Props in Functional Components</h2>

    <p className="leading-relaxed mt-3">
      To access a prop from a function, we do not need to use the <code>this</code> keyword anymore.
      Functional components accept props as parameters and can be accessed directly.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// Functional Component with Props
function Greeting(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

// Using Destructuring
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Points About Props</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Props are Read-Only:</b> A component should never modify its own props</li>
      <li><b>Props Flow Downward:</b> Data flows from parent to child components</li>
      <li><b>Default Props:</b> You can define default values for props</li>
      <li><b>Props Validation:</b> Use PropTypes to validate props</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Default Props Example</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`function Greeting({ name = "Guest", age = 18 }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage without props - uses defaults
<Greeting />

// Usage with props - overrides defaults
<Greeting name="John" age={25} />`}</pre>
    </div>
  </>
);

export default Props;
