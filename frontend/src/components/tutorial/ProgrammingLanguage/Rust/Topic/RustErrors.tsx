import React from "react";

const RustErrors: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Error Handling</h1>

    <h2 className="text-2xl font-bold mt-6">Error Handling Philosophy</h2>
    <p>
      Rust distinguishes between recoverable errors (<code>Result&lt;T, E&gt;</code>) and
      unrecoverable errors (<code>panic!</code>). This makes error handling explicit and safe.
    </p>

    <h2 className="text-2xl font-bold mt-6">Unrecoverable Errors - panic!</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    // Explicit panic
    panic!("Something went terribly wrong!");

    // Panic from invalid operations
    let v = vec![1, 2, 3];
    v[99];  // Index out of bounds - panics!
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">The Result Type</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`enum Result<T, E> {
    Ok(T),   // Success with value of type T
    Err(E),  // Error with value of type E
}

use std::fs::File;

fn main() {
    let file_result = File::open("hello.txt");

    let file = match file_result {
        Ok(f) => f,
        Err(e) => {
            println!("Failed to open file: {}", e);
            return;
        }
    };
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Handling Different Error Types</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::fs::File;
use std::io::ErrorKind;

fn main() {
    let file = match File::open("hello.txt") {
        Ok(f) => f,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => {
                match File::create("hello.txt") {
                    Ok(fc) => fc,
                    Err(e) => panic!("Cannot create file: {:?}", e),
                }
            }
            ErrorKind::PermissionDenied => {
                panic!("Permission denied!");
            }
            other => {
                panic!("Problem opening file: {:?}", other);
            }
        },
    };
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Shortcuts: unwrap() and expect()</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::fs::File;

fn main() {
    // unwrap: panics with generic message on Err
    let file = File::open("hello.txt").unwrap();

    // expect: panics with custom message on Err
    let file = File::open("hello.txt")
        .expect("Failed to open hello.txt");

    // unwrap_or: provide default value
    let value = some_result.unwrap_or(default_value);

    // unwrap_or_else: compute default lazily
    let value = some_result.unwrap_or_else(|e| {
        println!("Error: {}", e);
        compute_default()
    });
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">The ? Operator</h2>
    <p>
      The <code>?</code> operator propagates errors automatically, making error handling concise.
    </p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::fs::File;
use std::io::{self, Read};

// Without ? operator
fn read_username_verbose() -> Result<String, io::Error> {
    let file_result = File::open("username.txt");
    let mut file = match file_result {
        Ok(f) => f,
        Err(e) => return Err(e),
    };

    let mut username = String::new();
    match file.read_to_string(&mut username) {
        Ok(_) => Ok(username),
        Err(e) => Err(e),
    }
}

// With ? operator - much cleaner!
fn read_username() -> Result<String, io::Error> {
    let mut file = File::open("username.txt")?;
    let mut username = String::new();
    file.read_to_string(&mut username)?;
    Ok(username)
}

// Even shorter with chaining
fn read_username_short() -> Result<String, io::Error> {
    let mut username = String::new();
    File::open("username.txt")?.read_to_string(&mut username)?;
    Ok(username)
}

// Shortest with std::fs
fn read_username_shortest() -> Result<String, io::Error> {
    std::fs::read_to_string("username.txt")
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Custom Error Types</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::fmt;
use std::error::Error;

#[derive(Debug)]
enum AppError {
    NotFound(String),
    InvalidInput(String),
    DatabaseError(String),
}

impl fmt::Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            AppError::NotFound(msg) => write!(f, "Not found: {}", msg),
            AppError::InvalidInput(msg) => write!(f, "Invalid input: {}", msg),
            AppError::DatabaseError(msg) => write!(f, "Database error: {}", msg),
        }
    }
}

impl Error for AppError {}

fn find_user(id: u32) -> Result<String, AppError> {
    if id == 0 {
        return Err(AppError::InvalidInput("ID cannot be zero".to_string()));
    }
    if id > 1000 {
        return Err(AppError::NotFound(format!("User {} not found", id)));
    }
    Ok(format!("User_{}", id))
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Converting Between Error Types</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::num::ParseIntError;

#[derive(Debug)]
enum MyError {
    ParseError(ParseIntError),
    NegativeNumber,
}

// Implement From for automatic conversion with ?
impl From<ParseIntError> for MyError {
    fn from(err: ParseIntError) -> MyError {
        MyError::ParseError(err)
    }
}

fn parse_positive(s: &str) -> Result<u32, MyError> {
    let num: i32 = s.parse()?;  // ParseIntError auto-converts to MyError
    if num < 0 {
        return Err(MyError::NegativeNumber);
    }
    Ok(num as u32)
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Result Methods</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    let result: Result<i32, &str> = Ok(42);

    // Check status
    result.is_ok();   // true
    result.is_err();  // false

    // Transform success value
    let doubled = result.map(|x| x * 2);  // Ok(84)

    // Transform error value
    let mapped_err = result.map_err(|e| format!("Error: {}", e));

    // Chain operations
    let chained = result
        .and_then(|x| if x > 0 { Ok(x) } else { Err("negative") });

    // Convert to Option
    let opt = result.ok();  // Some(42)
    let err_opt = result.err();  // None

    // Provide alternatives
    let value = result.unwrap_or(0);
    let value = result.unwrap_or_default();
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Using Box&lt;dyn Error&gt;</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`use std::error::Error;
use std::fs::File;
use std::io::Read;

// Accept any error type
fn do_something() -> Result<(), Box<dyn Error>> {
    let mut file = File::open("data.txt")?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;

    let number: i32 = contents.trim().parse()?;
    println!("Number: {}", number);

    Ok(())
}

fn main() {
    if let Err(e) = do_something() {
        println!("Error: {}", e);
    }
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Use <code>Result</code> for recoverable errors, <code>panic!</code> for bugs</li>
      <li>Prefer <code>?</code> operator over manual match for propagation</li>
      <li>Create custom error types for libraries</li>
      <li>Use <code>expect()</code> with descriptive messages during development</li>
      <li>Consider crates like <code>thiserror</code> or <code>anyhow</code> for complex error handling</li>
    </ul>
  </div>
);

export default RustErrors;
