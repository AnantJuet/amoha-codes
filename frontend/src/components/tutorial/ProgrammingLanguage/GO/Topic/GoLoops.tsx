import React from "react";

const GoLoops: React.FC = () => (
  <>
    {/* Main Heading */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go For Loops
    </h1>

    {/* Intro Paragraph */}
    <p className="text-lg text-gray-700 mt-4 leading-relaxed">
      The <code>for</code> loop in Go is used to execute a block of code repeatedly a
      specified number of times. It’s the <strong>only loop</strong> available in Go.
    </p>

    <h2 className="text-2xl font-bold  mt-6">Go for Loop</h2>
    <p className="text-gray-700 mt-2 leading-relaxed">
      Loops are useful when you need to run the same code multiple times, each with a
      different value. Each run of the loop is called an <strong>iteration</strong>.
    </p>

    {/* Syntax */}
    <h3 className="text-xl font-semibold  mt-4">Syntax</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`for statement1; statement2; statement3 {
   // code to be executed for each iteration
}`}
    </pre>

    <ul className="list-disc ml-6 text-gray-700 mt-3 space-y-1">
      <li><strong>statement1</strong> initializes the loop counter.</li>
      <li><strong>statement2</strong> checks the condition for each iteration.</li>
      <li><strong>statement3</strong> increments or updates the counter.</li>
    </ul>

    {/* Example 1 */}
    <h2 className="text-2xl font-bold  mt-8">Example 1</h2>
    <p className="text-gray-700 mt-2">This example prints numbers from 0 to 4:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  for i := 0; i < 5; i++ {
    fmt.Println(i)
  }
}`}
    </pre>
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
0
1
2
3
4
    </pre>

    <ul className="list-disc ml-6 text-gray-700 mt-3 space-y-1">
      <li><code>i := 0;</code> — Initialize counter to 0</li>
      <li><code>i &lt; 5;</code> — Continue as long as i is less than 5</li>
      <li><code>i++;</code> — Increase counter by 1 each loop</li>
    </ul>

    {/* Example 2 */}
    <h2 className="text-2xl font-bold  mt-8">Example 2</h2>
    <p className="text-gray-700 mt-2">This example counts to 100 by tens:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  for i := 0; i <= 100; i += 10 {
    fmt.Println(i)
  }
}`}
    </pre>
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
0
10
20
30
40
50
60
70
80
90
100
    </pre>

    {/* Continue Statement */}
    <h2 className="text-2xl font-bold  mt-8">The continue Statement</h2>
    <p className="text-gray-700 mt-2">
      The <code>continue</code> statement skips the current iteration and moves to the next one.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  for i := 0; i < 5; i++ {
    if i == 3 {
      continue
    }
    fmt.Println(i)
  }
}`}
    </pre>
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
0
1
2
4
    </pre>

    {/* Break Statement */}
    <h2 className="text-2xl font-bold  mt-8">The break Statement</h2>
    <p className="text-gray-700 mt-2">
      The <code>break</code> statement stops the loop when a specific condition is met.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  for i := 0; i < 5; i++ {
    if i == 3 {
      break
    }
    fmt.Println(i)
  }
}`}
    </pre>
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
0
1
2
    </pre>

    {/* Nested Loops */}
    <h2 className="text-2xl font-bold  mt-8">Nested Loops</h2>
    <p className="text-gray-700 mt-2">
      You can use loops inside other loops. The inner loop runs once for each outer loop iteration.
    </p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  adj := [2]string{"big", "tasty"}
  fruits := [3]string{"apple", "orange", "banana"}

  for i := 0; i < len(adj); i++ {
    for j := 0; j < len(fruits); j++ {
      fmt.Println(adj[i], fruits[j])
    }
  }
}`}
    </pre>
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
big apple
big orange
big banana
tasty apple
tasty orange
tasty banana
    </pre>

    {/* Range Keyword */}
    <h2 className="text-2xl font-bold  mt-8">The Range Keyword</h2>
    <p className="text-gray-700 mt-2 leading-relaxed">
      The <code>range</code> keyword simplifies iterating over elements in an array, slice, or map.
      It returns both the index and the value.
    </p>

    <h3 className="text-xl font-semibold  mt-3">Syntax</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`for index, value := range array|slice|map {
   // code to be executed for each iteration
}`}
    </pre>

    {/* Range Example 1 */}
    <h3 className="text-xl font-semibold  mt-4">Example 1</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  fruits := [3]string{"apple", "orange", "banana"}

  for idx, val := range fruits {
     fmt.Printf("%v\\t%v\\n", idx, val)
  }
}`}
    </pre>
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
0   apple
1   orange
2   banana
    </pre>

    {/* Range Example 2 */}
    <h3 className="text-xl font-semibold  mt-4">Example 2 - Omit Index</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  fruits := [3]string{"apple", "orange", "banana"}

  for _, val := range fruits {
     fmt.Printf("%v\\n", val)
  }
}`}
    </pre>
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
apple
orange
banana
    </pre>

    {/* Range Example 3 */}
    <h3 className="text-xl font-semibold  mt-4">Example 3 - Omit Value</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  fruits := [3]string{"apple", "orange", "banana"}

  for idx, _ := range fruits {
     fmt.Printf("%v\\n", idx)
  }
}`}
    </pre>
    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
0
1
2
    </pre>
  </>
);

export default GoLoops;
