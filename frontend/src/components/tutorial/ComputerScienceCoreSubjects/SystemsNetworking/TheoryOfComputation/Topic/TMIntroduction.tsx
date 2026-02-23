import React from 'react';

const TMIntroduction: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Introduction to Turing Machines</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      A Turing Machine (TM) is the most powerful computational model, capable of computing anything that
      is computable. Invented by Alan Turing in 1936, it serves as the theoretical foundation for
      modern computers and the definition of computability.
    </p>
    <h2 className="text-3xl font-bold mt-8">What is a Turing Machine?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`A Turing Machine consists of:

1. An infinite tape divided into cells
   - Each cell holds one symbol
   - Tape extends infinitely in both directions
   - Initially contains input and blanks

2. A read/write head
   - Points to one cell at a time
   - Can read, write, and move left or right

3. A finite state control
   - Finite set of states
   - Determines actions based on current state and symbol

4. A transition function
   - Specifies: write symbol, move direction, next state`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Formal Definition</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`TM = (Q, Σ, Γ, δ, q0, B, F)

Where:
- Q: Finite set of states
- Σ: Input alphabet (Σ ⊆ Γ, B ∉ Σ)
- Γ: Tape alphabet
- δ: Q × Γ → Q × Γ × {L, R} (transition function)
- q0: Initial state
- B: Blank symbol (B ∈ Γ)
- F: Set of accepting/final states`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Why Study Turing Machines?</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li>Define what is computable (Church-Turing thesis)</li>
      <li>Foundation for complexity theory</li>
      <li>Model for all general-purpose computers</li>
      <li>Prove limits of computation (undecidability)</li>
      <li>Equivalent to all programming languages in power</li>
    </ul>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>TM = infinite tape + read/write head + finite control</li>
        <li>Most powerful computational model</li>
        <li>Defines the limits of computation</li>
        <li>Equivalent to modern computers in capability</li>
      </ul>
    </div>
  </div>
);
export default TMIntroduction;
