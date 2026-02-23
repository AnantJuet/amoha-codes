import React from "react";

const SCDTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Slowly Changing Dimensions (SCD)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Slowly Changing Dimensions (SCD) are dimension tables where attribute values change
      over time, but not frequently. Different SCD types provide various strategies for
      handling these changes while maintaining historical accuracy or current state.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">SCD Types Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Slowly Changing Dimension Types:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    SCD TYPE SUMMARY                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Type 0: Retain Original                                         │
│          └── Never change, keep original value forever          │
│                                                                  │
│  Type 1: Overwrite                                               │
│          └── Update in place, no history preserved              │
│                                                                  │
│  Type 2: Add New Row                                             │
│          └── Create new row for each change, full history       │
│                                                                  │
│  Type 3: Add New Column                                          │
│          └── Add column for previous value, limited history     │
│                                                                  │
│  Type 4: History Table                                           │
│          └── Separate table for historical records              │
│                                                                  │
│  Type 6: Hybrid (1+2+3)                                          │
│          └── Combines Type 1, 2, and 3 approaches               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Type 0 */}
    <h2 className="text-3xl font-bold mt-8">SCD Type 0: Retain Original</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Type 0 dimensions never change after initial load. The original value is retained
        forever, regardless of changes in the source system.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`SCD Type 0 - Retain Original:
════════════════════════════════════════════════════════════════

Original Load (2020):
┌──────┬──────────────┬─────────────┐
│ key  │ customer_name│ birth_date  │
├──────┼──────────────┼─────────────┤
│ 1001 │ John Smith   │ 1985-03-15  │
└──────┴──────────────┴─────────────┘

After Name Change (2024): NO CHANGE!
┌──────┬──────────────┬─────────────┐
│ key  │ customer_name│ birth_date  │
├──────┼──────────────┼─────────────┤
│ 1001 │ John Smith   │ 1985-03-15  │ ← Still original name
└──────┴──────────────┴─────────────┘

Use Cases:
• Original signup date
• Birth date
• Original credit score
• Initial customer segment`}
        </pre>
      </div>
    </div>

    {/* Type 1 */}
    <h2 className="text-3xl font-bold mt-8">SCD Type 1: Overwrite</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Type 1 overwrites the old value with the new value. No history is maintained.
        This is the simplest approach but loses all historical information.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`SCD Type 1 - Overwrite:
════════════════════════════════════════════════════════════════

Before Change:
┌──────┬──────────────┬─────────┬─────────────┐
│ key  │ customer_name│ address │ city        │
├──────┼──────────────┼─────────┼─────────────┤
│ 1001 │ John Smith   │ 123 Oak │ New York    │
└──────┴──────────────┴─────────┴─────────────┘

Customer moves to Chicago...

After Change (Overwritten):
┌──────┬──────────────┬─────────┬─────────────┐
│ key  │ customer_name│ address │ city        │
├──────┼──────────────┼─────────┼─────────────┤
│ 1001 │ John Smith   │ 456 Elm │ Chicago     │ ← Updated!
└──────┴──────────────┴─────────┴─────────────┘

History LOST - No record that customer was ever in New York

Pros: Simple, no extra storage
Cons: No historical analysis possible`}
        </pre>
      </div>
    </div>

    {/* Type 2 */}
    <h2 className="text-3xl font-bold mt-8">SCD Type 2: Add New Row</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Type 2 creates a new row for each change, preserving complete history. This is
        the most common approach for maintaining historical accuracy.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`SCD Type 2 - Add New Row:
════════════════════════════════════════════════════════════════

Before Change:
┌──────┬─────────┬──────────┬─────────────┬────────────┬───────────┬─────────┐
│ s_key│ nat_key │ name     │ city        │ start_date │ end_date  │ current │
├──────┼─────────┼──────────┼─────────────┼────────────┼───────────┼─────────┤
│ 1    │ C-1001  │ John     │ New York    │ 2020-01-01 │ 9999-12-31│ Y       │
└──────┴─────────┴──────────┴─────────────┴────────────┴───────────┴─────────┘

Customer moves to Chicago on 2024-06-15...

After Change (New Row Added):
┌──────┬─────────┬──────────┬─────────────┬────────────┬───────────┬─────────┐
│ s_key│ nat_key │ name     │ city        │ start_date │ end_date  │ current │
├──────┼─────────┼──────────┼─────────────┼────────────┼───────────┼─────────┤
│ 1    │ C-1001  │ John     │ New York    │ 2020-01-01 │ 2024-06-14│ N       │
│ 2    │ C-1001  │ John     │ Chicago     │ 2024-06-15 │ 9999-12-31│ Y       │
└──────┴─────────┴──────────┴─────────────┴────────────┴───────────┴─────────┘
  │                                              │           │          │
  └── New surrogate key                          │           │          └── Current flag
                                                 └── Version dates ─────┘

Query Examples:
• Current city: WHERE current = 'Y'
• City on 2023-01-01: WHERE '2023-01-01' BETWEEN start_date AND end_date`}
        </pre>
      </div>
    </div>

    {/* Type 3 */}
    <h2 className="text-3xl font-bold mt-8">SCD Type 3: Add New Column</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Type 3 adds a new column to store the previous value. This preserves limited
        history (typically only current and previous values).
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`SCD Type 3 - Add New Column:
════════════════════════════════════════════════════════════════

Before Change:
┌──────┬──────────┬──────────────┬──────────────┬─────────────┐
│ key  │ name     │ current_city │ previous_city│ change_date │
├──────┼──────────┼──────────────┼──────────────┼─────────────┤
│ 1001 │ John     │ New York     │ NULL         │ NULL        │
└──────┴──────────┴──────────────┴──────────────┴─────────────┘

Customer moves to Chicago...

After Change:
┌──────┬──────────┬──────────────┬──────────────┬─────────────┐
│ key  │ name     │ current_city │ previous_city│ change_date │
├──────┼──────────┼──────────────┼──────────────┼─────────────┤
│ 1001 │ John     │ Chicago      │ New York     │ 2024-06-15  │
└──────┴──────────┴──────────────┴──────────────┴─────────────┘
                        │              │
                        └── New value  └── Old value preserved

Customer moves to Boston... (previous city lost!)
┌──────┬──────────┬──────────────┬──────────────┬─────────────┐
│ key  │ name     │ current_city │ previous_city│ change_date │
├──────┼──────────┼──────────────┼──────────────┼─────────────┤
│ 1001 │ John     │ Boston       │ Chicago      │ 2025-03-01  │
└──────┴──────────┴──────────────┴──────────────┴─────────────┘
                                       └── New York history LOST!`}
        </pre>
      </div>
    </div>

    {/* Type 4 */}
    <h2 className="text-3xl font-bold mt-8">SCD Type 4: History Table</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Type 4 uses a separate history table to store historical records while keeping
        the main dimension table with only current values.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`SCD Type 4 - History Table:
════════════════════════════════════════════════════════════════

Current Dimension Table (CUSTOMER_DIM):
┌──────┬──────────┬─────────────┐
│ key  │ name     │ city        │
├──────┼──────────┼─────────────┤
│ 1001 │ John     │ Chicago     │ ← Always current
└──────┴──────────┴─────────────┘

History Table (CUSTOMER_HIST):
┌──────┬──────────┬─────────────┬────────────┬────────────┐
│ key  │ name     │ city        │ start_date │ end_date   │
├──────┼──────────┼─────────────┼────────────┼────────────┤
│ 1001 │ John     │ New York    │ 2020-01-01 │ 2024-06-14 │
│ 1001 │ John     │ Chicago     │ 2024-06-15 │ 9999-12-31 │
└──────┴──────────┴─────────────┴────────────┴────────────┘

Benefits:
• Current dimension stays small and fast
• Complete history available when needed
• Useful for rapidly changing dimensions`}
        </pre>
      </div>
    </div>

    {/* Type 6 */}
    <h2 className="text-3xl font-bold mt-8">SCD Type 6: Hybrid (1+2+3)</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Type 6 combines Types 1, 2, and 3, providing full history with versioned rows
        while also maintaining the current value in all rows for easy access.
      </p>
      <div className="bg-gray-100 text-gray-900 p-4 rounded-lg font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`SCD Type 6 - Hybrid (Type 1 + 2 + 3):
