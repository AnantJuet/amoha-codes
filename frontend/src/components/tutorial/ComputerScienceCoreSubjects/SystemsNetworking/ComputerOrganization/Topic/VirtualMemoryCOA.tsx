import React from 'react';

const VirtualMemoryCOA: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Virtual Memory in Computer Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Virtual memory is a memory management technique that provides an abstraction
      of the physical memory available in a system. It creates the illusion that each
      process has its own large, contiguous address space, even when physical memory
      is limited. From a computer organization perspective, virtual memory involves
      hardware support for address translation, page tables, and the Translation
      Lookaside Buffer (TLB).
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Virtual Memory?</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Problems Virtual Memory Solves:

1. Limited Physical Memory
   - Programs can be larger than available RAM
   - Multiple programs compete for memory

2. Memory Fragmentation
   - Physical memory becomes fragmented over time
   - Hard to find contiguous space

3. Memory Protection
   - Programs should not access each other's memory
   - OS memory should be protected

4. Program Relocation
   - Programs should run at any physical location
   - Linking/loading would be complex otherwise

Virtual Memory Solution:
+------------------+         +------------------+
|  Process View    |         |  Physical View   |
|  (Virtual Addr)  |         |  (Physical Addr) |
+------------------+         +------------------+
| 0x0000: Code     |  ---->  | RAM: Scattered   |
| 0x4000: Data     |  ---->  | pages anywhere   |
| 0x8000: Heap     |  ---->  | + Disk storage   |
| 0xC000: Stack    |  ---->  | for overflow     |
+------------------+         +------------------+

Each process sees contiguous virtual space
Physical storage can be fragmented or on disk`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Address Translation</h2>
    <p className="leading-relaxed">
      The Memory Management Unit (MMU) translates virtual addresses used by programs
      to physical addresses in memory. This translation happens on every memory access.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Address Translation Overview:

    CPU generates          MMU translates        Memory accessed
    Virtual Address   -->  to Physical Addr  --> at Physical Addr

    +-------+          +-------+          +--------+
    |  CPU  |--VA----->|  MMU  |---PA---->| Memory |
    +-------+          +-------+          +--------+
                          |
                    +-----+-----+
                    |   Page    |
                    |   Table   |
                    +-----------+

Virtual Address (VA):
+------------------+---------------+
| Virtual Page No. | Page Offset   |
+------------------+---------------+
       (VPN)            (Offset)

Physical Address (PA):
+-------------------+---------------+
| Physical Frame No.| Page Offset   |
+-------------------+---------------+
       (PFN)             (Offset)

Translation Process:
1. Split VA into VPN and Offset
2. Look up VPN in page table to get PFN
3. Combine PFN with Offset to form PA

Example (4KB pages, 32-bit VA):
VA = 0x12345678
Page size = 4KB = 2^12 bytes
Offset bits = 12

VPN = 0x12345 (upper 20 bits)
Offset = 0x678 (lower 12 bits)

Page table lookup: VPN 0x12345 -> PFN 0x00ABC
PA = 0x00ABC678`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Page Table Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Page Table Entry (PTE):

+-------+-------+---+---+---+---+---+--------------------+
| Valid |Protect| D | A | U | G |...|  Physical Frame #  |
+-------+-------+---+---+---+---+---+--------------------+
   1b     2-3b   1b  1b  1b  1b        20+ bits

Bit Fields:
- Valid (Present): Page is in physical memory
- Protection: Read/Write/Execute permissions
- Dirty (D): Page has been modified
- Accessed (A): Page has been referenced
- User/Supervisor (U): User-mode accessible
- Global (G): Shared across processes
- Physical Frame Number: Location in RAM

Page Table Organization:
Virtual Page Number = Index into page table

VPN   | Valid | PFN   | Prot | D | A |
------|-------|-------|------|---|---|
0     |   1   | 0x100 |  RW  | 0 | 1 |
1     |   1   | 0x205 |  R   | 0 | 1 |
2     |   0   |  ---  |  --- | - | - |  <- Not in memory (page fault)
3     |   1   | 0x067 |  RWX | 1 | 1 |
...

Page Fault:
- Occurs when Valid = 0
- Page not in physical memory
- OS loads page from disk`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Translation Lookaside Buffer (TLB)</h2>
    <p className="leading-relaxed">
      The TLB is a specialized cache for page table entries. Since every memory access
      requires address translation, the page table itself would be accessed constantly.
      The TLB caches recent translations to avoid page table lookups.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`TLB Structure and Operation:

TLB = Cache for Virtual-to-Physical translations

+-------+-------+-------+-------+------+
| Valid |  VPN  |  PFN  | Prot  | ASID |
+-------+-------+-------+-------+------+
|   1   | 0x123 | 0x456 |  RW   |  5   |
|   1   | 0x789 | 0xABC |  R    |  5   |
|   1   | 0x111 | 0x222 |  RWX  |  3   |
|   0   |  ---  |  ---  |  ---  |  --- |
+-------+-------+-------+-------+------+

ASID = Address Space ID (identifies process)

TLB Lookup Process:

        Virtual Address
             |
             v
    +--------+--------+
    |   VPN  | Offset |
    +--------+--------+
         |
         v
    +---------+
    |   TLB   |
    |  Lookup |
    +---------+
         |
    +----+----+
    |         |
  HIT       MISS
    |         |
    v         v
  Use PFN   Walk Page
  from TLB  Table
    |         |
    |    Load into TLB
    |         |
    +----+----+
         |
         v
    +--------+--------+
    |   PFN  | Offset |
    +--------+--------+
         |
         v
    Physical Address

