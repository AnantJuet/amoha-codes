import React from 'react';

const RAIDLevels: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RAID Levels (0, 1, 2, 3, 4, 5, 6, 10)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      RAID levels define different ways of organizing data across multiple disks. Each level offers
      a unique balance of performance, redundancy, and storage efficiency. Understanding these levels
      is crucial for choosing the right configuration for specific use cases.
    </p>

    {/* RAID 0 */}
    <h2 className="text-3xl font-bold mt-8">RAID 0 - Striping</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 0: Data striped across all disks (NO redundancy)

Data: [A][B][C][D][E][F][G][H]

  Disk 1      Disk 2      Disk 3      Disk 4
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│   [A]   │ │   [B]   │ │   [C]   │ │   [D]   │
├─────────┤ ├─────────┤ ├─────────┤ ├─────────┤
│   [E]   │ │   [F]   │ │   [G]   │ │   [H]   │
└─────────┘ └─────────┘ └─────────┘ └─────────┘
     ▲           ▲           ▲           ▲
     └───────────┴───────────┴───────────┘
              Parallel Read/Write

Minimum Disks: 2
Capacity: N × disk size (100%)
Redundancy: None (any disk failure = total data loss)
Performance: Excellent (N× read, N× write)
Use Case: Non-critical data, performance priority, scratch disks
`}
      </pre>
    </div>

    {/* RAID 1 */}
    <h2 className="text-3xl font-bold mt-8">RAID 1 - Mirroring</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 1: Data duplicated on all disks

Data: [A][B][C][D]

  Disk 1 (Primary)    Disk 2 (Mirror)
┌─────────────────┐ ┌─────────────────┐
│      [A]        │ │      [A]        │ ← Identical
├─────────────────┤ ├─────────────────┤
│      [B]        │ │      [B]        │ ← Identical
├─────────────────┤ ├─────────────────┤
│      [C]        │ │      [C]        │ ← Identical
├─────────────────┤ ├─────────────────┤
│      [D]        │ │      [D]        │ ← Identical
└─────────────────┘ └─────────────────┘
        │                   │
        └───────────────────┘
          Write to BOTH

Minimum Disks: 2
Capacity: 1 disk size (50%)
Redundancy: Can lose N-1 disks
Performance: Good reads (can read from any), normal writes
Use Case: Critical data, OS drives, small databases
`}
      </pre>
    </div>

    {/* RAID 2 */}
    <h2 className="text-3xl font-bold mt-8">RAID 2 - Bit-Level Striping with Hamming Code</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 2: Bit-level striping with ECC (Hamming code)

Byte: 10110101 (8 bits)

  D1   D2   D3   D4   D5   D6   D7   P1   P2   P3   P4
┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐
│ 1  │ 0  │ 1  │ 1  │ 0  │ 1  │ 0  │ H  │ H  │ H  │ H  │
└────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘
  │    │    │    │    │    │    │    │    │    │    │
 Bit  Bit  Bit  Bit  Bit  Bit  Bit  ECC  ECC  ECC  ECC
  0    1    2    3    4    5    6  (Hamming Code Parity)

Hamming code can detect AND correct single-bit errors

Minimum Disks: Many (depends on word size)
Capacity: Complex formula
Redundancy: Error correction built-in
Performance: Poor (synchronized spindles needed)
Use Case: RARELY USED - superseded by RAID 3/5
`}
      </pre>
    </div>

    {/* RAID 3 */}
    <h2 className="text-3xl font-bold mt-8">RAID 3 - Byte-Level Striping with Dedicated Parity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 3: Byte-level striping, single dedicated parity disk

Data Byte: [B0 B1 B2 B3]

  Disk 1   Disk 2   Disk 3   Disk 4   Parity Disk
┌────────┬────────┬────────┬────────┬────────────┐
│   B0   │   B1   │   B2   │   B3   │    Bp      │
├────────┼────────┼────────┼────────┼────────────┤
│   C0   │   C1   │   C2   │   C3   │    Cp      │
└────────┴────────┴────────┴────────┴────────────┘
                                          ↑
                              Parity disk bottleneck

Bp = B0 XOR B1 XOR B2 XOR B3

Minimum Disks: 3
Capacity: (N-1) × disk size
Redundancy: Can lose 1 disk
Performance: Good reads, poor random writes (parity bottleneck)
Use Case: Large sequential transfers (video editing)
Note: Requires synchronized spindles - rarely used today
`}
      </pre>
    </div>

    {/* RAID 4 */}
    <h2 className="text-3xl font-bold mt-8">RAID 4 - Block-Level Striping with Dedicated Parity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 4: Block-level striping, dedicated parity disk

  Disk 1   Disk 2   Disk 3   Parity
