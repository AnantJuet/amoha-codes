import React from "react";

const EnvironmentSetup: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      React Environment Setup
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      React is a library and not a framework. It was developed by Facebook to address its specific
      challenges. Understanding a new library or framework can be exciting, but it is important to
      first grasp its core concepts.
    </p>

    <p className="leading-relaxed mt-3">
      Before going into the practical aspects of ReactJS, it is important to set up the development
      environment. This guide will walk you through the process of installing the necessary tools
      and creating your first React project.
    </p>

    <h2 className="text-2xl font-bold mt-6">Setting Up the Development Environment</h2>

    <h3 className="text-xl font-semibold mt-4">1. Install Node.js</h3>
    <p className="leading-relaxed mt-2">
      To begin, you will need Node.js and npm (Node Package Manager). Node.js is a JavaScript runtime
      that allows you to run JavaScript outside the browser, while npm is used to manage your project's
      dependencies.
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li>Visit the Official Node.js website and download the version recommended for most users: <a href="https://nodejs.org/en/download" className="text-blue-600 dark:text-blue-400">https://nodejs.org/en/download</a></li>
      <li>After Installation, verify that everything is working by running the following commands in your terminal:</li>
    </ul>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`$ node --version
$ npm --version`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Code Editor</h3>
    <p className="leading-relaxed mt-2">
      While you can use any text editor, Visual Studio Code is highly recommended for its syntax
      highlighting, auto completion, and Git Integration.
    </p>

    <p className="leading-relaxed mt-3">
      Here's a list of some good code editors you can explore:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-2">
      <li>Visual Studio Code (recommended)</li>
      <li>Sublime Text</li>
      <li>Atom</li>
      <li>WebStorm</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Creating a React Project with Vite</h2>

    <h3 className="text-xl font-semibold mt-4">Step 1: Install Vite and Create a Project</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`npm create vite@latest my-react-app -- --template react`}</pre>
    </div>

    <p className="leading-relaxed mt-3">
      Replace <code>my-react-app</code> with your desired project name.
    </p>

    <h3 className="text-xl font-semibold mt-4">Step 2: Navigate into your project directory</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`cd my-react-app`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Step 3: Install dependencies</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`npm install`}</pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Step 4: Start the development server</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`npm run dev`}</pre>
    </div>

    <p className="leading-relaxed mt-3">
      This will launch the app in your browser at <code>http://localhost:5173</code>.
    </p>

    <h2 className="text-2xl font-bold mt-6">Understanding the Project Structure</h2>

    <p className="leading-relaxed mt-3">
      After creating a React project, you will see the following key files:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><code>public/index.html</code>: The single HTML file where your React app will be rendered.</li>
      <li><code>src/index.js</code> (or <code>src/main.jsx</code>): The JavaScript entry point for your React application.</li>
      <li><code>src/App.js</code> (or <code>src/App.jsx</code>): A basic React component that serves as the starting point for your app.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">React Basic Concepts Reference</h2>

    <p className="leading-relaxed mt-3">
      Here are the basic concepts you should understand when working with React:
    </p>

    <ul className="list-disc ml-6 leading-relaxed mt-3">
      <li><b>Components:</b> Reusable building blocks of a React application</li>
      <li><b>JSX:</b> JavaScript syntax extension that looks like HTML</li>
      <li><b>Props:</b> Data passed from parent to child components</li>
      <li><b>State:</b> Component-specific data that can change over time</li>
      <li><b>Hooks:</b> Functions that let you use state and other React features in functional components</li>
    </ul>
  </>
);

export default EnvironmentSetup;