TLB Characteristics:
- Small: 32-4096 entries typical
- Fast: 1-2 cycle lookup
- Usually fully associative or high set-associative
- Hit rate: 99%+ typical (locality)
- TLB miss: ~10-100 cycles (page table walk)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Level Page Tables</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Problem with Single-Level Page Table:

32-bit address, 4KB pages:
- VPN = 20 bits = 2^20 entries
- Each PTE = 4 bytes
- Page table size = 4 MB per process!

64-bit address, 4KB pages:
- VPN = 52 bits = 2^52 entries
- Impossibly large!

Solution: Hierarchical Page Tables

Two-Level Page Table (32-bit, 4KB pages):
VA = | L1 Index (10) | L2 Index (10) | Offset (12) |

    L1 Index         L2 Index
        |                |
        v                v
    +-------+        +-------+
    | L1 PT |------->| L2 PT |-------> PFN
    +-------+        +-------+
    1024 entries     1024 entries
                     (per L2 table)

Only allocate L2 tables for used portions!

Four-Level Page Table (x86-64, 4KB pages):
VA = |Sign| PML4 | PDPT | PD | PT | Offset |
      16    9      9     9    9     12    = 48 bits used

    PML4 -> PDPT -> PD -> PT -> Physical Page

Each level: 512 entries (9 bits)
Total: 4 levels of translation

Page Table Walk:
1. CR3 register points to PML4
2. PML4[VA[47:39]] -> PDPT base
3. PDPT[VA[38:30]] -> PD base
4. PD[VA[29:21]] -> PT base
5. PT[VA[20:12]] -> Physical Frame
6. PA = PFN || VA[11:0]

Memory accesses per translation: 4 (without TLB!)
With TLB hit: 0 page table accesses`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Hardware Support</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Memory Management Unit (MMU) Components:

1. TLB (Translation Lookaside Buffer)
   - Caches page table entries
   - Separate I-TLB and D-TLB common
   - Hardware managed or software managed

2. Page Table Walker (Hardware)
   - Traverses page table on TLB miss
   - Loads PTE into TLB
   - x86 has hardware walker

3. Page Table Base Register
   - x86: CR3 register
   - ARM: TTBR0, TTBR1
   - Points to root of page table

4. Control Registers
   - Enable/disable paging
   - Set page size
   - Configure TLB behavior

Address Translation with TLB:

    Virtual Address
          |
          v
    +-----+-----+
    |    TLB    |
    |   Check   |
    +-----+-----+
          |
     +----+----+
     |         |
   HIT       MISS
     |         |
     v         v
   +---+    +-------+
   |MUX|    | Page  |
   +---+    | Table |
     |      | Walk  |
     |      +---+---+
     |          |
     +----+-----+
          |
          v
    Physical Address
          |
          v
    +------------+
    |   Cache    |
    |   Check    |
    +------------+
          |
          v
    Data to CPU`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Page Fault Handling</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Page Fault Exception:

Occurs when:
1. Valid bit = 0 (page not present)
2. Protection violation (wrong permissions)
3. Reserved bit set in PTE

Page Fault Handler (OS):

    CPU accesses Virtual Address
              |
              v
         TLB Miss
              |
              v
    Page Table Walk
              |
              v
    PTE Valid = 0 or
    Permission Error
              |
              v
    +------------------+
    | Page Fault       |
    | Exception (#PF)  |
    +------------------+
              |
              v
    +------------------+
    | OS Page Fault    |
    | Handler          |
    +------------------+
              |
    +---------+---------+
    |         |         |
    v         v         v
  Load      Grow     Error
  from      Stack    (SIGSEGV)
  Disk

Page-In from Disk:
1. Find free physical frame
2. If none, evict a page (page replacement)
3. Read page from disk (swap)
4. Update PTE: Valid=1, PFN=new frame
5. Restart faulting instruction

Performance:
- Page fault: ~1-10 ms (disk access!)
- TLB miss: ~10-100 cycles (memory access)
- TLB hit: ~1-2 cycles`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Virtual Memory Parameters</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parameter</th>
            <th className="p-3 border">x86 (32-bit)</th>
            <th className="p-3 border">x86-64</th>
            <th className="p-3 border">ARM64</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Virtual Address</td>
            <td className="p-3 border">32 bits (4 GB)</td>
            <td className="p-3 border">48 bits (256 TB)</td>
            <td className="p-3 border">48 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Physical Address</td>
            <td className="p-3 border">32-36 bits</td>
            <td className="p-3 border">52 bits</td>
            <td className="p-3 border">48 bits</td>
          </tr>
          <tr>
            <td className="p-3 border">Page Size</td>
            <td className="p-3 border">4 KB, 4 MB</td>
            <td className="p-3 border">4 KB, 2 MB, 1 GB</td>
            <td className="p-3 border">4 KB, 16 KB, 64 KB</td>
          </tr>
          <tr>
            <td className="p-3 border">Page Table Levels</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">4</td>
          </tr>
          <tr>
            <td className="p-3 border">TLB Entries</td>
            <td className="p-3 border">64-256</td>
            <td className="p-3 border">64-1536</td>
            <td className="p-3 border">32-1024</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Virtual memory provides abstraction of large, contiguous address space</li>
        <li>MMU translates virtual addresses to physical addresses</li>
        <li>Page table maps virtual pages to physical frames</li>
        <li>TLB caches recent translations (99%+ hit rate typical)</li>
        <li>Multi-level page tables reduce memory overhead</li>
        <li>Page fault occurs when page is not in physical memory</li>
        <li>Hardware page table walker traverses page table on TLB miss</li>
        <li>Page sizes typically 4KB, with large page support (2MB, 1GB)</li>
      </ul>
    </div>
  </div>
);

export default VirtualMemoryCOA;