┌────────┬────────┬────────┬────────┐
│  [A1]  │  [A2]  │  [A3]  │  [Ap]  │
├────────┼────────┼────────┼────────┤
│  [B1]  │  [B2]  │  [B3]  │  [Bp]  │
├────────┼────────┼────────┼────────┤
│  [C1]  │  [C2]  │  [C3]  │  [Cp]  │
└────────┴────────┴────────┴────────┘
                               ↑
                    Parity disk bottleneck
                    (EVERY write updates this disk)

Write Penalty Example:
To update A2:
1. Read old A2
2. Read old Ap
3. Calculate new Ap = old Ap XOR old A2 XOR new A2
4. Write new A2
5. Write new Ap
= 4 I/O operations for 1 write!

Minimum Disks: 3
Capacity: (N-1) × disk size
Redundancy: Can lose 1 disk
Performance: Good reads, POOR writes (parity bottleneck)
Use Case: Read-heavy workloads (rarely used - RAID 5 better)
`}
      </pre>
    </div>

    {/* RAID 5 */}
    <h2 className="text-3xl font-bold mt-8">RAID 5 - Block-Level Striping with Distributed Parity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 5: Block-level striping, parity distributed across all disks

  Disk 1   Disk 2   Disk 3   Disk 4
┌────────┬────────┬────────┬────────┐
│  [A1]  │  [A2]  │  [A3]  │  [Ap]  │ ← Parity on Disk 4
├────────┼────────┼────────┼────────┤
│  [B1]  │  [B2]  │  [Bp]  │  [B3]  │ ← Parity on Disk 3
├────────┼────────┼────────┼────────┤
│  [C1]  │  [Cp]  │  [C2]  │  [C3]  │ ← Parity on Disk 2
├────────┼────────┼────────┼────────┤
│  [Dp]  │  [D1]  │  [D2]  │  [D3]  │ ← Parity on Disk 1
├────────┼────────┼────────┼────────┤
│  [E1]  │  [E2]  │  [E3]  │  [Ep]  │ ← Parity on Disk 4
└────────┴────────┴────────┴────────┘
     ↑       ↑       ↑       ↑
     └───────┴───────┴───────┘
     Parity distributed - no bottleneck!

Minimum Disks: 3
Capacity: (N-1) × disk size
Redundancy: Can lose 1 disk
Performance: Good reads, decent writes
Use Case: General purpose, file servers, databases

Most popular RAID level for balanced performance/redundancy!
`}
      </pre>
    </div>

    {/* RAID 6 */}
    <h2 className="text-3xl font-bold mt-8">RAID 6 - Block-Level Striping with Double Distributed Parity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 6: Like RAID 5, but with TWO parity blocks per stripe

  Disk 1   Disk 2   Disk 3   Disk 4   Disk 5
┌────────┬────────┬────────┬────────┬────────┐
│  [A1]  │  [A2]  │  [A3]  │  [Ap]  │  [Aq]  │
├────────┼────────┼────────┼────────┼────────┤
│  [B1]  │  [B2]  │  [Bp]  │  [Bq]  │  [B3]  │
├────────┼────────┼────────┼────────┼────────┤
│  [C1]  │  [Cp]  │  [Cq]  │  [C2]  │  [C3]  │
├────────┼────────┼────────┼────────┼────────┤
│  [Dp]  │  [Dq]  │  [D1]  │  [D2]  │  [D3]  │
└────────┴────────┴────────┴────────┴────────┘
                ↑       ↑
          Two different parity calculations:
          P = Standard XOR parity
          Q = Reed-Solomon code (different algorithm)

Minimum Disks: 4
Capacity: (N-2) × disk size
Redundancy: Can lose ANY 2 disks simultaneously
Performance: Good reads, slower writes than RAID 5
Use Case: Large arrays, mission-critical data

