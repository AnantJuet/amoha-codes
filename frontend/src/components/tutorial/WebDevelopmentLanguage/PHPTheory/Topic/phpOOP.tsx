import React from "react";

const PHPOOP: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP - What is OOP?</h1>

      <h2 className="text-2xl font-semibold mt-6">Introduction to OOP</h2>
      <p>
        From PHP5, you can write PHP code in an <strong>Object-Oriented Programming (OOP)</strong> style. OOP allows you to create programs using objects and classes, making the code faster, easier to execute, and more maintainable.
      </p>

      <h2 className="text-2xl font-semibold mt-6">OOP vs Procedural Programming</h2>
      <p>
        Procedural programming is about writing procedures or functions that operate on data. Object-oriented programming, on the other hand, is about creating <strong>objects</strong> that contain both <strong>data</strong> and <strong>functions</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-4">Advantages of OOP</h3>
      <ul className="list-disc pl-5 mt-2">
        <li>Faster and easier to execute.</li>
        <li>Provides a clear structure for programs.</li>
        <li>Keeps code DRY ("Don't Repeat Yourself") — reduces code duplication and makes maintenance easier.</li>
        <li>Enables reusable applications with less code and shorter development time.</li>
      </ul>
      <p className="mt-2 italic">
        Tip: The DRY principle encourages extracting common code into a single place and reusing it instead of repeating it.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Classes and Objects</h2>
      <p>
        Classes and objects are the two main pillars of OOP.
      </p>

      <h3 className="text-xl font-semibold mt-4">Class vs Object</h3>
      <p>
        A <strong>class</strong> is a template or blueprint, while an <strong>object</strong> is an instance of that class.
      </p>

      <table className="table-auto border-collapse border border-gray-400 mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-4 py-2">Class</th>
            <th className="border border-gray-400 px-4 py-2">Objects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Fruit</td>
            <td className="border border-gray-400 px-4 py-2">Apple, Banana, Mango</td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Car</td>
            <td className="border border-gray-400 px-4 py-2">Volvo, Audi, Toyota</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4">
        Each object inherits the properties and behaviors of the class, but can have its own specific values for the properties.
      </p>
    </div>
  );
};

export default PHPOOP;
