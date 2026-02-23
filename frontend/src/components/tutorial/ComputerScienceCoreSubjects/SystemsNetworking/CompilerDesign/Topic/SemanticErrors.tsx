import React from "react";

const SemanticErrors: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Semantic Errors in Compilers
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Semantic Errors occur when a program is syntactically correct but violates the
      semantic rules of the language. Unlike syntax errors which are detected during
      parsing, semantic errors are caught during the semantic analysis phase when
      the compiler checks for type consistency, proper declarations, and other
      language-specific rules that go beyond grammar.
    </p>

    <h2 className="text-3xl font-bold mt-8">Categories of Semantic Errors</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Type Errors</td>
            <td className="p-3 border">Type mismatch in operations</td>
            <td className="p-3 border font-mono text-gray-900">int x = "hello";</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Declaration Errors</td>
            <td className="p-3 border">Undeclared or duplicate identifiers</td>
            <td className="p-3 border font-mono text-gray-900">y = 5; // y not declared</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scope Errors</td>
            <td className="p-3 border">Accessing out-of-scope variables</td>
            <td className="p-3 border font-mono text-gray-900">Using local var outside function</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Control Flow Errors</td>
            <td className="p-3 border">Invalid control statements</td>
            <td className="p-3 border font-mono text-gray-900">break outside loop</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Function Errors</td>
            <td className="p-3 border">Wrong arguments, missing return</td>
            <td className="p-3 border font-mono text-gray-900">func(1, 2) when func takes 3</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Errors</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Type Errors - Most Common Semantic Errors:

1. Type Mismatch in Assignment
   int x = "hello";
   // Error: Cannot assign string to int

2. Incompatible Operand Types
   int a = 5;
   string b = "test";
   int c = a + b;
   // Error: Cannot add int and string

3. Wrong Return Type
   int getValue() {
       return "hello";  // Error: Expected int, got string
   }

4. Array Type Mismatch
   int[] arr = new float[10];
   // Error: Incompatible array types

5. Pointer Type Mismatch
   int* p;
   float f = 3.14;
   p = &f;  // Error: Cannot assign float* to int*

6. Function Pointer Mismatch
   int (*fp)(int);
   float func(double d) { return d; }
   fp = func;  // Error: Incompatible function types

7. Generic/Template Type Errors
   List<String> list = new ArrayList<Integer>();
   // Error: Type parameter mismatch`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Declaration and Scope Errors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Declaration Errors:

1. Undeclared Variable
   x = 10;  // Error: 'x' is not declared
   print(y); // Error: 'y' is not declared

2. Duplicate Declaration
   int x = 5;
   int x = 10;  // Error: 'x' already declared in this scope

3. Use Before Declaration
   print(x);  // Error: 'x' used before declaration
   int x = 5;

4. Undeclared Function
   result = calculate(5);
   // Error: 'calculate' is not declared

Scope Errors:

5. Accessing Out-of-Scope Variable
   void func() {
       int local = 10;
   }
   print(local);  // Error: 'local' not in scope

6. Shadowing Warning (not always error)
   int x = 5;
   void func() {
       int x = 10;  // Warning: shadows outer 'x'
   }

7. Forward Reference Without Declaration
   void foo() {
       bar();  // Error if bar() not declared before
   }
   void bar() { }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Function-Related Semantic Errors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Function Semantic Errors:

1. Wrong Number of Arguments
   void func(int a, int b, int c) { }
   func(1, 2);  // Error: Expected 3 arguments, got 2

2. Wrong Argument Types
   void process(int x, float y) { }
   process("hello", 3.14);
   // Error: Argument 1 expected int, got string

3. Missing Return Statement
   int getValue() {
       int x = 10;
       // Error: Missing return statement
   }

4. Returning Value from Void Function
   void doSomething() {
       return 42;  // Error: void function cannot return value
   }

5. Calling Non-Function as Function
   int x = 5;
   x(10);  // Error: 'x' is not a function

6. Recursive Call Without Base Case (Warning)
   int factorial(int n) {
       return n * factorial(n-1);
       // Warning: May infinite recurse
   }

7. Pure Virtual Function Not Implemented
   class Base { virtual void func() = 0; }
   class Derived : Base { }
   Derived d;  // Error: Cannot instantiate abstract class`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Flow Semantic Errors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Control Flow Errors:

1. Break Outside Loop/Switch
   int x = 5;
   if (x > 0)
       break;  // Error: break outside loop or switch

2. Continue Outside Loop
   int x = 5;
   continue;  // Error: continue outside loop

3. Case Outside Switch
   case 1:    // Error: case label outside switch
       x = 1;

4. Duplicate Case Labels
   switch(x) {
       case 1: a = 1; break;
       case 1: b = 2; break;  // Error: Duplicate case
   }

5. Default Outside Switch
   default:   // Error: default outside switch
       x = 0;

6. Unreachable Code
   return 5;
   x = 10;   // Warning/Error: Unreachable code

