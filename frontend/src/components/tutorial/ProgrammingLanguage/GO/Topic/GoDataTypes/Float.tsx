const GoFloat = () => (
  <>
    <h1 className="text-4xl font-extrabold  border-b-2 pb-2 mt-17">
      Go Float Data Types
    </h1>

    <p className="text-lg  leading-relaxed mt-4">
      The float data types are used to store positive and negative numbers with a
      decimal point, like <b>35.3</b>, <b>-2.34</b>, or <b>3597.34987</b>.
    </p>

    <p className="text-lg  leading-relaxed mt-4">
      The float data type has two keywords:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border  text-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">Type</th>
            <th className="border px-4 py-2 text-left">Size</th>
            <th className="border px-4 py-2 text-left">Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">float32</td>
            <td className="border px-4 py-2">32 bits</td>
            <td className="border px-4 py-2">-3.4e+38 to 3.4e+38</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">float64</td>
            <td className="border px-4 py-2">64 bits</td>
            <td className="border px-4 py-2">-1.7e+308 to +1.7e+308</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-lg  leading-relaxed mt-4">
      <b>Tip:</b> The default type for float is <b>float64</b>. If you do not
      specify a type, the type will be float64.
    </p>

    <h2 className="text-2xl font-bold  mt-6">The float32 Keyword</h2>

    <p className="text-lg  leading-relaxed mt-4">
      This example shows how to declare some variables of type float32:
    </p>

    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-2 overflow-x-auto">
{`package main
import ("fmt")

func main() {
  var x float32 = 123.78
  var y float32 = 3.4e+38
  fmt.Printf("Type: %T, value: %v\\n", x, x)
  fmt.Printf("Type: %T, value: %v", y, y)
}`}
    </pre>

    <h2 className="text-2xl font-bold  mt-6">The float64 Keyword</h2>

    <p className="text-lg  leading-relaxed mt-4">
      The float64 data type can store a larger set of numbers than float32.
    </p>

    <p className="text-lg  leading-relaxed mt-4">
      Example: This example shows how to declare a variable of type float64:
    </p>

    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-2 overflow-x-auto">
{`package main
import ("fmt")

func main() {
  var x float64 = 1.7e+308
  fmt.Printf("Type: %T, value: %v", x, x)
}`}
    </pre>

    <h2 className="text-2xl font-bold  mt-6">Which Float Type to Use?</h2>

    <p className="text-lg  leading-relaxed mt-4">
      The type of float to choose depends on the value the variable has to store.
    </p>

    <p className="text-lg  leading-relaxed mt-4">
      Example: This example will result in an error because 3.4e+39 is out of
      range for float32:
    </p>

    <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg mt-2 overflow-x-auto">
{`package main
import ("fmt")

func main() {
  var x float32 = 3.4e+39
  fmt.Println(x)
}`}
    </pre>

    <p className="text-lg  leading-relaxed mt-4">
      <b>Result:</b> <br />
      ./prog.go:5:7: constant 3.4e+39 overflows float32
    </p>
  </>
);

export default GoFloat;
