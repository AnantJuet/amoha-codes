import React from "react";

const RubyHome: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-17">
      Learn Ruby
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Ruby</b> is a dynamic, open-source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.
    </p>

    <p className="leading-relaxed mt-3">
      Created by Yukihiro Matsumoto in the mid-1990s, Ruby was designed to make programming fun and productive. It combines the best of Perl, Smalltalk, Eiffel, Ada, and Lisp.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Learn Ruby?</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li><b>Developer Happiness:</b> Ruby is designed to make programmers happy</li>
      <li><b>Ruby on Rails:</b> The popular web framework powers many major websites</li>
      <li><b>Expressive Syntax:</b> Code reads almost like English</li>
      <li><b>Metaprogramming:</b> Powerful features for advanced developers</li>
      <li><b>Great Community:</b> Helpful, friendly developers and great documentation</li>
      <li><b>Everything is an Object:</b> Pure object-oriented programming</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Example</h2>

    <p className="leading-relaxed mt-3">
      Here's a simple Ruby program that prints "Hello, World!":
    </p>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`puts "Hello, World!"`}
    </pre>

    <p className="leading-relaxed mt-4">
      That's it! Just one line. Ruby's syntax is clean and minimal.
    </p>

    <h2 className="text-2xl font-bold mt-6">More Examples</h2>

    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Variables
name = "Ruby"
version = 3.2

# String interpolation
puts "Welcome to #{name} #{version}!"

# Arrays
languages = ["Ruby", "Python", "JavaScript"]
languages.each { |lang| puts lang }

# Methods
def greet(name)
  "Hello, #{name}!"
end

puts greet("Developer")`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">Ruby is Used For</h2>

    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>Web Development (Ruby on Rails, Sinatra)</li>
      <li>Automation and Scripting</li>
      <li>DevOps Tools (Chef, Puppet, Vagrant)</li>
      <li>Static Site Generators (Jekyll)</li>
      <li>Data Processing</li>
      <li>API Development</li>
      <li>Testing (RSpec, Cucumber)</li>
    </ul>
  </>
);

export default RubyHome;
