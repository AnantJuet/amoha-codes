import React from "react";

const ActivationRecords: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    {/* ================= Activation Records ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Activation Records (Stack Frames)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An <strong>activation record</strong> (also called a <strong>stack frame</strong>) is a
      data structure that contains all the information needed to manage a single execution of a
      procedure. When a procedure is called, a new activation record is created on the runtime
      stack, and when the procedure returns, its activation record is destroyed. Activation
      records are fundamental to supporting procedure calls, recursion, and local variable storage.
    </p>

    {/* What is an Activation Record */}
    <h2 className="text-3xl font-bold mt-8">What is an Activation Record?</h2>
    <p className="leading-relaxed">
      Each time a procedure is invoked, a new activation record is created. This record contains:
    </p>

    <ul className="list-disc list-inside mt-2 space-y-1">
      <li>Space for local variables</li>
      <li>Parameters passed to the procedure</li>
      <li>Return address (where to continue after return)</li>
      <li>Saved registers</li>
      <li>Links to other activation records (access/control links)</li>
      <li>Space for return value</li>
      <li>Temporary values</li>
    </ul>

    {/* Structure of Activation Record */}
    <h2 className="text-3xl font-bold mt-8">Structure of an Activation Record</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Typical Activation Record Layout:

+----------------------------------+  Higher Addresses
|                                  |
|  Previous Activation Record      |
|  (Caller's Frame)                |
|                                  |
+----------------------------------+
|  Actual Parameters               |  <- Arguments passed by caller
|  (Arguments)                     |
+----------------------------------+
|  Return Address                  |  <- Where to return after call
+----------------------------------+
|  Control Link (Dynamic Link)     |  <- Points to caller's frame
+----------------------------------+
|  Access Link (Static Link)       |  <- Points to lexically enclosing scope
+----------------------------------+  <- Frame Pointer (FP) points here
|  Saved Registers                 |
+----------------------------------+
|  Local Variables                 |
+----------------------------------+
|  Temporary Values                |
+----------------------------------+  <- Stack Pointer (SP)

        Lower Addresses
        |
        v (Stack grows down)`}
      </pre>
    </div>

    {/* Components in Detail */}
    <h2 className="text-3xl font-bold mt-8">Activation Record Components</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Who Creates</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Actual Parameters</td>
            <td className="p-3 border">Values passed to the procedure</td>
            <td className="p-3 border">Caller</td>
          </tr>
          <tr>
            <td className="p-3 border">Return Address</td>
            <td className="p-3 border">Address of instruction after call</td>
            <td className="p-3 border">Caller/Hardware</td>
          </tr>
          <tr>
            <td className="p-3 border">Control Link</td>
            <td className="p-3 border">Pointer to caller's activation record</td>
            <td className="p-3 border">Callee</td>
          </tr>
          <tr>
            <td className="p-3 border">Access Link</td>
            <td className="p-3 border">Pointer to enclosing scope's record</td>
            <td className="p-3 border">Callee</td>
          </tr>
          <tr>
            <td className="p-3 border">Saved Registers</td>
            <td className="p-3 border">Preserved register values</td>
            <td className="p-3 border">Callee</td>
          </tr>
          <tr>
            <td className="p-3 border">Local Variables</td>
            <td className="p-3 border">Procedure's local data</td>
            <td className="p-3 border">Callee</td>
          </tr>
          <tr>
            <td className="p-3 border">Temporaries</td>
            <td className="p-3 border">Intermediate computation values</td>
            <td className="p-3 border">Callee</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Example: Function Call */}
    <h2 className="text-3xl font-bold mt-8">Example: Function Call Sequence</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">C Code:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int compute(int x, int y) {
    int result;
    int temp;

    temp = x * 2;
    result = temp + y;
    return result;
}

int main() {
    int a = 5;
    int b = 10;
    int c;

    c = compute(a, b);
    return 0;
}`}
      </pre>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Activation Records on Stack:</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`When inside compute():

+----------------------------------+
|  main's Activation Record        |
|  +----------------------------+  |
|  | Local: a = 5               |  |
|  | Local: b = 10              |  |
|  | Local: c = ?               |  |
|  +----------------------------+  |
+----------------------------------+
|  Parameters for compute:         |
|  | x = 5 (copy of a)          |  |
|  | y = 10 (copy of b)         |  |
+----------------------------------+
|  Return Address (to main)        |
+----------------------------------+
|  Saved Frame Pointer (main's FP) |  <- FP points here
+----------------------------------+
|  compute's Activation Record     |
|  +----------------------------+  |
|  | Local: result = ?          |  |
|  | Local: temp = ?            |  |
|  +----------------------------+  |
+----------------------------------+  <- SP`}
      </pre>
    </div>

    {/* Calling Sequence */}
    <h2 className="text-3xl font-bold mt-8">Calling Sequence</h2>
    <p className="leading-relaxed">
      The calling sequence is the series of steps taken when a procedure is called and when it returns:
    </p>

    <h3 className="text-2xl font-semibold mt-6">Call Sequence (Caller's Actions)</h3>
    <ol className="list-decimal list-inside mt-2 space-y-1">
      <li>Evaluate actual parameters</li>
      <li>Push parameters onto stack (or pass in registers)</li>
      <li>Save caller-saved registers (if needed)</li>
      <li>Execute CALL instruction (pushes return address)</li>
    </ol>

    <h3 className="text-2xl font-semibold mt-6">Prologue (Callee's Entry Actions)</h3>
    <ol className="list-decimal list-inside mt-2 space-y-1">
      <li>Push old frame pointer (save control link)</li>
      <li>Set new frame pointer to current stack pointer</li>
      <li>Allocate space for local variables (adjust SP)</li>
      <li>Save callee-saved registers</li>
      <li>Set up access link (if needed)</li>
    </ol>

    <h3 className="text-2xl font-semibold mt-6">Epilogue (Callee's Exit Actions)</h3>
    <ol className="list-decimal list-inside mt-2 space-y-1">
      <li>Place return value in designated location</li>
      <li>Restore callee-saved registers</li>
      <li>Restore stack pointer to frame pointer</li>
      <li>Restore old frame pointer</li>
      <li>Execute RET instruction</li>
    </ol>

    <h3 className="text-2xl font-semibold mt-6">Return Sequence (Caller's Actions)</h3>
    <ol className="list-decimal list-inside mt-2 space-y-1">
      <li>Retrieve return value</li>
      <li>Restore caller-saved registers</li>
      <li>Pop parameters from stack (if pushed)</li>
    </ol>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <p className="font-semibold mb-2">Assembly Example (x86-64):</p>
      <pre className="text-sm overflow-x-auto text-gray-900">
{`; Caller (main):
    mov edi, 5          ; First parameter
    mov esi, 10         ; Second parameter
    call compute        ; Call (pushes return address)
    ; Return value in eax

; Callee (compute):
compute:
    ; Prologue
    push rbp            ; Save old frame pointer
    mov rbp, rsp        ; Set new frame pointer
    sub rsp, 16         ; Allocate locals (result, temp)

    ; Function body
    mov eax, edi        ; temp = x
    add eax, eax        ; temp = x * 2
    mov [rbp-8], eax    ; Store temp
    add eax, esi        ; result = temp + y
    mov [rbp-4], eax    ; Store result

    ; Epilogue
    mov eax, [rbp-4]    ; Return value in eax
    mov rsp, rbp        ; Restore stack pointer
    pop rbp             ; Restore frame pointer
    ret                 ; Return to caller`}
      </pre>
    </div>

    {/* Variable Access */}
    <h2 className="text-3xl font-bold mt-8">Variable Access Using Frame Pointer</h2>
    <p className="leading-relaxed">
      Local variables and parameters are accessed using offsets from the frame pointer:
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stack Frame Layout with Offsets:

+---------------------------+
| Parameter 2 (y)           |  FP + 20
+---------------------------+
| Parameter 1 (x)           |  FP + 16
+---------------------------+
| Return Address            |  FP + 8
+---------------------------+
| Saved FP                  |  <- FP (0)
+---------------------------+
| Saved Registers           |  FP - 8
+---------------------------+
| Local: result             |  FP - 12
+---------------------------+
| Local: temp               |  FP - 16
+---------------------------+
| Temporaries               |  FP - 24
+---------------------------+  <- SP

Access Examples:
- Parameter x:    [FP + 16]
- Parameter y:    [FP + 20]
- Local result:   [FP - 12]
- Local temp:     [FP - 16]`}
      </pre>
    </div>

    {/* Control Link vs Access Link */}
    <h2 className="text-3xl font-bold mt-8">Control Link vs Access Link</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Control Link (Dynamic Link)</th>
            <th className="p-3 border">Access Link (Static Link)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Points to caller's activation record</td>
            <td className="p-3 border">Points to lexically enclosing scope's record</td>
          </tr>
          <tr>
            <td className="p-3 border">Follows call sequence</td>
            <td className="p-3 border">Follows static nesting</td>
          </tr>
          <tr>
            <td className="p-3 border">Used to restore FP on return</td>
            <td className="p-3 border">Used to access non-local variables</td>
          </tr>
          <tr>
            <td className="p-3 border">Always needed</td>
            <td className="p-3 border">Only for nested procedures</td>
          </tr>
          <tr>
            <td className="p-3 border">Same as saved FP</td>
            <td className="p-3 border">Separate field</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Activation Records for Recursion */}
    <h2 className="text-3xl font-bold mt-8">Activation Records and Recursion</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Call: factorial(4)

Stack with multiple activation records:

+---------------------------+
| factorial(4)              |
| n = 4                     |
| return addr -> caller     |
+---------------------------+
| factorial(3)              |
| n = 3                     |
| return addr -> fact(4)    |
+---------------------------+
| factorial(2)              |
| n = 2                     |
| return addr -> fact(3)    |
+---------------------------+
| factorial(1)              |
| n = 1                     |
| return addr -> fact(2)    |
+---------------------------+

Each recursive call has its OWN:
- Copy of parameter n
- Return address
- Frame pointer
- Local variables (if any)

This is why recursion works with stack allocation!`}
      </pre>
    </div>

    {/* Practice Questions */}
    <h2 className="text-3xl font-bold mt-10 border-b pb-2">
      Practice Questions
    </h2>

    <h3 className="text-2xl font-semibold mt-6">Question 1</h3>
    <p className="leading-relaxed">
      What information does the control link (dynamic link) store?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Return value</li>
      <li>(B) Pointer to caller's activation record</li>
      <li>(C) Pointer to lexically enclosing scope</li>
      <li>(D) Local variable values</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Pointer to caller's activation record - The control link points to the previous frame on the stack.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 2</h3>
    <p className="leading-relaxed">
      When is the prologue of a procedure executed?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Before the call instruction</li>
      <li>(B) At the beginning of the called procedure</li>
      <li>(C) Just before returning</li>
      <li>(D) After the procedure returns</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) At the beginning of the called procedure - The prologue sets up the new activation record.</p>

    <h3 className="text-2xl font-semibold mt-6">Question 3</h3>
    <p className="leading-relaxed">
      Which part of the calling sequence is responsible for pushing parameters?
    </p>
    <ul className="list-disc ml-6 mt-2">
      <li>(A) Callee's prologue</li>
      <li>(B) Caller's call sequence</li>
      <li>(C) Callee's epilogue</li>
      <li>(D) Caller's return sequence</li>
    </ul>
    <p className="mt-2"><strong>Answer:</strong> (B) Caller's call sequence - The caller evaluates and pushes parameters before the call.</p>

    {/* Key Takeaways */}
    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>Activation records contain all data for a single procedure execution</li>
      <li>Key components: parameters, return address, control link, local variables</li>
      <li>The calling sequence includes caller's actions, prologue, epilogue, and return sequence</li>
      <li>Frame pointer provides stable access to local variables and parameters</li>
      <li>Control link tracks the call chain, access link tracks lexical scope</li>
      <li>Each recursive call gets its own independent activation record</li>
    </ul>

  </div>
);

export default ActivationRecords;
