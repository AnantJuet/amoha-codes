import React from 'react';

const SecondaryStorage: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Secondary Storage Devices
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Secondary storage devices provide non-volatile, high-capacity data storage that
      persists when power is removed. Unlike primary memory (RAM), secondary storage
      is slower but much larger and cheaper per byte. It serves as the lowest level
      of the memory hierarchy, storing programs, data, and the operating system
      long-term.
    </p>

    <h2 className="text-3xl font-bold mt-8">Role in Memory Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Hierarchy Position:

    CPU Registers    (Bytes, < 1 ns)
          |
       L1 Cache      (KB, 1-4 ns)
          |
       L2 Cache      (MB, 10-20 ns)
          |
       L3 Cache      (MB, 30-50 ns)
          |
      Main Memory    (GB, 50-100 ns)
          |
    ============ Volatility Boundary ============
          |
    Secondary       (TB, microseconds-milliseconds)
    Storage
       /    \\
     SSD    HDD     <- Non-volatile
       \\    /
    Tertiary        (PB, seconds-minutes)
    Storage
    (Tape, Cloud)

Secondary Storage Characteristics:
- Non-volatile (data persists without power)
- Large capacity (TB scale)
- Slow access (1000x-1,000,000x slower than RAM)
- Low cost per byte ($0.02-$0.10/GB)
- Used for: OS, applications, files, virtual memory`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hard Disk Drives (HDD)</h2>
    <p className="leading-relaxed">
      HDDs store data magnetically on spinning platters. They have been the dominant
      form of secondary storage for decades due to high capacity and low cost,
      though SSDs are increasingly replacing them.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`HDD Structure:

          Spindle
             |
    +--------+--------+
    |     Platter     |  <- Magnetic disk (both sides)
    |   +---------+   |
    |   |  Track  |   |  <- Concentric circles
    |   | +-----+ |   |
    |   | |Sect.| |   |  <- Sector (512B or 4KB)
    |   | +-----+ |   |
    |   +---------+   |
    +--------+--------+
             |
         Actuator
             |
    +--------+--------+
    | Read/Write Head |  <- Floats nm above platter
    +-----------------+

Components:
- Platters: 1-8 disks, magnetic coating
- Spindle: Rotates platters (5400-15000 RPM)
- Actuator Arm: Moves heads across platter
- Read/Write Heads: One per platter surface
- Controller: Interface electronics

Data Organization:
- Track: One ring on platter surface
- Cylinder: All tracks at same radius (all platters)
- Sector: Smallest addressable unit (512B or 4KB)
- Block: One or more sectors

Addressing:
- LBA (Logical Block Addressing): Linear sector numbers
- Old: CHS (Cylinder-Head-Sector)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">HDD Access Time</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`HDD Access Time Components:

Access Time = Seek Time + Rotational Latency + Transfer Time

1. Seek Time: Move head to correct track
   - Average: 5-10 ms
   - Full stroke: 15-20 ms
   - Track-to-track: 0.5-1 ms

2. Rotational Latency: Wait for sector to rotate under head
   - Average = 1/2 rotation time
   - 7200 RPM: 1/7200 * 60 * 1000 / 2 = 4.17 ms
   - 15000 RPM: 2 ms
   - 5400 RPM: 5.56 ms

3. Transfer Time: Read/write data
   - Depends on data size and transfer rate
   - Sequential: 100-200 MB/s
   - Transfer time = Data size / Transfer rate

Example: Read 4KB sector on 7200 RPM drive
- Seek: 8 ms (average)
- Rotational: 4.17 ms (average)
- Transfer: 4KB / 150 MB/s = 0.027 ms
- Total: ~12.2 ms

Compare to RAM: ~100 ns = 0.0001 ms
HDD is ~120,000x slower for random access!

