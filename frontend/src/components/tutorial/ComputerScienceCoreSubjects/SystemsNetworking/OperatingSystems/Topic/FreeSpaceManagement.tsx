import React from 'react';

const FreeSpaceManagement: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Free Space Management
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Free space management is how the file system keeps track of which disk blocks are
      available for allocation and which are in use. Efficient free space management is
      crucial for file system performance and space utilization.
    </p>

    {/* Why Free Space Management */}
    <h2 className="text-3xl font-bold mt-8">Why Free Space Management?</h2>
    <p className="leading-relaxed">
      The file system needs to:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Quickly find free blocks when creating or extending files</li>
      <li>Return blocks to the free pool when files are deleted</li>
      <li>Minimize space overhead for tracking free blocks</li>
      <li>Support efficient allocation strategies</li>
    </ul>

    {/* Bitmap Method */}
    <h2 className="text-3xl font-bold mt-8">1. Bitmap (Bit Vector)</h2>
    <p className="leading-relaxed">
      Each block is represented by one bit: 1 means free, 0 means allocated
      (or vice versa depending on the system).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Bitmap Example:

Disk with 16 blocks:
Block:  0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
Status: U  U  F  U  F  F  U  U  F  U  F  F  F  U  U  F

Bitmap: 0  0  1  0  1  1  0  0  1  0  1  1  1  0  0  1
        (U=Used/0, F=Free/1)

Binary representation: 0010110010111001

Finding a free block:
  Scan bitmap for first 1 bit
  Block 2 is the first free block

Allocating block 2:
  Set bit 2 to 0: 0000110010111001

Freeing block 7:
  Set bit 7 to 1: 0000110110111001

Space overhead:
  1 bit per block
  For 1TB disk with 4KB blocks: 1TB / 4KB = 256M blocks
  Bitmap size: 256M bits = 32 MB
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Bitmap Advantages and Disadvantages</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Advantages</th>
            <th className="p-3 border">Disadvantages</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Simple to implement</td>
            <td className="p-3 border">Entire bitmap may not fit in memory</td>
          </tr>
          <tr>
            <td className="p-3 border">Easy to find contiguous blocks</td>
            <td className="p-3 border">Scanning can be slow for large disks</td>
          </tr>
          <tr>
            <td className="p-3 border">Efficient for allocations</td>
            <td className="p-3 border">Fixed overhead regardless of usage</td>
          </tr>
          <tr>
            <td className="p-3 border">Used by modern FS (ext4, NTFS)</td>
            <td className="p-3 border">Fragmentation tracking needed</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Linked List Method */}
    <h2 className="text-3xl font-bold mt-8">2. Linked List (Free List)</h2>
    <p className="leading-relaxed">
      All free blocks are linked together in a chain. The first free block's address
      is kept in a special location, and each free block contains a pointer to the next.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Linked Free List:

Free list head: 2

Disk blocks:
+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
+---+---+---+---+---+---+---+---+---+---+
|USE|USE| 4 |USE| 5 | 8 |USE|USE|NIL|USE|
+---+---+---+---+---+---+---+---+---+---+

Free chain: 2 -> 4 -> 5 -> 8 -> NIL

Allocating a block:
  1. Take block at head (2)
  2. Update head to 4
  Free chain: 4 -> 5 -> 8 -> NIL

Freeing block 7:
  1. Set block 7's next pointer to current head (4)
  2. Update head to 7
  Free chain: 7 -> 4 -> 5 -> 8 -> NIL
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Linked List Characteristics</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>No extra space needed (pointers stored in free blocks themselves)</li>
      <li>Allocation is O(1) - just take from head</li>
      <li>Finding contiguous blocks is slow (must traverse list)</li>
      <li>Used in older systems</li>
    </ul>

    {/* Grouping Method */}
    <h2 className="text-3xl font-bold mt-8">3. Grouping</h2>
    <p className="leading-relaxed">
      Store addresses of n free blocks in the first free block. The last address in the
      group points to another block containing another n free block addresses.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Grouping Method:

Each free block stores multiple addresses:

Block 2 (first free block group):
+---+---+---+---+---+
| 4 | 5 | 8 |11 |20 |  <- Last entry points to next group
+---+---+---+---+---+

Block 20 (next group):
+---+---+---+---+---+
|21 |25 |30 |35 |40 |  <- 40 points to next group
+---+---+---+---+---+

Advantage:
  Can quickly find multiple free blocks
  Read one block, get many free block addresses
`}
      </pre>
    </div>

    {/* Counting Method */}
    <h2 className="text-3xl font-bold mt-8">4. Counting</h2>
    <p className="leading-relaxed">
      Instead of tracking individual blocks, track contiguous runs of free blocks
      using (start, count) pairs.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Counting Method:

Disk with free blocks at: 2-4, 8-12, 20-25

Free list entries:
+-------+-------+
| Start | Count |
+-------+-------+
|   2   |   3   |  (blocks 2, 3, 4)
|   8   |   5   |  (blocks 8, 9, 10, 11, 12)
|  20   |   6   |  (blocks 20-25)
+-------+-------+

Advantages:
  - Very compact for contiguous free space
  - Easy to find contiguous blocks for allocation
  - Works well after defragmentation

Disadvantages:
  - Can degrade with fragmentation
  - More complex to manage
`}
      </pre>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Space</th>
            <th className="p-3 border">Allocation</th>
            <th className="p-3 border">Find Contiguous</th>
            <th className="p-3 border">Used By</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bitmap</td>
            <td className="p-3 border">1 bit/block</td>
            <td className="p-3 border">O(n) scan</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">ext4, NTFS</td>
          </tr>
          <tr>
            <td className="p-3 border">Linked List</td>
            <td className="p-3 border">Pointer/block</td>
            <td className="p-3 border">O(1)</td>
            <td className="p-3 border">Hard</td>
            <td className="p-3 border">Older systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Grouping</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">O(1) batch</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Hybrid systems</td>
          </tr>
          <tr>
            <td className="p-3 border">Counting</td>
            <td className="p-3 border">Variable</td>
            <td className="p-3 border">O(1) if run fits</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">ZFS, Btrfs</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Block Groups */}
    <h2 className="text-3xl font-bold mt-8">Block Groups (Modern Approach)</h2>
    <p className="leading-relaxed">
      Modern file systems divide the disk into block groups, each with its own bitmap
      for better locality and parallelism.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Block Groups (ext4):

Disk divided into groups:
+----------------+----------------+----------------+
|  Block Group 0 |  Block Group 1 |  Block Group 2 |
+----------------+----------------+----------------+

Each block group has:
+--------+--------+--------+--------+
| Super  | Group  | Block  | Inode  | Data Blocks
| Block  | Desc.  | Bitmap | Bitmap |
+--------+--------+--------+--------+

Benefits:
- Smaller bitmaps to scan
- Better locality (related data in same group)
- Reduced seek time
- Can allocate from preferred groups
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Free space management tracks available disk blocks</li>
      <li>Bitmap is most common - simple and efficient for finding contiguous space</li>
      <li>Linked list has no overhead but poor contiguous block finding</li>
      <li>Counting is efficient when disk has large free runs</li>
      <li>Modern file systems use block groups with per-group bitmaps</li>
    </ul>
  </div>
);

export default FreeSpaceManagement;
