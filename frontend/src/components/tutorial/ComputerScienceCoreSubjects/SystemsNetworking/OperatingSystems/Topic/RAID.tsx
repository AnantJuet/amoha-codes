import React from 'react';

const RAID: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      RAID (Redundant Array of Independent Disks)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      RAID is a data storage virtualization technology that combines multiple physical disk drives
      into one or more logical units for the purposes of data redundancy, performance improvement,
      or both. RAID was originally defined as "Redundant Array of Inexpensive Disks" but is now
      commonly referred to as "Redundant Array of Independent Disks."
    </p>

    {/* Why RAID */}
    <h2 className="text-3xl font-bold mt-8">Why Use RAID?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Reliability:</strong> Protects against disk failures through redundancy
      </li>
      <li>
        <strong>Performance:</strong> Improves read/write speeds through parallelism
      </li>
      <li>
        <strong>Capacity:</strong> Combines multiple disks into larger logical volumes
      </li>
      <li>
        <strong>Availability:</strong> System continues operating even when disks fail
      </li>
    </ul>

    {/* RAID Concepts */}
    <h2 className="text-3xl font-bold mt-8">Key RAID Concepts</h2>

    {/* Data Striping */}
    <h3 className="text-2xl font-semibold mt-6">1. Data Striping</h3>
    <p className="leading-relaxed">
      Striping distributes data across multiple disks to improve performance. Data is divided into
      strips (blocks) and written to different disks in parallel.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Data Striping Example:

Original Data: [A1][A2][A3][A4][A5][A6][A7][A8]

Without Striping (Single Disk):
┌─────────────────────────────────────────┐
│ Disk 1: [A1][A2][A3][A4][A5][A6][A7][A8]│
└─────────────────────────────────────────┘
Write Time: 8 units (sequential)

With Striping (4 Disks):
┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
│ Disk 1    │ │ Disk 2    │ │ Disk 3    │ │ Disk 4    │
├───────────┤ ├───────────┤ ├───────────┤ ├───────────┤
│ [A1][A5]  │ │ [A2][A6]  │ │ [A3][A7]  │ │ [A4][A8]  │
└───────────┘ └───────────┘ └───────────┘ └───────────┘
Write Time: 2 units (parallel) - 4x faster!

Strip Size:
- Block-level striping: Each strip is a disk block
- Bit-level striping: Each strip is a single bit
- Byte-level striping: Each strip is a byte
`}
      </pre>
    </div>

    {/* Mirroring */}
    <h3 className="text-2xl font-semibold mt-6">2. Mirroring</h3>
    <p className="leading-relaxed">
      Mirroring duplicates data across two or more disks. If one disk fails, the data is still
      available on the mirror disk.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Mirroring Example:

Data to Write: [A][B][C][D]

With Mirroring (2 Disks):
┌─────────────────┐    ┌─────────────────┐
│   Disk 1        │    │   Disk 2        │
│   (Primary)     │    │   (Mirror)      │
├─────────────────┤    ├─────────────────┤
│ [A][B][C][D]    │ ═══│ [A][B][C][D]    │
└─────────────────┘    └─────────────────┘
        │                      │
        │                      │
    Identical copies on both disks

If Disk 1 Fails:
┌─────────────────┐    ┌─────────────────┐
│   Disk 1        │    │   Disk 2        │
│   FAILED!  ✗    │    │   (Still works) │
├─────────────────┤    ├─────────────────┤
│ [?][?][?][?]    │    │ [A][B][C][D]    │ ← Data intact!
└─────────────────┘    └─────────────────┘

Advantages:
- Instant failover
- Read performance can double (read from either)

Disadvantages:
- 50% storage efficiency
- Write to both disks
`}
      </pre>
    </div>

    {/* Parity */}
    <h3 className="text-2xl font-semibold mt-6">3. Parity</h3>
    <p className="leading-relaxed">
      Parity is a calculated value used to reconstruct data. It provides redundancy with less
      storage overhead than mirroring.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Parity Calculation (XOR):

Data bits:
  A = 1
  B = 0
  C = 1
  D = 1

Parity (P) = A XOR B XOR C XOR D
           = 1 XOR 0 XOR 1 XOR 1
           = 1

Store: [A=1][B=0][C=1][D=1][P=1]

If Disk C fails:
Known: A=1, B=0, D=1, P=1, C=?

C = A XOR B XOR D XOR P
  = 1 XOR 0 XOR 1 XOR 1
  = 1 ✓ (Recovered!)

Parity with Striping:
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│ Disk1 │ │ Disk2 │ │ Disk3 │ │ Disk4 │ │ Disk5 │
├───────┤ ├───────┤ ├───────┤ ├───────┤ ├───────┤
│  A1   │ │  A2   │ │  A3   │ │  A4   │ │  Ap   │ ← Parity
│  B1   │ │  B2   │ │  B3   │ │  Bp   │ │  B4   │
│  C1   │ │  C2   │ │  Cp   │ │  C3   │ │  C4   │
│  D1   │ │  Dp   │ │  D2   │ │  D3   │ │  D4   │
│  Ep   │ │  E1   │ │  E2   │ │  E3   │ │  E4   │
└───────┘ └───────┘ └───────┘ └───────┘ └───────┘
                                    ↑
              Parity distributed across all disks (RAID 5)
