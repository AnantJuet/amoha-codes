import React from "react";

const GoMaps: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Maps
    </h1>

    <p className="text-lg  mt-4 leading-relaxed">
      Maps are used to store data values in <b>key:value</b> pairs. Each element in a map is a key:value pair. 
      A map is an unordered and changeable collection that does not allow duplicates. The length of a map is 
      the number of its elements, found using the <code>len()</code> function. The default value of a map is 
      <code>nil</code>. Maps hold references to an underlying hash table.
    </p>

    <h2 className="text-2xl font-bold  mt-8">Create Maps Using var and :=</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var a = map[KeyType]ValueType{key1:value1, key2:value2,...}
b := map[KeyType]ValueType{key1:value1, key2:value2,...}`}
    </pre>

    <h3 className="text-xl font-semibold  mt-4">Example:</h3>
    <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto">
{`package main
import ("fmt")

func main() {
  var a = map[string]string{"brand": "Ford", "model": "Mustang", "year": "1964"}
  b := map[string]int{"Oslo": 1, "Bergen": 2, "Trondheim": 3, "Stavanger": 4}

  fmt.Printf("a\\t%v\\n", a)
  fmt.Printf("b\\t%v\\n", b)
}`}
    </pre>

    <p className="mt-3 ">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono mt-2 overflow-x-auto">
{`a   map[brand:Ford model:Mustang year:1964]
b   map[Bergen:2 Oslo:1 Stavanger:4 Trondheim:3]`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Create Maps Using the make() Function</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var a = make(map[KeyType]ValueType)
b := make(map[KeyType]ValueType)`}
    </pre>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var a = make(map[string]string)
  a["brand"] = "Ford"
  a["model"] = "Mustang"
  a["year"] = "1964"

  b := make(map[string]int)
  b["Oslo"] = 1
  b["Bergen"] = 2
  b["Trondheim"] = 3
  b["Stavanger"] = 4

  fmt.Printf("a\\t%v\\n", a)
  fmt.Printf("b\\t%v\\n", b)
}`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Create an Empty Map</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`var a = make(map[string]string)
var b map[string]string

fmt.Println(a == nil)
fmt.Println(b == nil)`}
    </pre>

    <p className=" mt-3">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`false
true`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Access Map Elements</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`value = map_name[key]`}
    </pre>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var a = make(map[string]string)
  a["brand"] = "Ford"
  a["model"] = "Mustang"
  a["year"] = "1964"

  fmt.Printf(a["brand"])
}`}
    </pre>

    <p className="mt-3 ">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">Ford</pre>

    <h2 className="text-2xl font-bold  mt-8">Update and Add Map Elements</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`map_name[key] = value`}
    </pre>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var a = make(map[string]string)
  a["brand"] = "Ford"
  a["model"] = "Mustang"
  a["year"] = "1964"

  fmt.Println(a)

  a["year"] = "1970"
  a["color"] = "red"

  fmt.Println(a)
}`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Remove Element from Map</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`delete(map_name, key)`}
    </pre>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var a = make(map[string]string)
  a["brand"] = "Ford"
  a["model"] = "Mustang"
  a["year"] = "1964"

  fmt.Println(a)

  delete(a, "year")

  fmt.Println(a)
}`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Check For Specific Elements in a Map</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`val, ok := map_name[key]`}
    </pre>

    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var a = map[string]string{"brand": "Ford", "model": "Mustang", "year": "1964", "day": ""}

  val1, ok1 := a["brand"]
  val2, ok2 := a["color"]
  val3, ok3 := a["day"]
  _, ok4 := a["model"]

  fmt.Println(val1, ok1)
  fmt.Println(val2, ok2)
  fmt.Println(val3, ok3)
  fmt.Println(ok4)
}`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Maps Are References</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  var a = map[string]string{"brand": "Ford", "model": "Mustang", "year": "1964"}
  b := a

  fmt.Println(a)
  fmt.Println(b)

  b["year"] = "1970"
  fmt.Println("After change to b:")
  fmt.Println(a)
  fmt.Println(b)
}`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Iterate Over Maps</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  a := map[string]int{"one": 1, "two": 2, "three": 3, "four": 4}

  for k, v := range a {
    fmt.Printf("%v : %v, ", k, v)
  }
}`}
    </pre>

    <p className="mt-3 ">Result:</p>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`two : 2, three : 3, four : 4, one : 1,`}
    </pre>

    <h2 className="text-2xl font-bold  mt-8">Iterate Over Maps in a Specific Order</h2>
    <pre className="bg-gray-100 text-black p-3 rounded-md font-mono">
{`package main
import ("fmt")

func main() {
  a := map[string]int{"one": 1, "two": 2, "three": 3, "four": 4}

  var b []string
  b = append(b, "one", "two", "three", "four")

  for k, v := range a {
    fmt.Printf("%v : %v, ", k, v)
  }

  fmt.Println()

  for _, element := range b {
    fmt.Printf("%v : %v, ", element, a[element])
  }
}`}
    </pre>
  </>
);

export default GoMaps;
