import React from "react";

const NFAtoDFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      NFA to DFA Conversion
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Subset Construction</strong> (also called the powerset construction) is the algorithm
      used to convert a Non-deterministic Finite Automaton (NFA) into an equivalent Deterministic
      Finite Automaton (DFA). The resulting DFA recognizes exactly the same language as the NFA.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Idea</h2>
    <p className="leading-relaxed">
      Each state in the DFA corresponds to a <strong>set of NFA states</strong>. The DFA simulates
      all possible paths through the NFA simultaneously by tracking which NFA states could be
      active after reading each input symbol.
    </p>

    <h2 className="text-3xl font-bold mt-8">Algorithm: Subset Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Subset Construction Algorithm:

Input: NFA N = (Q, Σ, δ, q0, F)
Output: DFA D = (Q', Σ, δ', q0', F')

1. q0' = ε-closure({q0})
2. Q' = {q0'}
3. WorkList = {q0'}
4. while WorkList is not empty:
5.     Remove a state S from WorkList
6.     for each symbol a in Σ:
7.         T = ε-closure(move(S, a))
8.         if T is not in Q':
9.             Add T to Q'
10.            Add T to WorkList
11.        δ'(S, a) = T
12. F' = {S ∈ Q' | S ∩ F ≠ ∅}

Helper functions:
• ε-closure(S): All states reachable from S via ε-transitions
• move(S, a): All states reachable from S on input a`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example Conversion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`NFA for (a|b)*abb:

States: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
Start: 0, Accept: {10}

NFA Transitions:
0 --ε--> 1, 7
1 --ε--> 2, 4
2 --a--> 3
3 --ε--> 6
4 --b--> 5
5 --ε--> 6
6 --ε--> 1, 7
7 --a--> 8
8 --b--> 9
9 --b--> 10

Step-by-step conversion:

Step 1: Start state
A = ε-closure({0}) = {0, 1, 2, 4, 7}

Step 2: Compute transitions from A
move(A, a) = {3, 8}
ε-closure({3, 8}) = {1, 2, 3, 4, 6, 7, 8} = B

move(A, b) = {5}
ε-closure({5}) = {1, 2, 4, 5, 6, 7} = C

Step 3: Continue for B and C...

Resulting DFA:
┌───────────────────────┬───────────┬───────────┐
│ DFA State             │     a     │     b     │
├───────────────────────┼───────────┼───────────┤
│ A = {0,1,2,4,7}      │     B     │     C     │
│ B = {1,2,3,4,6,7,8}  │     B     │     D     │
│ C = {1,2,4,5,6,7}    │     B     │     C     │
│ D = {1,2,4,5,6,7,9}  │     B     │     E     │
│*E = {1,2,4,5,6,7,10} │     B     │     C     │
└───────────────────────┴───────────┴───────────┘
* = accepting state (contains NFA state 10)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Computing ε-closure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ε-closure Algorithm:

function ε-closure(T):
    Stack = all states in T
    Result = T

    while Stack is not empty:
        t = Stack.pop()
        for each state u with ε-transition from t to u:
            if u not in Result:
                Result = Result ∪ {u}
                Stack.push(u)

    return Result

Example:
Given: 0 --ε--> 1 --ε--> 2

ε-closure({0}):
  Start: Result = {0}, Stack = [0]
  Pop 0: Found ε to 1, Result = {0,1}, Stack = [1]
  Pop 1: Found ε to 2, Result = {0,1,2}, Stack = [2]
  Pop 2: No ε-transitions, Stack empty
  Return {0, 1, 2}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Computing move()</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`move Function:

function move(S, a):
    Result = ∅
    for each state s in S:
        for each state t where δ(s, a) = t:
            Result = Result ∪ {t}
    return Result

Note: move() returns states reachable on symbol a only,
NOT including ε-transitions after.
The ε-closure is applied separately after move().`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">State Complexity</h2>
    <p className="leading-relaxed">
      In the worst case, an NFA with n states can produce a DFA with up to 2ⁿ states. However,
      in practice, most of these states are unreachable and the actual number is much smaller.
    </p>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Worst Case Example:</strong> An NFA for "strings where nth symbol from end is 'a'"
        requires O(2ⁿ) DFA states. Most practical patterns don't exhibit this exponential blowup.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Accepting States</h2>
    <p className="leading-relaxed">
      A DFA state is accepting if it contains <em>at least one</em> NFA accepting state.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`DFA accepting states:
F' = { S ∈ Q' | S ∩ F_NFA ≠ ∅ }

Example: If NFA accepting state is 10
DFA state {1, 2, 4, 5, 6, 7, 10} is accepting
because it contains NFA state 10`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Subset construction converts NFA to equivalent DFA</li>
        <li>Each DFA state represents a set of NFA states</li>
        <li>ε-closure computes states reachable via ε-transitions</li>
        <li>move() computes states reachable on an input symbol</li>
        <li>Worst case: 2ⁿ DFA states for n NFA states</li>
      </ul>
    </div>
  </div>
);

export default NFAtoDFA;