Why RAID 6 matters:
- With large disks, rebuild times are long (hours to days)
- During rebuild, array is vulnerable
- Second disk failure during rebuild = data loss in RAID 5
- RAID 6 protects against this scenario
`}
      </pre>
    </div>

    {/* RAID 10 */}
    <h2 className="text-3xl font-bold mt-8">RAID 10 (1+0) - Mirrored Stripes</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 10: Stripe of mirrors (RAID 0 of RAID 1 pairs)

Data: [A][B][C][D][E][F]

            ┌──────────────────────────────────┐
            │         RAID 0 Stripe            │
            └──────────────────────────────────┘
                 ╱         │         ╲
                ╱          │          ╲
  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
  │   RAID 1       │ │   RAID 1       │ │   RAID 1       │
  │   Mirror       │ │   Mirror       │ │   Mirror       │
  └────────────────┘ └────────────────┘ └────────────────┘
     ╱      ╲          ╱      ╲          ╱      ╲
  Disk1   Disk2    Disk3   Disk4    Disk5   Disk6
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ [A]  │ │ [A]  │ │ [B]  │ │ [B]  │ │ [C]  │ │ [C]  │
│ [D]  │ │ [D]  │ │ [E]  │ │ [E]  │ │ [F]  │ │ [F]  │
└──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘
  ↑↑         ↑↑       ↑↑       ↑↑       ↑↑       ↑↑
  Mirror     Mirror   Mirror   Mirror   Mirror   Mirror

Minimum Disks: 4 (must be even)
Capacity: N/2 × disk size (50%)
Redundancy: Can lose 1 disk per mirror pair
            Best case: lose 50% of disks
            Worst case: lose both mirrors of one pair = failure
Performance: Excellent (combines striping speed + mirror redundancy)
Use Case: High-performance databases, critical applications
`}
      </pre>
    </div>

    {/* RAID 01 vs RAID 10 */}
    <h2 className="text-3xl font-bold mt-8">RAID 01 vs RAID 10</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 01 (0+1): Mirror of stripes
┌─────────────────────────────────────┐
│            RAID 1 Mirror            │
└─────────────────────────────────────┘
           ╱                 ╲
    ┌───────────┐        ┌───────────┐
    │  Stripe A │        │  Stripe B │
    │  (RAID 0) │        │  (RAID 0) │
    └───────────┘        └───────────┘
    ╱    │    ╲          ╱    │    ╲
  D1    D2    D3       D4    D5    D6
  [A]   [B]   [C]      [A]   [B]   [C]

If D1 fails: Entire Stripe A is broken!
             Only Stripe B works
             One more failure in B = total loss

RAID 10 (1+0): Stripe of mirrors
┌─────────────────────────────────────┐
│            RAID 0 Stripe            │
└─────────────────────────────────────┘
       ╱         │         ╲
   ┌───────┐ ┌───────┐ ┌───────┐
   │Mirror1│ │Mirror2│ │Mirror3│
   └───────┘ └───────┘ └───────┘
   ╱    ╲    ╱    ╲    ╱    ╲
  D1    D2  D3    D4  D5    D6
  [A]   [A] [B]   [B] [C]   [C]

If D1 fails: Only Mirror1 is degraded
             D2 still has [A]
             Can lose one more from each mirror pair

