import React from "react";

const DynamicScope: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Dynamic Scoping ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dynamic Scoping
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Dynamic scoping</strong> is a scoping mechanism where the binding of a variable is
      determined by the runtime call sequence rather than the lexical structure of the source code.
      When a variable is referenced, the runtime system searches through the chain of currently
      active function calls to find the most recent binding. While less common than static scoping,
      dynamic scoping is used in some languages like early Lisps, Emacs Lisp, and Bash scripts.
    </p>

    {/* What is Dynamic Scoping */}
    <h2 className="text-3xl font-bold mt-8">What is Dynamic Scoping?</h2>
    <p className="leading-relaxed">
      In dynamic scoping, variable references are resolved at runtime based on the calling chain:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Variable binding depends on the sequence of function calls</li>
      <li>Search proceeds through the runtime stack of active functions</li>
      <li>The most recently bound variable with that name is used</li>
      <li>Cannot be determined by examining source code alone</li>
      <li>The same code can access different variables in different contexts</li>
    </ul>

    {/* Basic Example */}
    <h2 className="text-3xl font-bold mt-8">Basic Example</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Pseudocode with dynamic scoping

int x = 1;  // Global x

function foo() {
    print(x);  // Which x?
}

function bar() {
    int x = 2;  // bar's local x
    foo();      // Call foo from bar
}

function baz() {
    int x = 3;  // baz's local x
    foo();      // Call foo from baz
}

// Main execution
foo();   // Prints 1 (global x - no local x in call chain)
bar();   // Prints 2 (bar's x is most recent in call chain)
baz();   // Prints 3 (baz's x is most recent in call chain)

With STATIC scoping, foo() would always print 1
(it sees x from its lexical scope - global).

With DYNAMIC scoping, foo() prints different values
depending on who called it!`}
      </pre>
    </div>

    {/* How Dynamic Scoping Works */}
    <h2 className="text-3xl font-bold mt-8">How Dynamic Scoping Works</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Dynamic Scope Resolution:

When foo() is called by bar():

Call Stack:
+------------------+
| main             |
| x = 1 (global)   |
+------------------+
| bar              |
| x = 2 (local)    |  <- Most recent binding of x
+------------------+
| foo              |
| (no local x)     |  <- Looking for x
+------------------+

Search path: foo -> bar -> main
Found x = 2 in bar

When foo() is called by baz():

Call Stack:
+------------------+
| main             |
| x = 1 (global)   |
+------------------+
| baz              |
| x = 3 (local)    |  <- Most recent binding of x
+------------------+
| foo              |
| (no local x)     |  <- Looking for x
+------------------+

Search path: foo -> baz -> main
Found x = 3 in baz`}
      </pre>
    </div>

    {/* Deeper Example */}
    <h2 className="text-3xl font-bold mt-8">Deeper Example with Multiple Calls</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int x = 0;

function A() {
    int x = 1;
    B();
}

function B() {
    int x = 2;
    C();
}

function C() {
    print(x);  // Prints 2 (from B)
    D();
}

function D() {
    print(x);  // Prints 2 (still from B)
}

function E() {
    int x = 5;
    D();       // When called this way...
}

// Different call sequences:

A();   // Call chain: main->A->B->C, C prints 2, then C->D, D prints 2
E();   // Call chain: main->E->D, D prints 5 (E's x)

The same function D() prints different values
based on its call context!`}
      </pre>
    </div>

    {/* Implementation Strategies */}
    <h2 className="text-3xl font-bold mt-8">Implementation Strategies</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Deep Binding (Search Stack)</h3>
    <p className="leading-relaxed">
      Search through the call stack for the most recent binding:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Deep Binding Implementation:

lookup(variable_name):
    frame = current_frame
    while frame != null:
        if variable_name in frame.locals:
            return frame.locals[variable_name]
        frame = frame.caller  // Follow control links
    error("Undefined variable")

Cost: O(n) where n is call stack depth
Each variable access may search entire stack!`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Shallow Binding (Central Table)</h3>
    <p className="leading-relaxed">
      Maintain a global table with current binding for each variable name:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Shallow Binding Implementation:

Global binding table: { name -> (value, saved_bindings) }

On function entry with local x:
    save current binding of x
    update table: x -> new local value

On function exit:
    restore saved binding of x

Example:
Initial: x -> 0 (global)

A() called: x -> 1, save(0)
B() called: x -> 2, save(1)
C() called: (no local x)
    print(x)  // O(1) lookup: x = 2
B() returns: x -> 1, restore
A() returns: x -> 0, restore

