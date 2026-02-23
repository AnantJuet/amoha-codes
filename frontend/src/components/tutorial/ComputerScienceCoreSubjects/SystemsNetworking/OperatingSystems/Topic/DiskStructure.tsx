import React from 'react';

const DiskStructure: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Disk Structure
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A hard disk drive (HDD) is a non-volatile storage device that stores and retrieves digital
      data using magnetic storage. Understanding the physical structure of a disk is essential for
      comprehending how data is organized and accessed, which directly impacts disk scheduling algorithms.
    </p>

    {/* Physical Components */}
    <h2 className="text-3xl font-bold mt-8">Physical Components of a Hard Disk</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
                         Spindle (Motor)
                              │
                              ▼
                    ┌─────────────────┐
                    │   ╭─────────╮   │
                    │  ╱    ●     ╲  │
                    │ │   ●   ●   │ │◄── Platters (Magnetic Disks)
                    │  ╲    ●     ╱  │
                    │   ╰─────────╯   │
                    │       │         │
                    │       │         │
                    └───────┼─────────┘
                            │
              ┌─────────────┴─────────────┐
              │                           │
          Read/Write                  Actuator Arm
            Head                      (Mechanical Arm)

Side View:
                     Spindle
                        │
    ┌───────────────────┴───────────────────┐
    │  ═══════════════════════════════════  │ ← Platter 1 (Top)
    │  ═══════════════════════════════════  │ ← Platter 2
    │  ═══════════════════════════════════  │ ← Platter 3
    │  ═══════════════════════════════════  │ ← Platter 4 (Bottom)
    └───────────────────────────────────────┘
              ↑                   ↑
           Head 1              Head 2
           (for surfaces)
`}
      </pre>
    </div>

    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li>
        <strong>Platters:</strong> Circular magnetic disks that store data. Multiple platters are stacked
        on the spindle, and each platter has two surfaces (top and bottom).
      </li>
      <li>
        <strong>Spindle:</strong> The motor that rotates all platters at a constant speed (RPM - Rotations
        Per Minute). Common speeds: 5400, 7200, 10000, 15000 RPM.
      </li>
      <li>
        <strong>Read/Write Heads:</strong> Small electromagnetic devices that read and write data on the
        platter surfaces. Each surface has its own head.
      </li>
      <li>
        <strong>Actuator Arm:</strong> Moves the read/write heads across the platter surface to access
        different tracks. All arms move together.
      </li>
    </ul>

    {/* Logical Structure */}
    <h2 className="text-3xl font-bold mt-8">Logical Disk Structure</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
                        Top View of a Platter

                            Tracks (Concentric Circles)
                                    │
                                    ▼
                    ┌───────────────────────────┐
                   ╱   ╭───────────────────╮     ╲
                  ╱   ╱   ╭───────────────╮ ╲     ╲
                 ╱   ╱   ╱   ╭─────────╮   ╲ ╲     ╲
                │   │   │   │    ●    │   │ │     │
                │   │   │   │ Spindle │   │ │     │
                │   │   │   ╰─────────╯   │ │     │
                 ╲   ╲   ╲               ╱ ╱     ╱
                  ╲   ╲   ╰─────────────╯ ╱     ╱
                   ╲   ╰─────────────────╯     ╱
                    ╲___________________________╱

Track 0 (Outermost) ─────────────────────────────────┐
Track 1             ─────────────────────────────┐   │
Track 2             ─────────────────────────┐   │   │
Track n (Innermost) ─────────────────────┐   │   │   │
                                         │   │   │   │
                                         ●   │   │   │
                                       Spindle

Sector View:
                         ╱╲
                        ╱  ╲
                       ╱    ╲◄── Sector (pie slice)
                      ╱      ╲
                     ╱   ●    ╲
                     ╲        ╱
                      ╲      ╱
                       ╲    ╱
                        ╲  ╱
                         ╲╱
`}
      </pre>
    </div>

    {/* Tracks */}
    <h2 className="text-3xl font-bold mt-8">Tracks</h2>
    <p className="leading-relaxed">
      Tracks are concentric circles on the platter surface where data is stored magnetically.
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Track 0 is the outermost track</li>
      <li>Track numbers increase as you move toward the center</li>
      <li>Modern disks have thousands of tracks per surface</li>
      <li>All data on a track can be read in one rotation</li>
    </ul>

    {/* Sectors */}
    <h2 className="text-3xl font-bold mt-8">Sectors</h2>
    <p className="leading-relaxed">
      Sectors are the smallest addressable unit on a disk. Each track is divided into multiple sectors.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Track divided into Sectors:

        ┌──────Sector 1──────┐
       ╱                      ╲
      ╱    ┌──Sector 2──┐      ╲
     ╱    ╱              ╲      ╲
    │    │    ╭──────╮    │      │
    │    │    │  ●   │    │      │ ← Sector 3
    │    │    ╰──────╯    │      │
     ╲    ╲              ╱      ╱
      ╲    └────────────┘      ╱
       ╲       Sector 4       ╱
        └────────────────────┘

