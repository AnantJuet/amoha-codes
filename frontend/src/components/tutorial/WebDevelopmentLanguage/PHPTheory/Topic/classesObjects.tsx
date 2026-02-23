import React from "react";

const PHPOOPClasses: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Classes and Objects</h1>

      <h2 className="text-2xl font-semibold mt-6">What is a Class and an Object?</h2>
      <p>
        A <strong>class</strong> is a template for objects, and an <strong>object</strong> is an instance of a class. Classes define <strong>properties</strong> (variables) and <strong>methods</strong> (functions), which objects can use.
      </p>

      <h3 className="text-xl font-semibold mt-4">OOP Case Example</h3>
      <p>
        Imagine we have a class named <code>Fruit</code>. A Fruit can have properties like <code>name</code>, <code>color</code>, and <code>weight</code>. Each object (apple, banana, etc.) inherits these properties but can have different values.
      </p>

      <h3 className="text-xl font-semibold mt-4">Define a Class</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;

  function set_name($name) {
    $this->name = $name;
  }
  function get_name() {
    return $this->name;
  }
}
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Creating Objects</h3>
      <p>
        Objects are instances of a class, created using the <code>new</code> keyword. Each object has its own property values:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
$apple = new Fruit();
$banana = new Fruit();
$apple->set_name('Apple');
$banana->set_name('Banana');

echo $apple->get_name();
echo "<br>";
echo $banana->get_name();
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Adding More Properties</h3>
      <p>
        You can add more methods to handle other properties like <code>color</code>:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;

  function set_name($name) { $this->name = $name; }
  function get_name() { return $this->name; }
  function set_color($color) { $this->color = $color; }
  function get_color() { return $this->color; }
}

$apple = new Fruit();
$apple->set_name('Apple');
$apple->set_color('Red');

echo "Name: " . $apple->get_name();
echo "<br>";
echo "Color: " . $apple->get_color();
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">The <code>$this</code> Keyword</h3>
      <p>
        The <code>$this</code> keyword refers to the current object and is only available inside methods:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  function set_name($name) {
    $this->name = $name;
  }
}
$apple = new Fruit();
$apple->set_name("Apple");

echo $apple->name;
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Modifying Properties Directly</h3>
      <p>
        You can also modify object properties directly from outside the class:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
}
$apple = new Fruit();
$apple->name = "Apple";

echo $apple->name;
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Check Object Class: <code>instanceof</code></h3>
      <p>
        Use <code>instanceof</code> to check if an object belongs to a specific class:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
$apple = new Fruit();
var_dump($apple instanceof Fruit); // true
?>`}
      </pre>
    </div>
  );
};

export default PHPOOPClasses;
