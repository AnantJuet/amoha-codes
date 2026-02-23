import React from "react";

const KotlinOOP: React.FC = () => (
  <div className="mt-20">
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2">
      Kotlin OOP
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      OOP stands for Object-Oriented Programming. Procedural programming is about writing procedures or methods that perform operations on the data, while object-oriented programming is about creating objects that contain both data and methods.
    </p>

    <h2 className="text-2xl font-bold mt-6">Advantages of OOP</h2>
    <p className="text-lg  mt-2">
      Object-oriented programming has several advantages over procedural programming:
    </p>
    <ul className="list-disc list-inside text-lg mt-2 space-y-1">
      <li>OOP is faster and easier to execute.</li>
      <li>OOP provides a clear structure for programs.</li>
      <li>OOP helps keep Kotlin code DRY ("Don't Repeat Yourself"), making it easier to maintain, modify, and debug.</li>
      <li>OOP allows creating fully reusable applications with less code and shorter development time.</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">The DRY Principle</h2>
    <p className="text-lg  mt-2">
      The "Don't Repeat Yourself" (DRY) principle is about reducing the repetition of code. You should extract out the codes that are common for the application, place them at a single place, and reuse them instead of repeating them.
    </p>

    <h2 className="text-2xl font-bold mt-6">Classes and Objects</h2>
    <p className="text-lg  mt-2">
      Classes and objects are the two main aspects of object-oriented programming. A class defines the structure and behavior (data and methods) that the objects created from it will have. An object is an instance of a class, representing real entities with actual values.
    </p>

    <p className="text-lg  mt-2">
      Look at the following illustration to see the difference between a class and objects:
    </p>
    {/* You can add an image or code snippet here for illustration */}
  </div>
);

export default KotlinOOP;
