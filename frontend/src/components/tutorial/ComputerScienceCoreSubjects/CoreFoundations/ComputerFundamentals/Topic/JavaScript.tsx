import React from 'react';

const JavaScriptTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= JavaScript Tutorial ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      JavaScript Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 10 Sep, 2025</p>

    <p className="text-lg leading-relaxed">
      JavaScript is a lightweight, cross-platform programming language used to create dynamic and interactive websites. It runs on the client-side in browsers as well as on servers using Node.js, enabling developers to build both frontend and backend applications.
    </p>

    {/* ================= Why Learn JavaScript ================= */}
    <h2 className="text-3xl font-bold mt-6">Why Learn JavaScript?</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Core language for modern web development, enabling interactive features on websites.</li>
      <li>High demand in Frontend, Backend (Node.js), and Full Stack Development.</li>
      <li>Supports frameworks and libraries like React, Angular, Vue.js, Node.js, and Express.js.</li>
      <li>Object-oriented and event-driven language suitable for scalable applications.</li>
      <li>Cross-platform, runs directly in all modern browsers.</li>
      <li>Used by major companies like Google, Facebook, and Amazon.</li>
    </ul>

    {/* ================= Hello World Example ================= */}
    <h2 className="text-3xl font-bold mt-6">Write and Run Your First JavaScript Program</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm text-gray-900 overflow-x-auto">
{`console.log("Hello World!");`}
    </pre>

    {/* ================= Fundamentals ================= */}
    <h2 className="text-3xl font-bold mt-6">Fundamentals</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Using JavaScript in HTML</li>
      <li>Variables and Data Types</li>
      <li>Operators and Type Conversion</li>
      <li>Control Flow Statements</li>
      <li>Scope</li>
      <li>Browser Console</li>
      <li>Quiz: JS Basics, Variables, Data Types, Operators, Control Flow</li>
    </ul>

    {/* ================= Functions and Events ================= */}
    <h2 className="text-3xl font-bold mt-6">Functions and Events</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Functions</li>
      <li>Function Binding, Hoisting, Closures</li>
      <li>Higher-Order Functions, Iterator, Function Generators</li>
      <li>Events, Event Loop, Event Bubbling</li>
      <li>Quiz: Functions & Event Handling</li>
    </ul>

    {/* ================= Beginner Projects ================= */}
    <h2 className="text-3xl font-bold mt-6">JavaScript Beginner Projects</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Counter Application</li>
      <li>Prime Number Checker</li>
      <li>Show/Hide Password</li>
      <li>Palindrome Checker App</li>
      <li>JavaScript Carousel</li>
      <li>Email Validator App</li>
      <li>Random Number/Password Generator</li>
      <li>Unicode Character Value</li>
    </ul>

    {/* ================= Data Structures ================= */}
    <h2 className="text-3xl font-bold mt-6">JavaScript Data Structures</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Numbers and Strings</li>
      <li>Array and LinkedList</li>
      <li>Map, Stack, Queue</li>
      <li>Sorting Algorithms</li>
      <li>WeakMap, WeakSet, Typed Arrays, Deque, Priority Queue</li>
      <li>Quiz: Numbers, Strings, Arrays, LinkedList, Stack, Queue, Data Structures</li>
    </ul>

    {/* ================= Object-Oriented Programming ================= */}
    <h2 className="text-3xl font-bold mt-6">Object-Oriented Programming (OOP)</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction to OOP</li>
      <li>Objects, Classes, Constructor Method</li>
      <li>this Keyword, Prototype, Static Methods</li>
      <li>Inheritance, Encapsulation, Abstraction, Polymorphism</li>
      <li>Getters and Setters</li>
      <li>Quiz: Objects, Classes, Inheritance, OOP</li>
    </ul>

    {/* ================= BOM & DOM ================= */}
    <h2 className="text-3xl font-bold mt-6">Browser & DOM</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Browser Object Model (BOM)</li>
      <li>Document Object Model (DOM)</li>
      <li>Manipulating DOM Elements</li>
      <li>Event Handling in the DOM</li>
      <li>Quiz: BOM & DOM</li>
    </ul>

    {/* ================= Asynchronous JavaScript ================= */}
    <h2 className="text-3xl font-bold mt-6">Asynchronous JavaScript</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Callbacks</li>
      <li>Promise & Promise Chaining</li>
      <li>Async/Await</li>
      <li>Quiz: Asynchronous JavaScript</li>
    </ul>

    {/* ================= Intermediate Projects ================= */}
    <h2 className="text-3xl font-bold mt-6">JavaScript Intermediate Projects</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Price Range Slider with Min-Max Input</li>
      <li>GitHub Profile Search</li>
      <li>Toast Notification</li>
      <li>Multi-Step Progress Bar</li>
      <li>Quiz App with Timer</li>
      <li>Expense Tracker</li>
      <li>Sortable & Filterable Table</li>
      <li>Dynamic Resume Builder</li>
      <li>OTP Input Field</li>
      <li>Student Grade Calculator</li>
    </ul>

    {/* ================= JSON ================= */}
    <h2 className="text-3xl font-bold mt-6">JavaScript JSON</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>JSON Tutorial & Parser</li>
      <li>JSON vs JavaScript Object</li>
      <li>Read & Parse JSON File</li>
      <li>Quiz: JSON</li>
    </ul>

    {/* ================= Regular Expressions & Validation ================= */}
    <h2 className="text-3xl font-bold mt-6">Regular Expressions & Validation</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Regular Expressions Basics</li>
      <li>Form, Email, Number, Password, URL, Username Validation</li>
      <li>Quiz: Regular Expressions</li>
    </ul>

    {/* ================= Exception & Error Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">Exception & Error Handling</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Exception Handling</li>
      <li>throw Statement</li>
      <li>try-catch Statement</li>
      <li>Debugging</li>
      <li>Quiz: Error Handling & Debugging</li>
    </ul>

    {/* ================= Testing & Optimization ================= */}
    <h2 className="text-3xl font-bold mt-6">Testing & Performance Optimization</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Unit Testing with Jest</li>
      <li>Memory Management & Garbage Collection</li>
      <li>Lazy Loading, Debouncing, Throttling</li>
      <li>Quiz: Testing & Optimization</li>
    </ul>

    {/* ================= Libraries & Frameworks ================= */}
    <h2 className="text-3xl font-bold mt-6">Libraries and Frameworks</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Frontend Libraries: React, Preact, Lodash, Moment.js, jQuery, Axios</li>
      <li>Backend Libraries: Socket.io, JWT, Bcrypt, Passport.js, CORS</li>
      <li>Frontend Frameworks: Vue.js, Angular, Next.js, Nuxt.js, Gatsby, Remix</li>
      <li>Backend Frameworks: Express.js, NestJS, Koa.js, Sails.js, Fastify</li>
      <li>Fullstack Frameworks: Meteor.js, Next.js, Nuxt.js, RedwoodJS</li>
    </ul>

    {/* ================= Applications of JavaScript ================= */}
    <h2 className="text-3xl font-bold mt-6">Applications of JavaScript</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Web Development: Interactive websites and single-page applications</li>
      <li>Mobile App Development: React Native for cross-platform apps</li>
      <li>Game Development: Browser-based games using Phaser</li>
      <li>Server-Side Development: Node.js for scalable applications and APIs</li>
      <li>Scripting & Automation: Form validation and data manipulation</li>
      <li>Web Scraping: Using Puppeteer for extracting website data</li>
      <li>IoT Projects: Controlling devices and sensors using frameworks like Johnny-Five</li>
    </ul>

  </div>
);

export default JavaScriptTutorial;
