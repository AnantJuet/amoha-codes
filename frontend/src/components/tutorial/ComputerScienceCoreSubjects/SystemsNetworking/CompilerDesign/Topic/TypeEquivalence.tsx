import React from "react";

const TypeEquivalence: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Type Equivalence
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Type Equivalence determines when two types are considered the same for type checking
      purposes. This is a fundamental concept in type systems because it affects how the
      compiler handles assignments, function calls, and other operations involving different
      type expressions. The two main approaches are Structural Equivalence and Name Equivalence.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Type Equivalence</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Equivalence Type</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Languages Using</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Structural</td>
            <td className="p-3 border">Types are equivalent if they have the same structure</td>
            <td className="p-3 border">C (mostly), ML, Haskell</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Name</td>
            <td className="p-3 border">Types are equivalent only if they have the same name</td>
            <td className="p-3 border">Pascal, Ada, Java classes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Declaration</td>
            <td className="p-3 border">Types from same declaration are equivalent</td>
            <td className="p-3 border">Variant of name equivalence</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Structural Equivalence</h2>
    <p className="leading-relaxed">
      Two types are structurally equivalent if they have identical type expressions
      when expanded. The comparison is based on the structure of the types, not their names.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Structural Equivalence Algorithm:

function structurallyEquivalent(s, t) -> boolean:
    if s and t are same basic type:
        return true
    else if s = array(s1) and t = array(t1):
        return structurallyEquivalent(s1, t1)
    else if s = pointer(s1) and t = pointer(t1):
        return structurallyEquivalent(s1, t1)
    else if s = s1 -> s2 and t = t1 -> t2:
        return structurallyEquivalent(s1, t1) and
               structurallyEquivalent(s2, t2)
    else if s = s1 x s2 and t = t1 x t2:
        return structurallyEquivalent(s1, t1) and
               structurallyEquivalent(s2, t2)
    else if s and t are records:
        return fields match in order and types
    else:
        return false

Example:
  type A = array[1..10] of integer
  type B = array[1..10] of integer

  Under structural equivalence: A = B (both are arrays of 10 integers)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Structural Equivalence Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Structural Equivalence Comparisons:

Example 1: Type Aliases
  typedef int Miles;
  typedef int Kilometers;

  Miles m = 100;
  Kilometers k = m;  // ALLOWED - both are integer

Example 2: Arrays
  int arr1[10];
  int arr2[10];

  arr1 = arr2;  // ALLOWED - same structure

Example 3: Structs (C behavior varies)
  struct Point1 { int x; int y; };
  struct Point2 { int x; int y; };

  // In pure structural: Point1 == Point2
  // (same fields, same types, same order)

Example 4: Function Types
  int (*f1)(int, int);
  int (*f2)(int, int);

  f1 = f2;  // ALLOWED - same signature

Example 5: Different Structures
  struct A { int x; float y; };
  struct B { int a; float b; };

  // Structurally equivalent?
  // Yes if only considering types: (int x float)
  // Some systems also check field names`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Equivalence</h2>
    <p className="leading-relaxed">
      Two types are name equivalent only if they refer to the same type declaration
      or have the exact same type name. This is more restrictive than structural equivalence.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Name Equivalence Rules:

1. Each type declaration creates a new unique type
2. Type aliases may or may not create new types
   (depends on language: typedef vs type definition)
3. Only types from same declaration are equivalent

Example:
  type Miles = integer;
  type Kilometers = integer;

  var m: Miles;
  var k: Kilometers;

  m := k;  // ERROR under strict name equivalence!
           // Miles and Kilometers are different types
           // even though both are integers

Comparison:
  Structural: Miles = Kilometers = integer (all same)
  Name:       Miles != Kilometers (different declarations)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Equivalence Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Name Equivalence Scenarios:

Example 1: Type Declarations (Pascal/Ada style)
  type
    Age = integer;
    Weight = integer;

  var a: Age;
  var w: Weight;

  a := w;  // ERROR - different types under name equivalence

Example 2: Same Declaration
  type IntArray = array[1..10] of integer;

  var x: IntArray;
  var y: IntArray;

  x := y;  // ALLOWED - same type name "IntArray"

Example 3: Anonymous Types
  var arr1: array[1..10] of integer;
  var arr2: array[1..10] of integer;

  arr1 := arr2;  // ERROR - different anonymous types!
                 // Each declaration creates unique type

