import React from "react";

const GoStruct: React.FC = () => (
  <>
    {/* Title */}
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Structures (Struct)
    </h1>

    {/* Introduction */}
    <p className="text-lg  mt-4 leading-relaxed">
      A <code>struct</code> (short for <strong>structure</strong>) in Go is used to
      group together variables (called <strong>members</strong>) of different data
      types under a single name. While arrays hold multiple values of the same type,
      structs hold values of <strong>different types</strong>.
    </p>

    <p className=" mt-2 leading-relaxed">
      Structs are useful for <strong>grouping related data</strong> into a single record.
    </p>

    {/* Declare a Struct */}
    <h2 className="text-2xl font-bold  mt-8">Declare a Struct</h2>
    <p className=" mt-2">
      To declare a struct in Go, use the <code>type</code> and <code>struct</code> keywords.
    </p>

    <h3 className="text-xl font-semibold  mt-3">Syntax</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`type struct_name struct {
  member1 datatype
  member2 datatype
  member3 datatype
  ...
}`}
    </pre>

    {/* Example 1 */}
    <h3 className="text-xl font-semibold  mt-4">Example</h3>
    <p className=" mt-2">
      Here we declare a struct type <code>Person</code> with the following members:
      <strong> name</strong>, <strong>age</strong>, <strong>job</strong>, and <strong>salary</strong>.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`type Person struct {
  name string
  age int
  job string
  salary int
}`}
    </pre>

    <p className=" mt-2">
      Notice that <code>name</code> and <code>job</code> are of type <code>string</code>,
      while <code>age</code> and <code>salary</code> are of type <code>int</code>.
    </p>

    {/* Access Struct Members */}
    <h2 className="text-2xl font-bold  mt-8">Access Struct Members</h2>
    <p className=" mt-2">
      To access struct members, use the dot operator (<code>.</code>) between the struct
      variable name and the member name.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

type Person struct {
  name string
  age int
  job string
  salary int
}

func main() {
  var pers1 Person
  var pers2 Person

  // Pers1 specification
  pers1.name = "Hege"
  pers1.age = 45
  pers1.job = "Teacher"
  pers1.salary = 6000

  // Pers2 specification
  pers2.name = "Cecilie"
  pers2.age = 24
  pers2.job = "Marketing"
  pers2.salary = 4500

  // Access and print Pers1 info
  fmt.Println("Name: ", pers1.name)
  fmt.Println("Age: ", pers1.age)
  fmt.Println("Job: ", pers1.job)
  fmt.Println("Salary: ", pers1.salary)

  // Access and print Pers2 info
  fmt.Println("Name: ", pers2.name)
  fmt.Println("Age: ", pers2.age)
  fmt.Println("Job: ", pers2.job)
  fmt.Println("Salary: ", pers2.salary)
}`}
    </pre>

    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Name: Hege
Age: 45
Job: Teacher
Salary: 6000
Name: Cecilie
Age: 24
Job: Marketing
Salary: 4500
    </pre>

    {/* Pass Struct as Function Arguments */}
    <h2 className="text-2xl font-bold  mt-8">Pass Struct as Function Arguments</h2>
    <p className=" mt-2">
      You can also pass a struct as a function argument to make your code more modular and reusable.
    </p>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

type Person struct {
  name string
  age int
  job string
  salary int
}

func main() {
  var pers1 Person
  var pers2 Person

  // Pers1 specification
  pers1.name = "Hege"
  pers1.age = 45
  pers1.job = "Teacher"
  pers1.salary = 6000

  // Pers2 specification
  pers2.name = "Cecilie"
  pers2.age = 24
  pers2.job = "Marketing"
  pers2.salary = 4500

  // Print Pers1 info by calling a function
  printPerson(pers1)

  // Print Pers2 info by calling a function
  printPerson(pers2)
}

func printPerson(pers Person) {
  fmt.Println("Name: ", pers.name)
  fmt.Println("Age: ", pers.age)
  fmt.Println("Job: ", pers.job)
  fmt.Println("Salary: ", pers.salary)
}`}
    </pre>

    <h3 className="text-lg font-semibold  mt-3">Result:</h3>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
Name: Hege
Age: 45
Job: Teacher
Salary: 6000
Name: Cecilie
Age: 24
Job: Marketing
Salary: 4500
    </pre>
  </>
);

export default GoStruct;
