import React from "react";

const RubyIntro: React.FC = () => (
  <div className="mt-17 space-y-6">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Ruby Introduction</h1>

    <h2 className="text-2xl font-bold mt-6">What is Ruby?</h2>
    <p>
      Ruby is a dynamic, interpreted, object-oriented programming language created by Yukihiro "Matz" Matsumoto in Japan in 1995. It was designed with programmer productivity and fun in mind.
    </p>

    <h2 className="text-2xl font-bold mt-6">Ruby's Philosophy</h2>
    <p>
      Ruby follows the principle of least astonishment (POLA) - the language should behave in a way that minimizes confusion. Matz wanted to create a language that was:
    </p>
    <ul className="list-disc ml-6 mt-3 space-y-2">
      <li>Fun to use</li>
      <li>Productive for developers</li>
      <li>Elegant in its design</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Key Features</h2>

    <h3 className="text-xl font-semibold mt-4">Everything is an Object</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`# Even numbers are objects
5.times { puts "Hello" }

# Even nil is an object
nil.class  # => NilClass`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Blocks and Iterators</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`[1, 2, 3].each do |num|
  puts num * 2
end
# Output: 2, 4, 6`}
    </pre>

    <h3 className="text-xl font-semibold mt-4">Dynamic Typing</h3>
    <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md font-mono">
{`x = 10      # Integer
x = "hello" # Now a String
x = [1,2,3] # Now an Array`}
    </pre>

    <h2 className="text-2xl font-bold mt-6">History of Ruby</h2>
    <table className="w-full mt-3 border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Event</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">1995</td>
          <td className="border border-gray-300 px-4 py-2">Ruby released publicly</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2004</td>
          <td className="border border-gray-300 px-4 py-2">Ruby on Rails released</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2013</td>
          <td className="border border-gray-300 px-4 py-2">Ruby 2.0 released</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">2020</td>
          <td className="border border-gray-300 px-4 py-2">Ruby 3.0 released (3x faster)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RubyIntro;