RAID 10 is more fault-tolerant than RAID 01!
`}
      </pre>
    </div>

    {/* Complete Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Complete RAID Level Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Level</th>
            <th className="p-2 border">Min Disks</th>
            <th className="p-2 border">Capacity</th>
            <th className="p-2 border">Fault Tolerance</th>
            <th className="p-2 border">Read</th>
            <th className="p-2 border">Write</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-2 border">RAID 0</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">N</td>
            <td className="p-2 border">None</td>
            <td className="p-2 border">Excellent</td>
            <td className="p-2 border">Excellent</td>
          </tr>
          <tr>
            <td className="p-2 border">RAID 1</td>
            <td className="p-2 border">2</td>
            <td className="p-2 border">N/2</td>
            <td className="p-2 border">1 disk</td>
            <td className="p-2 border">Good</td>
            <td className="p-2 border">Fair</td>
          </tr>
          <tr>
            <td className="p-2 border">RAID 2</td>
            <td className="p-2 border">Many</td>
            <td className="p-2 border">Varies</td>
            <td className="p-2 border">1 bit error</td>
            <td className="p-2 border">Fair</td>
            <td className="p-2 border">Poor</td>
          </tr>
          <tr>
            <td className="p-2 border">RAID 3</td>
            <td className="p-2 border">3</td>
            <td className="p-2 border">N-1</td>
            <td className="p-2 border">1 disk</td>
            <td className="p-2 border">Good</td>
            <td className="p-2 border">Fair</td>
          </tr>
          <tr>
            <td className="p-2 border">RAID 4</td>
            <td className="p-2 border">3</td>
            <td className="p-2 border">N-1</td>
            <td className="p-2 border">1 disk</td>
            <td className="p-2 border">Good</td>
            <td className="p-2 border">Poor</td>
          </tr>
          <tr className="bg-green-100 dark:bg-green-900">
            <td className="p-2 border">RAID 5</td>
            <td className="p-2 border">3</td>
            <td className="p-2 border">N-1</td>
            <td className="p-2 border">1 disk</td>
            <td className="p-2 border">Good</td>
            <td className="p-2 border">Fair</td>
          </tr>
          <tr className="bg-green-100 dark:bg-green-900">
            <td className="p-2 border">RAID 6</td>
            <td className="p-2 border">4</td>
            <td className="p-2 border">N-2</td>
            <td className="p-2 border">2 disks</td>
            <td className="p-2 border">Good</td>
            <td className="p-2 border">Fair</td>
          </tr>
          <tr className="bg-green-100 dark:bg-green-900">
            <td className="p-2 border">RAID 10</td>
            <td className="p-2 border">4</td>
            <td className="p-2 border">N/2</td>
            <td className="p-2 border">1 per pair</td>
            <td className="p-2 border">Excellent</td>
            <td className="p-2 border">Good</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Capacity Examples */}
    <h2 className="text-3xl font-bold mt-8">Capacity Calculation Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given: 6 disks, each 2 TB

RAID 0:  6 × 2 TB = 12 TB  (100%)
RAID 1:  2 TB (6/2 mirrors = 3 pairs, but all mirror same data)
         OR typically just 2 disks: 2 TB (50%)
RAID 5:  (6-1) × 2 TB = 10 TB (83%)
RAID 6:  (6-2) × 2 TB = 8 TB (67%)
RAID 10: (6/2) × 2 TB = 6 TB (50%)

Efficiency Ranking:
RAID 0 > RAID 5 > RAID 6 > RAID 10 = RAID 1

Redundancy Ranking:
RAID 6 > RAID 10 > RAID 5 = RAID 1 > RAID 0

Performance Ranking:
RAID 0 > RAID 10 > RAID 5 ≈ RAID 6 > RAID 1
`}
      </pre>
    </div>

    {/* Use Case Recommendations */}
    <h2 className="text-3xl font-bold mt-8">Recommended Use Cases</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Recommended RAID</th>
            <th className="p-3 border">Why</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Video Editing (scratch)</td>
            <td className="p-3 border">RAID 0</td>
            <td className="p-3 border">Maximum speed, data can be recreated</td>
          </tr>
          <tr>
            <td className="p-3 border">OS Boot Drive</td>
            <td className="p-3 border">RAID 1</td>
            <td className="p-3 border">Simple, reliable, fast recovery</td>
          </tr>
          <tr>
            <td className="p-3 border">File Server</td>
            <td className="p-3 border">RAID 5</td>
            <td className="p-3 border">Good capacity with redundancy</td>
          </tr>
          <tr>
            <td className="p-3 border">Large Storage Array</td>
            <td className="p-3 border">RAID 6</td>
            <td className="p-3 border">Survives 2 failures during rebuild</td>
          </tr>
          <tr>
            <td className="p-3 border">Database Server</td>
            <td className="p-3 border">RAID 10</td>
            <td className="p-3 border">Best read/write performance + redundancy</td>
          </tr>
          <tr>
            <td className="p-3 border">Enterprise Critical</td>
            <td className="p-3 border">RAID 6 or RAID 10</td>
            <td className="p-3 border">Maximum fault tolerance</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>RAID 0 offers performance but no redundancy - use only for non-critical data</li>
      <li>RAID 1 is simple mirroring with 50% storage efficiency</li>
      <li>RAID 2 and 3 are rarely used today (superseded by RAID 5)</li>
      <li>RAID 4 has parity bottleneck - RAID 5 distributes parity better</li>
      <li>RAID 5 is most popular for general use (good balance)</li>
      <li>RAID 6 adds second parity for large arrays where rebuild is risky</li>
      <li>RAID 10 combines best of RAID 0 and RAID 1 - ideal for databases</li>
      <li>RAID is NOT a backup - always maintain separate backups</li>
    </ul>
  </div>
);

export default RAIDLevels;