Sequential vs Random:
- Sequential: Head stays on track, no seek/rotation
- Random: Full seek + rotation each access
- HDD favors sequential access patterns`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Solid State Drives (SSD)</h2>
    <p className="leading-relaxed">
      SSDs use flash memory (NAND) to store data electronically with no moving parts.
      They offer significantly faster access times than HDDs, especially for random
      access, though at a higher cost per byte.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`SSD Architecture:

    +------------------------------------------+
    |              SSD Controller              |
    |  +-------+  +-------+  +------+         |
    |  | Flash |  | Wear  |  | ECC  |         |
    |  | Trans |  | Level |  |      |         |
    |  | Layer |  |       |  |      |         |
    |  +-------+  +-------+  +------+         |
    +------------------------------------------+
              |
    +------------------------------------------+
    |            NAND Flash Chips              |
    |  +------+  +------+  +------+  +------+  |
    |  | Die  |  | Die  |  | Die  |  | Die  |  |
    |  +------+  +------+  +------+  +------+  |
    |  +------+  +------+  +------+  +------+  |
    |  | Die  |  | Die  |  | Die  |  | Die  |  |
    |  +------+  +------+  +------+  +------+  |
    +------------------------------------------+

NAND Organization:
Die -> Plane -> Block -> Page

- Page: Smallest read/write unit (4-16 KB)
- Block: Smallest erase unit (128-512 pages)
- Die: Independent unit for parallelism

Key SSD Characteristics:
- No seek time (no moving parts)
- No rotational latency
- Fast random access (~50-100 us)
- Limited write cycles (1K-100K per cell)
- Write amplification (must erase before write)
- Requires wear leveling`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">SSD vs HDD Performance</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">HDD (7200 RPM)</th>
            <th className="p-3 border">SATA SSD</th>
            <th className="p-3 border">NVMe SSD</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Random Read Latency</td>
            <td className="p-3 border">10-15 ms</td>
            <td className="p-3 border">0.1 ms</td>
            <td className="p-3 border">0.02 ms</td>
          </tr>
          <tr>
            <td className="p-3 border">Sequential Read</td>
            <td className="p-3 border">150 MB/s</td>
            <td className="p-3 border">550 MB/s</td>
            <td className="p-3 border">3500 MB/s</td>
          </tr>
          <tr>
            <td className="p-3 border">Sequential Write</td>
            <td className="p-3 border">150 MB/s</td>
            <td className="p-3 border">520 MB/s</td>
            <td className="p-3 border">3000 MB/s</td>
          </tr>
          <tr>
            <td className="p-3 border">Random IOPS (4K)</td>
            <td className="p-3 border">100-200</td>
            <td className="p-3 border">90,000</td>
            <td className="p-3 border">500,000+</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost per GB</td>
            <td className="p-3 border">$0.02-0.03</td>
            <td className="p-3 border">$0.08-0.12</td>
            <td className="p-3 border">$0.10-0.20</td>
          </tr>
          <tr>
            <td className="p-3 border">Capacity</td>
            <td className="p-3 border">Up to 20 TB</td>
            <td className="p-3 border">Up to 8 TB</td>
            <td className="p-3 border">Up to 8 TB</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Storage Interfaces</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Storage Interface Evolution:

1. PATA (Parallel ATA / IDE)
   - Parallel interface, ribbon cable
   - Max 133 MB/s
   - Legacy, obsolete

2. SATA (Serial ATA)
   - Serial interface, thin cable
   - SATA I: 1.5 Gbps (150 MB/s)
   - SATA II: 3 Gbps (300 MB/s)
   - SATA III: 6 Gbps (600 MB/s)
   - Uses AHCI protocol
   - Common for HDD and consumer SSD

3. SAS (Serial Attached SCSI)
   - Enterprise storage
   - 12 Gbps current
   - Higher reliability, dual-port
   - More expensive

4. NVMe (Non-Volatile Memory Express)
   - Designed for flash storage
   - Uses PCIe interface
   - PCIe 3.0 x4: ~3.5 GB/s
   - PCIe 4.0 x4: ~7 GB/s
   - PCIe 5.0 x4: ~14 GB/s
   - Much lower latency than SATA
   - Multiple queues (64K queues, 64K commands each)

Form Factors:
- 3.5" (HDD desktop)
- 2.5" (HDD laptop, SATA SSD)
- M.2 (NVMe SSD, compact)
- U.2 (Enterprise NVMe)
- Add-in card (PCIe slot)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RAID (Redundant Array of Independent Disks)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`RAID Levels:

