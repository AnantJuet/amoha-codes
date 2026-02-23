import React from "react";

const RustGetStarted: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Rust Get Started</h1>

    <h2 className="text-2xl font-bold mt-6">Installing Rust</h2>
    <p>
      The recommended way to install Rust is through <b>rustup</b>, the Rust toolchain installer.
    </p>

    <h3 className="text-xl font-semibold mt-4">On Linux or macOS</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">On Windows</h3>
    <p>
      Download and run <code>rustup-init.exe</code> from the official Rust website.
    </p>

    <h3 className="text-xl font-semibold mt-4">Verify Installation</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`rustc --version
cargo --version`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">What Gets Installed</h2>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><b>rustc:</b> The Rust compiler</li>
      <li><b>cargo:</b> Package manager and build system</li>
      <li><b>rustup:</b> Toolchain manager</li>
      <li><b>rustfmt:</b> Code formatter</li>
      <li><b>clippy:</b> Linter</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Create Your First Project</h2>
    <p>
      Cargo makes it easy to create new projects:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Create a new project
cargo new hello_world

# Navigate to project directory
cd hello_world

# Build and run
cargo run`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Project Structure</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`hello_world/
├── Cargo.toml    # Project configuration
└── src/
    └── main.rs   # Main source file`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Cargo.toml</h2>
    <p>
      This is the manifest file for your project:
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`[package]
name = "hello_world"
version = "0.1.0"
edition = "2021"

[dependencies]`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">main.rs</h2>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`fn main() {
    println!("Hello, world!");
}`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Useful Cargo Commands</h2>
    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Command</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>cargo new</code></td>
          <td className="border border-gray-300 px-4 py-2">Create a new project</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>cargo build</code></td>
          <td className="border border-gray-300 px-4 py-2">Compile the project</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>cargo run</code></td>
          <td className="border border-gray-300 px-4 py-2">Build and run</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>cargo test</code></td>
          <td className="border border-gray-300 px-4 py-2">Run tests</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>cargo doc</code></td>
          <td className="border border-gray-300 px-4 py-2">Generate documentation</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>cargo fmt</code></td>
          <td className="border border-gray-300 px-4 py-2">Format code</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>cargo clippy</code></td>
          <td className="border border-gray-300 px-4 py-2">Run linter</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RustGetStarted;
