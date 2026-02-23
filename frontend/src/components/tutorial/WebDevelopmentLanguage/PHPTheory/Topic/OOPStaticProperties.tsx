import React from "react";

const PhpStaticPropertiesTutorial: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto text-gray-900">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Static Properties</h1>

      <p className="mb-4">
        Static properties are variables that can be accessed{" "}
        <strong>without creating an object</strong>. They belong to the class
        itself rather than an instance.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Static Property Syntax</h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class ClassName {
  public static $staticProp = "W3Schools";
}
?>`}
      </pre>

      <p className="mb-4">Accessing a static property:</p>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`ClassName::$staticProp;`}
      </pre>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Example 1: Basic Static Property</h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class pi {
  public static $value = 3.14159;
}

echo pi::$value;
?>`}
      </pre>

      <p className="mb-4">
        Here <code>$value</code> is a static property, and we access it without
        creating an object.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">
        Example 2: Access Static Property Inside Same Class
      </h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class pi {
  public static $value = 3.14159;

  public function staticValue() {
    return self::$value;
  }
}

$pi = new pi();
echo $pi->staticValue();
?>`}
      </pre>

      <p className="mb-4">
        To access a static property inside the same class, use{" "}
        <code>self::$propertyName</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">
        Example 3: Accessing Parent Static Property in Child Class
      </h2>

      <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
{`<?php
class pi {
  public static $value = 3.14159;
}

class x extends pi {
  public function xStatic() {
    return parent::$value;
  }
}

echo x::$value;

$x = new x();
echo $x->xStatic();
?>`}
      </pre>

      <p className="mb-4">
        Child classes can access parent static properties using{" "}
        <code>parent::$propertyName</code>.
      </p>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Why Use Static Properties?</h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Used for values shared across all objects</li>
        <li>Useful for constants or common configuration</li>
        <li>Can be accessed without creating objects</li>
        <li>Helpful in utility classes and OOP architecture</li>
      </ul>
    </div>
  );
};

export default PhpStaticPropertiesTutorial;
