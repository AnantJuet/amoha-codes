import React from "react";

const GoInteger: React.FC = () => (
  <>
    
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Integer Data Types
    </h1>

    {/* Introduction */}
    <p className="text-lg  leading-relaxed mt-10">
      Integer data types are used to store a whole number without decimals, like <code>35</code>, <code>-50</code>, or <code>1345000</code>.
    </p>

    <p className="text-lg  leading-relaxed">
      The integer data type has two categories:
    </p>

    <ul className="list-disc ml-6 space-y-1 ">
      <li><strong>Signed integers</strong> – can store both positive and negative values</li>
      <li><strong>Unsigned integers</strong> – can only store non-negative values</li>
    </ul>

    <p className="text-lg  leading-relaxed">
      <strong>Tip:</strong> The default type for integer is <code>int</code>. If you do not specify a type, the type will be <code>int</code>.
    </p>

    {/* Signed Integers Section */}
    <h2 className="text-3xl font-bold  mt-8">Signed Integers</h2>

    <p className="text-lg  leading-relaxed">
      Signed integers, declared with one of the <code>int</code> keywords, can store both positive and negative values.
    </p>

    <h3 className="text-2xl font-semibold  mt-4">Example</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var x int = 500
  var y int = -4500
  fmt.Printf("Type: %T, value: %v", x, x)
  fmt.Printf("Type: %T, value: %v", y, y)
}`}
    </pre>

    {/* Signed Integer Table */}
    <h3 className="text-2xl font-semibold  mt-6">Signed Integer Types</h3>
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Size</th>
            <th className="border px-4 py-2">Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">int</td>
            <td className="border px-4 py-2">
              Depends on platform: 32 bits in 32-bit systems and 64 bits in 64-bit systems
            </td>
            <td className="border px-4 py-2">
              -2147483648 to 2147483647 (32-bit) and -9223372036854775808 to 9223372036854775807 (64-bit)
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">int8</td>
            <td className="border px-4 py-2">8 bits / 1 byte</td>
            <td className="border px-4 py-2">-128 to 127</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">int16</td>
            <td className="border px-4 py-2">16 bits / 2 bytes</td>
            <td className="border px-4 py-2">-32768 to 32767</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">int32</td>
            <td className="border px-4 py-2">32 bits / 4 bytes</td>
            <td className="border px-4 py-2">-2147483648 to 2147483647</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">int64</td>
            <td className="border px-4 py-2">64 bits / 8 bytes</td>
            <td className="border px-4 py-2">-9223372036854775808 to 9223372036854775807</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Unsigned Integers Section */}
    <h2 className="text-3xl font-bold  mt-10">Unsigned Integers</h2>

    <p className="text-lg  leading-relaxed">
      Unsigned integers, declared with one of the <code>uint</code> keywords, can only store non-negative values.
    </p>

    <h3 className="text-2xl font-semibold  mt-4">Example</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var x uint = 500
  var y uint = 4500
  fmt.Printf("Type: %T, value: %v", x, x)
  fmt.Printf("Type: %T, value: %v", y, y)
}`}
    </pre>

    {/* Unsigned Integer Table */}
    <h3 className="text-2xl font-semibold  mt-6">Unsigned Integer Types</h3>
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Size</th>
            <th className="border px-4 py-2">Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">uint</td>
            <td className="border px-4 py-2">
              Depends on platform: 32 bits in 32-bit systems and 64 bits in 64-bit systems
            </td>
            <td className="border px-4 py-2">
              0 to 4294967295 (32-bit) and 0 to 18446744073709551615 (64-bit)
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">uint8</td>
            <td className="border px-4 py-2">8 bits / 1 byte</td>
            <td className="border px-4 py-2">0 to 255</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">uint16</td>
            <td className="border px-4 py-2">16 bits / 2 bytes</td>
            <td className="border px-4 py-2">0 to 65535</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">uint32</td>
            <td className="border px-4 py-2">32 bits / 4 bytes</td>
            <td className="border px-4 py-2">0 to 4294967295</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">uint64</td>
            <td className="border px-4 py-2">64 bits / 8 bytes</td>
            <td className="border px-4 py-2">0 to 18446744073709551615</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Choosing Integer Type */}
    <h2 className="text-3xl font-bold  mt-10">Which Integer Type to Use?</h2>
    <p className="text-lg  leading-relaxed">
      The type of integer to choose depends on the value the variable has to store.
    </p>

    <h3 className="text-2xl font-semibold  mt-4">Example</h3>
    <p className="text-lg  leading-relaxed">
      This example will result in an error because <code>1000</code> is out of range for <code>int8</code> (which is from -128 to 127):
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var x int8 = 1000
  fmt.Printf("Type: %T, value: %v", x, x)
}`}
    </pre>

    <h3 className="text-xl font-semibold text-red-600 mt-2">Result:</h3>
    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto text-red-600">
{`./prog.go:5:7: constant 1000 overflows int8`}
    </pre>

  </>
);

export default GoInteger;
