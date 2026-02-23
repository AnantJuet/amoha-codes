import React from "react";

const PhpTraitsTutorial: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-900">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Traits</h1>

      <p className="mb-4">
        PHP supports only single inheritance, which means a class can inherit
        only from one parent class. But what if we need multiple behaviors?
        <strong> PHP Traits </strong> solve this problem.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">What are Traits?</h2>
      <p className="mb-4">
        Traits allow you to create reusable methods that can be used in multiple
        classes. They help avoid code duplication.
      </p>

      <h3 className="text-xl font-semibold mb-2">Trait Syntax</h3>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
trait TraitName {
  // some reusable code...
}
?>`}
      </pre>

      <h3 className="text-xl font-semibold mb-2">Using Traits in a Class</h3>
      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class MyClass {
  use TraitName;
}
?>`}
      </pre>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Example 1: Basic Trait</h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
trait message1 {
  public function msg1() {
    echo "OOP is fun! ";
  }
}

class Welcome {
  use message1;
}

$obj = new Welcome();
$obj->msg1();
?>`}
      </pre>

      <p className="mb-4">
        The <strong>Welcome</strong> class uses the <strong>message1</strong>{" "}
        trait, so it gets access to the <code>msg1()</code> method.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">
        Example 2: Using Multiple Traits
      </h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
trait message1 {
  public function msg1() {
    echo "OOP is fun! ";
  }
}

trait message2 {
  public function msg2() {
    echo "OOP reduces code duplication!";
  }
}

class Welcome {
  use message1;
}

class Welcome2 {
  use message1, message2;
}

$obj = new Welcome();
$obj->msg1();
echo "<br>";

$obj2 = new Welcome2();
$obj2->msg1();
$obj2->msg2();
?>`}
      </pre>

      <p className="mb-4">
        <strong>Welcome2</strong> class uses both traits (
        <code>message1</code> and <code>message2</code>) — this allows PHP to
        simulate multiple inheritance.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">
        Why Use PHP Traits?
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Code reuse without inheritance</li>
        <li>Avoids duplication</li>
        <li>Cleaner and modular structure</li>
        <li>Allows multiple behaviors in one class</li>
      </ul>
    </div>
  );
};

export default PhpTraitsTutorial;
