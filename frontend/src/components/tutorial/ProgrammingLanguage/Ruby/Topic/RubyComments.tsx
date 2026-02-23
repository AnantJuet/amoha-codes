import React from "react";

const RubyComments: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Comments</h1>

    <h2 className="text-2xl font-bold mt-6">Single-Line Comments</h2>
    <p>Use the <code>#</code> symbol for single-line comments.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# This is a single-line comment
puts "Hello, World!"  # This is an inline comment

# Comments are ignored by Ruby
# x = 10  # This line won't execute`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Multi-Line Comments</h2>
    <p>Use <code>=begin</code> and <code>=end</code> for multi-line comments.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`=begin
This is a multi-line comment.
It can span multiple lines.
Everything between =begin and =end is ignored.
=end

puts "This code runs normally"`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Documentation Comments (RDoc)</h2>
    <p>Ruby uses special comment formats for documentation.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# == Description
# This method calculates the area of a rectangle.
#
# == Parameters
# width:: The width of the rectangle
# height:: The height of the rectangle
#
# == Returns
# The area as an integer
#
# == Example
#   calculate_area(5, 10)  # => 50
#
def calculate_area(width, height)
  width * height
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">YARD Documentation</h2>
    <p>YARD is a popular documentation tool for Ruby.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Calculates the factorial of a number
#
# @param n [Integer] the number to calculate factorial for
# @return [Integer] the factorial result
# @raise [ArgumentError] if n is negative
# @example
#   factorial(5)  #=> 120
def factorial(n)
  raise ArgumentError, "Must be non-negative" if n < 0
  n <= 1 ? 1 : n * factorial(n - 1)
end`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Magic Comments</h2>
    <p>Special comments that affect Ruby's behavior.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# frozen_string_literal: true
# This makes all string literals frozen (immutable)

# encoding: utf-8
# Sets the file encoding (usually automatic in Ruby 2.0+)

# warn_indent: true
# Warns about inconsistent indentation`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Shebang Line</h2>
    <p>Makes Ruby scripts directly executable on Unix systems.</p>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`#!/usr/bin/env ruby
# This script can be run directly: ./script.rb

puts "Hello from executable script!"`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Best Practices</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Use comments to explain "why", not "what"</li>
      <li>Keep comments up-to-date with code changes</li>
      <li>Use documentation comments for public APIs</li>
      <li>Avoid obvious comments that repeat the code</li>
      <li>Use <code># frozen_string_literal: true</code> for performance</li>
    </ul>
  </div>
);

export default RubyComments;
