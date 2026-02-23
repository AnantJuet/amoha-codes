import React from "react";

const ShadowPaging: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Shadow Paging
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Shadow paging is a recovery technique that maintains two page tables: a current
      page table and a shadow page table. It provides a simple way to implement atomic
      transactions without requiring a log for undo operations.
    </p>

    <h2 className="text-3xl font-bold mt-8">How Shadow Paging Works</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Shadow Page Table:</strong> Points to old, stable copies of pages</li>
        <li><strong>Current Page Table:</strong> Points to current (possibly modified) pages</li>
        <li><strong>On transaction start:</strong> Copy shadow page table to current</li>
        <li><strong>On commit:</strong> Make current page table the new shadow</li>
        <li><strong>On abort:</strong> Discard current, keep shadow</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Shadow Paging Mechanism</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Initial State:
Shadow PT:     Current PT:
+------+       +------+
|Page 1|--+    |Page 1|--+
+------+  |    +------+  |
|Page 2|--+--> |Page 2|--+--> [Same pages on disk]
+------+  |    +------+  |
|Page 3|--+    |Page 3|--+
+------+       +------+

After Transaction Modifies Page 2:
Shadow PT:     Current PT:
+------+       +------+
|Page 1|--+--> |Page 1|--+  (unchanged)
+------+  |    +------+
          |
|Page 2|--+--> [OLD Page 2 on disk]
+------+       +------+
               |Page 2|----> [NEW Page 2 on disk]
               +------+
|Page 3|--+--> |Page 3|--+  (unchanged)
+------+       +------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Commit and Abort</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Commit Operation:
1. Write all modified pages to disk
2. Write current page table to disk
3. Update disk pointer to point to current page table
4. Current becomes new shadow
5. Old shadow can be discarded

Abort Operation:
1. Discard all modified pages
2. Discard current page table
3. Shadow page table remains valid
4. No undo needed - old data still exists!

The single disk pointer update is the atomic commit point.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">No undo log needed</td>
            <td className="p-3 border">Page table fragmentation</td>
          </tr>
          <tr>
            <td className="p-3 border">Fast abort (just discard)</td>
            <td className="p-3 border">Difficult to extend to multiple txns</td>
          </tr>
          <tr>
            <td className="p-3 border">Simpler recovery</td>
            <td className="p-3 border">Cannot support concurrent transactions</td>
          </tr>
          <tr>
            <td className="p-3 border">Atomic commit</td>
            <td className="p-3 border">Garbage collection overhead</td>
          </tr>
          <tr>
            <td className="p-3 border">Conceptually simple</td>
            <td className="p-3 border">Hard to keep pages contiguous</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery After Crash</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`After System Crash:

If crash before commit:
- Disk pointer still points to shadow page table
- Shadow page table is valid
- No recovery needed!

If crash during commit (before pointer update):
- Same as above - uncommitted

If crash after commit (after pointer update):
- New page table is active
- Transaction is committed
- No recovery needed!

Shadow paging simplifies crash recovery.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Shadow Paging vs Log-Based Recovery</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Shadow Paging</th>
            <th className="p-3 border">Log-Based</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border">Concurrency</td>
            <td className="p-3 border">Single transaction</td>
            <td className="p-3 border">Multiple transactions</td>
          </tr>
          <tr>
            <td className="p-3 border">Recovery</td>
            <td className="p-3 border">Instant</td>
            <td className="p-3 border">May take time</td>
          </tr>
          <tr>
            <td className="p-3 border">Storage</td>
            <td className="p-3 border">Extra pages</td>
            <td className="p-3 border">Log space</td>
          </tr>
          <tr>
            <td className="p-3 border">Usage</td>
            <td className="p-3 border">Rarely used today</td>
            <td className="p-3 border">Industry standard</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Shadow paging maintains two page tables</li>
        <li>Old data preserved until commit</li>
        <li>Atomic commit via single pointer update</li>
        <li>No undo log needed</li>
        <li>Difficult for concurrent transactions</li>
        <li>Rarely used in modern databases</li>
      </ul>
    </div>
  </div>
);

export default ShadowPaging;
