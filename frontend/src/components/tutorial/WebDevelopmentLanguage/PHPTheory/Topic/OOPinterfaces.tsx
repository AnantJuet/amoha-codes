import React from "react";

const PHPOOPInterfaces: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Interfaces</h1>

      <h2 className="text-2xl font-semibold mt-6">What are Interfaces?</h2>
      <p>
        Interfaces allow you to specify what methods a class should implement. They make it easy to use different classes in the same way. 
        When multiple classes implement the same interface, it is called <strong>polymorphism</strong>.
      </p>

      <h3 className="text-xl font-semibold mt-4">Syntax:</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
interface InterfaceName {
  public function someMethod1();
  public function someMethod2($name, $color);
  public function someMethod3() : string;
}
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Interfaces vs Abstract Classes</h3>
      <ul className="list-disc pl-6">
        <li>Interfaces cannot have properties; abstract classes can.</li>
        <li>All interface methods must be public; abstract class methods can be public or protected.</li>
        <li>All methods in an interface are abstract; no <code>abstract</code> keyword is needed.</li>
        <li>Classes can implement an interface while inheriting from another class at the same time.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Using Interfaces</h3>
      <p>
        To implement an interface, a class must use the <code>implements</code> keyword. All methods defined in the interface must be implemented in the class.
      </p>

      <h3 className="text-xl font-semibold mt-4">Example:</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
interface Animal {
  public function makeSound();
}

class Cat implements Animal {
  public function makeSound() {
    echo "Meow";
  }
}

$animal = new Cat();
$animal->makeSound();
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Polymorphism Example with Multiple Animals:</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
interface Animal {
  public function makeSound();
}

class Cat implements Animal {
  public function makeSound() {
    echo "Meow ";
  }
}

class Dog implements Animal {
  public function makeSound() {
    echo "Bark ";
  }
}

class Mouse implements Animal {
  public function makeSound() {
    echo "Squeak ";
  }
}

$animals = [new Cat(), new Dog(), new Mouse()];

foreach($animals as $animal) {
  $animal->makeSound();
}
?>`}
      </pre>

      <p className="mt-4">
        Cat, Dog, and Mouse all implement the <code>Animal</code> interface. This allows looping through all animals and calling <code>makeSound()</code> 
        without knowing their exact type. Each class defines its own implementation of the method.
      </p>
    </div>
  );
};

export default PHPOOPInterfaces;
