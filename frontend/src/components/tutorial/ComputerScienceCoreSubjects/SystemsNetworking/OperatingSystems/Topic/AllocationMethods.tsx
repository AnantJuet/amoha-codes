import React from 'react';

const AllocationMethods: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      File Allocation Methods
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      File allocation methods determine how disk blocks are allocated to files. The allocation
      method impacts the efficiency of disk space utilization, file access speed, and the
      ability to grow files dynamically.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">Overview</h2>
    <p className="leading-relaxed">
      There are three major methods for allocating disk space to files:
    </p>
    <ul className="list-decimal list-inside leading-relaxed space-y-2 mt-3">
      <li>
        <strong>Contiguous Allocation:</strong> Each file occupies a contiguous set of blocks
      </li>
      <li>
        <strong>Linked Allocation:</strong> Each block contains a pointer to the next block
      </li>
      <li>
        <strong>Indexed Allocation:</strong> An index block contains pointers to all file blocks
      </li>
    </ul>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Allocation Methods</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Contiguous</th>
            <th className="p-3 border">Linked</th>
            <th className="p-3 border">Indexed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Sequential Access</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Good</td>
          </tr>
          <tr>
            <td className="p-3 border">Random Access</td>
            <td className="p-3 border">Excellent</td>
            <td className="p-3 border">Poor</td>
            <td className="p-3 border">Good</td>
          </tr>
          <tr>
            <td className="p-3 border">Space Utilization</td>
            <td className="p-3 border">Poor (fragmentation)</td>
            <td className="p-3 border">Good</td>
            <td className="p-3 border">Good</td>
          </tr>
          <tr>
            <td className="p-3 border">File Growth</td>
            <td className="p-3 border">Difficult</td>
            <td className="p-3 border">Easy</td>
            <td className="p-3 border">Easy</td>
          </tr>
          <tr>
            <td className="p-3 border">Overhead</td>
            <td className="p-3 border">Minimal</td>
            <td className="p-3 border">Pointer per block</td>
            <td className="p-3 border">Index block(s)</td>
          </tr>
          <tr>
            <td className="p-3 border">External Fragmentation</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Visual Comparison */}
    <h2 className="text-3xl font-bold mt-8">Visual Comparison</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
File "data.txt" stored using different methods:

1. CONTIGUOUS ALLOCATION:
   Directory: data.txt, start=3, length=4

   Disk: [0][1][2][3][4][5][6][7][8][9]
                  |___|___|___|___|
                  ^               ^
                start           end
   Blocks 3-6 are contiguous

2. LINKED ALLOCATION:
   Directory: data.txt, start=3, end=9

   Disk: [0][1][2][3][4][5][6][7][8][9]
                  |       |   |       |
                  v       v   v       v
              [data|7][data|5][data|9][data|-1]
   Each block points to next; -1 = end

3. INDEXED ALLOCATION:
   Directory: data.txt, index_block=2

   Disk: [0][1][2][3][4][5][6][7][8][9]
              |   |       |   |       |
              v   v       v   v       v
          [index][data] [data][data] [data]
           3,5,6,9
   Index block contains all block numbers
`}
      </pre>
    </div>

    {/* Criteria for Selection */}
    <h2 className="text-3xl font-bold mt-8">Criteria for Selection</h2>
    <p className="leading-relaxed">
      Choosing an allocation method depends on:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li><strong>Access Patterns:</strong> Sequential vs random access needs</li>
      <li><strong>File Size:</strong> Fixed size vs dynamically growing files</li>
      <li><strong>Space Efficiency:</strong> Tolerance for fragmentation and overhead</li>
      <li><strong>Reliability:</strong> Importance of fault tolerance</li>
      <li><strong>Performance:</strong> Speed requirements for I/O operations</li>
    </ul>

    {/* Modern Systems */}
    <h2 className="text-3xl font-bold mt-8">Modern File Systems</h2>
    <p className="leading-relaxed">
      Modern file systems often use combinations or variations of these methods:
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">File System</th>
            <th className="p-3 border">Method</th>
            <th className="p-3 border">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">FAT</td>
            <td className="p-3 border">Linked (via FAT table)</td>
            <td className="p-3 border">FAT table in memory improves performance</td>
          </tr>
          <tr>
            <td className="p-3 border">ext2/ext3</td>
            <td className="p-3 border">Indexed (inodes)</td>
            <td className="p-3 border">Multi-level index blocks</td>
          </tr>
          <tr>
            <td className="p-3 border">ext4</td>
            <td className="p-3 border">Extents (contiguous)</td>
            <td className="p-3 border">Hybrid: extents for large, indexed for small</td>
          </tr>
          <tr>
            <td className="p-3 border">NTFS</td>
            <td className="p-3 border">Extents (runs)</td>
            <td className="p-3 border">MFT stores run lists</td>
          </tr>
          <tr>
            <td className="p-3 border">ZFS</td>
            <td className="p-3 border">Block pointers</td>
            <td className="p-3 border">Copy-on-write with checksums</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Extent-Based Allocation */}
    <h2 className="text-3xl font-bold mt-8">Extent-Based Allocation</h2>
    <p className="leading-relaxed">
      An extent is a contiguous group of blocks. Instead of tracking individual blocks,
      modern file systems track extents: (start_block, length) pairs.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Extent-Based Allocation (ext4):

Traditional indexed (many pointers):
[5][6][7][8][20][21][22][100][101][102][103]
 ^  ^  ^  ^   ^   ^   ^    ^    ^    ^    ^
 11 separate block pointers

Extent-based (few extents):
Extent 1: (start=5, length=4)   -> blocks 5-8
Extent 2: (start=20, length=3)  -> blocks 20-22
Extent 3: (start=100, length=4) -> blocks 100-103

Only 3 extents instead of 11 pointers!

Benefits:
- Reduced metadata
- Better sequential performance
- More efficient for large files
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Three main allocation methods: contiguous, linked, and indexed</li>
      <li>Contiguous offers best performance but suffers from fragmentation</li>
      <li>Linked allows easy growth but poor random access</li>
      <li>Indexed provides balance but requires space for index blocks</li>
      <li>Modern file systems use extents for efficiency</li>
    </ul>
  </div>
);

export default AllocationMethods;
