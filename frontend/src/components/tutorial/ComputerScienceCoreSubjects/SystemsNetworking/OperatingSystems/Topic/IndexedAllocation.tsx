import React from 'react';

const IndexedAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Indexed File Allocation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Indexed allocation combines the benefits of contiguous and linked allocation by
      bringing all pointers together into an index block. This allows random access without
      suffering from external fragmentation, making it the basis for most modern file systems.
    </p>

    {/* How It Works */}
    <h2 className="text-3xl font-bold mt-8">How It Works</h2>
    <p className="leading-relaxed">
      Each file has an index block (also called an inode in UNIX) that contains an array
      of pointers to the file's data blocks. The directory entry points to the index block.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Indexed Allocation:

Directory:
+----------+-------------+
| Filename | Index Block |
+----------+-------------+
| file_a   |      5      |
+----------+-------------+

Index Block (block 5):
+---+---+---+---+---+---+
| 2 | 8 | 12| 15| -1| -1|
+---+---+---+---+---+---+
  |   |   |   |
  v   v   v   v
+---+---+---+---+
| D | D | D | D |  (Data blocks)
+---+---+---+---+
 blk blk blk blk
  2   8  12  15

Disk view:
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |11 |12 |13 |14 |15 |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|   |   | A |   |   |IDX|   |   | A |   |   |   | A |   |   | A |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
        ^           ^           ^               ^               ^
        |           |           |               |               |
      data[0]    index       data[1]         data[2]         data[3]
`}
      </pre>
    </div>

    {/* Random Access */}
    <h2 className="text-3xl font-bold mt-8">Random Access</h2>
    <p className="leading-relaxed">
      Indexed allocation supports efficient random access. To access the i-th block,
      look up index[i] to get the physical block number.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Accessing file_a[2] (third block):

1. Get index block number from directory: 5
2. Read index block 5
3. Look up entry 2: index[2] = 12
4. Read data block 12

Total disk reads: 2 (index block + data block)
Time complexity: O(1) - constant time regardless of file position

Compare to:
- Contiguous: 1 read (calculate offset)
- Linked: n reads (traverse chain)
`}
      </pre>
    </div>

    {/* Index Block Size Problem */}
    <h2 className="text-3xl font-bold mt-8">Index Block Size Problem</h2>
    <p className="leading-relaxed">
      A single index block limits file size. With 4KB blocks and 4-byte pointers,
      one index block holds 1024 pointers = 4MB maximum file size.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Single index block limitation:

Block size: 4 KB = 4096 bytes
Pointer size: 4 bytes
Pointers per index block: 4096 / 4 = 1024
Maximum file size: 1024 * 4 KB = 4 MB

This is too small for modern files!

Solutions:
1. Linked index blocks
2. Multi-level index
3. Combined scheme (UNIX inode)
`}
      </pre>
    </div>

    {/* Multi-Level Index */}
    <h2 className="text-3xl font-bold mt-8">Multi-Level Index</h2>
    <p className="leading-relaxed">
      Multi-level indexing uses index blocks that point to other index blocks,
      allowing much larger files.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Multi-Level Index:

Single Indirect:
  Index Block -> Data Blocks
  Max size: 1024 * 4KB = 4MB

Double Indirect:
  Index Block -> Index Blocks -> Data Blocks
  Max size: 1024 * 1024 * 4KB = 4GB

Triple Indirect:
  Index Block -> Index Blocks -> Index Blocks -> Data Blocks
  Max size: 1024 * 1024 * 1024 * 4KB = 4TB

Double Indirect Example:
     [Top Index]
     /    |    \\
    v     v     v
  [Idx] [Idx] [Idx]  (1024 index blocks)
   /\\    /\\    /\\
  vv    vv    vv
 [data blocks]       (1024 * 1024 data blocks)
`}
      </pre>
    </div>

    {/* UNIX Inode Scheme */}
    <h2 className="text-3xl font-bold mt-8">UNIX Combined Scheme (Inode)</h2>
    <p className="leading-relaxed">
      UNIX uses a combined scheme with direct pointers for small files and indirect
      pointers for larger files.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
UNIX Inode Structure (ext2/ext3):

+-------------------+
|   Mode, Owner,    |
|   Size, Times     |  (metadata)
+-------------------+
| Direct 0  |-----> | data block 0
| Direct 1  |-----> | data block 1
| Direct 2  |-----> | data block 2
| ...              |
| Direct 11 |-----> | data block 11
+-------------------+
| Single    |-----> | Index Block -> 1024 data blocks
| Indirect  |
+-------------------+
| Double    |-----> | Index -> 1024 Index -> 1M data blocks
| Indirect  |
+-------------------+
| Triple    |-----> | Index -> Index -> Index -> 1G data blocks
| Indirect  |
+-------------------+

Maximum file size calculation (4KB blocks, 4-byte pointers):
- Direct:          12 * 4KB = 48 KB
- Single Indirect: 1024 * 4KB = 4 MB
- Double Indirect: 1024 * 1024 * 4KB = 4 GB
- Triple Indirect: 1024^3 * 4KB = 4 TB
Total: ~4 TB

Small files (< 48KB): Only direct pointers used
                      Fast access - just 1 disk read for data
`}
      </pre>
    </div>

    {/* Example Calculation */}
    <h2 className="text-3xl font-bold mt-8">Example: Block Access Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Given: Block size = 4KB, Pointer size = 4 bytes
       12 direct pointers, 1 single, 1 double, 1 triple indirect

Question: How many disk reads to access byte 5,000,000?

Step 1: Which block?
  Byte 5,000,000 / 4096 = block 1220 (0-indexed)

Step 2: Where is block 1220?
  - Direct (0-11): blocks 0-11
  - Single Indirect (12-1035): blocks 12 to 12+1023 = 1035
  - Double Indirect (1036-...): block 1220 falls here

  Block 1220 is in double indirect region
  Offset from double indirect start: 1220 - 1036 = 184

Step 3: Navigate double indirect
  First level index: 184 / 1024 = 0 (first index block)
  Second level index: 184 % 1024 = 184 (184th entry)

Disk reads required:
  1. Read inode (get double indirect pointer)
  2. Read first-level index block
  3. Read second-level index block (entry 0)
  4. Read data block (entry 184)
Total: 4 disk reads (or 3 if inode is cached)
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>No external fragmentation</li>
      <li>Supports random access efficiently</li>
      <li>Files can grow dynamically</li>
      <li>Small files use only direct pointers (fast access)</li>
      <li>Can support very large files with multi-level indexing</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Index block overhead (wastes space for small files)</li>
      <li>Multiple disk accesses for large file access</li>
      <li>Index block size limits maximum file size</li>
      <li>More complex than contiguous or linked allocation</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Indexed allocation uses an index block to store all data block pointers</li>
      <li>Supports efficient random access - O(1) with single index</li>
      <li>Multi-level indexing enables very large files</li>
      <li>UNIX inode uses combined scheme for efficiency</li>
      <li>Basis for most modern file systems (ext2/3/4, NTFS, etc.)</li>
    </ul>
  </div>
);

export default IndexedAllocation;
