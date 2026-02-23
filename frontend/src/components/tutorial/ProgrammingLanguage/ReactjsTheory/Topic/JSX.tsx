import React from "react";

const JSX: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      React JSX
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>JSX</b> stands for JavaScript XML, and it is a special syntax used in React to simplify
      building user interfaces. JSX allows you to write HTML-like code directly inside JavaScript,
      enabling you to create UI components more efficiently. Although JSX looks like regular HTML,
      it is actually a syntax extension for JavaScript.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic JSX Example</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const element = <h1>Hello, world!</h1>;`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>&lt;h1&gt;Hello, world!&lt;/h1&gt;</code> is a JSX element, similar to HTML, that represents a heading tag.</li>
      <li>JSX is converted into JavaScript behind the scenes, where React uses <code>React.createElement()</code> to turn the JSX code into actual HTML elements that the browser can understand.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Working of JSX</h2>

    <p className="leading-relaxed mt-3">
      When React processes this JSX code, it converts it into JavaScript using Babel. This JavaScript
      code then creates real HTML elements in the browser's DOM, which is how your web page gets displayed.
    </p>

    <p className="leading-relaxed mt-3">
      <b>Note:</b> Babel acts as a translator for your React code. It takes modern JavaScript
      (like JSX) that browsers do not understand directly and converts it into older, compatible
      JavaScript so your application runs everywhere.
    </p>

    <h2 className="text-2xl font-bold mt-6">JSX Transformation Process</h2>

    <ol className="list-decimal ml-6 leading-relaxed mt-3">
      <li>
        <b>Writing JSX:</b> Write JSX just like HTML inside JavaScript files (React components).
      </li>
      <li>
        <b>JSX Gets Transformed:</b> JSX is not directly understood by browsers. So, it gets converted
        into JavaScript by a tool called Babel. After conversion, the JSX becomes equivalent to
        <code>React.createElement()</code> calls.
      </li>
      <li>
        <b>React Creates Elements:</b> React takes the JavaScript code generated from JSX and uses
        it to create real DOM elements that the browser can render on the screen.
      </li>
    </ol>

    <h2 className="text-2xl font-bold mt-6">Implementing JSX in Action</h2>

    <p className="leading-relaxed mt-3">
      JSX can be implemented in a React project to create dynamic and interactive UI components.
      Here are the steps to use JSX in a React application:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to React with JSX</p>
    </div>
  );
}

export default App;`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Uses of JSX</h2>

    <h3 className="text-xl font-semibold mt-4">1. Embedding Expressions</h3>
    <p className="leading-relaxed mt-2">
      JSX allows you to embed JavaScript expressions directly within the HTML-like syntax.
      You can use curly braces <code>&#123;&#125;</code> to insert JavaScript expressions.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const name = "React";
const element = <h1>Hello, {name}!</h1>;`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Using Attributes in JSX</h3>
    <p className="leading-relaxed mt-2">
      In JSX, attributes are specified similarly to HTML, but with some differences. Since JavaScript
      is used alongside JSX, certain attribute names are written in camelCase instead of the
      lowercase syntax used in HTML.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// className instead of class
const element = <div className="container">Content</div>;

// htmlFor instead of for
const label = <label htmlFor="input">Label</label>;`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">3. Passing Children in JSX</h3>
    <p className="leading-relaxed mt-2">
      In JSX, components or elements can accept children just like HTML elements. Children are
      nested elements or content that are passed into a component. This allows for flexible
      and reusable components.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`function Container({ children }) {
  return <div className="container">{children}</div>;
}

// Usage
<Container>
  <h1>Title</h1>
  <p>Content goes here</p>
</Container>`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">4. JSX Represents Objects</h3>
    <p className="leading-relaxed mt-2">
      JSX is not directly rendered as HTML by React; instead, it gets compiled into JavaScript
      objects representing virtual DOM elements. These objects are later used by React to
      efficiently update the real DOM.
    </p>

    <p className="leading-relaxed mt-3">
      The JSX code is converted into a JavaScript object:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`// JSX
const element = <h1 className="greeting">Hello, world!</h1>;

// Compiles to
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">JSX Rules</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>JSX must return a single parent element (use fragments <code>&lt;&gt;&lt;/&gt;</code> if needed)</li>
      <li>All tags must be closed (including self-closing tags like <code>&lt;img /&gt;</code>)</li>
      <li>Use <code>className</code> instead of <code>class</code></li>
      <li>Use <code>htmlFor</code> instead of <code>for</code></li>
      <li>JavaScript expressions are wrapped in curly braces <code>&#123;&#125;</code></li>
    </ul>
  </>
);

export default JSX;
