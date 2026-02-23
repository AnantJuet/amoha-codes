import React from "react";

const TypeExpressions: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Type Expressions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Type Expressions are formal representations of data types in a programming language.
      They provide a notation for describing the structure of types, from basic types like
      integers and floats to complex types like arrays, records, pointers, and functions.
      The type checker uses type expressions to verify type consistency in programs.
    </p>

    <h2 className="text-3xl font-bold mt-8">Basic Type Expressions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Expression</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Primitive Types</td>
            <td className="p-3 border font-mono text-gray-900">integer, float, char, boolean</td>
            <td className="p-3 border">Built-in atomic types</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type Names</td>
            <td className="p-3 border font-mono text-gray-900">typename</td>
            <td className="p-3 border">User-defined type names</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type Variables</td>
            <td className="p-3 border font-mono text-gray-900">alpha, beta</td>
            <td className="p-3 border">Polymorphic type parameters</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error Type</td>
            <td className="p-3 border font-mono text-gray-900">type_error</td>
            <td className="p-3 border">Represents type checking failure</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Constructors</h2>
    <p className="leading-relaxed">
      Type constructors build complex type expressions from simpler ones.
      They are the building blocks for defining structured and composite types.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Type Constructors:

1. Array Constructor: array(I, T)
   - I: index type (usually integer range)
   - T: element type
   Example: array(1..100, integer)  -- array of 100 integers

2. Pointer Constructor: pointer(T)
   - T: type being pointed to
   Example: pointer(integer)  -- pointer to integer

3. Product Constructor: T1 x T2 x ... x Tn
   - Cartesian product of types
   Example: integer x float x char  -- tuple of 3 values

4. Record Constructor: record((f1 x T1) x (f2 x T2) x ...)
   - Named fields with types
   Example: record((name x string) x (age x integer))

5. Function Constructor: T1 -> T2
   - T1: domain (parameter types)
   - T2: range (return type)
   Example: (integer x integer) -> integer  -- function taking 2 ints`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Expression Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source Code to Type Expressions:

1. int x;
   Type Expression: integer

2. float matrix[10][20];
   Type Expression: array(0..9, array(0..19, float))

3. int *ptr;
   Type Expression: pointer(integer)

4. struct Point { int x; int y; };
   Type Expression: record((x x integer) x (y x integer))

5. int add(int a, int b) { return a+b; }
   Type Expression: (integer x integer) -> integer

6. char* getName();
   Type Expression: () -> pointer(char)

7. int (*funcPtr)(float, float);
   Type Expression: pointer((float x float) -> integer)

8. struct Node { int data; struct Node* next; };
   Type Expression: record((data x integer) x
                          (next x pointer(Node)))
   -- Recursive type using type name`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Expression Grammar</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar for Type Expressions:

T  ->  basic_type                    ; integer, float, char, boolean
    |  type_name                     ; user-defined type name
    |  array ( T )                   ; array of T
    |  array ( num, T )              ; sized array
    |  pointer ( T )                 ; pointer to T
    |  T1 x T2                       ; product/tuple
    |  record ( field_list )         ; record/struct
    |  T1 -> T2                      ; function type
    |  ( T )                         ; parenthesized

field_list -> id : T
           |  field_list ; id : T

