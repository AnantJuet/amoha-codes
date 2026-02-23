import React from "react";

const UseContext: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      useContext Hook
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      The <b>useContext</b> hook in React allows components to consume values from the React context.
      React's context API is primarily designed to pass data down the component tree without manually
      passing props at every level. useContext is a part of React's hooks system, introduced in
      React 16.8, that enables functional components to access context values.
    </p>

    <h2 className="text-2xl font-bold mt-6">Basic Syntax</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`const contextValue = useContext(MyContext);`}</pre>
    </div>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>MyContext:</b> The context object is created using <code>React.createContext()</code></li>
      <li><b>contextValue:</b> The current context value that we can use in our component</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Working of useContext</h2>

    <p className="leading-relaxed mt-3">
      The useContext hook allows consuming values from a React Context, enabling easy access to
      shared state across multiple components without prop drilling. Here is how it works:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Simplifies accessing shared state across components</li>
      <li>Avoids prop drilling by eliminating the need to pass props down multiple levels</li>
      <li>Works seamlessly with React's Context API to provide global state</li>
      <li>Ideal for managing themes, authentication, or user preferences across the app</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Creating a Context</h2>

    <p className="leading-relaxed mt-3">
      Before using useContext, we need to create a context using <code>React.createContext()</code>.
      This context will provide a value that can be accessed by any child component wrapped in a
      <code>Context.Provider</code>.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

function App() {
  const [value, setValue] = useState('Hello, World!');

  return (
    <MyContext.Provider value={value}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const contextValue = useContext(MyContext);
  return <h1>{contextValue}</h1>;
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>createContext()</code> creates a context object (MyContext) that holds a default value</li>
      <li><code>MyContext.Provider</code> passes down the context value to its child components</li>
      <li><code>useContext(MyContext)</code> allows components like ChildComponent to access the context value</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">1. Managing Authentication with useContext</h2>

    <p className="leading-relaxed mt-3">
      useContext can be used for managing the user authentication state globally.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { createContext, useContext, useState } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

// Login Button Component
function LoginButton() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </button>
  );
}

// App Component
function App() {
  return (
    <AuthProvider>
      <LoginButton />
    </AuthProvider>
  );
}`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      In this example:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li><code>AuthContext</code> is created using <code>createContext()</code> and <code>AuthProvider</code> manages the isLoggedIn state</li>
      <li><code>LoginButton</code> uses <code>useContext</code> to access <code>isLoggedIn</code> and <code>setIsLoggedIn</code> from the context</li>
      <li>App renders <code>LoginButton</code> wrapped in <code>AuthProvider</code>, allowing dynamic login/logout functionality</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">2. Sharing a Theme Across Components</h2>

    <p className="leading-relaxed mt-3">
      We will create a theme context and use useContext to access its values in child components.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff'
      }}
      onClick={toggleTheme}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedButton />
    </ThemeProvider>
  );
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">useContext vs Prop Drilling</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 dark:border-gray-600">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Aspect</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">Prop Drilling</th>
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2">useContext</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Data Flow</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Passes data step-by-step through each level</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Direct access from any nested component</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Best For</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Simple data between nearby components</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Global state (like theme, auth, user)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Performance</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Generally better for local state</td>
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">May re-render more if not optimized</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Performance Considerations</h2>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>When the value of the Context updates, all components consuming that context automatically re-render with the new value</li>
      <li>Consider splitting contexts for different concerns to minimize unnecessary re-renders</li>
      <li>Use <code>useMemo</code> to memoize context values when appropriate</li>
    </ul>
  </>
);

export default UseContext;
