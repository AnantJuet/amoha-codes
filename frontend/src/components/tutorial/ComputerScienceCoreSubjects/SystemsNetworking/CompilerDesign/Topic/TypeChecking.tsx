import React from "react";

const TypeChecking: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Type Checking
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Type checking is the process of verifying that operations in a program are
      applied to operands of compatible types. It ensures type safety and catches
      type-related errors before program execution.
    </p>

    <h2 className="text-3xl font-bold mt-8">Type Checking Rules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
Common Type Checking Rules:

1. ASSIGNMENT RULE
   ─────────────────────────────────────
   x = expr
   Rule: type(expr) must be compatible with type(x)

   int x = 5;      ✓ OK
   int x = 3.14;   ✗ Error (float to int)

2. ARITHMETIC OPERATIONS
   ─────────────────────────────────────
   expr1 op expr2  (where op is +, -, *, /)
   Rule: Both operands must be numeric

   5 + 3           ✓ int + int = int
   5.0 + 3         ✓ float + int = float
   "a" + 5         ✗ Error (string + int)

3. COMPARISON OPERATIONS
   ─────────────────────────────────────
   expr1 relop expr2  (where relop is <, >, ==, etc.)
   Rule: Both must be comparable types
   Result: boolean

4. FUNCTION CALLS
   ─────────────────────────────────────
   f(arg1, arg2, ...)
   Rule: Number and types of args must match parameters
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Checking Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
function typeCheck(node):
    switch node.kind:

        case LITERAL:
            return node.type  // int, float, string, etc.

        case IDENTIFIER:
            return symbolTable.lookup(node.name).type

        case BINARY_OP:
            leftType = typeCheck(node.left)
            rightType = typeCheck(node.right)
            return checkBinaryOp(node.op, leftType, rightType)

        case ASSIGNMENT:
            varType = symbolTable.lookup(node.var).type
            exprType = typeCheck(node.expr)
            if not compatible(varType, exprType):
                error("Type mismatch")
            return varType

        case FUNCTION_CALL:
            funcType = symbolTable.lookup(node.func).type
            for each arg in node.args:
                argType = typeCheck(arg)
                if not compatible(funcType.params[i], argType):
                    error("Argument type mismatch")
            return funcType.returnType
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Coercion</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">From</th>
            <th className="p-3 border">To</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">int</td>
            <td className="p-3 border">float</td>
            <td className="p-3 border text-green-600">Widening</td>
            <td className="p-3 border font-mono text-gray-900">5 → 5.0</td>
          </tr>
          <tr>
            <td className="p-3 border">float</td>
            <td className="p-3 border">int</td>
            <td className="p-3 border text-red-600">Narrowing</td>
            <td className="p-3 border font-mono text-gray-900">5.7 → 5</td>
          </tr>
          <tr>
            <td className="p-3 border">char</td>
            <td className="p-3 border">int</td>
            <td className="p-3 border text-green-600">Widening</td>
            <td className="p-3 border font-mono text-gray-900">'A' → 65</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Type checking verifies type compatibility of operations</li>
        <li>Uses symbol table to look up variable types</li>
        <li>Traverses AST to check each expression</li>
        <li>Widening coercion is safe, narrowing may lose data</li>
        <li>Reports errors for incompatible type combinations</li>
      </ul>
    </div>
  </div>
);

export default TypeChecking;
