import React from "react";

const LiftingState: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Lifting State Up
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      In ReactJS, <b>"lifting state up"</b> is a fundamental concept that plays an important role
      in managing the state efficiently across different components. When building React applications,
      it is common for multiple components to need access to the same piece of data or state.
    </p>

    <p className="leading-relaxed mt-3">
      In such cases, instead of duplicating the state across multiple components, React allows us
      to "lift" the state up to a common ancestor. In this article, we will cover the basics of
      lifting state up in ReactJS, how it works, and examples to clarify its use.
    </p>

    <h2 className="text-2xl font-bold mt-6">What Does Lifting State Up Mean in React?</h2>

    <p className="leading-relaxed mt-3">
      In React, <b>lifting state up</b> refers to the technique of moving a shared state to a
      common ancestor of the components that need to access or modify it. Instead of maintaining
      separate state values in each component, the state is kept in the parent component. This
      parent component then passes the state and any necessary functions as props to its child components.
    </p>

    <p className="leading-relaxed mt-3">
      By doing this, the child components can access and interact with the shared state, ensuring
      consistency across the application.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Do We Lift State Up in React?</h2>

    <p className="leading-relaxed mt-3">
      React is built around the idea of components and unidirectional data flow, meaning data flows
      down from parent to child through props. However, sometimes two or more sibling components
      need to share the same state. If each component manages its own version of the state,
      inconsistencies can arise.
    </p>

    <p className="leading-relaxed mt-3">
      Here are some common scenarios where lifting state up is necessary:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>
        <b>Synchronization:</b> When multiple components need to stay in sync with a shared state
        (e.g., form inputs).
      </li>
      <li>
        <b>Communication Between Components:</b> If sibling components need to communicate, the
        state is lifted to the parent so that it can manage the flow of data between them.
      </li>
      <li>
        <b>Centralized State Management:</b> It keeps the state centralized, making it easier to
        debug, maintain, and modify as the app grows.
      </li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">How to Lift State Up in React?</h2>

    <p className="leading-relaxed mt-3">
      Lifting state up involves a few simple steps:
    </p>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li><b>Identify the shared state:</b> Determine which state values need to be accessed or modified by multiple components.</li>
      <li><b>Move the state to the common ancestor:</b> Find the nearest parent component that can hold the state.</li>
      <li><b>Pass the state as props:</b> The parent component will pass the shared state and any relevant handler functions (e.g., for updating the state) to its child components via props.</li>
      <li><b>Handle state updates:</b> The child components will use the passed-down functions to update the parent component's state.</li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Example 1: Two Components Sharing State</h2>

    <p className="leading-relaxed mt-3">
      If we have 2 components in our App where A is the parent of B, keeping the same data in both
      Component A and B might cause inconsistency of data.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// Parent Component (App.js)
import React, { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function App() {
  const [sharedValue, setSharedValue] = useState('');

  return (
    <div>
      <h1>Lifting State Up Example</h1>
      <ChildA value={sharedValue} onChange={setSharedValue} />
      <ChildB value={sharedValue} />
    </div>
  );
}

export default App;

// ChildA Component - Input
function ChildA({ value, onChange }) {
  return (
    <div>
      <h2>Child A - Input</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}

// ChildB Component - Display
function ChildB({ value }) {
  return (
    <div>
      <h2>Child B - Display</h2>
      <p>Shared Value: {value}</p>
    </div>
  );
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Example 2: Three Components Sharing State</h2>

    <p className="leading-relaxed mt-3">
      If we have 3 components in our App where A is the parent of B and C. In this case, if there
      is some Data only in component B but component C also wants that data, we know Component C
      cannot access the data because a component can talk only to its parent or child (Not cousins).
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// Parent Component (App.js)
import React, { useState } from 'react';

function App() {
  // State is lifted to the common ancestor
  const [temperature, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = (temp) => {
    setScale('c');
    setTemperature(temp);
  };

  const handleFahrenheitChange = (temp) => {
    setScale('f');
    setTemperature(temp);
  };

  // Convert temperature
  const celsius = scale === 'f'
    ? ((parseFloat(temperature) - 32) * 5 / 9).toFixed(2)
    : temperature;
  const fahrenheit = scale === 'c'
    ? ((parseFloat(temperature) * 9 / 5) + 32).toFixed(2)
    : temperature;

  return (
    <div>
      <h1>Temperature Converter</h1>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = { c: 'Celsius', f: 'Fahrenheit' };

  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </fieldset>
  );
}

export default App;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Benefits of Lifting State Up</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Single Source of Truth:</b> State is stored in one place, making it easier to track and debug</li>
      <li><b>Consistent Data:</b> All components that need the data receive the same value</li>
      <li><b>Predictable Data Flow:</b> Data flows in one direction, from parent to children</li>
      <li><b>Easier Testing:</b> Components become more predictable and easier to test</li>
    </ul>
  </>
);

export default LiftingState;