RAID 0 (Striping):
+--------+--------+
| Disk 0 | Disk 1 |
|   A1   |   A2   |  Data striped across disks
|   A3   |   A4   |
+--------+--------+
- Performance: 2x read/write
- Capacity: 100%
- Fault tolerance: None

RAID 1 (Mirroring):
+--------+--------+
| Disk 0 | Disk 1 |
|   A1   |   A1   |  Data duplicated
|   A2   |   A2   |
+--------+--------+
- Performance: 2x read, 1x write
- Capacity: 50%
- Fault tolerance: 1 disk failure

RAID 5 (Striping with Parity):
+--------+--------+--------+
| Disk 0 | Disk 1 | Disk 2 |
|   A1   |   A2   |   Ap   |  Parity rotates
|   B1   |   Bp   |   B2   |
|   Cp   |   C1   |   C2   |
+--------+--------+--------+
- Performance: (n-1)x read, reduced write
- Capacity: (n-1)/n
- Fault tolerance: 1 disk failure

RAID 6 (Double Parity):
- Two parity blocks per stripe
- Survives 2 disk failures
- Capacity: (n-2)/n

RAID 10 (1+0, Mirrored Stripes):
+--------+--------+--------+--------+
| Disk 0 | Disk 1 | Disk 2 | Disk 3 |
|   A1   |   A1   |   A2   |   A2   |
|   A3   |   A3   |   A4   |   A4   |
+--------+--------+--------+--------+
      Mirror         Mirror
         \\            /
          \\          /
           Stripe
- High performance and reliability
- Capacity: 50%`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Disk Scheduling Algorithms</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`HDD Disk Scheduling (minimize seek time):

Current head position: 50
Request queue: 95, 180, 34, 119, 11, 123, 62, 64

1. FCFS (First Come First Served):
   Order: 50->95->180->34->119->11->123->62->64
   Total head movement: 640 tracks

2. SSTF (Shortest Seek Time First):
   Order: 50->62->64->34->11->95->119->123->180
   Total head movement: 236 tracks
   Problem: Starvation of far requests

3. SCAN (Elevator):
   Move in one direction, service all requests
   Then reverse direction
   Order: 50->62->64->95->119->123->180->(end)->34->11
   Total: 230 tracks

4. C-SCAN (Circular SCAN):
   Only service in one direction
   Jump back to start after reaching end
   More uniform wait times

5. LOOK / C-LOOK:
   Like SCAN/C-SCAN but only go to last request
   Don't go to physical disk end

For SSD:
- No seek time, scheduling less important
- May use FCFS or prioritize reads
- Wear leveling more important than scheduling`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Optical and Tape Storage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Optical Storage:
- CD: 700 MB (laser reads pits/lands)
- DVD: 4.7 GB (single layer) / 8.5 GB (dual layer)
- Blu-ray: 25 GB (single) / 50 GB (dual) / 100 GB (BDXL)
- Archival: Long-term storage, removable

Tape Storage:
- Very high capacity (up to 45 TB per cartridge)
- Sequential access only
- Lowest cost per byte (~$0.005/GB)
- Used for backup and archive
- LTO (Linear Tape Open) standard
- Access time: seconds to minutes

Use Cases:
- Optical: Software distribution, small archives
- Tape: Large-scale backup, cold storage, compliance
- "Cold storage": Data rarely accessed`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Secondary storage is non-volatile and high-capacity</li>
        <li>HDD uses magnetic platters with mechanical heads</li>
        <li>HDD access time = seek + rotational latency + transfer</li>
        <li>SSD uses NAND flash with no moving parts</li>
        <li>SSD is much faster for random access than HDD</li>
        <li>NVMe interface designed for flash, much faster than SATA</li>
        <li>RAID provides performance and/or redundancy</li>
        <li>Disk scheduling optimizes HDD head movement</li>
      </ul>
    </div>
  </div>
);

export default SecondaryStorage;
