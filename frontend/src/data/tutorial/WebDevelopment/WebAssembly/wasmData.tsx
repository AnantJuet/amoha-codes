import React from "react";

// Interfaces for the tutorial structure
export interface SidebarItem {
  label: string;
  href: string;
  isHeader?: boolean;
  children?: SidebarItem[];
}

export interface TopicContent {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

// Main structure of the sidebar navigation for WebAssembly
export const tutorialData: SidebarItem[] = [
  { label: "WebAssembly Home", href: "wasm_home" },
  { label: "WebAssembly Intro", href: "wasm_intro" },
  { label: "Browser Support", href: "wasm_browser_support" },
  {
    label: "Core Concepts",
    href: "wasm_core_concepts",
    isHeader: true,
    children: [
      { label: "Overview", href: "wasm_core_concepts" },
      { label: "Modules", href: "wasm_modules" },
      { label: "Linear Memory", href: "wasm_linear_memory" },
      { label: "Tables", href: "wasm_tables" },
    ]
  },
  {
    label: "Binary Format",
    href: "wasm_binary_format",
    isHeader: true,
    children: [
      { label: "Structure", href: "wasm_binary_format" },
      { label: "Sections", href: "wasm_sections" },
      { label: "Instructions", href: "wasm_instructions" },
    ]
  },
  {
    label: "Text Format (WAT)",
    href: "wasm_text_format",
    isHeader: true,
    children: [
      { label: "WAT Basics", href: "wasm_text_format" },
      { label: "S-Expressions", href: "wasm_s_expressions" },
      { label: "Functions", href: "wasm_wat_functions" },
    ]
  },
  {
    label: "JavaScript API",
    href: "wasm_js_api",
    isHeader: true,
    children: [
      { label: "Loading Modules", href: "wasm_js_api" },
      { label: "Instantiation", href: "wasm_instantiation" },
      { label: "Imports/Exports", href: "wasm_imports_exports" },
      { label: "Streaming", href: "wasm_streaming" },
    ]
  },
  {
    label: "Memory Management",
    href: "wasm_memory",
    isHeader: true,
    children: [
      { label: "Memory Basics", href: "wasm_memory" },
      { label: "Memory Operations", href: "wasm_memory_ops" },
      { label: "Shared Memory", href: "wasm_shared_memory" },
    ]
  },
  {
    label: "Compiling C/C++",
    href: "wasm_cpp",
    isHeader: true,
    children: [
      { label: "Emscripten Setup", href: "wasm_cpp" },
      { label: "Compilation", href: "wasm_cpp_compile" },
      { label: "Bindings", href: "wasm_cpp_bindings" },
    ]
  },
  {
    label: "Compiling Rust",
    href: "wasm_rust",
    isHeader: true,
    children: [
      { label: "wasm-pack Setup", href: "wasm_rust" },
      { label: "wasm-bindgen", href: "wasm_rust_bindgen" },
      { label: "Rust Examples", href: "wasm_rust_examples" },
    ]
  },
  {
    label: "Debugging",
    href: "wasm_debugging",
    isHeader: true,
    children: [
      { label: "DevTools", href: "wasm_debugging" },
      { label: "Source Maps", href: "wasm_source_maps" },
    ]
  },
  {
    label: "Optimization",
    href: "wasm_optimization",
    isHeader: true,
    children: [
      { label: "Size Optimization", href: "wasm_optimization" },
      { label: "Performance", href: "wasm_performance" },
    ]
  },
  { label: "Use Cases", href: "wasm_use_cases" },
  { label: "Best Practices", href: "wasm_best_practices" },
];

// Content for each tutorial page
export const tutorialContent: Record<string, TopicContent> = {
  "wasm_home": {
    title: "WebAssembly Tutorial",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          WebAssembly Tutorial
        </h2>
        <p className="leading-relaxed mb-4">
          <strong>WebAssembly (Wasm)</strong> is a binary instruction format for a stack-based virtual machine. It enables high-performance applications on web pages at near-native speed.
        </p>
        <p className="leading-relaxed mb-4">
          WebAssembly is designed as a portable compilation target for programming languages like C, C++, Rust, and others, enabling deployment on the web for both client and server applications.
        </p>

        <h3 className="text-xl font-medium mb-3">What You Will Learn</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Understand WebAssembly core concepts and architecture</li>
          <li>Work with binary and text formats</li>
          <li>Use the JavaScript API to load and run Wasm modules</li>
          <li>Manage memory in WebAssembly</li>
          <li>Compile C/C++ and Rust to WebAssembly</li>
          <li>Debug and optimize Wasm applications</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">Prerequisites</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-8">
          <li>Basic understanding of JavaScript</li>
          <li>Familiarity with programming concepts</li>
          <li>Knowledge of C/C++ or Rust (for compilation sections)</li>
        </ul>
      </>
    )
  },

