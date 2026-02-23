import React from 'react';

const InterconnectionNetworks: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Interconnection Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Interconnection networks are the communication infrastructure that connects processors,
      memory modules, and I/O devices in parallel computing systems. The design of the
      interconnection network significantly impacts system performance, scalability, cost,
      and reliability. Different network topologies offer various trade-offs between these
      factors, making network design a critical aspect of parallel computer architecture.
    </p>

    <h2 className="text-3xl font-bold mt-8">Definition</h2>
    <p className="leading-relaxed">
      An interconnection network is a collection of nodes (processors, memories) and links
      (wires, switches) that enables communication between components in a parallel system.
      The network determines how data flows between processors and memory, affecting latency,
      bandwidth, and scalability of the overall system.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Interconnection Network Role:

+-------+  +-------+  +-------+  +-------+
| CPU 0 |  | CPU 1 |  | CPU 2 |  | CPU 3 |
+---+---+  +---+---+  +---+---+  +---+---+
    |          |          |          |
    +-----+----+----+-----+----+-----+
          |              |
    +-----+-----+  +-----+-----+
    |           |  |           |
    |  INTER-   |  |  MEMORY   |
    |  CONNECTION|  |  MODULES  |
    |  NETWORK  |  |           |
    |           |  |           |
    +-----------+  +-----------+

Key Functions:
- Connect processors to memory
- Connect processors to each other
- Connect I/O devices
- Provide required bandwidth
- Minimize latency
- Enable scalability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network Characteristics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Importance</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bandwidth</td>
            <td className="p-3 border">Data transfer rate (bits/second)</td>
            <td className="p-3 border">Throughput capacity</td>
          </tr>
          <tr>
            <td className="p-3 border">Latency</td>
            <td className="p-3 border">Time for message to traverse network</td>
            <td className="p-3 border">Response time</td>
          </tr>
          <tr>
            <td className="p-3 border">Diameter</td>
            <td className="p-3 border">Maximum hops between any two nodes</td>
            <td className="p-3 border">Worst-case latency</td>
          </tr>
          <tr>
            <td className="p-3 border">Bisection Width</td>
            <td className="p-3 border">Minimum links to split network in half</td>
            <td className="p-3 border">Aggregate bandwidth</td>
          </tr>
          <tr>
            <td className="p-3 border">Node Degree</td>
            <td className="p-3 border">Number of links per node</td>
            <td className="p-3 border">Hardware cost</td>
          </tr>
          <tr>
            <td className="p-3 border">Scalability</td>
            <td className="p-3 border">How well it handles more nodes</td>
            <td className="p-3 border">System growth</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Bus Network</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Bus Network (Shared Medium):

+-------+  +-------+  +-------+  +-------+
| CPU 0 |  | CPU 1 |  | CPU 2 |  | CPU 3 |
+---+---+  +---+---+  +---+---+  +---+---+
    |          |          |          |
====+====+=====+====+=====+====+=====+====  <- Shared Bus
    |          |          |          |
+---+---+  +---+---+  +---+---+  +---+---+
| Mem 0 |  | Mem 1 |  |  I/O  |  |  I/O  |
+-------+  +-------+  +-------+  +-------+

Characteristics:
- Simplest interconnection
- Single shared communication channel
- Only one transfer at a time
- Broadcast capability

Advantages:
- Low cost, simple design
- Easy to implement cache coherence (snooping)
- All-to-all communication in one hop

