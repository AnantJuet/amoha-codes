import React from 'react';

const ROMTypes: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ROM Types: PROM, EPROM, and EEPROM
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Read-Only Memory (ROM) is non-volatile memory that retains its contents even when
      power is removed. Unlike RAM, ROM is primarily designed for reading, though some
      variants allow limited writing. ROM is used for storing firmware, bootloaders,
      and other essential code that must persist across power cycles.
    </p>

    <h2 className="text-3xl font-bold mt-8">Overview of ROM</h2>
    <p className="leading-relaxed">
      Traditional ROM (Mask ROM) has its contents permanently written during manufacturing.
      The data pattern is literally built into the chip's structure. While very reliable
      and cheap in high volumes, Mask ROM cannot be changed after production.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ROM vs RAM Characteristics:

Feature           | ROM                | RAM
------------------|--------------------|-----------------
Volatility        | Non-volatile       | Volatile
Primary Operation | Read-only          | Read/Write
Data Retention    | Permanent          | Temporary
Write Speed       | Slow/Impossible    | Fast
Typical Use       | Firmware, BIOS     | Working memory

ROM Evolution:
Mask ROM -> PROM -> EPROM -> EEPROM -> Flash

Each step added more flexibility for programming/erasing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Mask ROM</h2>
    <p className="leading-relaxed">
      Mask ROM is programmed during the manufacturing process. The data is encoded
      in the physical structure of the chip using photolithographic masks. Once
      manufactured, the contents cannot be altered.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Mask ROM Structure:

Address Lines (Row Select)
        |
        v
    +---+---+---+---+
    |   |   |   |   |  Word Line 0
    +---+---+---+---+
    |   | X |   | X |  Word Line 1 (X = transistor present)
    +---+---+---+---+
    | X |   | X |   |  Word Line 2
    +---+---+---+---+
    |   |   |   |   |  Word Line 3
    +---+---+---+---+
        |   |   |   |
        v   v   v   v
      Bit Lines (Data Out)

Programming:
- Transistor present (X) = logic 1
- No transistor = logic 0
- Pattern fixed in silicon mask

Advantages:
- Very low cost in high volume
- Very reliable (no programming issues)
- Fast read access

Disadvantages:
- Cannot be changed after manufacturing
- High initial cost for mask creation
- Long lead time for production`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PROM (Programmable ROM)</h2>
    <p className="leading-relaxed">
      PROM allows users to program the memory once after manufacturing using a special
      device called a PROM programmer. It contains fusible links that can be permanently
      blown to store data. Once programmed, the data cannot be changed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`PROM Cell Structure (Fusible Link):

Before Programming:
    Word Line
        |
     +--+--+
     |     |
     |  T  |    <- Transistor
     |     |
     +--+--+
        |
     [Fuse]     <- Intact fuse (conducts)
        |
    Bit Line

After Programming (Blown Fuse):
    Word Line
        |
     +--+--+
     |     |
     |  T  |
     |     |
     +--+--+
        |
     [  X  ]    <- Blown fuse (open circuit)
        |
    Bit Line

Programming Process:
1. Apply high current to selected cell
2. Fuse melts and creates open circuit
3. Process is irreversible (OTP - One Time Programmable)

Data Representation:
- Intact fuse: Logic 1 (current flows)
- Blown fuse: Logic 0 (no current)
- Or vice versa depending on design`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">PROM Characteristics</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>One-Time Programmable:</strong> Can only be written once</li>
      <li><strong>Field Programmable:</strong> Programmed by user, not manufacturer</li>
      <li><strong>Non-Volatile:</strong> Retains data without power</li>
      <li><strong>Lower Volume Cost:</strong> No mask charges, suitable for prototypes</li>
      <li><strong>No Error Correction:</strong> Mistakes are permanent</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">EPROM (Erasable Programmable ROM)</h2>
    <p className="leading-relaxed">
      EPROM can be erased and reprogrammed multiple times. It uses floating-gate
      transistors that store charge. The entire chip is erased by exposure to
      ultraviolet (UV) light through a quartz window on the package.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`EPROM Cell Structure (Floating Gate Transistor):

         Control Gate
              |
    +---------+---------+
    |    Oxide Layer    |
    +-------------------+
    |   Floating Gate   |  <- Stores charge (isolated)
    +-------------------+
    |    Oxide Layer    |
    +-------------------+
    |         |         |
    n+       p-substrate  n+
  Source     (channel)   Drain