Sector Structure:
┌─────────────┬─────────────────────────────┬───────────┐
│   Header    │          Data               │    ECC    │
│  (Address)  │    (512 bytes or 4KB)       │ (Checksum)│
└─────────────┴─────────────────────────────┴───────────┘
`}
      </pre>
    </div>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-3">
      <li>Traditional sector size: 512 bytes</li>
      <li>Modern Advanced Format: 4096 bytes (4K sectors)</li>
      <li>Each sector has a header with address information</li>
      <li>ECC (Error Correction Code) at the end for data integrity</li>
    </ul>

    {/* Cylinders */}
    <h2 className="text-3xl font-bold mt-8">Cylinders</h2>
    <p className="leading-relaxed">
      A cylinder is the set of all tracks with the same track number across all platters and surfaces.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Cylinder Concept (3D View):

           Surface 0 (Top of Platter 1)
           ═══════════════════════════  ← Track 5
                      │
           Surface 1 (Bottom of Platter 1)
           ═══════════════════════════  ← Track 5    ┐
                      │                               │
           Surface 2 (Top of Platter 2)               │
           ═══════════════════════════  ← Track 5    ├─ Cylinder 5
                      │                               │
           Surface 3 (Bottom of Platter 2)            │
           ═══════════════════════════  ← Track 5    ┘

All Track 5's on all surfaces form Cylinder 5

Why Cylinders Matter:
- Reading/writing data in a cylinder requires NO head movement
- Only switching between heads (electronic, very fast)
- Data should be organized by cylinders for efficiency
`}
      </pre>
    </div>

    {/* CHS Addressing */}
    <h2 className="text-3xl font-bold mt-8">CHS Addressing</h2>
    <p className="leading-relaxed">
      CHS (Cylinder-Head-Sector) is the traditional method of addressing disk locations.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Determines</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Cylinder (C)</td>
            <td className="p-3 border">Which track number</td>
            <td className="p-3 border">Head position (seek)</td>
          </tr>
          <tr>
            <td className="p-3 border">Head (H)</td>
            <td className="p-3 border">Which platter surface</td>
            <td className="p-3 border">Active read/write head</td>
          </tr>
          <tr>
            <td className="p-3 border">Sector (S)</td>
            <td className="p-3 border">Which sector on track</td>
            <td className="p-3 border">Rotational position</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* LBA Addressing */}
    <h2 className="text-3xl font-bold mt-8">LBA (Logical Block Addressing)</h2>
    <p className="leading-relaxed">
      Modern disks use LBA, which treats the disk as a linear array of blocks, hiding the physical
      geometry from the operating system.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
CHS to LBA Conversion:

LBA = (C × Heads per Cylinder × Sectors per Track) +
      (H × Sectors per Track) +
      (S - 1)

Example:
Disk: 1024 Cylinders, 16 Heads, 63 Sectors per Track
Location: Cylinder 10, Head 5, Sector 20

