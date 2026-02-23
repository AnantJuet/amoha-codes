import React from "react";

const PHPOOPAbstractClasses: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Abstract Classes</h1>

      <h2 className="text-2xl font-semibold mt-6">What are Abstract Classes and Methods?</h2>
      <p>
        Abstract classes contain at least one abstract method. An abstract method is declared but not implemented, 
        leaving the child classes to define it. Abstract classes are defined using the <code>abstract</code> keyword.
      </p>

      <h3 className="text-xl font-semibold mt-4">Syntax:</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
abstract class ParentClass {
  abstract public function someMethod1();
  abstract public function someMethod2($name, $color);
  abstract public function someMethod3() : string;
}
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Rules for Child Classes</h3>
      <ul className="list-disc pl-6">
        <li>Child method must have the same name as the parent abstract method.</li>
        <li>Access modifier must be same or less restricted.</li>
        <li>Number of required arguments must match, optional arguments may be added.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Example:</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
abstract class Car {
  public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  abstract public function intro() : string;
}

class Audi extends Car {
  public function intro() : string {
    return "Choose German quality! I'm an $this->name!";
  }
}

class Volvo extends Car {
  public function intro() : string {
    return "Proud to be Swedish! I'm a $this->name!";
  }
}

$audi = new Audi("Audi");
echo $audi->intro();
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Abstract Method with Arguments:</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
abstract class ParentClass {
  abstract protected function prefixName($name);
}

class ChildClass extends ParentClass {
  public function prefixName($name, $separator = ".", $greet = "Dear") {
    if ($name == "John Doe") $prefix = "Mr";
    elseif ($name == "Jane Doe") $prefix = "Mrs";
    else $prefix = "";
    return "{$greet} {$prefix}{$separator} {$name}";
  }
}

$class = new ChildClass;
echo $class->prefixName("John Doe");
echo "<br>";
echo $class->prefixName("Jane Doe");
?>`}
      </pre>

      <p className="mt-4">
        Abstract classes enforce a contract for child classes, ensuring they implement required methods while allowing flexibility for optional arguments.
      </p>
    </div>
  );
};

export default PHPOOPAbstractClasses;
