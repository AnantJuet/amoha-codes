import React from "react";

const PropTypes: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      PropTypes
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      In ReactJS, <b>PropTypes</b> are the property that is mainly shared between the parent components
      to the child components. It is used to solve the type validation problem.
    </p>

    <p className="leading-relaxed mt-3">
      <b>Note:</b> In the latest version of React 19, PropTypes has been removed. It was deprecated
      in React version 15.5. Consider using TypeScript for type checking in new projects.
    </p>

    <h2 className="text-2xl font-bold mt-6">Benefits of PropTypes</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Type Safety:</b> When the wrong data type is passed in the component, PropTypes help find the issues.</li>
      <li><b>Better Debugging:</b> During development, they give warning messages in the console, which makes it easier to find the bugs.</li>
      <li><b>Improved Documentation:</b> It acts as self-documentation for your components, showing the expected types of props.</li>
      <li><b>Prevents Runtime Errors:</b> We can avoid errors caused by unexpected data types during the execution of the application, by enforcing prop types.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">How to Use PropTypes in React</h2>

    <h3 className="text-xl font-semibold mt-4">Step 1: Install the prop-types Package</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`npm install prop-types`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Step 2: Import and Use PropTypes</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from 'react';
import PropTypes from 'prop-types';

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

Greeting.defaultProps = {
  age: 25
};

export default Greeting;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Common PropTypes Validators</h2>

    <p className="leading-relaxed mt-3">
      Here is a list of common PropTypes validators:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`MyComponent.propTypes = {
  // Basic types
  optionalString: PropTypes.string,
  optionalNumber: PropTypes.number,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalArray: PropTypes.array,
  optionalObject: PropTypes.object,
  optionalSymbol: PropTypes.symbol,

  // Required props
  requiredString: PropTypes.string.isRequired,

  // Any renderable value
  optionalNode: PropTypes.node,

  // A React element
  optionalElement: PropTypes.element,

  // Instance of a class
  optionalMessage: PropTypes.instanceOf(Message),

  // One of specific values
  optionalEnum: PropTypes.oneOf(['News', 'Photos']),

  // One of multiple types
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),

  // Array of a certain type
  optionalArrayOf: PropTypes.arrayOf(PropTypes.number),

  // Object with specific shape
  optionalObjectWithShape: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  }),

  // Object with exact shape
  optionalObjectWithStrictShape: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number
  }),
};`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Default Props</h2>

    <p className="leading-relaxed mt-3">
      By using the <code>defaultProps</code>, we can also specify the default values for props.
      This is used when certain props are optional and we want to set a default value in case
      they are not passed.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}

Greeting.defaultProps = {
  name: 'Guest',
  age: 18
};`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      With this, if no name or age is provided, the component will use 'Guest' and 18 as default values.
    </p>

    <h2 className="text-2xl font-bold mt-6">PropTypes with Enum (One of Specific Values)</h2>

    <p className="leading-relaxed mt-3">
      We can use <code>oneOf</code> for setting the prop to a set of predefined values:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired
};`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Complete Example</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from 'react';
import PropTypes from 'prop-types';

// Greeting Component
function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};

Greeting.defaultProps = {
  age: 25
};

// Button Component
function Button({ label, type, onClick }) {
  const colors = {
    primary: 'blue',
    secondary: 'gray',
    danger: 'red'
  };

  return (
    <button
      style={{ backgroundColor: colors[type], color: 'white', padding: '10px 20px' }}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
  onClick: PropTypes.func
};

// UserProfile Component
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    age: PropTypes.number
  }).isRequired
};

export { Greeting, Button, UserProfile };`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">PropTypes vs TypeScript</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Feature</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">PropTypes</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">TypeScript</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Availability</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Built into React (via package)</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Separate language</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Check Time</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Runtime</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Compile time</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Setup</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Easy</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Requires configuration</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Type Coverage</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Props only</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Entire codebase</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

export default PropTypes;