════════════════════════════════════════════════════════════════

After Multiple Changes:
┌──────┬─────────┬──────────┬───────────────┬──────────┬──────────┬─────────┐
│ s_key│ nat_key │ name     │ hist_city     │ curr_city│ start_dt │ current │
├──────┼─────────┼──────────┼───────────────┼──────────┼──────────┼─────────┤
│ 1    │ C-1001  │ John     │ New York      │ Chicago  │ 2020-01  │ N       │
│ 2    │ C-1001  │ John     │ Chicago       │ Chicago  │ 2024-06  │ Y       │
└──────┴─────────┴──────────┴───────────────┴──────────┴──────────┴─────────┘
                                   │              │
                                   │              └── Type 1: Current in all rows
                                   └── Type 2: Historical row versions
                                   └── Type 3: Previous value column

Benefits:
• Full history (Type 2)
• Easy current value access (Type 1)
• Previous value comparison (Type 3)

Name: 6 = 1 + 2 + 3`}
        </pre>
      </div>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">SCD Types Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">History</th>
            <th className="p-3 border">Storage</th>
            <th className="p-3 border">Complexity</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Type 0</td>
            <td className="p-3 border">None (original only)</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Immutable attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type 1</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Error corrections</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type 2</td>
            <td className="p-3 border">Complete</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Full audit trail</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type 3</td>
            <td className="p-3 border">Limited (1 prior)</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Before/after analysis</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type 4</td>
            <td className="p-3 border">Complete</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Rapidly changing dims</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Type 6</td>
            <td className="p-3 border">Complete + easy access</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Complex analytics</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Type 0:</strong> Retain original value, never update</li>
        <li><strong>Type 1:</strong> Overwrite with no history (simplest)</li>
        <li><strong>Type 2:</strong> Add new row for each change (most common for history)</li>
        <li><strong>Type 3:</strong> Add column for previous value (limited history)</li>
        <li><strong>Type 4:</strong> Separate history table from current dimension</li>
        <li><strong>Type 6:</strong> Hybrid combining Types 1, 2, and 3</li>
        <li>Type 2 is most popular for maintaining complete historical accuracy</li>
        <li>Different attributes in same dimension can use different SCD types</li>
        <li>Consider storage, query complexity, and business needs when choosing</li>
      </ul>
    </div>
  </div>
);

export default SCDTypes;
