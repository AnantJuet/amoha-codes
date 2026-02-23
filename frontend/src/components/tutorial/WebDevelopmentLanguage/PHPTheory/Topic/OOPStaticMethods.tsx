import React from "react";

const PhpStaticMethodsTutorial: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-900">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Static Methods</h1>

      <p className="mb-4">
        Static methods are methods that can be called <strong>without creating
        an object</strong>. You access them using the class name and the
        <code>::</code> (double colon) operator.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Static Method Syntax</h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class ClassName {
  public static function staticMethod() {
    echo "Hello World!";
  }
}
?>`}
      </pre>

      <p className="mb-4">Calling a static method:</p>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`ClassName::staticMethod();`}
      </pre>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Example 1: Basic Static Method</h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class greeting {
  public static function welcome() {
    echo "Hello World!";
  }
}

greeting::welcome();
?>`}
      </pre>

      <p className="mb-4">
        This calls the method <code>welcome()</code> directly using the class
        name. No object needed.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">
        Example 2: Calling Static Method Inside Constructor
      </h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class greeting {
  public static function welcome() {
    echo "Hello World!";
  }

  public function __construct() {
    self::welcome();
  }
}

new greeting();
?>`}
      </pre>

      <p className="mb-4">
        The <code>self::</code> keyword is used to access a static method inside
        the same class.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">
        Example 3: Calling Static Method From Another Class
      </h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class A {
  public static function welcome() {
    echo "Hello World!";
  }
}

class B {
  public function message() {
    A::welcome();
  }
}

$obj = new B();
echo $obj->message();
?>`}
      </pre>

      <p className="mb-4">
        Another class can call the static method if it is <strong>public</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">
        Example 4: Calling Parent Static Method in Child Class
      </h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class domain {
  protected static function getWebsiteName() {
    return "W3Schools.com";
  }
}

class domainW3 extends domain {
  public $websiteName;

  public function __construct() {
    $this->websiteName = parent::getWebsiteName();
  }
}

$domainW3 = new domainW3;
echo $domainW3->websiteName;
?>`}
      </pre>

      <p className="mb-4">
        The <code>parent::</code> keyword is used to call a static method from
        the parent class.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Why Use Static Methods?</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Used for utility/helper functions</li>
        <li>No need to create an object</li>
        <li>Used for constant behaviors</li>
        <li>Useful in frameworks and OOP architecture</li>
      </ul>
    </div>
  );
};

export default PhpStaticMethodsTutorial;
