import React from 'react';

const ContiguousFileAllocation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Contiguous File Allocation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Contiguous allocation requires each file to occupy a set of contiguous blocks on the
      disk. This is the simplest allocation method and provides excellent read performance,
      but suffers from external fragmentation and difficulty in file growth.
    </p>

    {/* How It Works */}
    <h2 className="text-3xl font-bold mt-8">How It Works</h2>
    <p className="leading-relaxed">
      Each file is stored as a contiguous sequence of blocks. The directory entry for each
      file contains only two pieces of information: the starting block address and the
      length (number of blocks).
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Contiguous Allocation:

Directory:
+----------+-------+--------+
| Filename | Start | Length |
+----------+-------+--------+
| file_a   |   0   |   3    |
| file_b   |   6   |   4    |
| file_c   |  14   |   2    |
+----------+-------+--------+

Disk Blocks:
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |11 |12 |13 |14 |15 |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+
|  file_a |   |free |  file_b   |       free        |file_c |
+---------+---+-----+-----------+-------------------+-------+

Accessing file_b, block 2:
  Physical block = start + offset = 6 + 2 = block 8
`}
      </pre>
    </div>

    {/* Access Methods */}
    <h2 className="text-3xl font-bold mt-8">File Access</h2>
    <h3 className="text-2xl font-semibold mt-4">Sequential Access</h3>
    <p className="leading-relaxed">
      Excellent performance because blocks are adjacent. The disk head moves minimally
      or not at all between block reads.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Reading file_b sequentially:
  Read block 6 -> Read block 7 -> Read block 8 -> Read block 9

  Disk head movement: minimal (adjacent tracks)
  Time: Very fast, nearly sequential disk access
`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-4">Random Access</h3>
    <p className="leading-relaxed">
      Also excellent. To access the i-th block of a file, simply calculate:
      physical_block = start_block + i
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Accessing file_b[2] (third block of file_b):
  physical_block = 6 + 2 = 8

Direct access - O(1) time complexity
No need to traverse any pointers or index
`}
      </pre>
    </div>

    {/* Example Problem */}
    <h2 className="text-3xl font-bold mt-8">Example Problem</h2>
    <p className="leading-relaxed">
      A disk has 100 blocks (0-99). The following files are stored contiguously:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">File</th>
            <th className="p-3 border">Start</th>
            <th className="p-3 border">Length</th>
            <th className="p-3 border">End Block</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">A</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">10</td>
            <td className="p-3 border">9</td>
          </tr>
          <tr>
            <td className="p-3 border">B</td>
            <td className="p-3 border">20</td>
            <td className="p-3 border">15</td>
            <td className="p-3 border">34</td>
          </tr>
          <tr>
            <td className="p-3 border">C</td>
            <td className="p-3 border">50</td>
            <td className="p-3 border">20</td>
            <td className="p-3 border">69</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p className="leading-relaxed mt-4">
      <strong>Free blocks:</strong> 10-19 (10 blocks), 35-49 (15 blocks), 70-99 (30 blocks)
    </p>
    <p className="leading-relaxed mt-2">
      <strong>Question:</strong> Can we create a new file D of size 25 blocks?
    </p>
    <p className="leading-relaxed mt-2">
      <strong>Answer:</strong> Yes, we can place it at blocks 70-94 (30 contiguous blocks available).
      The 10-block and 15-block free spaces cannot accommodate a 25-block file due to
      the contiguity requirement.
    </p>

    {/* Problems */}
    <h2 className="text-3xl font-bold mt-8">External Fragmentation</h2>
    <p className="leading-relaxed">
      As files are created and deleted, free space becomes fragmented into small, non-contiguous
      pieces that cannot be used for large files.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
External Fragmentation Example:

Initial state:
[AAAA][BBBB][CCCC][DDDD][EEEE][    free    ]

After deleting B and D:
[AAAA][free][CCCC][free][EEEE][    free    ]
      ^^^^^      ^^^^^
      4 blocks   4 blocks

Total free: 4 + 4 + many = plenty of space
Can we fit a 6-block file? NO!
Largest contiguous space is too small.

This is external fragmentation.
`}
      </pre>
    </div>

    {/* Solutions */}
    <h2 className="text-3xl font-bold mt-8">Solutions to Fragmentation</h2>
    <ul className="list-decimal list-inside leading-relaxed space-y-2">
      <li>
        <strong>Compaction (Defragmentation):</strong> Move all files to one end of the disk,
        consolidating free space. Very expensive in terms of I/O.
      </li>
      <li>
        <strong>Best-Fit Allocation:</strong> Choose the smallest free hole that is large
        enough. Reduces waste but can create many small unusable holes.
      </li>
      <li>
        <strong>First-Fit Allocation:</strong> Use the first hole that is large enough.
        Fast but may fragment large holes.
      </li>
      <li>
        <strong>Worst-Fit Allocation:</strong> Use the largest available hole.
        Leaves larger remaining holes.
      </li>
    </ul>

    {/* File Size Problem */}
    <h2 className="text-3xl font-bold mt-8">File Size Problem</h2>
    <p className="leading-relaxed">
      How much space should be allocated for a file when it's created? If we allocate
      too little, the file cannot grow. If we allocate too much, space is wasted.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Pre-allocation requires knowing file size in advance</li>
      <li>Growing a file may require relocating the entire file</li>
      <li>Some systems use modified contiguous (extents) to address this</li>
    </ul>

    {/* Advantages */}
    <h2 className="text-3xl font-bold mt-8">Advantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Excellent sequential and random access performance</li>
      <li>Simple directory entry (just start and length)</li>
      <li>Easy to implement</li>
      <li>Minimal seek time for accessing file blocks</li>
    </ul>

    {/* Disadvantages */}
    <h2 className="text-3xl font-bold mt-8">Disadvantages</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>External fragmentation wastes disk space</li>
      <li>File size must be known at creation time</li>
      <li>Difficult to grow files</li>
      <li>Compaction is expensive</li>
    </ul>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Contiguous allocation stores files in adjacent blocks</li>
      <li>Provides excellent performance for both sequential and random access</li>
      <li>Suffers from external fragmentation</li>
      <li>Used in modified form (extents) in modern file systems</li>
    </ul>
  </div>
);

export default ContiguousFileAllocation;