  "wasm_intro": {
    title: "Introduction to WebAssembly",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          What is WebAssembly?
        </h2>
        <p className="leading-relaxed mb-4">
          WebAssembly is a low-level assembly-like language with a compact binary format that runs with near-native performance in web browsers.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Key Features</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Fast:</strong> Executes at near-native speed by taking advantage of common hardware capabilities</li>
          <li><strong>Safe:</strong> Runs in a memory-safe, sandboxed execution environment</li>
          <li><strong>Open:</strong> Designed to be pretty-printed in a textual format for debugging</li>
          <li><strong>Portable:</strong> Platform-independent binary format</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">History</h3>
        <p className="leading-relaxed mb-4">
          WebAssembly was announced in 2015 and first released in March 2017. It became a W3C recommendation in December 2019, making it the fourth language to run natively in browsers alongside HTML, CSS, and JavaScript.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">How It Works</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`Source Code (C/C++/Rust)
        |
        v
    Compiler (Emscripten/wasm-pack)
        |
        v
    .wasm Binary Module
        |
        v
    Browser JavaScript API
        |
        v
    Execution in Browser`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_browser_support": {
    title: "Browser Support",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Browser Compatibility
        </h2>
        <p className="leading-relaxed mb-4">
          WebAssembly is supported by all major modern browsers, making it a reliable technology for web applications.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Supported Browsers</h3>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Browser</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Version</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Release Date</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Chrome</td><td className="border border-gray-300 dark:border-gray-600 p-2">57+</td><td className="border border-gray-300 dark:border-gray-600 p-2">March 2017</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Firefox</td><td className="border border-gray-300 dark:border-gray-600 p-2">52+</td><td className="border border-gray-300 dark:border-gray-600 p-2">March 2017</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Safari</td><td className="border border-gray-300 dark:border-gray-600 p-2">11+</td><td className="border border-gray-300 dark:border-gray-600 p-2">September 2017</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">Edge</td><td className="border border-gray-300 dark:border-gray-600 p-2">16+</td><td className="border border-gray-300 dark:border-gray-600 p-2">October 2017</td></tr>
          </tbody>
        </table>

        <h3 className="text-xl font-medium mb-3 mt-6">Feature Detection</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Check for WebAssembly support
if (typeof WebAssembly === 'object') {
  console.log('WebAssembly is supported!');
} else {
  console.log('WebAssembly is not supported');
}`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_core_concepts": {
    title: "Core Concepts",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          WebAssembly Core Concepts
        </h2>
        <p className="leading-relaxed mb-4">
          Understanding the fundamental concepts of WebAssembly is essential for working effectively with the technology.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Key Components</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Module:</strong> A compiled WebAssembly binary containing code, data, and metadata</li>
          <li><strong>Memory:</strong> A resizable ArrayBuffer that holds linear memory</li>
          <li><strong>Table:</strong> A typed array of references (like function pointers)</li>
          <li><strong>Instance:</strong> A module paired with all the state it uses at runtime</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Value Types</h3>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Type</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">i32</td><td className="border border-gray-300 dark:border-gray-600 p-2">32-bit integer</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">i64</td><td className="border border-gray-300 dark:border-gray-600 p-2">64-bit integer</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">f32</td><td className="border border-gray-300 dark:border-gray-600 p-2">32-bit float</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">f64</td><td className="border border-gray-300 dark:border-gray-600 p-2">64-bit float</td></tr>
          </tbody>
        </table>
      </>
    )
  },

  "wasm_modules": {
    title: "WebAssembly Modules",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Modules
        </h2>
        <p className="leading-relaxed mb-4">
          A WebAssembly module is the unit of deployment and loading. It contains definitions for functions, globals, tables, and memory.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Module Structure</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Type Section:</strong> Function type signatures</li>
          <li><strong>Import Section:</strong> External functions, memories, tables, and globals</li>
          <li><strong>Function Section:</strong> Function declarations</li>
          <li><strong>Export Section:</strong> What the module exposes to the host</li>
          <li><strong>Code Section:</strong> Function bodies</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Creating a Module</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Compile from binary
const module = await WebAssembly.compile(wasmBytes);

// Or use instantiateStreaming for better performance
const { module, instance } = await WebAssembly.instantiateStreaming(
  fetch('module.wasm')
);`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_linear_memory": {
    title: "Linear Memory",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Linear Memory
        </h2>
        <p className="leading-relaxed mb-4">
          WebAssembly linear memory is a contiguous, byte-addressable range of memory. It provides a sandbox for memory operations.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Memory Characteristics</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Grows in units of pages (64KB each)</li>
          <li>Can be shared between Wasm and JavaScript</li>
          <li>Has optional maximum size limits</li>
          <li>Accessible via typed arrays in JavaScript</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Working with Memory</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Create memory with 1 initial page
const memory = new WebAssembly.Memory({ initial: 1 });

// Access as typed array
const buffer = new Uint8Array(memory.buffer);
buffer[0] = 42;

// Grow memory by 1 page
memory.grow(1);`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_tables": {
    title: "Tables",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          WebAssembly Tables
        </h2>
        <p className="leading-relaxed mb-4">
          Tables are resizable typed arrays of references that cannot be stored as raw bytes in linear memory for security and portability reasons.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Use Cases</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Implementing function pointers</li>
          <li>Dynamic dispatch (virtual functions)</li>
          <li>Indirect function calls</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Creating Tables</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Create a table for function references
const table = new WebAssembly.Table({
  element: 'anyfunc',
  initial: 2,
  maximum: 10
});

// Set a function at index 0
table.set(0, someExportedFunction);

// Get function and call it
const fn = table.get(0);
fn();`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_binary_format": {
    title: "Binary Format",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          WebAssembly Binary Format
        </h2>
        <p className="leading-relaxed mb-4">
          The WebAssembly binary format (.wasm) is a compact, efficient representation designed for fast decoding and execution.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">File Structure</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`Magic Number: 0x00 0x61 0x73 0x6D ("\\0asm")
Version:      0x01 0x00 0x00 0x00 (version 1)
Sections:     [section_id, size, content...]`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Advantages</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Compact size for faster downloads</li>
          <li>Streamable - can compile while downloading</li>
          <li>Fast validation and compilation</li>
          <li>Deterministic execution</li>
        </ul>
      </>
    )
  },

  "wasm_sections": {
    title: "Binary Sections",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Module Sections
        </h2>
        <p className="leading-relaxed mb-4">
          A WebAssembly module consists of multiple sections, each identified by a single-byte section code.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Section Types</h3>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">ID</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Section</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">0</td><td className="border border-gray-300 dark:border-gray-600 p-2">Custom</td><td className="border border-gray-300 dark:border-gray-600 p-2">Debug info, names</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">1</td><td className="border border-gray-300 dark:border-gray-600 p-2">Type</td><td className="border border-gray-300 dark:border-gray-600 p-2">Function signatures</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">2</td><td className="border border-gray-300 dark:border-gray-600 p-2">Import</td><td className="border border-gray-300 dark:border-gray-600 p-2">External imports</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">3</td><td className="border border-gray-300 dark:border-gray-600 p-2">Function</td><td className="border border-gray-300 dark:border-gray-600 p-2">Function declarations</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">7</td><td className="border border-gray-300 dark:border-gray-600 p-2">Export</td><td className="border border-gray-300 dark:border-gray-600 p-2">Exported items</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">10</td><td className="border border-gray-300 dark:border-gray-600 p-2">Code</td><td className="border border-gray-300 dark:border-gray-600 p-2">Function bodies</td></tr>
          </tbody>
        </table>
      </>
    )
  },

  "wasm_instructions": {
    title: "Instructions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          WebAssembly Instructions
        </h2>
        <p className="leading-relaxed mb-4">
          WebAssembly uses a stack-based instruction set. Operations pop values from the stack and push results back.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Instruction Categories</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Control:</strong> block, loop, if, br, call, return</li>
          <li><strong>Parametric:</strong> drop, select</li>
          <li><strong>Variable:</strong> local.get, local.set, global.get</li>
          <li><strong>Memory:</strong> i32.load, i32.store, memory.grow</li>
          <li><strong>Numeric:</strong> i32.add, f64.mul, i32.eq</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Example: Add Two Numbers</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`;; Stack-based addition
local.get 0    ;; Push first parameter
local.get 1    ;; Push second parameter
i32.add        ;; Pop both, push sum`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_text_format": {
    title: "Text Format (WAT)",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          WebAssembly Text Format
        </h2>
        <p className="leading-relaxed mb-4">
          WAT (WebAssembly Text) is a human-readable text representation of WebAssembly binary code. It uses S-expressions syntax.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Basic Module</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`(module
  (func $add (param $a i32) (param $b i32) (result i32)
    local.get $a
    local.get $b
    i32.add
  )
  (export "add" (func $add))
)`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Converting WAT to WASM</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# Using wat2wasm from WABT toolkit
wat2wasm module.wat -o module.wasm

# Verify with wasm2wat
wasm2wat module.wasm`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_s_expressions": {
    title: "S-Expressions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          S-Expressions in WAT
        </h2>
        <p className="leading-relaxed mb-4">
          WAT uses S-expressions (symbolic expressions) - a notation for nested list data, originated from Lisp.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Syntax Rules</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Expressions are wrapped in parentheses</li>
          <li>First element is typically the operator/keyword</li>
          <li>Can be nested arbitrarily deep</li>
          <li>Comments use semicolons: ;; comment</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Folded vs Flat Style</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`;; Folded (nested) style
(i32.add
  (local.get $x)
  (local.get $y))

;; Flat (stack) style
local.get $x
local.get $y
i32.add`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_wat_functions": {
    title: "WAT Functions",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Functions in WAT
        </h2>
        <p className="leading-relaxed mb-4">
          Functions are the primary building blocks in WebAssembly. They can have parameters, local variables, and return values.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Function Syntax</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`(module
  ;; Function with locals
  (func $factorial (param $n i32) (result i32)
    (local $result i32)
    (local.set $result (i32.const 1))

    (block $done
      (loop $loop
        (br_if $done (i32.le_s (local.get $n) (i32.const 1)))
        (local.set $result
          (i32.mul (local.get $result) (local.get $n)))
        (local.set $n (i32.sub (local.get $n) (i32.const 1)))
        (br $loop)
      )
    )
    (local.get $result)
  )
  (export "factorial" (func $factorial))
)`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_js_api": {
    title: "JavaScript API",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          JavaScript API Overview
        </h2>
        <p className="leading-relaxed mb-4">
          The WebAssembly JavaScript API provides methods to compile, instantiate, and interact with WebAssembly modules.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Main Objects</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>WebAssembly.Module:</strong> Compiled Wasm code</li>
          <li><strong>WebAssembly.Instance:</strong> Stateful, executable instance</li>
          <li><strong>WebAssembly.Memory:</strong> Linear memory object</li>
          <li><strong>WebAssembly.Table:</strong> Function reference table</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Basic Usage</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Load and instantiate a module
const response = await fetch('module.wasm');
const bytes = await response.arrayBuffer();
const { instance } = await WebAssembly.instantiate(bytes);

// Call exported function
const result = instance.exports.add(5, 3);
console.log(result); // 8`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_instantiation": {
    title: "Module Instantiation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Instantiating Modules
        </h2>
        <p className="leading-relaxed mb-4">
          Instantiation creates an executable instance from a compiled module, resolving imports and allocating resources.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Methods</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Method 1: instantiate (most common)
const { module, instance } = await WebAssembly.instantiate(
  bytes,
  importObject
);

// Method 2: Separate compile and instantiate
const module = await WebAssembly.compile(bytes);
const instance = await WebAssembly.instantiate(module, importObject);

// Method 3: Streaming (best performance)
const { instance } = await WebAssembly.instantiateStreaming(
  fetch('module.wasm'),
  importObject
);`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_imports_exports": {
    title: "Imports and Exports",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Imports and Exports
        </h2>
        <p className="leading-relaxed mb-4">
          WebAssembly modules can import functions, memory, tables, and globals from JavaScript, and export their own.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Import Object</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`const importObject = {
  env: {
    // Import a JavaScript function
    log: (value) => console.log('Wasm says:', value),

    // Import memory
    memory: new WebAssembly.Memory({ initial: 1 }),

    // Import a global
    globalVar: new WebAssembly.Global({ value: 'i32' }, 42)
  }
};

const { instance } = await WebAssembly.instantiate(bytes, importObject);`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Accessing Exports</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Access exported function
const add = instance.exports.add;
console.log(add(2, 3)); // 5

// Access exported memory
const memory = instance.exports.memory;
const view = new Uint8Array(memory.buffer);`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_streaming": {
    title: "Streaming Compilation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Streaming Compilation
        </h2>
        <p className="leading-relaxed mb-4">
          Streaming compilation allows the browser to compile WebAssembly while it's still downloading, improving load times.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Using instantiateStreaming</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Best practice: use streaming when possible
async function loadWasm() {
  try {
    const { instance } = await WebAssembly.instantiateStreaming(
      fetch('module.wasm'),
      importObject
    );
    return instance;
  } catch (e) {
    // Fallback for browsers without streaming support
    const response = await fetch('module.wasm');
    const bytes = await response.arrayBuffer();
    const { instance } = await WebAssembly.instantiate(bytes, importObject);
    return instance;
  }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Server Configuration</h3>
        <p className="leading-relaxed mb-4">
          Ensure your server sends .wasm files with the correct MIME type:
        </p>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`Content-Type: application/wasm`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_memory": {
    title: "Memory Management",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Memory Management Basics
        </h2>
        <p className="leading-relaxed mb-4">
          WebAssembly uses linear memory - a contiguous block of bytes that both Wasm code and JavaScript can read and write.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Creating Memory</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Create memory in JavaScript
const memory = new WebAssembly.Memory({
  initial: 1,    // 1 page = 64KB
  maximum: 10,   // Max 10 pages = 640KB
  shared: false  // Set true for SharedArrayBuffer
});

// Pass to module
const importObject = {
  env: { memory }
};`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Memory in WAT</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`(module
  (memory (export "memory") 1)

  (func $store (param $addr i32) (param $value i32)
    (i32.store (local.get $addr) (local.get $value))
  )

  (func $load (param $addr i32) (result i32)
    (i32.load (local.get $addr))
  )
)`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_memory_ops": {
    title: "Memory Operations",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Memory Operations
        </h2>
        <p className="leading-relaxed mb-4">
          WebAssembly provides various instructions for reading and writing memory with different data types.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Load/Store Instructions</h3>
        <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-6">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="border border-gray-300 dark:border-gray-600 p-2">Instruction</th>
              <th className="border border-gray-300 dark:border-gray-600 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">i32.load</td><td className="border border-gray-300 dark:border-gray-600 p-2">Load 4 bytes as i32</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">i32.load8_s</td><td className="border border-gray-300 dark:border-gray-600 p-2">Load 1 byte, sign-extend to i32</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">i32.store</td><td className="border border-gray-300 dark:border-gray-600 p-2">Store i32 as 4 bytes</td></tr>
            <tr><td className="border border-gray-300 dark:border-gray-600 p-2">i32.store8</td><td className="border border-gray-300 dark:border-gray-600 p-2">Store low byte of i32</td></tr>
          </tbody>
        </table>

        <h3 className="text-xl font-medium mb-3 mt-6">JavaScript Access</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`const memory = instance.exports.memory;

// Different views for different data types
const bytes = new Uint8Array(memory.buffer);
const ints = new Int32Array(memory.buffer);
const floats = new Float64Array(memory.buffer);

// Read/write data
bytes[0] = 255;
ints[0] = 42;`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_shared_memory": {
    title: "Shared Memory",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Shared Memory
        </h2>
        <p className="leading-relaxed mb-4">
          Shared memory enables multiple WebAssembly instances or Web Workers to access the same memory, enabling parallel computation.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Creating Shared Memory</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Create shared memory (requires Cross-Origin headers)
const sharedMemory = new WebAssembly.Memory({
  initial: 1,
  maximum: 10,
  shared: true
});

// Use in Web Worker
worker.postMessage({ memory: sharedMemory });`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Atomics</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`const view = new Int32Array(sharedMemory.buffer);

// Atomic operations for thread safety
Atomics.add(view, 0, 1);
Atomics.compareExchange(view, 0, 1, 2);
Atomics.wait(view, 0, 0);  // Wait until value changes
Atomics.notify(view, 0);   // Wake waiting threads`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_cpp": {
    title: "Compiling C/C++",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Emscripten Setup
        </h2>
        <p className="leading-relaxed mb-4">
          Emscripten is the primary toolchain for compiling C and C++ code to WebAssembly.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Installation</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# Clone Emscripten SDK
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk

# Download and install latest SDK
./emsdk install latest
./emsdk activate latest

# Set up environment
source ./emsdk_env.sh`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Hello World</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// hello.c
#include <stdio.h>

int main() {
    printf("Hello, WebAssembly!\\n");
    return 0;
}

// Compile
// emcc hello.c -o hello.html`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_cpp_compile": {
    title: "C/C++ Compilation",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Compilation Options
        </h2>
        <p className="leading-relaxed mb-4">
          Emscripten provides various options to control the output format and optimization level.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Output Formats</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# Generate HTML with JS and Wasm
emcc input.c -o output.html

# Generate only JS and Wasm
emcc input.c -o output.js

# Generate standalone Wasm
emcc input.c -o output.wasm -s STANDALONE_WASM`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Optimization Levels</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# No optimization (fastest compile)
emcc input.c -O0 -o output.js

# Balanced optimization
emcc input.c -O2 -o output.js

# Maximum optimization
emcc input.c -O3 -o output.js

# Optimize for size
emcc input.c -Os -o output.js`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_cpp_bindings": {
    title: "C/C++ Bindings",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          JavaScript Bindings
        </h2>
        <p className="leading-relaxed mb-4">
          Emscripten provides multiple ways to expose C/C++ functions to JavaScript.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">EMSCRIPTEN_KEEPALIVE</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// math.c
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
    return a + b;
}

// Compile with: emcc math.c -o math.js -s EXPORTED_RUNTIME_METHODS=['ccall']`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Calling from JavaScript</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Using ccall
const result = Module.ccall(
  'add',      // Function name
  'number',   // Return type
  ['number', 'number'],  // Argument types
  [5, 3]      // Arguments
);

// Using cwrap for repeated calls
const add = Module.cwrap('add', 'number', ['number', 'number']);
console.log(add(5, 3)); // 8`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_rust": {
    title: "Compiling Rust",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Rust and WebAssembly
        </h2>
        <p className="leading-relaxed mb-4">
          Rust has excellent WebAssembly support through wasm-pack and wasm-bindgen.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Setup</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# Install Rust (if not installed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Add WebAssembly target
rustup target add wasm32-unknown-unknown

# Install wasm-pack
cargo install wasm-pack`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Create Project</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# Create new library project
cargo new --lib my-wasm-lib
cd my-wasm-lib

# Add to Cargo.toml
[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_rust_bindgen": {
    title: "wasm-bindgen",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Using wasm-bindgen
        </h2>
        <p className="leading-relaxed mb-4">
          wasm-bindgen facilitates high-level interactions between Rust and JavaScript.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Basic Example</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// src/lib.rs
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Build and Use</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# Build for web
wasm-pack build --target web

# In JavaScript
import init, { greet, add } from './pkg/my_wasm_lib.js';

async function run() {
  await init();
  console.log(greet('World'));  // Hello, World!
  console.log(add(5, 3));       // 8
}
run();`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_rust_examples": {
    title: "Rust Examples",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Rust WebAssembly Examples
        </h2>
        <p className="leading-relaxed mb-4">
          Practical examples of Rust compiled to WebAssembly.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Fibonacci</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">DOM Manipulation</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`use wasm_bindgen::prelude::*;
use web_sys::window;

#[wasm_bindgen]
pub fn set_title(title: &str) {
    let document = window()
        .unwrap()
        .document()
        .unwrap();
    document.set_title(title);
}`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_debugging": {
    title: "Debugging",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Debugging WebAssembly
        </h2>
        <p className="leading-relaxed mb-4">
          Modern browsers provide DevTools support for debugging WebAssembly code.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Chrome DevTools</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>View Wasm source in Sources panel</li>
          <li>Set breakpoints in Wasm code</li>
          <li>Step through Wasm instructions</li>
          <li>Inspect memory and variables</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Enabling Debug Info</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# Emscripten: include debug info
emcc -g input.c -o output.js

# Rust: debug build
wasm-pack build --dev`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Console Logging</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Import console.log in Wasm
const importObject = {
  env: {
    log_i32: (value) => console.log('i32:', value),
    log_f64: (value) => console.log('f64:', value),
  }
};`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_source_maps": {
    title: "Source Maps",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Source Maps
        </h2>
        <p className="leading-relaxed mb-4">
          Source maps allow debugging in original source code (C/C++/Rust) instead of raw WebAssembly.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Generating Source Maps</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# Emscripten with source maps
emcc -g4 input.c -o output.js

# Rust with DWARF debug info
RUSTFLAGS="-C debuginfo=2" wasm-pack build`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Browser Setup</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Chrome: Enable "WebAssembly Debugging" in DevTools experiments</li>
          <li>Firefox: Native support in recent versions</li>
          <li>Install C/C++ DevTools Support extension for Chrome</li>
        </ul>
      </>
    )
  },

  "wasm_optimization": {
    title: "Optimization",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Size Optimization
        </h2>
        <p className="leading-relaxed mb-4">
          Reducing WebAssembly binary size improves download times and startup performance.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Emscripten Options</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# Optimize for size
emcc -Os input.c -o output.js

# Strip debug info
emcc -O3 --closure 1 input.c -o output.js

# Minimal runtime
emcc -s MINIMAL_RUNTIME=1 input.c -o output.js`}
          </pre>
        </div>

        <h3 className="text-xl font-medium mb-3 mt-6">Post-Processing</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`# wasm-opt from Binaryen
wasm-opt -O3 input.wasm -o output.wasm

# wasm-strip to remove debug sections
wasm-strip input.wasm`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_performance": {
    title: "Performance",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          Performance Optimization
        </h2>
        <p className="leading-relaxed mb-4">
          Maximize WebAssembly runtime performance with these techniques.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Best Practices</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Minimize JS-Wasm boundary crossings</li>
          <li>Batch data transfers using shared memory</li>
          <li>Use streaming compilation</li>
          <li>Cache compiled modules</li>
          <li>Avoid frequent memory allocations</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Module Caching</h3>
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <pre className="text-sm overflow-x-auto">
{`// Cache compiled module in IndexedDB
async function cacheModule(url) {
  const db = await openDB('wasm-cache', 1);

  let module = await db.get('modules', url);
  if (!module) {
    const response = await fetch(url);
    const bytes = await response.arrayBuffer();
    module = await WebAssembly.compile(bytes);
    await db.put('modules', module, url);
  }

  return WebAssembly.instantiate(module, imports);
}`}
          </pre>
        </div>
      </>
    )
  },

  "wasm_use_cases": {
    title: "Use Cases",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          WebAssembly Use Cases
        </h2>
        <p className="leading-relaxed mb-4">
          WebAssembly excels in scenarios requiring high performance or porting existing codebases.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Common Applications</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li><strong>Gaming:</strong> Unity, Unreal Engine web exports</li>
          <li><strong>Media:</strong> Audio/video codecs, image processing</li>
          <li><strong>CAD/3D:</strong> AutoCAD Web, Figma</li>
          <li><strong>Scientific:</strong> Simulations, data visualization</li>
          <li><strong>Cryptography:</strong> Secure hashing, encryption</li>
          <li><strong>Compression:</strong> Brotli, zstd in browser</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Real-World Examples</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Figma - Design tool with near-native performance</li>
          <li>Google Earth - 3D globe rendering</li>
          <li>Photoshop Web - Image editing</li>
          <li>TensorFlow.js - ML inference acceleration</li>
          <li>FFmpeg.wasm - Video processing in browser</li>
        </ul>
      </>
    )
  },

  "wasm_best_practices": {
    title: "Best Practices",
    content: (
      <>
        <h2 className="text-2xl font-medium mb-4 border-b pb-2 border-purple-200 mt-10">
          WebAssembly Best Practices
        </h2>
        <p className="leading-relaxed mb-4">
          Follow these guidelines for effective WebAssembly development.
        </p>

        <h3 className="text-xl font-medium mb-3 mt-6">Development</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Use WebAssembly for compute-intensive tasks only</li>
          <li>Keep JavaScript for DOM manipulation and I/O</li>
          <li>Design clean APIs between JS and Wasm</li>
          <li>Test with realistic data sizes</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Deployment</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Set correct MIME type (application/wasm)</li>
          <li>Enable gzip/brotli compression</li>
          <li>Use streaming compilation when possible</li>
          <li>Implement graceful fallbacks</li>
          <li>Cache compiled modules</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Security</h3>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
          <li>Wasm runs in sandbox - no direct system access</li>
          <li>Validate all inputs from Wasm modules</li>
          <li>Apply CSP headers appropriately</li>
          <li>Keep toolchains updated</li>
        </ul>
      </>
    )
  },
};
