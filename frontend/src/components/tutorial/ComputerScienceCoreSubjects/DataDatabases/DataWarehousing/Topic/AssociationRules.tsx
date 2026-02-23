import React from "react";

const AssociationRules: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Association Rule Mining
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Association rule mining discovers interesting relationships between variables in
      large datasets. It's commonly used for market basket analysis to find items that
      are frequently purchased together.
    </p>

    {/* Association Rule Concept */}
    <h2 className="text-3xl font-bold mt-8">Understanding Association Rules</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Association Rule Format:
════════════════════════════════════════════════════════════════

           Rule: {Antecedent} → {Consequent}

Example:   {Bread, Milk} → {Eggs}

Interpretation: "Customers who buy Bread and Milk
                 also tend to buy Eggs"

Transaction Database:
┌─────────┬─────────────────────────────────┐
│ Trans ID│         Items Purchased         │
├─────────┼─────────────────────────────────┤
│   T1    │ Bread, Milk, Eggs               │
│   T2    │ Bread, Milk                     │
│   T3    │ Milk, Eggs, Butter              │
│   T4    │ Bread, Butter                   │
│   T5    │ Bread, Milk, Eggs, Butter       │
│   T6    │ Milk, Eggs                      │
└─────────┴─────────────────────────────────┘

Discovered Rule: {Bread, Milk} → {Eggs}
  - Found in transactions: T1, T5
  - When customers buy Bread+Milk, they often buy Eggs too`}
      </pre>
    </div>

    {/* Key Metrics */}
    <h2 className="text-3xl font-bold mt-8">Key Metrics</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Support</h3>
        <p className="text-sm mb-2">How frequently the itemset appears in the database.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Support(A → B) = P(A ∪ B) = (Transactions containing A and B) / (Total transactions)

Example: Support({Bread, Milk} → {Eggs})
         = Transactions with Bread, Milk, AND Eggs / Total
         = 2/6 = 33.3%

Higher support = More common pattern`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Confidence</h3>
        <p className="text-sm mb-2">How often the rule is true when antecedent occurs.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Confidence(A → B) = P(B | A) = Support(A ∪ B) / Support(A)

Example: Confidence({Bread, Milk} → {Eggs})
         = Support({Bread, Milk, Eggs}) / Support({Bread, Milk})
         = (2/6) / (3/6) = 66.7%

"66.7% of the time when customers buy Bread+Milk, they buy Eggs"`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Lift</h3>
        <p className="text-sm mb-2">How much more likely B is purchased when A is purchased, compared to B's general popularity.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Lift(A → B) = Confidence(A → B) / Support(B)
            = P(B | A) / P(B)

Lift > 1: Positive correlation (A promotes B)
Lift = 1: No correlation (independent)
Lift < 1: Negative correlation (A discourages B)

Example: If Lift = 1.5, buying A makes B 50% more likely`}
          </pre>
        </div>
      </div>
    </div>

    {/* Apriori Algorithm */}
    <h2 className="text-3xl font-bold mt-8">Apriori Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Apriori Algorithm (min_support = 40%):
════════════════════════════════════════════════════════════════

Step 1: Find frequent 1-itemsets
┌────────────┬─────────┬──────────┐
│  Itemset   │  Count  │ Support  │
├────────────┼─────────┼──────────┤
│ {Bread}    │    4    │  66.7%  ✓│
│ {Milk}     │    5    │  83.3%  ✓│
│ {Eggs}     │    4    │  66.7%  ✓│
│ {Butter}   │    3    │  50.0%  ✓│
└────────────┴─────────┴──────────┘

Step 2: Generate candidate 2-itemsets from frequent 1-itemsets
┌─────────────────┬─────────┬──────────┐
│    Itemset      │  Count  │ Support  │
├─────────────────┼─────────┼──────────┤
│ {Bread, Milk}   │    3    │  50.0%  ✓│
│ {Bread, Eggs}   │    2    │  33.3%  ✗│
│ {Milk, Eggs}    │    4    │  66.7%  ✓│
│ {Bread, Butter} │    2    │  33.3%  ✗│
│ {Milk, Butter}  │    2    │  33.3%  ✗│
│ {Eggs, Butter}  │    2    │  33.3%  ✗│
└─────────────────┴─────────┴──────────┘

Step 3: Generate candidate 3-itemsets
┌─────────────────────┬─────────┬──────────┐
│      Itemset        │  Count  │ Support  │
├─────────────────────┼─────────┼──────────┤
│ {Bread, Milk, Eggs} │    2    │  33.3%  ✗│
└─────────────────────┴─────────┴──────────┘

No more candidates. Algorithm terminates.`}
      </pre>
    </div>

    {/* Apriori Principle */}
    <h2 className="text-3xl font-bold mt-8">Apriori Principle</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="text-lg font-semibold mb-2">
        "If an itemset is infrequent, all its supersets must be infrequent"
      </p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm mt-2">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Pruning Example:
────────────────────────────────────────

If {A, B} is infrequent (support < threshold)

Then we DON'T need to check:
  • {A, B, C}     ← Must be infrequent
  • {A, B, D}     ← Must be infrequent
  • {A, B, C, D}  ← Must be infrequent

This dramatically reduces search space!`}
        </pre>
      </div>
    </div>

    {/* Applications */}
    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Market Basket Analysis</h3>
        <p className="text-sm">Find products bought together for store layout, promotions, and recommendations.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Web Usage Mining</h3>
        <p className="text-sm">Discover pages visited together for site navigation improvement.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Medical Diagnosis</h3>
        <p className="text-sm">Find symptoms/diseases that co-occur for diagnosis support.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Cross-Selling</h3>
        <p className="text-sm">Recommend related products: "Customers also bought..."</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Association rules: {"{A} → {B}"} means A implies B</li>
        <li>Support measures frequency of the itemset</li>
        <li>Confidence measures reliability of the rule</li>
        <li>Lift measures correlation strength ({">"} 1 is positive)</li>
        <li>Apriori uses "apriori principle" for efficient pruning</li>
        <li>FP-Growth is faster alternative to Apriori</li>
        <li>Set minimum support and confidence thresholds to filter rules</li>
        <li>Classic application: market basket analysis</li>
      </ul>
    </div>
  </div>
);

export default AssociationRules;
