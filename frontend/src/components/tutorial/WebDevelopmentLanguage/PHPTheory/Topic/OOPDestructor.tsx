import React from "react";

const PHPOOPDestructor: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Destructor</h1>

      <h2 className="text-2xl font-semibold mt-6">What is a Destructor?</h2>
      <p>
        A destructor is a special method in a class that is automatically called when an object is destroyed 
        or the script ends. In PHP, it is defined as <code>__destruct()</code> (note the double underscores).
      </p>

      <h3 className="text-xl font-semibold mt-4">Example: Destructor with One Property</h3>
      <p>This example demonstrates a constructor and a destructor:</p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;

  function __construct($name) {
    $this->name = $name;
  }

  function __destruct() {
    echo "The fruit is {$this->name}.";
  }
}

$apple = new Fruit("Apple");
// Output at the end of script: The fruit is Apple.
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example: Destructor with Multiple Properties</h3>
      <p>This example shows a constructor and a destructor for two properties:</p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;

  function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }

  function __destruct() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

$apple = new Fruit("Apple", "Red");
// Output at the end of script: The fruit is Apple and the color is Red.
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Why Use Destructors?</h3>
      <ul className="list-disc list-inside">
        <li>Automatically executes code when an object is destroyed or the script ends.</li>
        <li>Useful for cleanup tasks, like closing files or releasing resources.</li>
        <li>Helps manage memory efficiently in object-oriented programs.</li>
      </ul>
    </div>
  );
};

export default PHPOOPDestructor;
