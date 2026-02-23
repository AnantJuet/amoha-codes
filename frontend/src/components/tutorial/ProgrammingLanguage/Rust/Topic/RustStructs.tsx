import React from "react";

const RustStructs: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Structs</h1>

    <h2 className="text-2xl font-bold mt-6">Defining Structs</h2>
    <p>
      Structs let you create custom data types with named fields:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct User {
    username: String,
    email: String,
    sign_in_count: u64,
    active: bool,
}

fn main() {
    let user1 = User {
        email: String::from("user@example.com"),
        username: String::from("user123"),
        active: true,
        sign_in_count: 1,
    };

    println!("Username: {}", user1.username);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Mutable Structs</h2>
    <p>
      The entire instance must be mutable to change any field:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let mut user1 = User {
        email: String::from("user@example.com"),
        username: String::from("user123"),
        active: true,
        sign_in_count: 1,
    };

    user1.email = String::from("new@example.com");
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Struct Update Syntax</h2>
    <p>
      Create a new instance using values from another instance:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let user1 = User {
        email: String::from("user@example.com"),
        username: String::from("user123"),
        active: true,
        sign_in_count: 1,
    };

    let user2 = User {
        email: String::from("another@example.com"),
        ..user1  // Use remaining fields from user1
    };
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Tuple Structs</h2>
    <p>
      Structs without named fields:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct Color(i32, i32, i32);
struct Point(i32, i32, i32);

fn main() {
    let black = Color(0, 0, 0);
    let origin = Point(0, 0, 0);

    println!("Black: ({}, {}, {})", black.0, black.1, black.2);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Methods</h2>
    <p>
      Use <code>impl</code> to define methods on structs:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    // Method - takes &self as first parameter
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

fn main() {
    let rect = Rectangle { width: 30, height: 50 };
    println!("Area: {}", rect.area());
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Associated Functions</h2>
    <p>
      Functions in <code>impl</code> that don't take <code>self</code> are called associated functions:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`impl Rectangle {
    // Associated function (like a constructor)
    fn square(size: u32) -> Rectangle {
        Rectangle {
            width: size,
            height: size,
        }
    }
}

fn main() {
    let sq = Rectangle::square(10);  // Called with ::
    println!("Square area: {}", sq.area());
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Deriving Traits</h2>
    <p>
      Use <code>#[derive]</code> to automatically implement traits:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#[derive(Debug, Clone, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p1 = Point { x: 5, y: 10 };
    let p2 = p1.clone();

    println!("{:?}", p1);           // Debug print
    println!("Equal: {}", p1 == p2); // PartialEq comparison
}`}
    </pre>
  </div>
);

export default RustStructs;
