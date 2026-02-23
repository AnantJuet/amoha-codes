import React from 'react';

const REtoFA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Converting Regular Expressions to Finite Automata</h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Every regular expression can be converted to an equivalent finite automaton using Thompson's Construction algorithm.
      This conversion is fundamental to compiler design, where regular expressions specify tokens and NFAs perform lexical analysis.
    </p>

    <h2 className="text-3xl font-bold mt-8">Thompson's Construction</h2>
    <p className="leading-relaxed">
      Thompson's Construction builds an NFA with epsilon transitions (e-NFA) from a regular expression in a systematic,
      recursive manner. Each sub-expression is converted to a small NFA, and these are combined using the RE operators.
    </p>

    <h2 className="text-3xl font-bold mt-8">Base Cases</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`1. Empty Set (empty):
   No accepting path exists.

   -->( q0 )          (q0 is not accepting)

2. Epsilon (epsilon):
   Accepts only the empty string.

   -->( q0 )--epsilon-->(( q1 ))

3. Single Symbol (a):
   Accepts only the string "a".

   -->( q0 )----a---->(( q1 ))

Properties of base NFAs:
- Exactly one start state (no incoming edges)
- Exactly one accept state (no outgoing edges)
- These properties make composition easy`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive Construction Rules</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Union (R + S)</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given NFAs for R and S, construct NFA for (R + S):

                     +--epsilon--> [NFA for R] --epsilon--+
                     |                                     |
-->( new_start )-----+                                     +-->(( new_accept ))
                     |                                     |
                     +--epsilon--> [NFA for S] --epsilon--+

Steps:
1. Create new start state
2. Add epsilon transitions to both R and S start states
3. Add epsilon transitions from both R and S accept states
4. Create new single accept state
5. Make old accept states non-accepting`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Concatenation (RS)</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given NFAs for R and S, construct NFA for RS:

-->( R_start )---[NFA for R]---( R_accept )--epsilon-->( S_start )---[NFA for S]-->(( S_accept ))

Steps:
1. Start state of RS = Start state of R
2. Add epsilon transition from R's accept to S's start
3. Accept state of RS = Accept state of S
4. Make R's accept state non-accepting`}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Kleene Star (R*)</h3>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Given NFA for R, construct NFA for R*:

                    +--epsilon--+
                    v           |
-->( new_start )--epsilon-->[NFA for R]--epsilon-->(( new_accept ))
         |                                              ^
         +------------------epsilon---------------------+

Steps:
1. Create new start and accept states
2. Add epsilon from new start to R's start (to enter R)
3. Add epsilon from R's accept to new accept (to exit)
4. Add epsilon from R's accept back to R's start (for repetition)
5. Add epsilon from new start to new accept (for zero occurrences)`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Example</h2>
    <p className="leading-relaxed">
      Convert the regular expression (a+b)*abb to an NFA:
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`Step 1: Build NFA for 'a'
-->( 0 )--a-->(( 1 ))

Step 2: Build NFA for 'b'
-->( 2 )--b-->(( 3 ))

Step 3: Build NFA for (a + b) using union
-->( 4 )--epsilon-->( 0 )--a-->( 1 )--epsilon-->( 5 )
    |                                             ^
    +--epsilon-->( 2 )--b-->( 3 )--epsilon--------+

Step 4: Build NFA for (a + b)* using Kleene star
Add new states 6 (start) and 7 (accept)
-->( 6 )--epsilon-->( 4 )--...(a+b)...-->( 5 )--epsilon-->(( 7 ))
    |                                           |
    +--epsilon-->-->-->-->-->-->-->-->-->-->-->--+
                  (also: 5 back to 4 for repetition)

Step 5: Build NFA for 'abb' (concatenation)
-->( 8 )--a-->( 9 )--b-->( 10 )--b-->(( 11 ))

Step 6: Concatenate (a+b)* with abb
Connect accept of (a+b)* to start of abb via epsilon`}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Properties of Thompson's Construction</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Property</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Number of States</td>
            <td className="p-3 border">At most 2n states for RE of length n</td>
          </tr>
          <tr>
            <td className="p-3 border">Transitions per State</td>
            <td className="p-3 border">At most 2 outgoing transitions</td>
          </tr>
          <tr>
            <td className="p-3 border">Single Start</td>
            <td className="p-3 border">Exactly one start state with no incoming edges</td>
          </tr>
          <tr>
            <td className="p-3 border">Single Accept</td>
            <td className="p-3 border">Exactly one accept state with no outgoing edges</td>
          </tr>
          <tr>
            <td className="p-3 border">Time Complexity</td>
            <td className="p-3 border">O(n) to build NFA from RE of length n</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Alternative: Direct DFA Construction</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`While Thompson's gives NFA, we can also build DFA directly:

1. Compute nullable, firstpos, lastpos, followpos for RE
2. Build DFA states from position sets
3. This avoids the NFA-to-DFA conversion step

The subset construction from Thompson's NFA may lead to
exponential blowup, but direct DFA construction can be
more efficient in practice.`}</pre>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Thompson's Construction converts RE to e-NFA recursively</li>
        <li>Base cases: empty set, epsilon, single symbol</li>
        <li>Recursive cases: union, concatenation, Kleene star</li>
        <li>Resulting NFA has at most 2n states for RE of length n</li>
        <li>Each state has at most 2 outgoing transitions</li>
        <li>Widely used in lexical analyzer generators like lex/flex</li>
      </ul>
    </div>
  </div>
);

export default REtoFA;
