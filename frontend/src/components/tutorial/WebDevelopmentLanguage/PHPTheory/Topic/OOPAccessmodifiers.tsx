import React from "react";

const PHPOOPAccessModifiers: React.FC = () => {
  return (
    <div className="p-6 leading-7">
      <h1 className="text-3xl font-bold mb-4">PHP OOP - Access Modifiers</h1>

      <h2 className="text-2xl font-semibold mt-6">What are Access Modifiers?</h2>
      <p>
        Access modifiers control where properties and methods of a class can be accessed from.
        PHP supports three access modifiers:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li><strong>public</strong> - accessible from anywhere (default).</li>
        <li><strong>protected</strong> - accessible within the class and by derived classes.</li>
        <li><strong>private</strong> - accessible only within the class itself.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">Example: Access Modifiers on Properties</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  protected $color;
  private $weight;
}

$mango = new Fruit();
$mango->name = 'Mango';   // OK
$mango->color = 'Yellow'; // ERROR
$mango->weight = '300';   // ERROR
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Example: Access Modifiers on Methods</h3>
      <p>
        Functions in a class can also have access modifiers. Even if all properties are public, 
        protected or private methods cannot be accessed outside the class.
      </p>
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        {`<?php
class Fruit {
  public $name;
  public $color;
  public $weight;

  function set_name($n) {        // public function
    $this->name = $n;
  }
  protected function set_color($n) { // protected function
    $this->color = $n;
  }
  private function set_weight($n) {  // private function
    $this->weight = $n;
  }
}

$mango = new Fruit();
$mango->set_name('Mango');   // OK
$mango->set_color('Yellow'); // ERROR
$mango->set_weight('300');   // ERROR
?>`}
      </pre>

      <h3 className="text-xl font-semibold mt-4">Summary</h3>
      <ul className="list-disc list-inside">
        <li>Use <strong>public</strong> for properties/methods you want accessible from anywhere.</li>
        <li>Use <strong>protected</strong> for inheritance-based access control.</li>
        <li>Use <strong>private</strong> for encapsulation and data hiding.</li>
      </ul>
    </div>
  );
};

export default PHPOOPAccessModifiers;
