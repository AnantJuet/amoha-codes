import React from "react";

const DFAMinimization: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      DFA Minimization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>DFA Minimization</strong> is the process of finding the smallest DFA (fewest states)
      that recognizes the same language as a given DFA. A minimized DFA leads to more efficient
      lexical analyzers with smaller transition tables.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Minimize?</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Smaller transition tables (less memory)</li>
      <li>Faster execution in some cases</li>
      <li>Canonical representation for comparison</li>
      <li>Subset construction may produce redundant states</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Distinguishable States</h2>
    <p className="leading-relaxed">
      Two states are <strong>distinguishable</strong> if there exists a string that leads one state
      to an accepting state and the other to a non-accepting state. States that are not distinguishable
      are <strong>equivalent</strong> and can be merged.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`States p and q are distinguishable if:
∃ string w such that:
  δ̂(p, w) ∈ F and δ̂(q, w) ∉ F, or
  δ̂(p, w) ∉ F and δ̂(q, w) ∈ F

Otherwise, p and q are equivalent (p ≡ q)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Minimization Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Hopcroft's Algorithm (Table-Filling Method):

1. Remove unreachable states
2. Create distinguishability table for all pairs (p, q)
3. Mark all pairs where one is accepting and one is not
4. Repeat until no change:
   For each unmarked pair (p, q):
     For each symbol a:
       If (δ(p,a), δ(q,a)) is marked:
         Mark (p, q)
5. Merge all unmarked pairs (equivalent states)
6. Build minimized DFA with merged states`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Minimization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Original DFA:
States: {A, B, C, D, E}
Alphabet: {0, 1}
Start: A
Accept: {C, E}

Transition Table:
┌───────┬───────┬───────┐
│ State │   0   │   1   │
├───────┼───────┼───────┤
│  →A   │   B   │   C   │
│   B   │   B   │   D   │
│  *C   │   B   │   C   │
│   D   │   B   │   E   │
│  *E   │   B   │   C   │
└───────┴───────┴───────┘

Step 1: Initial partition
  Accepting: {C, E}
  Non-accepting: {A, B, D}

Step 2: Build distinguishability table
  Initially mark pairs (accepting, non-accepting):
  (A,C) ✓, (A,E) ✓, (B,C) ✓, (B,E) ✓, (D,C) ✓, (D,E) ✓

Step 3: Check remaining pairs
  (A,B): δ(A,1)=C, δ(B,1)=D - (C,D) marked → mark (A,B)
  (A,D): δ(A,1)=C, δ(D,1)=E - (C,E) not marked, continue
  (B,D): δ(B,1)=D, δ(D,1)=E - (D,E) marked → mark (B,D)
  (C,E): δ(C,0)=B, δ(E,0)=B; δ(C,1)=C, δ(E,1)=C
         Same transitions → NOT marked (equivalent!)

Step 4: Merge C and E
  New state: {C,E}

Minimized DFA:
┌───────┬───────┬───────┐
│ State │   0   │   1   │
├───────┼───────┼───────┤
│  →A   │   B   │  CE   │
│   B   │   B   │   D   │
│  *CE  │   B   │  CE   │
│   D   │   B   │  CE   │
└───────┴───────┴───────┘

Reduced from 5 states to 4 states!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Partition Refinement</h2>
    <p className="leading-relaxed">
      An alternative view uses partition refinement. Start with two groups (accepting and
      non-accepting), then refine by splitting groups whose members have transitions to
      different groups.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Partition Refinement Algorithm:

1. Initial partition: P = {F, Q-F}
2. Repeat until P stops changing:
   For each group G in P:
     For each symbol a:
       Split G based on where δ(s,a) goes
       States going to same group stay together
3. Each final group becomes one DFA state`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Removing Unreachable States</h2>
    <p className="leading-relaxed">
      Before minimization, remove states that cannot be reached from the start state.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Finding reachable states:

Reachable = {q0}
WorkList = {q0}

while WorkList not empty:
  state = WorkList.pop()
  for each symbol a:
    target = δ(state, a)
    if target not in Reachable:
      add target to Reachable
      add target to WorkList

Remove all states not in Reachable`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Minimal DFA</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li><strong>Unique:</strong> Minimal DFA is unique up to renaming of states</li>
      <li><strong>No equivalent states:</strong> All states are distinguishable</li>
      <li><strong>All reachable:</strong> Every state reachable from start</li>
      <li><strong>Canonical form:</strong> Can be used to compare DFAs</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Minimization finds smallest equivalent DFA</li>
        <li>Equivalent states can be merged without changing the language</li>
        <li>Table-filling marks distinguishable state pairs</li>
        <li>Minimal DFA is unique (canonical form)</li>
        <li>Always remove unreachable states first</li>
      </ul>
    </div>
  </div>
);

export default DFAMinimization;
