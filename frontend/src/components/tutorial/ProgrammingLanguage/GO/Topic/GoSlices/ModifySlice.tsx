import React from "react";

const GoModifySlices: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Access, Change, Append and Copy Slices
    </h1>

    {/* Access Elements of a Slice */}
    <h2 className="text-2xl font-bold  mt-6">
      Access Elements of a Slice
    </h2>
    <p className="text-lg  mt-3 leading-relaxed">
      You can access a specific slice element by referring to the index number.
      In Go, indexes start at 0. That means that [0] is the first element, [1] is the second element, etc.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  prices := []int{10,20,30}
  fmt.Println(prices[0])
  fmt.Println(prices[2])
}`}</pre>

    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`10
30`}
    </pre>

    {/* Change Elements of a Slice */}
    <h2 className="text-2xl font-bold  mt-6">
      Change Elements of a Slice
    </h2>
    <p className="text-lg  mt-3 leading-relaxed">
      You can change a specific slice element by referring to its index number.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono   ">
{`package main
import ("fmt")

func main() {
  prices := []int{10,20,30}
  prices[2] = 50
  fmt.Println(prices[0])
  fmt.Println(prices[2])
}`}</pre>

    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`10
50`}
    </pre>

    {/* Append Elements To a Slice */}
    <h2 className="text-2xl font-bold  mt-6">
      Append Elements To a Slice
    </h2>
    <p className="text-lg  mt-3 leading-relaxed">
      You can append elements to the end of a slice using the{" "}
      <code>append()</code> function:
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`slice_name = append(slice_name, element1, element2, ...)`}
    </pre>

    <p className=" mt-2">Example:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  myslice1 := []int{1, 2, 3, 4, 5, 6}
  fmt.Printf("myslice1 = %v\\n", myslice1)
  fmt.Printf("length = %d\\n", len(myslice1))
  fmt.Printf("capacity = %d\\n", cap(myslice1))

  myslice1 = append(myslice1, 20, 21)
  fmt.Printf("myslice1 = %v\\n", myslice1)
  fmt.Printf("length = %d\\n", len(myslice1))
  fmt.Printf("capacity = %d\\n", cap(myslice1))
}`}</pre>

    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`myslice1 = [1 2 3 4 5 6]
length = 6
capacity = 6
myslice1 = [1 2 3 4 5 6 20 21]
length = 8
capacity = 12`}
    </pre>

    {/* Append One Slice To Another */}
    <h2 className="text-2xl font-bold  mt-6">
      Append One Slice To Another Slice
    </h2>
    <p className="text-lg  mt-3 leading-relaxed">
      You can append all the elements of one slice to another slice using{" "}
      <code>append(slice1, slice2...)</code>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  myslice1 := []int{1,2,3}
  myslice2 := []int{4,5,6}
  myslice3 := append(myslice1, myslice2...)
  fmt.Printf("myslice3=%v\\n", myslice3)
  fmt.Printf("length=%d\\n", len(myslice3))
  fmt.Printf("capacity=%d\\n", cap(myslice3))
}`}</pre>

    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`myslice3=[1 2 3 4 5 6]
length=6
capacity=6`}
    </pre>

    {/* Change The Length of a Slice */}
    <h2 className="text-2xl font-bold  mt-6">
      Change The Length of a Slice
    </h2>
    <p className="text-lg  mt-3 leading-relaxed">
      Unlike arrays, it is possible to change the length of a slice.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  arr1 := [6]int{9, 10, 11, 12, 13, 14}
  myslice1 := arr1[1:5]
  fmt.Printf("myslice1 = %v\\n", myslice1)
  fmt.Printf("length = %d\\n", len(myslice1))
  fmt.Printf("capacity = %d\\n", cap(myslice1))

  myslice1 = arr1[1:3]
  fmt.Printf("myslice1 = %v\\n", myslice1)
  fmt.Printf("length = %d\\n", len(myslice1))
  fmt.Printf("capacity = %d\\n", cap(myslice1))

  myslice1 = append(myslice1, 20, 21, 22, 23)
  fmt.Printf("myslice1 = %v\\n", myslice1)
  fmt.Printf("length = %d\\n", len(myslice1))
  fmt.Printf("capacity = %d\\n", cap(myslice1))
}`}</pre>

    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`myslice1 = [10 11 12 13]
length = 4
capacity = 5
myslice1 = [10 11]
length = 2
capacity = 5
myslice1 = [10 11 20 21 22 23]
length = 6
capacity = 10`}
    </pre>

    {/* Memory Efficiency */}
    <h2 className="text-2xl font-bold  mt-6">Memory Efficiency</h2>
    <p className="text-lg  mt-3 leading-relaxed">
      When using slices, Go loads all underlying elements into memory. If the array is large and you only need a few elements, 
      it’s better to copy those elements using the <code>copy()</code> function to save memory.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  numbers := []int{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15}
  fmt.Printf("numbers = %v\\n", numbers)
  fmt.Printf("length = %d\\n", len(numbers))
  fmt.Printf("capacity = %d\\n", cap(numbers))

  neededNumbers := numbers[:len(numbers)-10]
  numbersCopy := make([]int, len(neededNumbers))
  copy(numbersCopy, neededNumbers)

  fmt.Printf("numbersCopy = %v\\n", numbersCopy)
  fmt.Printf("length = %d\\n", len(numbersCopy))
  fmt.Printf("capacity = %d\\n", cap(numbersCopy))
}`}</pre>

    <p className=" mt-2">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`numbers = [1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]
length = 15
capacity = 15
numbersCopy = [1 2 3 4 5]
length = 5
capacity = 5`}
    </pre>
  </>
);

export default GoModifySlices;
