import React from "react";

const ActivationTrees: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Activation Trees ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Activation Trees
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An <strong>activation tree</strong> is a tree representation of all procedure activations
      during a program's execution. It captures the hierarchical relationship between procedure
      calls, where each node represents a single procedure activation, and the children of a node
      represent the procedures called by that activation. Activation trees are fundamental for
      understanding program control flow and the relationship between the runtime stack and
      procedure calls.
    </p>

    {/* What is an Activation Tree */}
    <h2 className="text-3xl font-bold mt-8">What is an Activation Tree?</h2>
    <p className="leading-relaxed">
      An activation tree represents all the procedure activations that occur during a complete
      execution of a program:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>The root is the activation of the main procedure</li>
      <li>Each node represents one activation of a procedure</li>
      <li>Children of a node represent procedures called during that activation</li>
      <li>The order of children (left to right) corresponds to the order of calls</li>
      <li>The tree unfolds as the program executes</li>
    </ul>

    {/* Basic Example */}
    <h2 className="text-3xl font-bold mt-8">Basic Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Program Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`void main() {
    a();
    b();
}

void a() {
    c();
}

void b() {
    c();
    d();
}

void c() { }
void d() { }`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Activation Tree:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`                    main
                   /    \\
                  a      b
                  |     / \\
                  c    c   d

Reading the tree:
1. main() starts (root)
2. main() calls a() (first child)
3. a() calls c() (child of a)
4. c() returns to a()
5. a() returns to main()
6. main() calls b() (second child)
7. b() calls c() (first child of b)
8. c() returns to b()
9. b() calls d() (second child of b)
10. d() returns to b()
11. b() returns to main()
12. main() ends`}
      </pre>
    </div>

    {/* Activation Tree Properties */}
    <h2 className="text-3xl font-bold mt-8">Properties of Activation Trees</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Root</td>
            <td className="p-3 border">Activation of main/entry procedure</td>
          </tr>
          <tr>
            <td className="p-3 border">Nodes</td>
            <td className="p-3 border">One node per procedure activation</td>
          </tr>
          <tr>
            <td className="p-3 border">Parent-Child</td>
            <td className="p-3 border">Parent calls child procedure</td>
          </tr>
          <tr>
            <td className="p-3 border">Sibling Order</td>
            <td className="p-3 border">Left to right = chronological call order</td>
          </tr>
          <tr>
            <td className="p-3 border">Lifetime</td>
            <td className="p-3 border">Parent's lifetime includes all children</td>
          </tr>
          <tr>
            <td className="p-3 border">Control Stack</td>
            <td className="p-3 border">Path from root to current node</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Recursive Activation Tree */}
    <h2 className="text-3xl font-bold mt-8">Activation Trees with Recursion</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Recursive Factorial:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

void main() {
    int result = factorial(4);
}

Activation Tree:

            main
              |
         factorial(4)
              |
         factorial(3)
              |
         factorial(2)
              |
         factorial(1)

Note: The tree becomes a chain for tail recursion!

