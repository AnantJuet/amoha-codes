import React from 'react';

const LinkedAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Linked File Allocation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Linked allocation solves the fragmentation problems of contiguous allocation by storing
      each file as a linked list of disk blocks. The blocks can be scattered anywhere on the
      disk, with each block containing a pointer to the next block in the file.
    </p>

    {/* How It Works */}
    <h2 className="text-3xl font-bold mt-8">How It Works</h2>
    <p className="leading-relaxed">
      In linked allocation, the directory contains a pointer to the first and optionally
      the last block of the file. Each block contains data and a pointer to the next block.
      The last block's pointer is NULL or a special end marker.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Linked Allocation:

Directory:
+----------+-------+------+
| Filename | Start | End  |
+----------+-------+------+
| file_a   |   2   |  10  |
+----------+-------+------+

Disk Blocks:
+---+---+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10| 11|
+---+---+---+---+---+---+---+---+---+---+---+---+
|   |   | A |   |   | A |   |   | A |   | A |   |
|   |   |->5|   |   |->8|   |   |->10|  |NIL|   |
+---+---+---+---+---+---+---+---+---+---+---+---+

File A: Block 2 -> Block 5 -> Block 8 -> Block 10 -> END

Each block structure:
+---------------------------+
|         Data              |  (block_size - pointer_size bytes)
+---------------------------+
|    Pointer to Next        |  (typically 4 bytes)
+---------------------------+
`}
      </pre>
    </div>

    {/* Sequential Access */}
    <h2 className="text-3xl font-bold mt-8">Sequential Access</h2>
    <p className="leading-relaxed">
      Sequential access works well with linked allocation. Start at the first block and
      follow the chain of pointers.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Reading file_a sequentially:

1. Get start block from directory: block 2
2. Read block 2, get next pointer: 5
3. Read block 5, get next pointer: 8
4. Read block 8, get next pointer: 10
5. Read block 10, next pointer is NULL -> END

Seek pattern: 2 -> 5 -> 8 -> 10
May involve disk head movement between non-adjacent blocks
`}
      </pre>
    </div>

    {/* Random Access Problem */}
    <h2 className="text-3xl font-bold mt-8">Random Access Problem</h2>
    <p className="leading-relaxed">
      Random access is very inefficient with linked allocation. To access the i-th block,
      you must traverse the chain from the beginning.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Accessing file_a[3] (fourth block):

Must follow the chain:
  Block 2 (read, get next=5)
  Block 5 (read, get next=8)
  Block 8 (read, get next=10)
  Block 10 (this is block 3 - found!)

Time complexity: O(n) where n is block number
For block 1000, must read 1000 blocks!

Compare to contiguous: O(1) - just calculate offset
`}
      </pre>
    </div>

    {/* Pointer Overhead */}
    <h2 className="text-3xl font-bold mt-8">Pointer Overhead</h2>
    <p className="leading-relaxed">
      Each block must reserve space for the next pointer, reducing usable data space.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Space overhead calculation:

Block size: 512 bytes
Pointer size: 4 bytes
Usable data per block: 512 - 4 = 508 bytes

Overhead percentage: 4/512 = 0.78%

For a 10 MB file:
  Blocks needed (without pointers): 10 MB / 512 = 20,480 blocks
  Blocks needed (with pointers): 10 MB / 508 = 20,157 + overhead

  Actual storage for 10 MB data: ~10.08 MB
`}
      </pre>
    </div>

    {/* Reliability Problem */}
    <h2 className="text-3xl font-bold mt-8">Reliability Problem</h2>
    <p className="leading-relaxed">
      If a pointer is corrupted, the rest of the file is lost. A single bad block can
      break the entire chain.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Pointer corruption:

Original chain:
Block 2 -> Block 5 -> Block 8 -> Block 10 -> END

If block 5's pointer is corrupted to point to block 99:
Block 2 -> Block 5 -> Block 99 (wrong!) -> ???

Blocks 8 and 10 are now inaccessible!
They become orphaned blocks (lost space).
`}
      </pre>
    </div>

    {/* FAT - File Allocation Table */}
    <h2 className="text-3xl font-bold mt-8">FAT (File Allocation Table)</h2>
    <p className="leading-relaxed">
      FAT is a variation of linked allocation that moves all pointers into a separate table
      at the beginning of the disk. This improves random access significantly.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
File Allocation Table (FAT):

FAT Table (kept in memory):
+-------+-------+
| Block | Next  |
+-------+-------+
|   0   |  -1   |  (free or reserved)
|   1   |  -1   |
|   2   |   5   |  file_a: 2->5->8->10
|   3   |  -1   |
|   4   |  -1   |
|   5   |   8   |
|   6   |  -1   |
|   7   |  -1   |
|   8   |  10   |
|   9   |  -1   |
|  10   | EOF   |  (End of file marker)
|  11   |  -1   |
+-------+-------+

Advantages of FAT:
- FAT can be cached in memory
- Random access: traverse FAT (in memory), then one disk read
- Data blocks have full capacity (no embedded pointers)
- Widely used: FAT12, FAT16, FAT32, exFAT

Random access with FAT:
  file_a[3]: Follow chain 2->5->8->10 in memory FAT
             Then read only block 10 from disk
             Much faster than reading all blocks!
`}
      </pre>
    </div>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>No external fragmentation - any free block can be used</li>
      <li>Files can grow dynamically - just add blocks to the chain</li>
      <li>Simple allocation - allocate any free block</li>
      <li>No need to know file size in advance</li>
      <li>No compaction needed</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Poor random access performance (O(n))</li>
      <li>Space overhead for pointers in each block</li>
      <li>Reliability issues if pointers are corrupted</li>
      <li>Extra disk seeks for non-adjacent blocks</li>
      <li>Cannot support direct access efficiently</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Linked allocation uses pointers to chain blocks together</li>
      <li>Eliminates external fragmentation</li>
      <li>Poor random access - must traverse chain</li>
      <li>FAT improves random access by caching pointers in memory</li>
      <li>Used in FAT file systems (FAT12, FAT16, FAT32)</li>
    </ul>
  </div>
);

export default LinkedAllocation;
