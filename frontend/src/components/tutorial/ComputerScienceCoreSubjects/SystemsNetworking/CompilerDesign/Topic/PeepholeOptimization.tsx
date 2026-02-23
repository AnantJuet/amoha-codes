import React from "react";

const PeepholeOptimization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Peephole Optimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Peephole optimization is a local optimization technique that examines a small
      sliding window (the "peephole") of instructions and replaces inefficient sequences
      with more efficient ones. It is typically applied to low-level intermediate code
      or target machine code.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Peephole Optimization?</h2>
    <p className="leading-relaxed">
      The peephole is a small, sliding window that moves over the code. The optimizer
      looks for patterns within this window and applies transformation rules to
      improve the code. The window size is typically 2-4 instructions.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Peephole Optimization Process:

Code Stream:
    +---+---+---+---+---+---+---+---+---+
    | I1| I2| I3| I4| I5| I6| I7| I8| I9|
    +---+---+---+---+---+---+---+---+---+
          ^       ^
          |_______|
           Peephole (sliding window)

1. Examine instructions in peephole
2. Match against known patterns
3. Replace with improved sequence
4. Slide window forward
5. Repeat until end of code`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Categories of Peephole Optimizations</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Redundant Load/Store Elimination</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before:
    MOV R1, a       ; Load a into R1
    MOV a, R1       ; Store R1 back to a (redundant!)

After:
    MOV R1, a       ; Only the load is needed

---

Before:
    MOV a, R1       ; Store R1 to a
    MOV R1, a       ; Load a into R1 (redundant!)

After:
    MOV a, R1       ; Only the store is needed`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Unreachable Code Elimination</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before:
    JMP L2          ; Unconditional jump
    MOV R1, 5       ; Unreachable!
    ADD R2, R1      ; Unreachable!
L2: ...

After:
    JMP L2
L2: ...`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Flow of Control Optimizations</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Jump to Jump:
    Before:             After:
    JMP L1              JMP L2
    ...                 ...
L1: JMP L2          L1: JMP L2
L2: ...             L2: ...

Jump Over Jump:
    Before:                     After:
    if a < b goto L1            if a >= b goto L2
    goto L2                 L1: ...
L1: ...

Jump to Return:
    Before:             After:
    JMP L1              RET
    ...                 ...
L1: RET             L1: RET`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Algebraic Simplification</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Identity Operations:
    ADD R1, 0       -->  (deleted)
    SUB R1, 0       -->  (deleted)
    MUL R1, 1       -->  (deleted)
    DIV R1, 1       -->  (deleted)

Strength Reduction:
    MUL R1, 2       -->  SHL R1, 1
    MUL R1, 4       -->  SHL R1, 2
    DIV R1, 2       -->  SHR R1, 1
    MOD R1, 2       -->  AND R1, 1

Null Sequences:
    PUSH R1
    POP R1          -->  (both deleted)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. Instruction Combination</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Before:
    MOV R1, a
    ADD R1, b
    MOV c, R1

After (if architecture supports):
    ADD c, a, b     ; Three-address instruction

---

Before:
    INC R1
    INC R1
    INC R1

After:
    ADD R1, 3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Peephole Optimization Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Pattern</th>
            <th className="p-3 border">Replacement</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Redundant Load</td>
            <td className="p-3 border font-mono text-gray-900">MOV a,R; MOV R,a</td>
            <td className="p-3 border font-mono text-gray-900">MOV a,R</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Jump Chain</td>
            <td className="p-3 border font-mono text-gray-900">JMP L1; L1:JMP L2</td>
            <td className="p-3 border font-mono text-gray-900">JMP L2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Identity</td>
            <td className="p-3 border font-mono text-gray-900">ADD R,0</td>
            <td className="p-3 border font-mono text-gray-900">(remove)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Strength</td>
            <td className="p-3 border font-mono text-gray-900">MUL R,2</td>
            <td className="p-3 border font-mono text-gray-900">SHL R,1</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Null Sequence</td>
            <td className="p-3 border font-mono text-gray-900">PUSH R; POP R</td>
            <td className="p-3 border font-mono text-gray-900">(remove both)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Approach</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Pattern Matching Implementation:

rules = [
    (["MOV %r, %a", "MOV %a, %r"], ["MOV %r, %a"]),
    (["JMP %L1"], check_and_optimize_jump),
    (["ADD %r, 0"], []),  // Delete
    (["MUL %r, 2"], ["SHL %r, 1"]),
    ...
]

function peephole_optimize(code):
    changed = true
    while changed:
        changed = false
        for i in range(len(code) - window_size):
            window = code[i:i+window_size]
            for pattern, replacement in rules:
                if matches(window, pattern):
                    code[i:i+len(pattern)] = replacement
                    changed = true
                    break
    return code`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Limitations</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Advantages</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Simple to implement</li>
          <li>Low compile-time overhead</li>
          <li>Machine-specific tuning</li>
          <li>Catches code generator artifacts</li>
          <li>Easy to add new patterns</li>
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Limitations</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>Limited scope (small window)</li>
          <li>Cannot see global patterns</li>
          <li>Order of rules matters</li>
          <li>May require multiple passes</li>
          <li>Pattern explosion risk</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Peephole optimization uses a small sliding window over code</li>
        <li>Matches patterns and replaces with optimized sequences</li>
        <li>Applied to low-level code after code generation</li>
        <li>Categories: redundant operations, control flow, algebraic, instruction combining</li>
        <li>Simple, fast, and effective for catching local inefficiencies</li>
        <li>Multiple passes may be needed as optimizations enable others</li>
      </ul>
    </div>
  </div>
);

export default PeepholeOptimization;