Disadvantages:
- Limited scalability (typically 2-8 processors)
- Bandwidth becomes bottleneck
- Contention increases with processors`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Crossbar Switch</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Crossbar Switch Network (4x4):

             Memory Modules
            M0   M1   M2   M3
            |    |    |    |
        +---+----+----+----+---+
        |   |    |    |    |   |
CPU 0 --+---X----+----+----+---+--
        |   |    |    |    |   |
CPU 1 --+---+----X----+----+---+--
        |   |    |    |    |   |
CPU 2 --+---+----+----X----+---+--
        |   |    |    |    |   |
CPU 3 --+---+----+----+----X---+--
        |   |    |    |    |   |
        +---+----+----+----+---+

X = Active switch point (connection made)

Full NxN Crossbar:
- N inputs (CPUs)
- N outputs (Memories)
- N^2 switch points

Advantages:
- Non-blocking: any permutation of connections
- Full bandwidth: N simultaneous transfers
- Low latency (single switch)

Disadvantages:
- Cost: O(N^2) switches
- Does not scale well for large N
- Used in small-scale systems (up to ~16-64)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Multistage Interconnection Networks</h2>
    <p className="leading-relaxed">
      Multistage networks provide a balance between cost and performance by using multiple
      stages of smaller switches instead of a full crossbar.
    </p>

    <h3 className="text-2xl font-semibold mt-6">Omega Network</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Omega Network (8 inputs, 8 outputs, 3 stages):

Inputs    Stage 0       Stage 1       Stage 2    Outputs
  0 --------[0]----------[0]----------[0]-------- 0
             \\  /         \\  /         \\  /
  1 --------[  ]----------[  ]----------[  ]-------- 1
             /  \\         /  \\         /  \\
  2 --------[1]----------[1]----------[1]-------- 2
             \\  /         \\  /         \\  /
  3 --------[  ]----------[  ]----------[  ]-------- 3
             /  \\         /  \\         /  \\
  4 --------[2]----------[2]----------[2]-------- 4
             \\  /         \\  /         \\  /
  5 --------[  ]----------[  ]----------[  ]-------- 5
             /  \\         /  \\         /  \\
  6 --------[3]----------[3]----------[3]-------- 6
             \\  /         \\  /         \\  /
  7 --------[  ]----------[  ]----------[  ]-------- 7

[X] = 2x2 switch
log2(N) stages for N inputs
N/2 switches per stage
Total switches: (N/2) * log2(N)

For 8 inputs: 4 * 3 = 12 switches (vs 64 for crossbar)

Routing in Omega Network:
- Destination address bits control routing
- Bit i controls stage i (0=upper output, 1=lower output)
- Example: Route from 3 (011) to 5 (101)
  Stage 0: bit 1 = 1 -> lower output
  Stage 1: bit 0 = 0 -> upper output
  Stage 2: bit 1 = 1 -> lower output`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Butterfly Network</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Butterfly Network (8 nodes):

Stage 0         Stage 1         Stage 2
   0 --------------- 0 --------------- 0
    \\             / X \\             /
     \\           /     \\           /
      \\         /       \\         /
   1 ---+------+-1-------+---------+- 1
        |      |          \\       /
        |      |           \\     /
   2 ---+------+- 2 --------+---+-- 2
        |      |          /     \\
        |      |         /       \\
   3 -------+-- 3 ------+-------- 3
             \\        /
              \\      /
   4 ----------X----X------------- 4
              /      \\
             /        \\
   5 -------+-- 5 ------+-------- 5
        |      |         \\       /
        |      |          \\     /
   6 ---+------+- 6 --------+---+-- 6
        |      |           /     \\
        |      |          /       \\
   7 ---+------+- 7-------+---------+- 7
      /           \\     /             \\
     /             \\   /               \\
    /               X /                 \\

