import React from "react";

const RustEnums: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Enums</h1>

    <h2 className="text-2xl font-bold mt-6">What are Enums?</h2>
    <p>
      Enums (enumerations) allow you to define a type by enumerating its possible variants.
      Rust enums are more powerful than in many other languages because variants can hold data.
    </p>

    <h2 className="text-2xl font-bold mt-6">Defining Enums</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Basic enum
enum Direction {
    North,
    South,
    East,
    West,
}

fn main() {
    let dir = Direction::North;

    match dir {
        Direction::North => println!("Going north!"),
        Direction::South => println!("Going south!"),
        Direction::East => println!("Going east!"),
        Direction::West => println!("Going west!"),
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Enums with Data</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`enum Message {
    Quit,                       // No data
    Move { x: i32, y: i32 },    // Named fields (struct-like)
    Write(String),              // Single String
    ChangeColor(i32, i32, i32), // Three i32 values (tuple-like)
}

fn main() {
    let m1 = Message::Quit;
    let m2 = Message::Move { x: 10, y: 20 };
    let m3 = Message::Write(String::from("Hello"));
    let m4 = Message::ChangeColor(255, 0, 0);
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Enum Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}

impl Message {
    fn call(&self) {
        match self {
            Message::Quit => println!("Quitting"),
            Message::Move { x, y } => println!("Moving to ({}, {})", x, y),
            Message::Write(text) => println!("Writing: {}", text),
            Message::ChangeColor(r, g, b) => {
                println!("Changing color to RGB({}, {}, {})", r, g, b)
            }
        }
    }
}

fn main() {
    let msg = Message::Write(String::from("hello"));
    msg.call();
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Pattern Matching with Enums</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter(String),  // State name
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => {
            println!("Lucky penny!");
            1
        }
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter(state) => {
            println!("State quarter from {}!", state);
            25
        }
    }
}

fn main() {
    let coin = Coin::Quarter(String::from("Alaska"));
    println!("Value: {} cents", value_in_cents(coin));
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">The Option Enum</h2>
    <p>Rust's way of handling null values - built into the standard library:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Definition (already in prelude)
// enum Option<T> {
//     None,
//     Some(T),
// }

fn main() {
    let some_number = Some(5);
    let some_string = Some("hello");
    let absent_number: Option<i32> = None;

    // Using Option
    fn divide(a: f64, b: f64) -> Option<f64> {
        if b == 0.0 {
            None
        } else {
            Some(a / b)
        }
    }

    match divide(10.0, 2.0) {
        Some(result) => println!("Result: {}", result),
        None => println!("Cannot divide by zero"),
    }

    // Common Option methods
    let x = Some(5);
    println!("{}", x.unwrap());        // 5 (panics if None)
    println!("{}", x.unwrap_or(0));    // 5
    println!("{}", x.is_some());       // true
    println!("{}", x.is_none());       // false

    let y: Option<i32> = None;
    println!("{}", y.unwrap_or(42));   // 42
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">The Result Enum</h2>
    <p>For error handling:</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`// Definition (already in prelude)
// enum Result<T, E> {
//     Ok(T),
//     Err(E),
// }

use std::fs::File;
use std::io::Error;

fn open_file(path: &str) -> Result<File, Error> {
    File::open(path)
}

fn main() {
    match open_file("hello.txt") {
        Ok(file) => println!("File opened: {:?}", file),
        Err(error) => println!("Error: {}", error),
    }

    // Using ? operator
    fn read_username() -> Result<String, Error> {
        let mut file = File::open("username.txt")?;
        let mut username = String::new();
        file.read_to_string(&mut username)?;
        Ok(username)
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">if let with Enums</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let config_max = Some(3u8);

    // Instead of full match
    if let Some(max) = config_max {
        println!("Maximum is {}", max);
    }

    // With else
    let coin = Coin::Quarter(String::from("Texas"));
    if let Coin::Quarter(state) = coin {
        println!("State quarter from {}!", state);
    } else {
        println!("Not a quarter");
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Enum with Derive Macros</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#[derive(Debug, Clone, Copy, PartialEq)]
enum Status {
    Active,
    Inactive,
    Pending,
}

fn main() {
    let s1 = Status::Active;
    let s2 = s1;  // Copy works

    println!("{:?}", s1);  // Debug works
    println!("{}", s1 == Status::Active);  // PartialEq works
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Use with Match Guards</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`enum Temperature {
    Celsius(f64),
    Fahrenheit(f64),
}

fn main() {
    let temp = Temperature::Celsius(35.0);

    match temp {
        Temperature::Celsius(c) if c > 30.0 => {
            println!("Hot! {} Celsius", c)
        }
        Temperature::Celsius(c) => println!("{} Celsius", c),
        Temperature::Fahrenheit(f) if f > 86.0 => {
            println!("Hot! {} Fahrenheit", f)
        }
        Temperature::Fahrenheit(f) => println!("{} Fahrenheit", f),
    }
}`}
    </pre>
  </div>
);

export default RustEnums;
