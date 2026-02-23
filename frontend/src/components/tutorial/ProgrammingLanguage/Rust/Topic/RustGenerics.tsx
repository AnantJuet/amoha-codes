import React from "react";

const RustGenerics: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Generics</h1>

    <h2 className="text-2xl font-bold mt-6">What are Generics?</h2>
    <p>
      Generics allow you to write flexible, reusable code that works with multiple types
      while maintaining type safety. They're resolved at compile time with zero runtime cost.
    </p>

    <h2 className="text-2xl font-bold mt-6">Generic Functions</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Without generics - duplicate code
fn largest_i32(list: &[i32]) -> &i32 {
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

fn largest_char(list: &[char]) -> &char {
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

// With generics - one function for all types
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

fn main() {
    let numbers = vec![34, 50, 25, 100, 65];
    println!("Largest: {}", largest(&numbers));

    let chars = vec!['y', 'm', 'a', 'q'];
    println!("Largest: {}", largest(&chars));
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Generic Structs</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Single type parameter
struct Point<T> {
    x: T,
    y: T,
}

// Multiple type parameters
struct Pair<T, U> {
    first: T,
    second: U,
}

fn main() {
    let integer_point = Point { x: 5, y: 10 };
    let float_point = Point { x: 1.0, y: 4.0 };

    let pair = Pair { first: 5, second: "hello" };
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Generic Enums</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Option<T> - built into Rust
enum Option<T> {
    Some(T),
    None,
}

// Result<T, E> - built into Rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}

// Custom generic enum
enum Either<L, R> {
    Left(L),
    Right(R),
}

fn main() {
    let some_number: Option<i32> = Some(5);
    let no_number: Option<i32> = None;

    let success: Result<i32, String> = Ok(42);
    let failure: Result<i32, String> = Err(String::from("error"));
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Generic Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`struct Point<T> {
    x: T,
    y: T,
}

// Methods for all Point<T>
impl<T> Point<T> {
    fn x(&self) -> &T {
        &self.x
    }

    fn y(&self) -> &T {
        &self.y
    }
}

// Methods only for Point<f32>
impl Point<f32> {
    fn distance_from_origin(&self) -> f32 {
        (self.x.powi(2) + self.y.powi(2)).sqrt()
    }
}

// Method with different generic
impl<T> Point<T> {
    fn mixup<U>(self, other: Point<U>) -> Point<T> {
        Point {
            x: self.x,
            y: other.y,  // This would need different types
        }
    }
}

fn main() {
    let p = Point { x: 5, y: 10 };
    println!("x = {}", p.x());

    let pf = Point { x: 3.0_f32, y: 4.0_f32 };
    println!("Distance: {}", pf.distance_from_origin());
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Trait Bounds</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::fmt::Display;

// Require T implements Display
fn print_item<T: Display>(item: T) {
    println!("{}", item);
}

// Multiple bounds
fn compare_and_print<T: PartialOrd + Display>(a: T, b: T) {
    if a > b {
        println!("{} is greater", a);
    } else {
        println!("{} is greater", b);
    }
}

// Using where clause for readability
fn some_function<T, U>(t: &T, u: &U) -> i32
where
    T: Display + Clone,
    U: Clone + Debug,
{
    // ...
    0
}

// Conditional method implementation
struct Pair<T> {
    x: T,
    y: T,
}

impl<T> Pair<T> {
    fn new(x: T, y: T) -> Self {
        Self { x, y }
    }
}

// Only implement cmp_display for types that support it
impl<T: Display + PartialOrd> Pair<T> {
    fn cmp_display(&self) {
        if self.x >= self.y {
            println!("Largest is x = {}", self.x);
        } else {
            println!("Largest is y = {}", self.y);
        }
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Default Type Parameters</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::ops::Add;

// Add trait has a default type parameter
// trait Add<Rhs = Self> {
//     type Output;
//     fn add(self, rhs: Rhs) -> Self::Output;
// }

#[derive(Debug, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

impl Add for Point {
    type Output = Point;

    fn add(self, other: Point) -> Point {
        Point {
            x: self.x + other.x,
            y: self.y + other.y,
        }
    }
}

// Custom type parameter
struct Millimeters(u32);
struct Meters(u32);

impl Add<Meters> for Millimeters {
    type Output = Millimeters;

    fn add(self, other: Meters) -> Millimeters {
        Millimeters(self.0 + (other.0 * 1000))
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Const Generics</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Generic over array size
fn display_array<T: std::fmt::Debug, const N: usize>(arr: [T; N]) {
    println!("{:?}", arr);
}

// Struct with const generic
struct ArrayWrapper<T, const N: usize> {
    data: [T; N],
}

impl<T: Default + Copy, const N: usize> ArrayWrapper<T, N> {
    fn new() -> Self {
        ArrayWrapper {
            data: [T::default(); N],
        }
    }
}

fn main() {
    display_array([1, 2, 3]);
    display_array([1, 2, 3, 4, 5]);

    let wrapper: ArrayWrapper<i32, 5> = ArrayWrapper::new();
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Phantom Types</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::marker::PhantomData;

// Use type parameter without storing it
struct Identifier<T> {
    value: u64,
    _marker: PhantomData<T>,
}

struct User;
struct Order;

impl<T> Identifier<T> {
    fn new(value: u64) -> Self {
        Identifier {
            value,
            _marker: PhantomData,
        }
    }
}

fn process_user(id: Identifier<User>) {
    println!("Processing user: {}", id.value);
}

fn main() {
    let user_id: Identifier<User> = Identifier::new(123);
    let order_id: Identifier<Order> = Identifier::new(456);

    process_user(user_id);
    // process_user(order_id);  // Error! Type mismatch
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Zero-Cost Abstraction</h2>
    <p>
      Rust generics use <strong>monomorphization</strong> - the compiler generates specialized
      code for each concrete type used. This means:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>No runtime overhead for generics</li>
      <li>Same performance as hand-written specialized code</li>
      <li>Larger binary size (trade-off)</li>
    </ul>
  </div>
);

export default RustGenerics;