LBA = (10 × 16 × 63) + (5 × 63) + (20 - 1)
    = 10,080 + 315 + 19
    = 10,414

Advantages of LBA:
- Simpler for OS to manage
- Hides physical disk geometry
- Allows for disk controller optimization
- Supports larger disk capacities
`}
      </pre>
    </div>

    {/* Disk Access Time */}
    <h2 className="text-3xl font-bold mt-8">Disk Access Time Components</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Total Access Time = Seek Time + Rotational Latency + Transfer Time

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    Head Movement                  Disk Rotation             │
│    (Seek Time)                    (Rotational Latency)      │
│                                                             │
│        ────────────►                    ╭─────╮             │
│       │              ──────────►       ╱       ╲            │
│       │                               │    ●    │           │
│       │                                ╲       ╱            │
│    Current                              ╰─────╯             │
│    Track                                                    │
│                                   Wait for sector           │
│    Move to                        to rotate under           │
│    Target Track                   the head                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Typical Time</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Seek Time</td>
            <td className="p-3 border">Time to move head to target track</td>
            <td className="p-3 border">3-15 ms (average ~8 ms)</td>
          </tr>
          <tr>
            <td className="p-3 border">Rotational Latency</td>
            <td className="p-3 border">Time for sector to rotate under head</td>
            <td className="p-3 border">2-6 ms (average = 1/2 rotation)</td>
          </tr>
          <tr>
            <td className="p-3 border">Transfer Time</td>
            <td className="p-3 border">Time to read/write data</td>
            <td className="p-3 border">&lt; 1 ms for one sector</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Disk Capacity Calculation */}
    <h2 className="text-3xl font-bold mt-8">Disk Capacity Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Disk Capacity = Cylinders × Heads × Sectors per Track × Bytes per Sector

Example:
Cylinders: 10,000
Heads (surfaces): 8
Sectors per track: 500
Bytes per sector: 512

Capacity = 10,000 × 8 × 500 × 512
         = 20,480,000,000 bytes
         = 20.48 GB

Modern Disks:
- Use Zone Bit Recording (ZBR)
- Outer tracks have more sectors than inner tracks
- Capacity calculated differently
- LBA simplifies addressing
`}
      </pre>
    </div>

    {/* Zone Bit Recording */}
    <h2 className="text-3xl font-bold mt-8">Zone Bit Recording (ZBR)</h2>
    <p className="leading-relaxed">
      Modern disks use ZBR where outer tracks have more sectors than inner tracks because they have
      a larger circumference.
    </p>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm text-gray-900">
{`
Traditional (Same sectors per track):       Zone Bit Recording:

    Outer: 100 sectors                      Outer Zone: 200 sectors
    ┌────────────────────┐                  ┌────────────────────┐
    │  ┌──────────────┐  │                  │  ┌──────────────┐  │
    │  │  ┌────────┐  │  │                  │  │  ┌────────┐  │  │
    │  │  │   ●    │  │  │                  │  │  │   ●    │  │  │
    │  │  └────────┘  │  │                  │  │  └────────┘  │  │
    │  └──────────────┘  │                  │  └──────────────┘  │
    └────────────────────┘                  └────────────────────┘
    Inner: 100 sectors                      Inner Zone: 100 sectors

    Wasted space on outer tracks            Better space utilization
                                            Higher data density
`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Platters store data magnetically on multiple surfaces</li>
      <li>Tracks are concentric circles on each surface</li>
      <li>Sectors are the smallest addressable units (512 bytes or 4KB)</li>
      <li>Cylinders group same-numbered tracks across all surfaces</li>
      <li>Seek time is usually the largest component of access time</li>
      <li>LBA hides physical geometry and simplifies addressing</li>
      <li>ZBR improves capacity by varying sectors per track</li>
      <li>Understanding disk structure helps optimize scheduling algorithms</li>
    </ul>
  </div>
);

export default DiskStructure;
