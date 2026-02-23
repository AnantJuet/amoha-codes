import React from 'react';

const PythonTutorial: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Python Tutorial ================= */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Python Tutorial
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 05 Nov, 2025</p>

    <p className="text-lg leading-relaxed">
      Python is one of the most popular programming languages. It is simple, beginner-friendly, and backed by a wide range of libraries and frameworks. 
      Python is used in web development, data science, automation, AI, and more. Its clean syntax makes it easy to read, write, and maintain code.
    </p>

    {/* ================= Hello World Example ================= */}
    <h2 className="text-3xl font-bold mt-6">Basic Code Example</h2>
    <pre className="bg-gray-400 p-4 rounded-lg text-sm text-gray-900 overflow-x-auto">
{`# Python Program to Print Hello World!
print("Hello World!")`}
    </pre>

    {/* ================= Why Learn Python ================= */}
    <h2 className="text-3xl font-bold mt-6">Why Learn Python?</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Requires fewer lines of code compared to languages like Java.</li>
      <li>Provides libraries/frameworks for web development (Django, Flask) and AI/ML/data science (Pandas, TensorFlow, Scikit-learn).</li>
      <li>Cross-platform: works on Windows, macOS, and Linux.</li>
      <li>Used by companies like Google, Netflix, and NASA.</li>
      <li>High demand in software development, data science, and AI/ML.</li>
    </ul>

    {/* ================= Basics ================= */}
    <h2 className="text-3xl font-bold mt-6">Basics</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Introduction</li>
      <li>Applications</li>
      <li>Input and Output</li>
      <li>Variables</li>
      <li>Operators</li>
      <li>Keywords</li>
      <li>Data Types</li>
      <li>Conditional Statements</li>
      <li>Loops</li>
      <li>Quiz: Basics, I/O, Control Flow, Loops</li>
    </ul>

    {/* ================= Functions ================= */}
    <h2 className="text-3xl font-bold mt-6">Functions</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Functions</li>
      <li>Pass Statement</li>
      <li>Global and Local Variables</li>
      <li>Recursion</li>
      <li>*args and **kwargs</li>
      <li>‘self’ as Default Argument</li>
      <li>First Class Functions</li>
      <li>Lambda Functions</li>
      <li>Map, Reduce, Filter</li>
      <li>Inner Functions & Decorators</li>
      <li>Quiz: Functions</li>
    </ul>

    {/* ================= Data Structures ================= */}
    <h2 className="text-3xl font-bold mt-6">Data Structures</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Strings</li>
      <li>List</li>
      <li>Tuples</li>
      <li>Dictionaries</li>
      <li>Sets</li>
      <li>Arrays</li>
      <li>List Comprehension</li>
      <li>Python Collections Module:
        <ul className="list-disc list-inside ml-6">
          <li>Counters</li>
          <li>Heapq</li>
          <li>Deque</li>
          <li>OrderedDict</li>
          <li>Defaultdict</li>
        </ul>
      </li>
      <li>Quiz: Lists, Strings, Tuples, Dictionaries, Sets, Arrays</li>
    </ul>

    {/* ================= OOP Concepts ================= */}
    <h2 className="text-3xl font-bold mt-6">OOP Concepts</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Python OOP</li>
      <li>Classes and Objects</li>
      <li>Polymorphism</li>
      <li>Inheritance</li>
      <li>Abstraction</li>
      <li>Encapsulation</li>
      <li>Iterators</li>
      <li>Quiz: OOP</li>
    </ul>

    {/* ================= Exception Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">Exception Handling</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Exception Handling</li>
      <li>Built-in Exceptions</li>
      <li>User-defined Exceptions</li>
      <li>Quiz: Exception Handling</li>
    </ul>

    {/* ================= File Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">File Handling</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>File Handling Basics</li>
      <li>Read Files</li>
      <li>Write/Create Files</li>
      <li>OS Module</li>
      <li>pathlib Module</li>
      <li>Directory Management</li>
      <li>Quiz: File Handling</li>
    </ul>

    {/* ================= Database Handling ================= */}
    <h2 className="text-3xl font-bold mt-6">Database Handling</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Python MongoDB Tutorial</li>
      <li>Python MySQL Tutorial</li>
    </ul>

    {/* ================= Packages & Libraries ================= */}
    <h2 className="text-3xl font-bold mt-6">Packages / Libraries</h2>
    <ul className="list-disc list-inside space-y-1 text-lg">
      <li>Packages & Built-in Modules</li>
      <li>DSA Libraries</li>
      <li>GUI Libraries</li>
      <li>Data Science Libraries:
        <ul className="list-disc list-inside ml-6">
          <li>Foundational: NumPy, Pandas, Matplotlib</li>
          <li>Advanced Visualization/Stats: Seaborn, Statsmodel</li>
          <li>Machine Learning: Scikit-learn, XGBoost, LightGBM</li>
          <li>Deep Learning: TensorFlow, Keras, PyTorch</li>
        </ul>
      </li>
      <li>Web Development Frameworks:
        <ul className="list-disc list-inside ml-6">
          <li>Backend: Flask, Django</li>
          <li>Database Integration: SQLite, SQLAlchemy, Django ORM</li>
          <li>Frontend Templates: Jinja2 (Flask), Django Templates</li>
          <li>API Development: Flask-RESTful, Django REST Framework</li>
        </ul>
      </li>
    </ul>

  </div>
);

export default PythonTutorial;
