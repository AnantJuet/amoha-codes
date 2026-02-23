import React from "react";

const ProcedureTranslation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Translating Procedure Calls
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Procedure (function) calls require generating intermediate code that handles parameter
      passing, control transfer, and return value management. This involves setting up
      activation records, passing arguments using the appropriate convention, invoking
      the procedure, and handling the return.
    </p>

    <h2 className="text-3xl font-bold mt-8">Procedure Call Steps</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Caller's Responsibilities:
1. Evaluate each argument expression
2. Pass arguments to the callee
3. Save caller-saved registers (if any)
4. Transfer control to the procedure
5. Retrieve return value (if any)
6. Continue after call

Callee's Responsibilities:
1. Save callee-saved registers
2. Allocate local variables
3. Execute procedure body
4. Compute return value
5. Restore saved registers
6. Deallocate locals
7. Return control to caller


Three-Address Code Instructions:
    param x       ; Push parameter x
    call p, n     ; Call procedure p with n arguments
    y = call p, n ; Call and store return value in y
    return        ; Return (no value)
    return x      ; Return with value x`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Simple Procedure Call Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar:
S → call id ( Elist )
S → id = call id ( Elist )
Elist → Elist , E
Elist → E

Semantic Actions:

S → call id ( Elist )
    { for each param p in Elist.queue do
          emit("param" p);
      emit("call" id.name "," Elist.count); }

S → id = call id ( Elist )
    { for each param p in Elist.queue do
          emit("param" p);
      emit(id.name "=" "call" id.name "," Elist.count); }

Elist → Elist1 , E
    { Elist.queue = append(Elist1.queue, E.place);
      Elist.count = Elist1.count + 1; }

Elist → E
    { Elist.queue = makelist(E.place);
      Elist.count = 1; }


Example: result = func(a, b+c, 5)

Generated Code:
    t1 = b + c            ; Evaluate second argument
    param a               ; Pass first argument
    param t1              ; Pass second argument
    param 5               ; Pass third argument
    result = call func, 3 ; Call with 3 arguments`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Parameter Passing Mechanisms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Mechanism</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">IR Code</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Call by Value</td>
            <td className="p-3 border">Copy value to callee</td>
            <td className="p-3 border font-mono text-gray-900">param x</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Call by Reference</td>
            <td className="p-3 border">Pass address of variable</td>
            <td className="p-3 border font-mono text-gray-900">param &x</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Call by Value-Result</td>
            <td className="p-3 border">Copy in, copy out</td>
            <td className="p-3 border font-mono text-gray-900">param x (copy back on return)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Call by Name</td>
            <td className="p-3 border">Pass expression (thunk)</td>
            <td className="p-3 border font-mono text-gray-900">param thunk_for_x</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Call by Reference Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source (C++):
    void swap(int& a, int& b) {
        int temp = a;
        a = b;
        b = temp;
    }

    void main() {
        int x = 1, y = 2;
        swap(x, y);
    }

Caller (main) Generated Code:
    x = 1
    y = 2
    param &x           ; Pass address of x
    param &y           ; Pass address of y
    call swap, 2

Callee (swap) Generated Code:
swap:
    ; a and b are pointers to caller's x and y
    t1 = *a            ; temp = a (dereference)
    *a = *b            ; a = b
    *b = t1            ; b = temp
    return