7. Missing Break in Switch (Warning)
   switch(x) {
       case 1: a = 1;  // Warning: Fallthrough
       case 2: b = 2; break;
   }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Class and Object Semantic Errors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Object-Oriented Semantic Errors:

1. Accessing Private Member
   class MyClass {
       private int x;
   }
   MyClass obj;
   obj.x = 5;  // Error: 'x' is private

2. Missing Required Override
   class Base {
       abstract void doWork();
   }
   class Derived extends Base {
       // Error: Must implement doWork()
   }

3. Invalid Override
   class Base {
       void func(int x) { }
   }
   class Derived extends Base {
       int func(int x) { return x; }
       // Error: Return type mismatch in override
   }

4. Static Member Access on Instance
   class MyClass {
       static int count;
   }
   MyClass obj;
   obj.count = 5;  // Warning: Should use MyClass.count

5. This in Static Context
   class MyClass {
       static void func() {
           this.x = 5;  // Error: 'this' in static context
       }
   }

6. Circular Inheritance
   class A extends B { }
   class B extends A { }  // Error: Circular inheritance

7. Instantiating Abstract Class
   abstract class Shape { }
   Shape s = new Shape();  // Error: Cannot instantiate`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Detection Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Semantic Error Detection in Compiler:

class SemanticAnalyzer {
    List<SemanticError> errors;
    SymbolTable symbolTable;

    // Check variable declaration
    void checkVarDecl(VarDeclNode node) {
        if (symbolTable.lookupLocal(node.name)) {
            error(node.line, "Duplicate declaration: " + node.name);
        }
        symbolTable.insert(node.name, node.type);
    }

    // Check variable usage
    void checkVarRef(VarRefNode node) {
        Symbol sym = symbolTable.lookup(node.name);
        if (sym == null) {
            error(node.line, "Undeclared variable: " + node.name);
            node.type = TypeError;  // Prevent cascade
        } else {
            node.type = sym.type;
        }
    }

    // Check assignment type compatibility
    void checkAssignment(AssignNode node) {
        Type lhsType = node.lhs.type;
        Type rhsType = node.rhs.type;

        if (!isAssignable(lhsType, rhsType)) {
            error(node.line,
                "Cannot assign " + rhsType + " to " + lhsType);
        }
    }

    // Check function call
    void checkFuncCall(CallNode node) {
        Symbol func = symbolTable.lookup(node.name);
        if (func == null) {
            error(node.line, "Undefined function: " + node.name);
            return;
        }
        if (func.kind != FUNCTION) {
            error(node.line, node.name + " is not a function");
            return;
        }
        if (node.args.size() != func.params.size()) {
            error(node.line, "Wrong number of arguments");
        }
        // Check each argument type...
    }

    void error(int line, string message) {
        errors.add(new SemanticError(line, message));
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Error Recovery Strategies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Strategy</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Type Inference</td>
            <td className="p-3 border">Assume type and continue</td>
            <td className="p-3 border">Undeclared var treated as int</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error Type</td>
            <td className="p-3 border">Assign special error type</td>
            <td className="p-3 border">Prevents cascade errors</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Skip Analysis</td>
            <td className="p-3 border">Skip subtree after error</td>
            <td className="p-3 border">Move to next statement</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Auto-Declaration</td>
            <td className="p-3 border">Implicitly declare undeclared</td>
            <td className="p-3 border">Add to symbol table</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Error Messages</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`High-Quality Semantic Error Messages:

Error: line 15, column 10
  Type mismatch: cannot assign 'string' to variable 'count' of type 'int'
  |   count = "hello";
  |           ^~~~~~~

Error: line 23, column 5
  Undefined variable 'result'. Did you mean 'results'?
  |   print(result);
  |         ^~~~~~

Error: line 42, column 12
  Function 'calculate' expects 3 arguments, but 2 were provided
  |   x = calculate(a, b);
  |                ^~~~~~
  Note: Function declared at line 10:
  |   int calculate(int x, int y, int z)

Error: line 58, column 8
  Cannot access private member 'secretKey' of class 'Config'
  |   key = config.secretKey;
  |         ^~~~~~~~~~~~~~~~
  Note: Consider using getSecretKey() method

Warning: line 75, column 4
  Variable 'temp' declared but never used
  |   int temp = 5;
  |       ^~~~`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Semantic errors are detected after successful parsing during semantic analysis</li>
        <li>Type errors are the most common: mismatch in assignments, operations, returns</li>
        <li>Declaration errors include undeclared identifiers and duplicates</li>
        <li>Scope errors involve accessing variables outside their valid region</li>
        <li>Function errors include wrong argument count/types and missing returns</li>
        <li>Control flow errors involve break/continue/case outside valid context</li>
        <li>Error recovery prevents cascade errors and improves user experience</li>
        <li>Good error messages include location, context, and suggestions</li>
      </ul>
    </div>
  </div>
);

export default SemanticErrors;
