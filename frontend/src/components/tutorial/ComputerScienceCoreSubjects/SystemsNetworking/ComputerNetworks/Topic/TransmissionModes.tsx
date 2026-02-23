import React from 'react';

const TransmissionModes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Transmission Modes in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Transmission mode refers to the direction of data flow between two connected devices in a network.
      It defines whether communication is one-way, two-way alternating, or two-way simultaneous. The
      three primary transmission modes are Simplex, Half-Duplex, and Full-Duplex. Understanding these
      modes is essential for designing efficient communication systems.
    </p>

    {/* Overview */}
    <h2 className="text-3xl font-bold mt-8">Types of Transmission Modes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  Transmission Modes Overview:

  1. SIMPLEX: One-way only
     +--------+                    +--------+
     | Sender | =================> |Receiver|
     +--------+                    +--------+
                  Data Flow --->

  2. HALF-DUPLEX: Two-way, but one at a time
     +--------+                    +--------+
     |Device A| <===========>      |Device B|
     +--------+                    +--------+
               <--- OR --->
               (Not simultaneously)

  3. FULL-DUPLEX: Two-way, simultaneous
     +--------+  ===============>  +--------+
     |Device A|                    |Device B|
     +--------+  <===============  +--------+
               <---> (Both directions at once)
`}</pre>
    </div>

    {/* Simplex */}
    <h2 className="text-3xl font-bold mt-8">1. Simplex Mode</h2>
    <p className="leading-relaxed">
      In simplex mode, communication is unidirectional. Data flows in only one direction, from the sender
      to the receiver. The receiver cannot send any data back to the sender. This mode uses the entire
      channel capacity for one-way transmission.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Simplex Mode:

  +----------------+                      +------------------+
  |    SENDER      |                      |    RECEIVER      |
  |  (Transmitter) |                      |    (Display)     |
  +-------+--------+                      +--------+---------+
          |                                        |
          |          Data Flow (One-Way)           |
          +=======================================>+
          |                                        |
          |    Cannot send data back               |
          X<---------------------------------------X

  Examples:
  +-----------+        +----------+
  | Keyboard  | -----> | Computer |  (Input device to CPU)
  +-----------+        +----------+

  +-----------+        +----------+
  |   Radio   | -----> | Listener |  (Broadcasting)
  | Station   |        |          |
  +-----------+        +----------+

  +-----------+        +----------+
  |    TV     | -----> | Viewer   |  (Television broadcast)
  | Station   |        |          |
  +-----------+        +----------+
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristics</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Direction</td>
            <td className="p-3 border">Unidirectional (one-way only)</td>
          </tr>
          <tr>
            <td className="p-3 border">Channel Usage</td>
            <td className="p-3 border">Entire bandwidth in one direction</td>
          </tr>
          <tr>
            <td className="p-3 border">Feedback</td>
            <td className="p-3 border">Not possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Keyboard, Mouse, Monitor, TV broadcast, Radio</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Lowest (single channel)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Half-Duplex */}
    <h2 className="text-3xl font-bold mt-8">2. Half-Duplex Mode</h2>
    <p className="leading-relaxed">
      In half-duplex mode, communication is bidirectional but not simultaneous. Data can flow in both
      directions, but only one direction at a time. When one device is transmitting, the other must wait
      until the transmission is complete before it can respond.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Half-Duplex Mode:

  Time T1: Device A transmits to Device B
  +----------+                    +----------+
  | Device A | =================> | Device B |
  |  (Sends) |                    |(Receives)|
  +----------+                    +----------+

  Time T2: Device B transmits to Device A
  +----------+                    +----------+
  | Device A | <================= | Device B |
  |(Receives)|                    |  (Sends) |
  +----------+                    +----------+

  Timeline:
  |<------ T1: A talks ----->|<------ T2: B talks ----->|
  |=========================>|<=========================|

  Examples:
  +-------------+          +-------------+
  | Walkie-     |  <====>  | Walkie-     |
  | Talkie 1    |          | Talkie 2    |
  +-------------+          +-------------+
  "Over" signals end of transmission

  +-------------+          +-------------+
  |   Police    |  <====>  |   Police    |
  |   Radio     |          |   Control   |
  +-------------+          +-------------+
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristics</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Direction</td>
            <td className="p-3 border">Bidirectional (alternating)</td>
          </tr>
          <tr>
            <td className="p-3 border">Channel Usage</td>
            <td className="p-3 border">Entire bandwidth, one direction at a time</td>
          </tr>
          <tr>
            <td className="p-3 border">Simultaneous</td>
            <td className="p-3 border">No - must take turns</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Walkie-talkie, CB radio, HTTP/1.0</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Moderate (single channel, bidirectional)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <p className="leading-relaxed">
        <strong>Turnaround Time:</strong> In half-duplex mode, there is a delay called turnaround time
        when switching the direction of transmission. This is the time required for a device to change
        from transmit mode to receive mode or vice versa.
      </p>
    </div>

    {/* Full-Duplex */}
    <h2 className="text-3xl font-bold mt-8">3. Full-Duplex Mode</h2>
    <p className="leading-relaxed">
      In full-duplex mode, communication is bidirectional and simultaneous. Both devices can send and
      receive data at the same time. This requires either two separate channels or a channel that is
      divided to allow simultaneous two-way communication.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Full-Duplex Mode:

  Simultaneous bidirectional communication:

  +----------+    Channel 1 (A to B)    +----------+
  |          | ========================>|          |
  | Device A |                          | Device B |
  |          |<======================== |          |
  +----------+    Channel 2 (B to A)    +----------+

  Both transmit AND receive at the same time

  Implementation Methods:

  Method 1: Two Separate Physical Channels
  +------+     Wire 1 (TX)      +------+
  |      |--------------------->|      |
  |  A   |                      |  B   |
  |      |<---------------------|      |
  +------+     Wire 2 (RX)      +------+

  Method 2: Single Channel with Frequency Division
  +------+   High Frequency     +------+
  |      |--------------------->|      |
  |  A   |   (e.g., 1200 Hz)    |  B   |
  |      |<---------------------|      |
  +------+   Low Frequency      +------+
             (e.g., 600 Hz)

  Examples:
  +----------+          +----------+
  | Telephone| <======> | Telephone|
  |   User A |          |   User B |
  +----------+          +----------+
  Both can talk and listen simultaneously
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Characteristics</th>
            <th className="p-3 border">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Direction</td>
            <td className="p-3 border">Bidirectional (simultaneous)</td>
          </tr>
          <tr>
            <td className="p-3 border">Channel Usage</td>
            <td className="p-3 border">Two channels or divided bandwidth</td>
          </tr>
          <tr>
            <td className="p-3 border">Simultaneous</td>
            <td className="p-3 border">Yes - both directions at once</td>
          </tr>
          <tr>
            <td className="p-3 border">Examples</td>
            <td className="p-3 border">Telephone, Mobile networks, Ethernet (switched)</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Highest (dual channel or complex)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Comparison Table */}
    <h2 className="text-3xl font-bold mt-8">Comparison of Transmission Modes</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Parameter</th>
            <th className="p-3 border">Simplex</th>
            <th className="p-3 border">Half-Duplex</th>
            <th className="p-3 border">Full-Duplex</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Direction</td>
            <td className="p-3 border">Unidirectional</td>
            <td className="p-3 border">Bidirectional (alternating)</td>
            <td className="p-3 border">Bidirectional (simultaneous)</td>
          </tr>
          <tr>
            <td className="p-3 border">Transmission</td>
            <td className="p-3 border">One-way only</td>
            <td className="p-3 border">Both ways, one at a time</td>
            <td className="p-3 border">Both ways at same time</td>
          </tr>
          <tr>
            <td className="p-3 border">Channel Requirement</td>
            <td className="p-3 border">One channel</td>
            <td className="p-3 border">One channel</td>
            <td className="p-3 border">Two channels or divided</td>
          </tr>
          <tr>
            <td className="p-3 border">Bandwidth Utilization</td>
            <td className="p-3 border">100% one way</td>
            <td className="p-3 border">100% alternating</td>
            <td className="p-3 border">50% each direction</td>
          </tr>
          <tr>
            <td className="p-3 border">Performance</td>
            <td className="p-3 border">Fastest (no delays)</td>
            <td className="p-3 border">Moderate (turnaround delay)</td>
            <td className="p-3 border">Best overall throughput</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simplest</td>
            <td className="p-3 border">Moderate</td>
            <td className="p-3 border">Most complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Lowest</td>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Highest</td>
          </tr>
          <tr>
            <td className="p-3 border">Real-world Example</td>
            <td className="p-3 border">TV broadcast</td>
            <td className="p-3 border">Walkie-talkie</td>
            <td className="p-3 border">Telephone call</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Serial vs Parallel */}
    <h2 className="text-3xl font-bold mt-8">Data Transmission Methods</h2>
    <p className="leading-relaxed">
      In addition to transmission modes, data can be transmitted in serial or parallel fashion:
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Serial Transmission: One bit at a time
  +--------+                          +--------+
  | Sender |---[ 1 0 1 1 0 0 1 0 ]--->|Receiver|
  +--------+     Single wire          +--------+
             Time: ----------------->

  Parallel Transmission: Multiple bits simultaneously
  +--------+    Bit 7 ---------------+--------+
  |        |    Bit 6 ---------------|        |
  | Sender |    Bit 5 ---------------| Receiver|
  |        |    Bit 4 ---------------|        |
  |        |    Bit 3 ---------------|        |
  |        |    Bit 2 ---------------|        |
  |        |    Bit 1 ---------------|        |
  +--------+    Bit 0 ---------------+--------+
                8 parallel wires
`}</pre>
    </div>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Serial Transmission</th>
            <th className="p-3 border">Parallel Transmission</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Bits sent one at a time</td>
            <td className="p-3 border">Multiple bits sent simultaneously</td>
          </tr>
          <tr>
            <td className="p-3 border">Single communication line</td>
            <td className="p-3 border">Multiple parallel lines</td>
          </tr>
          <tr>
            <td className="p-3 border">Slower but reliable for long distances</td>
            <td className="p-3 border">Faster but limited to short distances</td>
          </tr>
          <tr>
            <td className="p-3 border">Used in: USB, Ethernet, Internet</td>
            <td className="p-3 border">Used in: Printer ports (old), RAM bus</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Simplex: One-way only (keyboard, TV broadcast)</li>
      <li>Half-duplex: Two-way but not simultaneous (walkie-talkie)</li>
      <li>Full-duplex: Two-way simultaneous (telephone, modern Ethernet)</li>
      <li>Full-duplex doubles the effective bandwidth compared to half-duplex</li>
      <li>Half-duplex has turnaround time delay when switching direction</li>
      <li>Ethernet with hubs operates in half-duplex; with switches operates in full-duplex</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Understand the direction of data flow in each mode</li>
        <li>Know real-world examples for each transmission mode</li>
        <li>Full-duplex requires two channels or frequency/time division</li>
        <li>In half-duplex, turnaround time affects overall throughput</li>
        <li>Ethernet: Hub = Half-duplex collision domain; Switch = Full-duplex per port</li>
      </ul>
    </div>
  </div>
);

export default TransmissionModes;