Examples using grammar:
  int[]           =>  array(integer)
  int*[]          =>  array(pointer(integer))
  int -> int      =>  integer -> integer
  (int,int)->int  =>  (integer x integer) -> integer`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Expression Trees</h2>
    <p className="leading-relaxed">
      Type expressions can be represented as trees where leaves are basic types
      and internal nodes are type constructors.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Type Expression Tree Representation:

Example: (int x int) -> pointer(array(char))
"Function from pair of ints to pointer to char array"

Tree Structure:
                    ->
                   /  \\
                  x    pointer
                 / \\       |
              int  int   array
                           |
                         char

Example: record((x: int) x (y: pointer(float)))
"Record with int field x and pointer-to-float field y"

Tree Structure:
                  record
                     |
                     x
                    / \\
              (x:int) (y:pointer)
                           |
                         float`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Expressions in Different Languages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Concept</th>
            <th className="p-3 border">C</th>
            <th className="p-3 border">Java</th>
            <th className="p-3 border">Type Expression</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Integer Array</td>
            <td className="p-3 border font-mono text-gray-900">int arr[10]</td>
            <td className="p-3 border font-mono text-gray-900">int[] arr</td>
            <td className="p-3 border font-mono text-gray-900">array(integer)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pointer</td>
            <td className="p-3 border font-mono text-gray-900">int *p</td>
            <td className="p-3 border font-mono text-gray-900">Integer p</td>
            <td className="p-3 border font-mono text-gray-900">pointer(integer)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Function</td>
            <td className="p-3 border font-mono text-gray-900">int f(float)</td>
            <td className="p-3 border font-mono text-gray-900">int f(float)</td>
            <td className="p-3 border font-mono text-gray-900">float -{">"} integer</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Struct/Class</td>
            <td className="p-3 border font-mono text-gray-900">struct Point</td>
            <td className="p-3 border font-mono text-gray-900">class Point</td>
            <td className="p-3 border font-mono text-gray-900">record(...)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive Type Expressions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recursive Types - Types that Reference Themselves:

Example 1: Linked List Node
  struct Node {
      int data;
      struct Node* next;
  };

  Type Expression:
    Node = record((data x integer) x (next x pointer(Node)))
    -- Uses type name 'Node' in its own definition

Example 2: Binary Tree
  struct TreeNode {
      int value;
      struct TreeNode* left;
      struct TreeNode* right;
  };

  Type Expression:
    TreeNode = record(
      (value x integer) x
      (left x pointer(TreeNode)) x
      (right x pointer(TreeNode))
    )

Example 3: Recursive Function Type (Lambda Calculus)
  -- Y combinator type (self-application)
  -- Requires recursive type: T = T -> alpha

Handling Recursive Types:
1. Use type names with forward declarations
2. Apply structural or name equivalence rules
3. Store type expressions in symbol table by name`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Expression Operations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Operations on Type Expressions:

1. Type Equality Check
   equiv(T1, T2) -> boolean
   Checks if two type expressions are equivalent

2. Type Substitution
   substitute(T, X, S) -> T'
   Replace type variable X with type S in T

3. Unification
   unify(T1, T2) -> substitution | fail
   Find substitution making T1 and T2 equal

4. Base Type Extraction
   baseType(array(T)) -> T
   baseType(pointer(T)) -> T

5. Type Size Calculation
   size(integer) -> 4
   size(array(n, T)) -> n * size(T)
   size(record(...)) -> sum of field sizes

6. Type Compatibility
   compatible(T1, T2) -> boolean
   Check if T1 can be used where T2 is expected`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing Type Expressions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Structure for Type Expressions:

// Type expression node
class TypeExpr {
    enum Kind { BASIC, ARRAY, POINTER, FUNCTION, RECORD, PRODUCT };
    Kind kind;

    // For BASIC types
    string basicType;  // "int", "float", etc.

    // For ARRAY
    TypeExpr* elementType;
    int size;

    // For POINTER
    TypeExpr* targetType;

    // For FUNCTION: domain -> range
    TypeExpr* domain;
    TypeExpr* range;

    // For RECORD
    List<(string, TypeExpr*)> fields;

    // For PRODUCT: T1 x T2
    TypeExpr* left;
    TypeExpr* right;
}

// Example: Creating array(integer)
TypeExpr* intType = new TypeExpr(BASIC, "integer");
TypeExpr* intArray = new TypeExpr(ARRAY, intType, 10);

// Example: Creating (int x int) -> int
TypeExpr* domain = new TypeExpr(PRODUCT, intType, intType);
TypeExpr* funcType = new TypeExpr(FUNCTION, domain, intType);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Type expressions formally represent types in programming languages</li>
        <li>Basic types include integer, float, char, boolean, and type names</li>
        <li>Type constructors: array, pointer, product (x), record, function (-{">"})</li>
        <li>Complex types are built by composing constructors</li>
        <li>Type expressions can be represented as trees</li>
        <li>Recursive types reference themselves through type names</li>
        <li>Type expressions enable type checking and type inference algorithms</li>
        <li>The error type propagates through expressions when type errors occur</li>
      </ul>
    </div>
  </div>
);

export default TypeExpressions;