Example 4: Class Types (Java)
  class Point { int x, y; }
  class Coordinate { int x, y; }

  Point p = new Coordinate();  // ERROR - different classes

  // Even with identical structure,
  // Point != Coordinate under name equivalence`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Structural vs Name Equivalence</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Structural</th>
            <th className="p-3 border">Name</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Flexibility</td>
            <td className="p-3 border">More flexible, allows compatible types</td>
            <td className="p-3 border">More restrictive, requires exact type</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type Safety</td>
            <td className="p-3 border">May allow unintended type mixing</td>
            <td className="p-3 border">Prevents accidental type mixing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implementation</td>
            <td className="p-3 border">Requires recursive comparison</td>
            <td className="p-3 border">Simple pointer/name comparison</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recursive Types</td>
            <td className="p-3 border">Complex handling needed</td>
            <td className="p-3 border">Handled naturally</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Abstraction</td>
            <td className="p-3 border">Exposes internal structure</td>
            <td className="p-3 border">Supports data abstraction</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Type Aliases</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Type Alias Handling Varies by Language:

C (typedef) - Structural Equivalence:
  typedef int Age;
  typedef int Weight;
  Age a = 25;
  Weight w = a;    // ALLOWED - both are int

Pascal (type) - Name Equivalence:
  type Age = integer;
  type Weight = integer;
  var a: Age;
  var w: Weight;
  a := w;          // ERROR - different types

Ada (subtype) - Loose Name Equivalence:
  subtype Age is Integer;
  subtype Weight is Integer;
  A : Age := 25;
  W : Weight := A;  // ALLOWED - same base type

Ada (type) - Strict Name Equivalence:
  type Age is new Integer;
  type Weight is new Integer;
  A : Age := 25;
  W : Weight := A;  // ERROR - derived types are distinct`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation of Type Equivalence</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Implementing Type Equivalence Check:

// Name Equivalence (simple)
boolean nameEquivalent(Type t1, Type t2) {
    // Compare type identifiers/pointers
    return t1.typeId == t2.typeId;
}

// Structural Equivalence (recursive)
boolean structEquivalent(Type s, Type t) {
    // Handle recursive types with visited set
    if (visited.contains(s, t)) return true;
    visited.add(s, t);

    if (s.kind != t.kind) return false;

    switch (s.kind) {
        case BASIC:
            return s.name == t.name;

        case ARRAY:
            return s.size == t.size &&
                   structEquivalent(s.elemType, t.elemType);

        case POINTER:
            return structEquivalent(s.targetType, t.targetType);

        case FUNCTION:
            return structEquivalent(s.paramType, t.paramType) &&
                   structEquivalent(s.returnType, t.returnType);

        case RECORD:
            if (s.fields.length != t.fields.length)
                return false;
            for each (sf, tf) in zip(s.fields, t.fields):
                if (sf.name != tf.name) return false;
                if (!structEquivalent(sf.type, tf.type))
                    return false;
            return true;
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Language-Specific Behaviors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Real Language Behaviors:

C Language:
- typedef: Structural equivalence (alias only)
- struct: Name equivalence (each struct is unique type)
- Pointers to struct: Can be cast, loose checking

Java:
- Classes: Strict name equivalence
- Interfaces: Structural for compatibility checking
- Generics: Type erasure affects equivalence

TypeScript:
- Structural typing for objects
  interface A { x: number }
  interface B { x: number }
  // A and B are compatible (structural)

Go:
- Named types: Name equivalence
- Underlying types: Structural for operations
  type MyInt int
  var a MyInt = 5
  var b int = int(a)  // Explicit conversion needed

Rust:
- Strict name equivalence
- newtype pattern for distinct types
  struct Meters(i32);
  struct Feet(i32);
  // Meters != Feet even though both wrap i32`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Structural equivalence: Types equal if they have identical structure</li>
        <li>Name equivalence: Types equal only if they have the same type name</li>
        <li>Structural is more permissive, name is more restrictive</li>
        <li>Name equivalence supports better data abstraction and type safety</li>
        <li>Structural equivalence allows more flexible type reuse</li>
        <li>Most languages use a hybrid: name for user types, structural for built-ins</li>
        <li>Type aliases may or may not create new types depending on the language</li>
        <li>Choice of equivalence affects program design and safety</li>
      </ul>
    </div>
  </div>
);

export default TypeEquivalence;
