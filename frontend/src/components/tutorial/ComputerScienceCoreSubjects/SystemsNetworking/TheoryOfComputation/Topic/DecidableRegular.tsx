import React from 'react';

const DecidableRegular: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Decidability of Regular Language Problems</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>
    <p className="text-lg leading-relaxed">
      Regular languages have many nice decidability properties. Almost all interesting problems about
      regular languages are decidable, making them practical for applications like pattern matching,
      lexical analysis, and protocol verification.
    </p>
    <h2 className="text-3xl font-bold mt-8">Decidable Problems for Regular Languages</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Membership: Is w ∈ L?
   Algorithm: Simulate DFA on w
   Complexity: O(|w|)

2. Emptiness: Is L = ∅?
   Algorithm: BFS/DFS from start state
   Check if any accepting state is reachable
   Complexity: O(|Q| + |δ|)

3. Finiteness: Is L finite?
   Algorithm: Check for cycles on paths to accepting states
   L is infinite iff there's a cycle reachable from start
   that can reach an accepting state
   Complexity: O(|Q| + |δ|)

4. Universality: Is L = Σ*?
   Algorithm: Check if L' = ∅
   Construct complement DFA, test emptiness
   Complexity: O(|Q| + |δ|)

5. Equivalence: Is L1 = L2?
   Algorithm: Check if (L1 - L2) ∪ (L2 - L1) = ∅
   Or minimize both DFAs and compare
   Complexity: O(|Q1| × |Q2|) or O(n log n) with minimization`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Algorithms in Detail</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Membership Testing:
  Input: DFA M = (Q, Σ, δ, q0, F), string w
  Algorithm:
    state = q0
    for each symbol a in w:
      state = δ(state, a)
    return (state ∈ F)

Emptiness Testing:
  Input: DFA M = (Q, Σ, δ, q0, F)
  Algorithm:
    marked = {q0}
    worklist = [q0]
    while worklist not empty:
      q = worklist.pop()
      if q ∈ F: return "Not empty"
      for each a ∈ Σ:
        p = δ(q, a)
        if p not in marked:
          marked.add(p)
          worklist.append(p)
    return "Empty"`}</pre>
    </div>
    <h2 className="text-3xl font-bold mt-8">Additional Decidable Problems</h2>
    <ul className="list-disc list-inside space-y-2 ml-4">
      <li><strong>Subset:</strong> Is L1 ⊆ L2? Check if L1 ∩ L2' = ∅</li>
      <li><strong>Disjointness:</strong> Is L1 ∩ L2 = ∅? Construct product DFA</li>
      <li><strong>Minimality:</strong> Is DFA minimal? Run minimization algorithm</li>
      <li><strong>String generation:</strong> Generate all strings up to length n</li>
    </ul>
    <h2 className="text-3xl font-bold mt-8">Why So Decidable?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Regular languages are decidable because:

1. Finite representation: DFA has finite states
2. Closure: Closed under all Boolean operations
3. Determinism: DFA always halts
4. Complementation: Easy to complement DFA
5. Decidable emptiness: Can check all states

Compare to CFLs and TMs where many problems become undecidable!`}</pre>
    </div>
    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Most problems about regular languages are decidable</li>
        <li>Membership: O(n), Emptiness: O(states)</li>
        <li>Equivalence: decidable via symmetric difference</li>
        <li>Decidability comes from finite state representation</li>
      </ul>
    </div>
  </div>
);
export default DecidableRegular;