Butterfly pattern: connections span 2^i at stage i`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Direct Networks (Topologies)</h2>

    <h3 className="text-2xl font-semibold mt-6">Ring Network</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Ring Topology (8 nodes):

        0 -------- 1
       /            \\
      /              \\
     7                2
     |                |
     6                3
      \\              /
       \\            /
        5 -------- 4

Properties:
- Node degree: 2
- Diameter: N/2 (worst case: half the ring)
- Bisection width: 2
- Total links: N

Simple but poor scalability for large N`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2D Mesh Network</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`2D Mesh (4x4 = 16 nodes):

0,0 ---- 0,1 ---- 0,2 ---- 0,3
 |        |        |        |
1,0 ---- 1,1 ---- 1,2 ---- 1,3
 |        |        |        |
2,0 ---- 2,1 ---- 2,2 ---- 2,3
 |        |        |        |
3,0 ---- 3,1 ---- 3,2 ---- 3,3

Properties (NxN mesh):
- Node degree: 2 (corners) to 4 (interior)
- Diameter: 2(N-1) = 2*sqrt(total) - 2
- Bisection width: N
- Total links: 2N(N-1)

Advantages:
- Regular structure, easy to manufacture
- Good for nearest-neighbor communication
- Scalable

Used in: Many parallel processors, GPU interconnects`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2D Torus</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`2D Torus (4x4) - Mesh with wraparound:

+---0,0 ---- 0,1 ---- 0,2 ---- 0,3---+
|    |        |        |        |    |
|   1,0 ---- 1,1 ---- 1,2 ---- 1,3   |
|    |        |        |        |    |
|   2,0 ---- 2,1 ---- 2,2 ---- 2,3   |
|    |        |        |        |    |
+---3,0 ---- 3,1 ---- 3,2 ---- 3,3---+
     |                          |
     +------ wraparound --------+

Properties vs Mesh:
- Node degree: 4 (uniform)
- Diameter: N (half of mesh)
- Bisection width: 2N (double mesh)
- Better for global communication

Used in: IBM Blue Gene, many supercomputers`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">Hypercube</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Hypercube Networks:

2D Hypercube (4 nodes):    3D Hypercube (8 nodes):
     00 ---- 01                  000 -------- 001
      |       |                   |\\          |\\
      |       |                   | \\         | \\
     10 ---- 11                   |  010 -------- 011
                                  |   |       |   |
                                 100--|------101  |
                                   \\  |        \\  |
                                    \\ |         \\ |
                                    110 -------- 111

4D Hypercube (16 nodes): Each node connects to 4 others
Node i connects to nodes that differ by exactly 1 bit

Properties (n-dimensional, 2^n nodes):
- Node degree: n = log2(N)
- Diameter: n = log2(N)
- Bisection width: N/2
- Total links: (N * n)/2 = (N * log2(N))/2

Advantages:
- Logarithmic diameter (fast global communication)
- High bisection bandwidth
- Many alternate paths (fault tolerance)

Disadvantage:
- Node degree grows with N (log2(N))`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Network Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Network</th>
            <th className="p-3 border">Degree</th>
            <th className="p-3 border">Diameter</th>
            <th className="p-3 border">Bisection</th>
            <th className="p-3 border">Links</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bus</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">1</td>
          </tr>
          <tr>
            <td className="p-3 border">Ring</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">N/2</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">N</td>
          </tr>
          <tr>
            <td className="p-3 border">2D Mesh (NxN)</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">2(N-1)</td>
            <td className="p-3 border">N</td>
            <td className="p-3 border">2N(N-1)</td>
          </tr>
          <tr>
            <td className="p-3 border">2D Torus</td>
            <td className="p-3 border">4</td>
            <td className="p-3 border">N</td>
            <td className="p-3 border">2N</td>
            <td className="p-3 border">2N^2</td>
          </tr>
          <tr>
            <td className="p-3 border">Hypercube (2^n)</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">n</td>
            <td className="p-3 border">N/2</td>
            <td className="p-3 border">Nn/2</td>
          </tr>
          <tr>
            <td className="p-3 border">Crossbar</td>
            <td className="p-3 border">N</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">N^2/4</td>
            <td className="p-3 border">N^2</td>
          </tr>
          <tr>
            <td className="p-3 border">Omega (N)</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">log N</td>
            <td className="p-3 border">N/2</td>
            <td className="p-3 border">N log N/2</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">5. Fat Tree Network</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`Fat Tree Network:

                    +-------+
                    | Root  |
                    |Switch |
                    +---+---+
                        |
         +------+-------+-------+------+
         |      |               |      |
    +----+----+ | +----+----+  +----+----+
    | Switch  | | | Switch  |  | Switch  |
    +----+----+ | +----+----+  +----+----+
         |      |       |           |
    +----+--+---+---+---+--+    +---+---+
    |       |       |      |   |       |
   [0]     [1]     [2]    [3] [4]     [5]
   CPU     CPU     CPU    CPU CPU     CPU