Each factorial node represents a DIFFERENT activation
with its own values of n:
- factorial(4): n = 4
- factorial(3): n = 3
- factorial(2): n = 2
- factorial(1): n = 1`}
      </pre>
    </div>

    {/* Complex Example: Fibonacci */}
    <h2 className="text-3xl font-bold mt-8">Complex Example: Fibonacci</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Recursive Fibonacci:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}

void main() {
    int result = fib(4);
}

Activation Tree for fib(4):

                        main
                          |
                       fib(4)
                      /      \\
                 fib(3)      fib(2)
                /     \\      /     \\
           fib(2)   fib(1) fib(1) fib(0)
           /    \\
       fib(1)  fib(0)

Observations:
- Binary tree structure (two recursive calls)
- Same procedure can appear multiple times
- fib(2) appears twice, fib(1) appears 3 times
- Total activations: 9 (for fib(4))
- This shows the inefficiency of naive recursion!`}
      </pre>
    </div>

    {/* Relationship to Control Stack */}
    <h2 className="text-3xl font-bold mt-8">Activation Tree and Control Stack</h2>
    <p className="leading-relaxed">
      The runtime control stack at any point contains exactly the activation records on the
      path from the root to the current node in the activation tree:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`During execution of fib(4), when inside the leftmost fib(1):

Activation Tree:                    Control Stack:
                                    (current position marked with *)

        main                        +------------------+
          |                         | main             |
       fib(4)                       +------------------+
      /      \\                      | fib(4)           |
  fib(3)    fib(2)                  +------------------+
  /    \\                            | fib(3)           |
fib(2) fib(1)                       +------------------+
/    \\                              | fib(2)           |
fib(1)* fib(0)                      +------------------+
                                    | fib(1)  <-- TOP  |
                                    +------------------+

The path from root to fib(1)* IS the control stack:
main -> fib(4) -> fib(3) -> fib(2) -> fib(1)`}
      </pre>
    </div>

    {/* Activation Tree Evolution */}
    <h2 className="text-3xl font-bold mt-8">Activation Tree Evolution</h2>
    <p className="leading-relaxed">
      The activation tree grows and shrinks as the program executes:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`void main() {
    a();
    b();
}
void a() { c(); }
void b() { }
void c() { }

Evolution of Activation Tree:

Time 1: main() starts       Time 2: a() called       Time 3: c() called
       main                        main                     main
                                    |                        |
                                    a                        a
                                                             |
                                                             c

Time 4: c() returns         Time 5: a() returns      Time 6: b() called
       main                        main                     main
         |                          |                      /    \\
         a                          a                     a      b
         |
     (c done)

Time 7: b() returns         Time 8: main() ends
       main                     (complete tree)
      /    \\                        main
     a      b                      /    \\
     |                            a      b
 (c done)                         |
                                  c

The complete activation tree shows ALL activations
that occurred during execution.`}
      </pre>
    </div>

    {/* Lifetime and Activation */}
    <h2 className="text-3xl font-bold mt-8">Lifetime Analysis</h2>
    <p className="leading-relaxed">
      The activation tree shows important lifetime relationships between activations:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>A parent's lifetime includes all its children's lifetimes</li>
      <li>Sibling lifetimes don't overlap (sequential calls)</li>
      <li>Ancestor-descendant activations have nested lifetimes</li>
      <li>Cousin activations may or may not overlap</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Lifetime Diagram (horizontal = time):

        main  |==============================================|
              |                                              |
         a    |    |======|                                  |
              |    |      |                                  |
         c    |    ||====||                                  |
              |                                              |
         b    |              |======|                        |
              |              |      |                        |
         c    |              ||====||                        |
              |              |      |                        |
         d    |              |  |==||                        |
              +---------------------------------------------------> time

Observations:
- main contains all other lifetimes
- a's c and b's c don't overlap
- In b: c happens before d`}
      </pre>
    </div>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications of Activation Trees</h2>

    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Debugging:</strong> Stack traces show the path from root to current node</li>
      <li><strong>Profiling:</strong> Counting activations helps identify performance issues</li>
      <li><strong>Memory Analysis:</strong> Maximum tree depth indicates maximum stack usage</li>
      <li><strong>Program Understanding:</strong> Visualizes execution flow</li>
      <li><strong>Compiler Optimization:</strong> Identifies tail recursion opportunities</li>
    </ul>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Stack Trace Example:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Error occurs in c() during execution

Exception in thread "main" NullPointerException
    at c(Program.java:15)
    at a(Program.java:8)
    at main(Program.java:3)

This stack trace IS the path from root to current node:
main -> a -> c

Activation Tree:
       main
         |
         a    <- called from main
         |
         c    <- error here!`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What does the path from root to current node in an activation tree represent?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) All procedures in the program</li>
      <li>(B) The control stack at that point</li>
      <li>(C) The heap memory layout</li>
      <li>(D) The static scope chain</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) The control stack at that point - The path shows all active procedure calls.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      In an activation tree, sibling nodes represent:
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Concurrent procedure calls</li>
      <li>(B) Sequential calls from the same parent</li>
      <li>(C) Nested procedure calls</li>
      <li>(D) Recursive calls</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Sequential calls from the same parent - Siblings are called one after another from the same procedure.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      For fib(5) using the naive recursive implementation, approximately how many nodes would the activation tree have?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) 5</li>
      <li>(B) 10</li>
      <li>(C) 15</li>
      <li>(D) 25</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (C) 15 - The number of nodes is 2*fib(n+1) - 1, which for n=5 gives 2*8 - 1 = 15.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Activation trees represent all procedure activations during program execution</li>
      <li>The root is main, children are called procedures</li>
      <li>The path from root to current node equals the control stack</li>
      <li>Recursive calls create chains or branching in the tree</li>
      <li>Tree depth indicates maximum stack usage</li>
      <li>Stack traces show the activation tree path at error time</li>
    </ul>

  </div>
);

export default ActivationTrees;
