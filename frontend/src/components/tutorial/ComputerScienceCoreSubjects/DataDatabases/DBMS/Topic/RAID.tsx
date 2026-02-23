import React from "react";

const RAID: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">RAID - Redundant Array of Independent Disks</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      RAID is a data storage technology that combines multiple physical disk drives
      into a single logical unit for data redundancy, performance improvement, or both.
      RAID is crucial for database reliability and performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">RAID Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Techniques:

1. Striping (Performance)
   - Data split across multiple disks
   - Parallel read/write operations

2. Mirroring (Redundancy)
   - Duplicate copies on different disks
   - Survives disk failure

3. Parity (Redundancy + Space Efficiency)
   - Calculate check data
   - Reconstruct lost data from parity

MTBF (Mean Time Between Failures):
- Single disk: ~100,000 hours
- RAID array: Much higher reliability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RAID 0 - Striping</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RAID 0: Data striped across disks

Disk 1: A1 | A3 | A5 | A7
Disk 2: A2 | A4 | A6 | A8

Capacity: N disks × size = Total
Performance: N × single disk speed
Redundancy: NONE!

Pros:
+ Best performance (parallel I/O)
+ Full capacity utilization

Cons:
- No fault tolerance
- Any disk failure = ALL data lost

Use: Temporary data, video editing
NOT for: Databases (no redundancy)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RAID 1 - Mirroring</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RAID 1: Data mirrored on two disks

Disk 1: A | B | C | D
Disk 2: A | B | C | D  (exact copy)

Capacity: 50% (half used for mirrors)
Read: 2x speed (read from either)
Write: Same (must write to both)
Redundancy: Survives 1 disk failure

Pros:
+ Simple and reliable
+ Fast reads
+ Easy recovery

Cons:
- 50% storage overhead
- Write performance not improved

Use: Critical databases, OS drives`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RAID 5 - Striping with Parity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RAID 5: Data and parity distributed

Disk 1: A1 | A4 | A7 | Bp
Disk 2: A2 | A5 | Ap | B7
Disk 3: A3 | Ap | A8 | B8
Disk 4: Ap | A6 | A9 | B9

(p = parity, distributed across disks)

Capacity: (N-1) × disk size
Minimum: 3 disks
Redundancy: Survives 1 disk failure

Parity Calculation: XOR of data blocks
If Disk 2 fails: A2 = A1 XOR A3 XOR Ap

Pros:
+ Good balance of performance/redundancy
+ Efficient storage (only 1 disk for parity)

Cons:
- Slow writes (parity calculation)
- Slow rebuild after failure

Use: General purpose, file servers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RAID 6 - Double Parity</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RAID 6: Two independent parities

Disk 1: A1 | A4 | P  | Q
Disk 2: A2 | P  | A7 | Q
Disk 3: P  | A5 | A8 | Q
Disk 4: A3 | A6 | Q  | P
(P = parity, Q = second parity)

Capacity: (N-2) × disk size
Minimum: 4 disks
Redundancy: Survives 2 disk failures

Pros:
+ Higher fault tolerance
+ Better for large arrays

Cons:
- Even slower writes
- Complex parity calculation

Use: Critical data, large storage arrays`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RAID 10 (1+0)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RAID 10: Mirrors, then stripes

      Stripe Set
    /           \\
Mirror 1     Mirror 2
D1   D2      D3   D4
A    A       B    B
C    C       D    D

Capacity: 50% (mirrors)
Minimum: 4 disks
Redundancy: 1 disk per mirror

Pros:
+ Excellent performance
+ Good fault tolerance
+ Fast rebuilds

Cons:
- 50% storage overhead
- Expensive (more disks)

Use: Databases, high-performance apps
     BEST CHOICE for DB workloads!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RAID Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">RAID</th>
            <th className="p-3 border">Min Disks</th>
            <th className="p-3 border">Capacity</th>
            <th className="p-3 border">Fault Tolerance</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">RAID 0</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">100%</td>
            <td className="p-3 border text-red-500">None</td>
            <td className="p-3 border">Temp/scratch</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RAID 1</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">50%</td>
            <td className="p-3 border text-green-500">1 disk</td>
            <td className="p-3 border">OS, small DB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RAID 5</td>
            <td className="p-3 border">3</td>
            <td className="p-3 border">(N-1)/N</td>
            <td className="p-3 border text-green-500">1 disk</td>
            <td className="p-3 border">File server</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RAID 6</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">(N-2)/N</td>
            <td className="p-3 border text-green-500">2 disks</td>
            <td className="p-3 border">Archive</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RAID 10</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">50%</td>
            <td className="p-3 border text-green-500">1 per mirror</td>
            <td className="p-3 border">Databases</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>RAID 0: Performance only, no redundancy</li>
        <li>RAID 1: Simple mirroring, 50% overhead</li>
        <li>RAID 5: Parity distributed, good balance</li>
        <li>RAID 10: Best for databases (performance + redundancy)</li>
        <li>RAID is not a backup - still need backups!</li>
      </ul>
    </div>
  </div>
);

export default RAID;
