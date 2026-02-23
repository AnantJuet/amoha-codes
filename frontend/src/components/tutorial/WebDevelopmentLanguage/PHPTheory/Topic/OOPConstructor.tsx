import React from "react";

const PHPOOPConstructor: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Constructor</h1>

      <h2 className="text-2xl font-semibold mt-6">What is a Constructor?</h2>
      <p>
        A constructor is a special method in a class that is automatically called when an object is created. 
        In PHP, it is defined as <code>__construct()</code> (note the double underscores). 
        It is commonly used to initialize object properties.
      </p>

      <h3 className="text-xl font-semibold mt-4">Example: Constructor with One Property</h3>
      <p>This example initializes the <code>name</code> property when creating a new object:</p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;

  function __construct($name) {
    $this->name = $name;
  }

  function get_name() {
    return $this->name;
  }
}

$apple = new Fruit("Apple");
echo $apple->get_name(); // Output: Apple
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example: Constructor with Multiple Properties</h3>
      <p>This example initializes both <code>name</code> and <code>color</code> when creating a new object:</p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;

  function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }

  function get_name() {
    return $this->name;
  }

  function get_color() {
    return $this->color;
  }
}

$apple = new Fruit("Apple", "Red");
echo $apple->get_name(); // Output: Apple
echo "<br>";
echo $apple->get_color(); // Output: Red
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Why Use Constructors?</h3>
      <ul className="list-disc list-inside">
        <li>Automatically initialize object properties when creating an object.</li>
        <li>Reduces the need to call setter methods manually.</li>
        <li>Makes the code cleaner and more concise.</li>
      </ul>
    </div>
  );
};

export default PHPOOPConstructor;