Cost: O(1) access, but O(k) entry/exit
where k = number of local variables`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Static vs Dynamic Scoping</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Static Scoping</th>
            <th className="p-3 border">Dynamic Scoping</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Binding Determined</td>
            <td className="p-3 border">Compile time</td>
            <td className="p-3 border">Runtime</td>
          </tr>
          <tr>
            <td className="p-3 border">Based On</td>
            <td className="p-3 border">Lexical structure</td>
            <td className="p-3 border">Call sequence</td>
          </tr>
          <tr>
            <td className="p-3 border">Predictability</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Readability</td>
            <td className="p-3 border">Better</td>
            <td className="p-3 border">Worse</td>
          </tr>
          <tr>
            <td className="p-3 border">Debugging</td>
            <td className="p-3 border">Easier</td>
            <td className="p-3 border">Harder</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Less</td>
            <td className="p-3 border">More</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Languages Using Dynamic Scoping */}
    <h2 className="text-3xl font-bold mt-8">Languages Using Dynamic Scoping</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`1. Early Lisp (pre-Common Lisp)
   - All variables dynamically scoped
   - Later versions added lexical scoping

2. Emacs Lisp
   (defun foo () (print x))
   (defun bar ()
     (let ((x 42))
       (foo)))  ; foo sees x = 42

3. Bash/Shell Scripts
   x=1
   foo() { echo $x; }
   bar() { local x=2; foo; }
   bar  # Prints 2

4. Perl (with 'local')
   $x = 1;
   sub foo { print $x; }
   sub bar { local $x = 2; foo(); }
   bar();  # Prints 2

   # But 'my' uses lexical scoping
   sub baz { my $x = 3; foo(); }
   baz();  # Prints 1 (global x)`}
      </pre>
    </div>

    {/* Advantages and Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>

    <h3 className="text-2xl font-semibold mt-6">Advantages</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Flexibility:</strong> Functions can be parameterized by their calling context</li>
      <li><strong>Implicit Parameters:</strong> Pass information without explicit parameters</li>
      <li><strong>Configuration:</strong> Easy to override behavior in calling context</li>
      <li><strong>Simple Implementation:</strong> Just walk the stack</li>
    </ul>

    <h3 className="text-2xl font-semibold mt-6">Disadvantages</h3>
    <ul className="list-disc list-inside mt-2 space-y-1">
      <li><strong>Unpredictability:</strong> Same code may behave differently</li>
      <li><strong>Hard to Debug:</strong> Must trace call sequence to understand behavior</li>
      <li><strong>Accidental Capture:</strong> Local variables may unintentionally affect callees</li>
      <li><strong>No Compile-time Checking:</strong> Undefined variable errors at runtime</li>
      <li><strong>No Closures:</strong> Cannot capture defining environment</li>
    </ul>

    {/* Use Case Example */}
    <h2 className="text-3xl font-bold mt-8">Practical Use Case</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Dynamic scoping for configuration

int debug_level = 0;  // Global default

function log(message) {
    if (debug_level > 0) {
        print(message);
    }
}

function process_data() {
    log("Processing...");  // Uses current debug_level
    // ... processing code ...
    log("Done.");
}

function debug_mode() {
    int debug_level = 2;  // Override for this context
    process_data();       // Now log() sees debug_level = 2
}

function normal_mode() {
    process_data();       // log() sees debug_level = 0
}

// With dynamic scoping:
normal_mode();  // Quiet - no output
debug_mode();   // Verbose - logs printed

// This pattern is useful but dangerous!
// Better alternatives: explicit parameters or context objects`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int x = 1;
void A() { print(x); }
void B() { int x = 2; A(); }
void C() { int x = 3; B(); }`}
      </pre>
    </div>
    <p className="leading-relaxed mt-2">
      With dynamic scoping, what does C() print?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) 1</li>
      <li>(B) 2</li>
      <li>(C) 3</li>
      <li>(D) Error</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) 2 - A() is called by B(), and B has local x=2 which is the most recent binding.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      Which implementation strategy provides O(1) variable access in dynamic scoping?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Deep binding</li>
      <li>(B) Shallow binding</li>
      <li>(C) Access links</li>
      <li>(D) Display</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Shallow binding - It uses a central table for O(1) access, but has O(k) overhead on function entry/exit.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Why is dynamic scoping considered harder to debug?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Compilation takes longer</li>
      <li>(B) Variable bindings depend on runtime call sequence</li>
      <li>(C) Variables cannot be modified</li>
      <li>(D) Only global variables are allowed</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Variable bindings depend on runtime call sequence - You must trace execution to understand which binding is used.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Dynamic scoping resolves variables based on the runtime call chain</li>
      <li>The most recent binding in the call stack is used</li>
      <li>Same function can access different variables depending on caller</li>
      <li>Deep binding searches stack; shallow binding uses a central table</li>
      <li>Provides flexibility but reduces predictability and debuggability</li>
      <li>Used in Bash, early Lisp, and Emacs Lisp; rare in modern languages</li>
    </ul>

  </div>
);

export default DynamicScope;
