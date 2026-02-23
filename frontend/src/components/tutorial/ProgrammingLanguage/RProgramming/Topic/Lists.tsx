import React from "react";

const Lists: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Lists in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      A list in R programming is a generic object consisting of an ordered collection of objects.
      Lists are one-dimensional, heterogeneous data structures. The list can be a list of vectors,
      a list of matrices, a list of characters, a list of functions, and so on.
    </p>

    <p className="leading-relaxed mt-3">
      A list in R is created with the use of the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">list()</code> function.
      R allows accessing elements of a list with the use of the index value.
      In R, the indexing of a list starts with 1 instead of 0.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">1. Creating a List</h2>

    <p className="leading-relaxed mt-3">
      To create a List in R you need to use the function called "list()".
      Here's an example of building a list of employees with their details:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`empId = c(1, 2, 3, 4)
empName = c("Debi", "Sandeep", "Subham", "Shiba")
numberOfEmp = 4

empList = list(empId, empName, numberOfEmp)
print(empList)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[[1]]
[1] 1 2 3 4

[[2]]
[1] "Debi"    "Sandeep" "Subham"  "Shiba"

[[3]]
[1] 4`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">2. Naming List Components</h2>

    <p className="leading-relaxed mt-3">
      Naming list components makes it easier to access them.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`empList = list(
  "IDs" = c(1, 2, 3, 4),
  "Names" = c("Debi", "Sandeep", "Subham", "Shiba"),
  "Count" = 4
)
print(empList)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`$IDs
[1] 1 2 3 4

$Names
[1] "Debi"    "Sandeep" "Subham"  "Shiba"

$Count
[1] 4`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">3. Accessing List Components</h2>

    <h3 className="text-xl font-bold mt-6">3.1 Access by Names</h3>

    <p className="leading-relaxed mt-3">
      All the components of a list can be named and we can use those names to access
      the components using the dollar sign ($).
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`empList = list(
  "IDs" = c(1, 2, 3, 4),
  "Names" = c("Debi", "Sandeep", "Subham", "Shiba")
)

# Access by name using $
print(empList$Names)
print(empList$IDs)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Debi"    "Sandeep" "Subham"  "Shiba"
[1] 1 2 3 4`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">3.2 Access by Indices</h3>

    <p className="leading-relaxed mt-3">
      To access top-level components of a list, use double square brackets [[ ]].
      To access inner-level components, use another square bracket [ ] along with [[ ]].
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`empList = list(
  c(1, 2, 3, 4),
  c("Debi", "Sandeep", "Subham", "Shiba")
)

# Access first component (vector)
print(empList[[1]])

# Access second element of first component
print(empList[[1]][2])

# Access third element of second component
print(empList[[2]][3])`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 1 2 3 4
[1] 2
[1] "Subham"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">4. Modifying Components of a List</h2>

    <p className="leading-relaxed mt-3">
      A list can be modified by accessing the components and replacing them with new values.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`myList = list("a" = 1, "b" = 2, "c" = 3)
print(myList)

# Modify a component
myList$b = 20
print(myList)

# Modify using index
myList[[3]] = 30
print(myList)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">5. Concatenation of Lists</h2>

    <p className="leading-relaxed mt-3">
      Two lists can be concatenated using the concatenation function <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">c()</code>.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`list1 = list(1, 2, 3)
list2 = list("a", "b", "c")

# Concatenate lists
combined = c(list1, list2)
print(combined)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[[1]]
[1] 1

[[2]]
[1] 2

[[3]]
[1] 3

[[4]]
[1] "a"

[[5]]
[1] "b"

[[6]]
[1] "c"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">6. Adding Items to a List</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`myList = list("a" = 1, "b" = 2)

# Add new item
myList$c = 3
print(myList)

# Add using index
myList[[4]] = 4
print(myList)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">7. Deleting Components from a List</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`myList = list("a" = 1, "b" = 2, "c" = 3)

# Delete by setting to NULL
myList$b = NULL
print(myList)

# Delete by index
myList[[2]] = NULL
print(myList)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">8. Merging Lists</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`list1 = list(a = 1, b = 2)
list2 = list(c = 3, d = 4)

# Merge lists
merged = c(list1, list2)
print(merged)`}</pre>
    </div>
  </>
);

export default Lists;
