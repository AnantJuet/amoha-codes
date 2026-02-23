import React from "react";

const GoArrays: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Arrays
    </h1>

    <p className="text-lg  mt-4">
      Arrays are used to store multiple values of the same type in a single
      variable, instead of declaring separate variables for each value.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Declare an Array</h2>
    <p className="text-lg  mt-4">
      In Go, there are two ways to declare an array:
    </p>

    <p className="text-lg  mt-4">1. With the var keyword:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var array_name = [length]datatype{values} // here length is defined
var array_name = [...]datatype{values} // here length is inferred`}
    </pre>

    <p className="text-lg  mt-4">2. With the := sign:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`array_name := [length]datatype{values} // here length is defined
array_name := [...]datatype{values} // here length is inferred`}
    </pre>

    <p className="text-lg  mt-4">
      Note: The length specifies the number of elements to store in the array.
      In Go, arrays have a fixed length. The length can be explicitly defined or
      inferred by the compiler.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Array Examples</h2>

    <h3 className="text-xl font-semibold  mt-4">
      Example 1: Arrays with defined lengths
    </h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var arr1 = [3]int{1,2,3}
  arr2 := [5]int{4,5,6,7,8}

  fmt.Println(arr1)
  fmt.Println(arr2)
}`}
    </pre>
    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[1 2 3]
[4 5 6 7 8]`}
    </pre>

    <h3 className="text-xl font-semibold  mt-4">
      Example 2: Arrays with inferred lengths
    </h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var arr1 = [...]int{1,2,3}
  arr2 := [...]int{4,5,6,7,8}

  fmt.Println(arr1)
  fmt.Println(arr2)
}`}
    </pre>
    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[1 2 3]
[4 5 6 7 8]`}
    </pre>

    <h3 className="text-xl font-semibold  mt-4">
      Example 3: Array of strings
    </h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var cars = [4]string{"Volvo", "BMW", "Ford", "Mazda"}
  fmt.Print(cars)
}`}
    </pre>
    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[Volvo BMW Ford Mazda]`}
    </pre>

    <h2 className="text-2xl font-bold  mt-6">
      Access Elements of an Array
    </h2>
    <p className="text-lg  mt-4">
      You can access a specific array element by referring to the index number.
      In Go, indexes start at 0.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  prices := [3]int{10,20,30}

  fmt.Println(prices[0])
  fmt.Println(prices[2])
}`}
    </pre>
    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`10
30`}
    </pre>

    <h2 className="text-2xl font-bold  mt-6">
      Change Elements of an Array
    </h2>
    <p className="text-lg  mt-4">
      You can also change the value of a specific array element by referring to
      the index number.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  prices := [3]int{10,20,30}
  prices[2] = 50
  fmt.Println(prices)
}`}
    </pre>
    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[10 20 50]`}
    </pre>

    <h2 className="text-2xl font-bold  mt-6">
      Array Initialization
    </h2>
    <p className="text-lg  mt-4">
      If an array or one of its elements has not been initialized, it is
      assigned the default value of its type. For example, the default value for{" "}
      <code>int</code> is <code>0</code> and for <code>string</code> is an empty
      string "".
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  arr1 := [5]int{}
  arr2 := [5]int{1,2}
  arr3 := [5]int{1,2,3,4,5}

  fmt.Println(arr1)
  fmt.Println(arr2)
  fmt.Println(arr3)
}`}
    </pre>
    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[0 0 0 0 0]
[1 2 0 0 0]
[1 2 3 4 5]`}
    </pre>

    <h2 className="text-2xl font-bold  mt-6">
      Initialize Only Specific Elements
    </h2>
    <p className="text-lg  mt-4">
      It is possible to initialize only specific elements in an array by using
      index:value pairs.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  arr1 := [5]int{1:10,2:40}
  fmt.Println(arr1)
}`}
    </pre>
    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`[0 10 40 0 0]`}
    </pre>

    <p className="text-lg  mt-4">
      Example Explained: <br />
      <code>1:10</code> means assign 10 to index 1 (second element). <br />
      <code>2:40</code> means assign 40 to index 2 (third element).
    </p>

    <h2 className="text-2xl font-bold  mt-6">
      Find the Length of an Array
    </h2>
    <p className="text-lg  mt-4">
      The <code>len()</code> function is used to find the length of an array.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  arr1 := [4]string{"Volvo", "BMW", "Ford", "Mazda"}
  arr2 := [...]int{1,2,3,4,5,6}

  fmt.Println(len(arr1))
  fmt.Println(len(arr2))
}`}
    </pre>
    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`4
6`}
    </pre>

    <h2 className="text-2xl font-bold  mt-6">Exercise</h2>
    <p className="text-lg  mt-4">
      Create an array named <code>cars</code> of type string:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var cars = [4]string{"Volvo", "BMW", "Ford", "Mazda"}
  fmt.Print(cars)
}`}
    </pre>
  </>
);

export default GoArrays;