`}
      </pre>
    </div>

    {/* XOR Truth Table */}
    <h2 className="text-3xl font-bold mt-8">XOR Truth Table for Parity</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">A</th>
            <th className="p-3 border">B</th>
            <th className="p-3 border">A XOR B</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">0</td>
          </tr>
          <tr>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">0</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="leading-relaxed mt-4">
      XOR is its own inverse: A XOR B XOR B = A. This property makes it perfect for parity calculation
      and data recovery.
    </p>

    {/* RAID Terminology */}
    <h2 className="text-3xl font-bold mt-8">RAID Terminology</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Stripe</td>
            <td className="p-3 border">A unit of data written to a single disk</td>
          </tr>
          <tr>
            <td className="p-3 border">Stripe Width</td>
            <td className="p-3 border">Number of data disks in the array</td>
          </tr>
          <tr>
            <td className="p-3 border">Stripe Size</td>
            <td className="p-3 border">Size of each stripe (block size)</td>
          </tr>
          <tr>
            <td className="p-3 border">Parity Disk</td>
            <td className="p-3 border">Disk storing parity information</td>
          </tr>
          <tr>
            <td className="p-3 border">Hot Spare</td>
            <td className="p-3 border">Standby disk for automatic replacement</td>
          </tr>
          <tr>
            <td className="p-3 border">Rebuild</td>
            <td className="p-3 border">Reconstructing data on a replacement disk</td>
          </tr>
          <tr>
            <td className="p-3 border">Degraded Mode</td>
            <td className="p-3 border">Operation with one or more failed disks</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* RAID Implementation */}
    <h2 className="text-3xl font-bold mt-8">RAID Implementation Types</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
1. Hardware RAID:
┌─────────────────────────────────────────────┐
│              RAID Controller                │
│         (Dedicated hardware chip)           │
├─────────────────────────────────────────────┤
│   Has its own processor and cache           │
│   Handles all RAID operations               │
│   OS sees single logical disk               │
└─────────────────────────────────────────────┘
         │        │        │        │
      ┌──┴──┐  ┌──┴──┐  ┌──┴──┐  ┌──┴──┐
      │Disk1│  │Disk2│  │Disk3│  │Disk4│
      └─────┘  └─────┘  └─────┘  └─────┘

2. Software RAID:
┌─────────────────────────────────────────────┐
│           Operating System                  │
│      (mdadm, Windows Dynamic Disks)         │
├─────────────────────────────────────────────┤
│   Uses CPU for RAID calculations            │
│   More flexible, less expensive             │
│   Slightly higher CPU overhead              │
└─────────────────────────────────────────────┘
         │        │        │        │
      ┌──┴──┐  ┌──┴──┐  ┌──┴──┐  ┌──┴──┐
      │Disk1│  │Disk2│  │Disk3│  │Disk4│
      └─────┘  └─────┘  └─────┘  └─────┘

3. Firmware/Fake RAID (Host RAID):
- BIOS-level RAID support
- Uses motherboard's chipset
- Relies on drivers and partial CPU processing
`}
      </pre>
    </div>

    {/* Capacity Calculation */}
    <h2 className="text-3xl font-bold mt-8">Storage Efficiency Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Example: 4 disks, each 1 TB

RAID 0 (Striping only):
Usable Capacity = 4 × 1 TB = 4 TB (100%)
Redundancy = None

RAID 1 (Mirroring):
Usable Capacity = 1 TB (25%) - mirrors all 4 ways
Usually just 2 disks: 2 × 1 TB / 2 = 1 TB (50%)
Redundancy = Can lose 1 disk (or more in mirror pairs)

RAID 5 (Striping with distributed parity):
Usable Capacity = (N-1) × Disk Size = 3 × 1 TB = 3 TB (75%)
Redundancy = Can lose 1 disk

RAID 6 (Double parity):
Usable Capacity = (N-2) × Disk Size = 2 × 1 TB = 2 TB (50%)
Redundancy = Can lose 2 disks

RAID 10 (Mirrored Stripes):
Usable Capacity = N/2 × Disk Size = 2 × 1 TB = 2 TB (50%)
Redundancy = Can lose 1 disk per mirror pair
`}
      </pre>
    </div>

    {/* When Disk Fails */}
    <h2 className="text-3xl font-bold mt-8">What Happens When a Disk Fails?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
RAID 0: DISASTER!
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│ [A1]  │ │ [A2]  │ │  ✗    │ │ [A4]  │
│ [B1]  │ │ [B2]  │ │  ✗    │ │ [B4]  │
└───────┘ └───────┘ └───────┘ └───────┘
   OK       OK      FAILED      OK

Result: ALL DATA LOST - no redundancy!

RAID 5: Degraded but operational
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│ [A1]  │ │ [A2]  │ │  ✗    │ │ [Ap]  │
│ [B1]  │ │ [Bp]  │ │  ✗    │ │ [B3]  │
└───────┘ └───────┘ └───────┘ └───────┘
   OK       OK      FAILED      OK

Result: Data reconstructed from parity on read
        System continues in degraded mode
        MUST replace disk soon!

RAID 1: Mirror takes over
┌───────────┐ ┌───────────┐
│   [A]     │ │    ✗      │
│   [B]     │ │    ✗      │
│   [C]     │ │    ✗      │
└───────────┘ └───────────┘
    OK          FAILED

Result: Primary disk continues normally
        Replace failed disk to restore redundancy
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>RAID combines multiple disks for performance and/or redundancy</li>
      <li>Striping improves performance by parallelizing I/O</li>
      <li>Mirroring provides redundancy but uses 50% capacity</li>
      <li>Parity enables recovery with less storage overhead than mirroring</li>
      <li>XOR operation is fundamental to parity calculation</li>
      <li>Hardware RAID offers better performance; software RAID is more flexible</li>
      <li>RAID is not a backup - protects against disk failure, not data corruption</li>
      <li>Different RAID levels offer different trade-offs</li>
    </ul>
  </div>
);

export default RAID;