Key Feature:
- Bandwidth increases toward root
- Multiple links at higher levels
- Non-blocking if enough bandwidth at top

Advantages:
- Full bisection bandwidth possible
- Any-to-any communication
- Commonly used in data centers

Used in: InfiniBand clusters, data center networks`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Routing Algorithms</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Algorithm</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Properties</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Dimension-Order (XY)</td>
            <td className="p-3 border">Route in X direction first, then Y</td>
            <td className="p-3 border">Deadlock-free, simple</td>
          </tr>
          <tr>
            <td className="p-3 border">Shortest Path</td>
            <td className="p-3 border">Minimal number of hops</td>
            <td className="p-3 border">Lowest latency</td>
          </tr>
          <tr>
            <td className="p-3 border">Adaptive</td>
            <td className="p-3 border">Choose path based on traffic</td>
            <td className="p-3 border">Load balancing, complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Oblivious</td>
            <td className="p-3 border">Path independent of network state</td>
            <td className="p-3 border">Simple, predictable</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`XY Routing Example (4x4 Mesh):

Source: (0,0)  Destination: (2,3)

     0   1   2   3
   +---+---+---+---+
0  |[S]| > | > | > |  First: Route in X (0->3)
   +---+---+---+---+
1  |   |   |   | v |  Then: Route in Y (0->2)
   +---+---+---+---+
2  |   |   |   |[D]|
   +---+---+---+---+
3  |   |   |   |   |
   +---+---+---+---+

Path: (0,0) -> (0,1) -> (0,2) -> (0,3) -> (1,3) -> (2,3)
Total hops: 5`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Modern Interconnect Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technology</th>
            <th className="p-3 border">Topology</th>
            <th className="p-3 border">Bandwidth</th>
            <th className="p-3 border">Application</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Intel UPI</td>
            <td className="p-3 border">Point-to-point</td>
            <td className="p-3 border">16 GT/s</td>
            <td className="p-3 border">Multi-socket Xeon</td>
          </tr>
          <tr>
            <td className="p-3 border">AMD Infinity Fabric</td>
            <td className="p-3 border">Scalable coherent</td>
            <td className="p-3 border">32 GT/s</td>
            <td className="p-3 border">EPYC, Threadripper</td>
          </tr>
          <tr>
            <td className="p-3 border">NVIDIA NVLink</td>
            <td className="p-3 border">Point-to-point mesh</td>
            <td className="p-3 border">900 GB/s</td>
            <td className="p-3 border">GPU interconnect</td>
          </tr>
          <tr>
            <td className="p-3 border">InfiniBand HDR</td>
            <td className="p-3 border">Fat tree</td>
            <td className="p-3 border">200 Gb/s</td>
            <td className="p-3 border">HPC clusters</td>
          </tr>
          <tr>
            <td className="p-3 border">CXL</td>
            <td className="p-3 border">Switched fabric</td>
            <td className="p-3 border">64 GT/s (CXL 3.0)</td>
            <td className="p-3 border">Memory pooling</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Interconnection networks connect processors, memory, and I/O in parallel systems</li>
        <li>Key metrics: bandwidth, latency, diameter, bisection width, node degree</li>
        <li>Bus: simple but limited scalability; crossbar: full bandwidth but O(N^2) cost</li>
        <li>Multistage networks (Omega, Butterfly): balance cost and performance</li>
        <li>Direct networks (Mesh, Torus, Hypercube): used in large-scale systems</li>
        <li>Fat trees provide full bisection bandwidth for data centers</li>
        <li>Routing algorithms (XY, adaptive) determine path selection</li>
        <li>Modern interconnects (NVLink, InfiniBand, CXL) enable high-performance computing</li>
      </ul>
    </div>
  </div>
);

export default InterconnectionNetworks;
