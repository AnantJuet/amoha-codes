import React from "react";

const PHPOOPInheritance: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Inheritance</h1>

      <h2 className="text-2xl font-semibold mt-6">What is Inheritance?</h2>
      <p>
        Inheritance allows a class (child) to derive from another class (parent). The child class inherits all 
        <strong> public</strong> and <strong>protected</strong> properties and methods of the parent class, 
        and can also have its own properties and methods.
      </p>

      <h3 className="text-xl font-semibold mt-4">Example: Basic Inheritance</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  public function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

// Strawberry inherits from Fruit
class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? ";
  }
}

$strawberry = new Strawberry("Strawberry", "red");
$strawberry->message();
$strawberry->intro();
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Protected Access in Inheritance</h3>
      <p>
        A <strong>protected</strong> method can be accessed inside the parent and child class, but not outside:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  protected function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? ";
    $this->intro(); // OK, calling protected method from child class
  }
}

$strawberry = new Strawberry("Strawberry", "red");
$strawberry->message(); // Works fine
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Overriding Inherited Methods</h3>
      <p>
        Child classes can override inherited methods by redefining them:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color;
  }
  public function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}.";
  }
}

class Strawberry extends Fruit {
  public $weight;
  public function __construct($name, $color, $weight) {
    $this->name = $name;
    $this->color = $color;
    $this->weight = $weight;
  }
  public function intro() {
    echo "The fruit is {$this->name}, the color is {$this->color}, and the weight is {$this->weight} gram.";
  }
}

$strawberry = new Strawberry("Strawberry", "red", 50);
$strawberry->intro();
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">The <code>final</code> Keyword</h3>
      <p>
        The <code>final</code> keyword prevents class inheritance or method overriding:
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
final class Fruit {
  // cannot be inherited
}

// final method cannot be overridden
class Fruit {
  final public function intro() {}
}

class Strawberry extends Fruit {
  // ERROR: cannot override final method
  public function intro() {}
}
?>`}
      </pre>
    </div>
  );
};

export default PHPOOPInheritance;