Programming (Hot Electron Injection):
1. Apply high voltage to drain and control gate
2. Electrons gain enough energy to tunnel through oxide
3. Electrons trapped in floating gate
4. Trapped charge raises transistor threshold voltage
5. Cell reads as 0 (transistor doesn't conduct)

Erasing (UV Light):
1. UV light through quartz window
2. Photons give electrons enough energy to escape
3. Charge removed from floating gate
4. All cells return to 1 state
5. Entire chip erased at once (no selective erase)

EPROM Package:
    +------------------+
    |    +--------+    |
    |    | Quartz |    |  <- UV-transparent window
    |    | Window |    |
    |    +--------+    |
    |                  |
    |   [EPROM Die]    |
    |                  |
    +------------------+
    | | | | | | | | | |
    (Pins)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">EPROM Characteristics</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Reusable:</strong> Can be erased and reprogrammed multiple times</li>
      <li><strong>UV Erasure:</strong> Requires 15-30 minutes of UV exposure</li>
      <li><strong>Bulk Erase:</strong> Entire chip erased at once</li>
      <li><strong>Limited Cycles:</strong> Typically 100-1000 erase cycles</li>
      <li><strong>Special Package:</strong> Requires expensive ceramic package with window</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">EEPROM (Electrically Erasable PROM)</h2>
    <p className="leading-relaxed">
      EEPROM can be erased electrically without UV light. It allows byte-level
      erasure and programming, making it much more flexible than EPROM. EEPROM
      uses Fowler-Nordheim tunneling to add or remove electrons from the floating gate.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`EEPROM Cell Structure (FLOTOX - Floating Gate Tunnel Oxide):

         Control Gate
              |
    +---------+---------+
    |     Oxide         |
    +-------------------+
    |   Floating Gate   |
    +---+---+---+---+---+
    |   | X |   Oxide   |  X = Thin tunnel oxide region
    +---+---+-----------+
    |         |         |
    n+       p-substrate  n+
  Source     (channel)   Drain

Programming (Add electrons):
1. Apply positive voltage to control gate
2. Ground the drain
3. Electrons tunnel through thin oxide to floating gate
4. Cell stores 0

Erasing (Remove electrons):
1. Apply positive voltage to drain
2. Ground control gate
3. Electrons tunnel out of floating gate
4. Cell stores 1

Key Difference from EPROM:
- Thin tunnel oxide allows electrical erasure
- Can erase individual bytes
- No UV light needed
- Standard plastic package OK

EEPROM Operation Voltages:
- Read: 5V (standard)
- Program: 12-20V (generated by charge pump)
- Erase: 12-20V (reversed polarity)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">EEPROM Characteristics</h3>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Byte Erasable:</strong> Individual bytes can be modified</li>
      <li><strong>Electrical Operation:</strong> No UV light or special equipment</li>
      <li><strong>In-System Programming:</strong> Can be updated without removal</li>
      <li><strong>Higher Endurance:</strong> 100,000 to 1 million write cycles</li>
      <li><strong>Slower Write:</strong> 5-10 ms per byte write</li>
      <li><strong>Higher Cost:</strong> More complex cell structure</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Flash Memory</h2>
    <p className="leading-relaxed">
      Flash memory is a type of EEPROM that erases data in blocks rather than bytes,
      enabling faster erase operations. It has become the dominant non-volatile
      storage technology for SSDs, USB drives, and memory cards.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Flash Memory Types:

NOR Flash:
- Random access like ROM
- Execute-in-place (XIP) capability
- Slower write, faster read
- Used for firmware storage

    Word Line 0  Word Line 1
         |            |
    +----+----+  +----+----+
    |   NOR   |  |   NOR   |
    | Cell 0  |  | Cell 1  |
    +----+----+  +----+----+
         |            |
         +-----+------+
               |
           Bit Line

NAND Flash:
- Block access (like disk)
- Higher density than NOR
- Faster write
- Used for data storage (SSD, SD cards)

    Bit Line
        |
   +----+----+
   | Cell 0  |
   +----+----+
        |
   +----+----+
   | Cell 1  |    Cells in series
   +----+----+
        |
   +----+----+
   | Cell 2  |
   +----+----+
        |
      Ground

Flash Memory Organization:
Block (128 KB - 512 KB)
  |
  +-- Page 0 (4 KB - 16 KB)
  +-- Page 1
  +-- Page 2
  ...
  +-- Page n

Operations:
- Read: Any page
- Write: Empty pages only
- Erase: Entire block at once`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ROM Types Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Mask ROM</th>
            <th className="p-3 border">PROM</th>
            <th className="p-3 border">EPROM</th>
            <th className="p-3 border">EEPROM</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Programming</td>
            <td className="p-3 border">Factory</td>
            <td className="p-3 border">User (once)</td>
            <td className="p-3 border">User (multiple)</td>
            <td className="p-3 border">User (multiple)</td>
          </tr>
          <tr>
            <td className="p-3 border">Erasure</td>
            <td className="p-3 border">Not possible</td>
            <td className="p-3 border">Not possible</td>
            <td className="p-3 border">UV light</td>
            <td className="p-3 border">Electrical</td>
          </tr>
          <tr>
            <td className="p-3 border">Erase Granularity</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">N/A</td>
            <td className="p-3 border">Entire chip</td>
            <td className="p-3 border">Byte-level</td>
          </tr>
          <tr>
            <td className="p-3 border">Write Cycles</td>
            <td className="p-3 border">0</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">~1,000</td>
            <td className="p-3 border">~1,000,000</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost per Bit</td>
            <td className="p-3 border">Lowest</td>
            <td className="p-3 border">Low</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">In-System Update</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`ROM Type Applications:

Mask ROM:
- High-volume consumer electronics
- Game cartridges (older consoles)
- Fixed firmware in appliances
- Character generators in displays

PROM:
- Prototype development
- Small production runs
- Configuration storage
- Security applications (one-time programming)

EPROM:
- Firmware development
- Product evaluation
- Small batch production
- Educational purposes

EEPROM:
- BIOS settings storage
- Configuration data
- Calibration parameters
- Smart cards (contact chips)
- I2C/SPI serial EEPROM for embedded systems

Flash Memory:
- SSDs (Solid State Drives)
- USB flash drives
- SD/microSD cards
- Smartphone storage
- Firmware storage (NOR Flash)
- BIOS/UEFI chips`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>ROM is non-volatile memory that retains data without power</li>
        <li>Mask ROM is programmed during manufacturing, cannot be changed</li>
        <li>PROM is one-time programmable using fusible links</li>
        <li>EPROM is erasable with UV light, uses floating-gate transistors</li>
        <li>EEPROM is electrically erasable, supports byte-level operations</li>
        <li>Flash memory is block-erasable EEPROM with higher density</li>
        <li>Evolution: Mask ROM, PROM, EPROM, EEPROM, Flash (increasing flexibility)</li>
        <li>Trade-offs involve cost, flexibility, density, and endurance</li>
      </ul>
    </div>
  </div>
);

export default ROMTypes;