Alternative representation:
swap:
    ; Formal parameters: a_addr, b_addr
    t1 = a_addr[0]     ; Load value at address a
    t2 = b_addr[0]     ; Load value at address b
    a_addr[0] = t2     ; Store b's value at a
    b_addr[0] = t1     ; Store temp at b
    return`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Procedure Definition Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar:
D → proc id ( Params ) S end

Translation includes:
1. Label for entry point
2. Parameter binding
3. Local variable allocation
4. Body translation
5. Return instruction

Source:
    proc factorial(n) {
        if (n <= 1) return 1;
        return n * factorial(n-1);
    }

Generated Code:
factorial:
    ; Entry point
    ; n is in first parameter slot

    if n > 1 goto L1
    return 1
L1:
    t1 = n - 1
    param t1
    t2 = call factorial, 1
    t3 = n * t2
    return t3


With explicit activation record access:
factorial:
    ; Assume parameters at fp+8, locals at fp-4
    t1 = fp[8]         ; Load n
    if t1 > 1 goto L1
    return 1
L1:
    t2 = t1 - 1
    param t2
    t3 = call factorial, 1
    t4 = t1 * t3       ; n * factorial(n-1)
    return t4`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Nested Procedures and Static Links</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source (Pascal-like with nested procedures):
    procedure outer;
        var x: integer;
        procedure inner;
            begin
                x := x + 1;  { Access outer's x }
            end;
        begin
            x := 0;
            inner();
        end;

Problem: inner() needs to access outer's variable x
Solution: Static link (access link) to enclosing scope

Generated Code:

outer:
    ; Allocate activation record
    push fp
    fp = sp
    sp = sp - 4        ; Space for x (at fp-4)

    fp[-4] = 0         ; x := 0

    ; Call inner with static link
    param fp           ; Pass current fp as static link
    call inner, 0      ; inner has 0 regular params

    sp = fp
    pop fp
    return

inner:
    ; Static link is first "hidden" parameter
    push fp
    fp = sp

    t1 = fp[8]         ; Get static link (outer's fp)
    t2 = t1[-4]        ; Access outer's x via static link
    t2 = t2 + 1
    t1[-4] = t2        ; Store back to outer's x

    sp = fp
    pop fp
    return`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Function Calls with Return Values</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source:
    int max(int a, int b) {
        if (a > b) return a;
        else return b;
    }

    int main() {
        int x = max(10, 20);
    }

Generated Code for max:
max:
    ; a at offset 8, b at offset 12 from fp
    t1 = fp[8]
    t2 = fp[12]
    if t1 > t2 goto L1
    return t2          ; return b
L1:
    return t1          ; return a

Generated Code for main:
main:
    param 10
    param 20
    t1 = call max, 2   ; Return value in t1
    x = t1


Expression with multiple function calls:
    y = f(a) + g(b) * h(c)

Generated Code:
    param a
    t1 = call f, 1     ; f(a)
    param b
    t2 = call g, 1     ; g(b)
    param c
    t3 = call h, 1     ; h(c)
    t4 = t2 * t3       ; g(b) * h(c)
    t5 = t1 + t4       ; f(a) + ...
    y = t5`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Quadruple Representation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source: result = add(x, y)

Three-Address Code:
    param x
    param y
    result = call add, 2

Quadruple Representation:
+---+--------+--------+------+--------+
| # |   op   |  arg1  | arg2 | result |
+---+--------+--------+------+--------+
| 0 | param  |   x    |  -   |   -    |
| 1 | param  |   y    |  -   |   -    |
| 2 | call   |  add   |  2   | result |
+---+--------+--------+------+--------+


Source: z = f(a, g(b, c))

Three-Address Code:
    param b
    param c
    t1 = call g, 2     ; Inner call first
    param a
    param t1
    z = call f, 2

Quadruples:
+---+--------+--------+------+--------+
| # |   op   |  arg1  | arg2 | result |
+---+--------+--------+------+--------+
| 0 | param  |   b    |  -   |   -    |
| 1 | param  |   c    |  -   |   -    |
| 2 | call   |   g    |  2   |   t1   |
| 3 | param  |   a    |  -   |   -    |
| 4 | param  |  t1    |  -   |   -    |
| 5 | call   |   f    |  2   |   z    |
+---+--------+--------+------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C++ Implementation

struct Param {
    string name;
    bool byReference;
};

void translateCall(string funcName, vector<string> args, string resultVar) {
    // Generate parameter passing code
    for (int i = 0; i < args.size(); i++) {
        Param formalParam = symbolTable.getParam(funcName, i);

        if (formalParam.byReference) {
            // Pass address
            emit("param &" + args[i]);
        } else {
            // Pass value
            emit("param " + args[i]);
        }
    }

    // Generate call instruction
    if (resultVar.empty()) {
        emit("call " + funcName + ", " + to_string(args.size()));
    } else {
        emit(resultVar + " = call " + funcName + ", " +
             to_string(args.size()));
    }
}

void translateProcDef(string procName, vector<Param> params,
                      ASTNode* body) {
    // Emit entry label
    emit(procName + ":");

    // Create activation record (prologue)
    emit("push fp");
    emit("fp = sp");

    // Allocate space for locals
    int localSize = symbolTable.getLocalSize(procName);
    if (localSize > 0) {
        emit("sp = sp - " + to_string(localSize));
    }

    // Translate body
    translateStmt(body, "");

    // Generate epilogue if not already returned
    emit("sp = fp");
    emit("pop fp");
    emit("return");
}

void translateReturn(ASTNode* expr) {
    if (expr != nullptr) {
        string val = translateExpr(expr);
        emit("return " + val);
    } else {
        emit("return");
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>param x pushes argument onto parameter area</li>
        <li>call p, n invokes procedure p with n arguments</li>
        <li>y = call p, n captures return value in y</li>
        <li>return x returns value x to caller</li>
        <li>Arguments evaluated left-to-right, pushed in order</li>
        <li>Call by reference passes address (&x)</li>
        <li>Nested procedures need static links for scope access</li>
        <li>Recursive calls work naturally with activation records</li>
        <li>Return values typically in designated register or stack location</li>
        <li>Caller saves what it needs, callee saves what it uses</li>
      </ul>
    </div>
  </div>
);

export default ProcedureTranslation;
