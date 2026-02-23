import React from 'react';

const SessionLayer: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Session Layer (Layer 5) - OSI Model
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Session Layer is the fifth layer of the OSI model. It is responsible for establishing,
      managing, and terminating sessions (connections) between applications on different hosts.
      This layer provides dialog control, synchronization, and session checkpointing to ensure
      efficient and reliable communication between end systems.
    </p>

    {/* Position in OSI */}
    <h2 className="text-3xl font-bold mt-8">Position in OSI Model</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto">
      <pre className="text-gray-900">{`
  OSI Model:

  +-------------------+
  | 7. Application    |
  +-------------------+
  | 6. Presentation   |
  +-------------------+
  | 5. SESSION     <--+  (You are here!)
  +-------------------+
  | 4. Transport      |
  +-------------------+
  | 3. Network        |
  +-------------------+
  | 2. Data Link      |
  +-------------------+
  | 1. Physical       |
  +-------------------+

  Data Unit: Data (or Session PDU)
  Role: Session establishment, management, termination
  Examples: NetBIOS, RPC, PPTP, SCP
`}</pre>
    </div>

    {/* Functions */}
    <h2 className="text-3xl font-bold mt-8">Functions of Session Layer</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Session Establishment</td>
            <td className="p-3 border">Creates a session/connection between two communicating applications</td>
          </tr>
          <tr>
            <td className="p-3 border">Session Maintenance</td>
            <td className="p-3 border">Maintains the session during data exchange, handles interruptions</td>
          </tr>
          <tr>
            <td className="p-3 border">Session Termination</td>
            <td className="p-3 border">Gracefully closes sessions after data transfer completion</td>
          </tr>
          <tr>
            <td className="p-3 border">Dialog Control</td>
            <td className="p-3 border">Manages turn-taking in communication (half-duplex/full-duplex)</td>
          </tr>
          <tr>
            <td className="p-3 border">Synchronization</td>
            <td className="p-3 border">Adds checkpoints for recovery from failures</td>
          </tr>
          <tr>
            <td className="p-3 border">Token Management</td>
            <td className="p-3 border">Prevents simultaneous operations that could cause conflicts</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Session Concept */}
    <h2 className="text-3xl font-bold mt-8">What is a Session?</h2>
    <p className="leading-relaxed">
      A session is a logical connection between two applications that allows them to exchange data.
      It is like a conversation - it has a beginning (establishment), middle (data exchange), and
      end (termination). Sessions can span multiple transport connections if needed.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Session Lifecycle:

  Application A                              Application B
       |                                          |
       |   1. Session Establishment               |
       |   (Authentication, Negotiate params)     |
       |----------------------------------------->|
       |                                          |
       |   2. Session Active                      |
       |   (Data exchange, Dialog control)        |
       |<========================================>|
       |                                          |
       |   3. Session Synchronization             |
       |   (Checkpoints for recovery)             |
       |<---------- Sync Point 1 ----------------|
       |                                          |
       |   (More data exchange...)                |
       |<========================================>|
       |                                          |
       |<---------- Sync Point 2 ----------------|
       |                                          |
       |   4. Session Termination                 |
       |   (Graceful close)                       |
       |----------------------------------------->|
       |                                          |
`}</pre>
    </div>

    {/* Dialog Control */}
    <h2 className="text-3xl font-bold mt-8">Dialog Control</h2>
    <p className="leading-relaxed">
      Dialog control determines how two systems interact - whether they can both send data
      simultaneously or must take turns. This is essential for coordinating communication.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Dialog Control Modes:

  1. Simplex (One-Way):
     +--------+                    +--------+
     |   A    | =================> |   B    |
     +--------+                    +--------+
     Only A can send; B only receives


  2. Half-Duplex (Two-Way Alternate):
     +--------+                    +--------+
     |   A    | <===========>      |   B    |
     +--------+                    +--------+
     A and B take turns sending
     Token determines who can send

     Timeline:
     |<-- A sends -->|<-- B sends -->|<-- A sends -->|


  3. Full-Duplex (Two-Way Simultaneous):
     +--------+  ===============>  +--------+
     |   A    |                    |   B    |
     +--------+  <===============  +--------+
     Both A and B can send at the same time
`}</pre>
    </div>

    {/* Synchronization */}
    <h2 className="text-3xl font-bold mt-8">Synchronization and Checkpointing</h2>
    <p className="leading-relaxed">
      Synchronization allows the session layer to insert checkpoints (sync points) into the data
      stream. If a failure occurs, communication can resume from the last checkpoint rather than
      starting over from the beginning.
    </p>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
  Synchronization Points:

  Data Transfer with Checkpoints:

  Sender                                      Receiver
    |                                            |
    |-------- Data Block 1 --------------------->|
    |-------- Data Block 2 --------------------->|
    |======== SYNC POINT 1 (Minor) =============>|
    |<-------- ACK Sync Point 1 -----------------|
    |                                            |
    |-------- Data Block 3 --------------------->|
    |-------- Data Block 4 --------------------->|
    |======== SYNC POINT 2 (Major) =============>|
    |<-------- ACK Sync Point 2 -----------------|
    |                                            |
    |-------- Data Block 5 --------------------->|
    |                                            |
    |         X-- Failure! --X                   |
    |                                            |
    | Recovery: Resume from Sync Point 2         |
    |                                            |
    |-------- Data Block 5 (retransmit) -------->|
    |                                            |

  Types of Sync Points:
  - Minor Sync Point: Acknowledged, can resync to any minor point
  - Major Sync Point: Confirmed by both sides, cannot go back beyond it
`}</pre>
    </div>

    {/* Token Management */}
    <h2 className="text-3xl font-bold mt-8">Token Management</h2>
    <p className="leading-relaxed">
      Tokens are used to control access to certain operations. Only the holder of a token can
      perform the associated operation, preventing conflicts when both sides try to perform
      the same action simultaneously.
    </p>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Token Type</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Data Token</td>
            <td className="p-3 border">Controls who can send data (in half-duplex mode)</td>
          </tr>
          <tr>
            <td className="p-3 border">Release Token</td>
            <td className="p-3 border">Controls who can release (terminate) the connection</td>
          </tr>
          <tr>
            <td className="p-3 border">Synchronize-Minor Token</td>
            <td className="p-3 border">Controls who can set minor sync points</td>
          </tr>
          <tr>
            <td className="p-3 border">Major/Activity Token</td>
            <td className="p-3 border">Controls who can set major sync points or start activities</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Session Services */}
    <h2 className="text-3xl font-bold mt-8">Session Layer Services</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Connection Services</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Session connection establishment</li>
          <li>Session connection release (orderly/abrupt)</li>
          <li>Session parameter negotiation</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Transfer Services</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Normal data transfer</li>
          <li>Expedited data transfer</li>
          <li>Typed data transfer</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Dialog Services</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Token management</li>
          <li>Activity management</li>
          <li>Dialog separation</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Recovery Services</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Synchronization points</li>
          <li>Resynchronization</li>
          <li>Exception reporting</li>
        </ul>
      </div>
    </div>

    {/* Protocols */}
    <h2 className="text-3xl font-bold mt-8">Session Layer Protocols</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">NetBIOS</td>
            <td className="p-3 border">Network Basic Input/Output System - provides session services for Windows networks</td>
          </tr>
          <tr>
            <td className="p-3 border">RPC (Remote Procedure Call)</td>
            <td className="p-3 border">Allows programs to execute procedures on remote systems</td>
          </tr>
          <tr>
            <td className="p-3 border">PPTP</td>
            <td className="p-3 border">Point-to-Point Tunneling Protocol for VPN sessions</td>
          </tr>
          <tr>
            <td className="p-3 border">PAP</td>
            <td className="p-3 border">Password Authentication Protocol</td>
          </tr>
          <tr>
            <td className="p-3 border">SCP</td>
            <td className="p-3 border">Session Control Protocol</td>
          </tr>
          <tr>
            <td className="p-3 border">SDP</td>
            <td className="p-3 border">Session Description Protocol (used in VoIP)</td>
          </tr>
          <tr>
            <td className="p-3 border">NFS</td>
            <td className="p-3 border">Network File System (file access sessions)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Real-World Examples */}
    <h2 className="text-3xl font-bold mt-8">Real-World Examples</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-3">
      <p className="leading-relaxed mb-3"><strong>1. Web Session:</strong></p>
      <p className="text-sm">When you log into a website, a session is created. This session maintains your login state across multiple page requests. Session cookies store session IDs to identify you.</p>

      <p className="leading-relaxed mb-3 mt-4"><strong>2. Video Conference:</strong></p>
      <p className="text-sm">During a video call, the session layer manages the connection between participants. If you temporarily disconnect, the session can be maintained for you to rejoin.</p>

      <p className="leading-relaxed mb-3 mt-4"><strong>3. Database Connection:</strong></p>
      <p className="text-sm">When an application connects to a database, a session is established. Multiple queries can be executed within this session, and the session is terminated when the application disconnects.</p>
    </div>

    {/* Session vs Connection */}
    <h2 className="text-3xl font-bold mt-8">Session vs Transport Connection</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Session (Layer 5)</th>
            <th className="p-3 border">Connection (Layer 4)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Scope</td>
            <td className="p-3 border">Application-level dialog</td>
            <td className="p-3 border">Data transport between hosts</td>
          </tr>
          <tr>
            <td className="p-3 border">Duration</td>
            <td className="p-3 border">Can span multiple connections</td>
            <td className="p-3 border">Single transport connection</td>
          </tr>
          <tr>
            <td className="p-3 border">Recovery</td>
            <td className="p-3 border">Checkpoints for resync</td>
            <td className="p-3 border">Retransmission of segments</td>
          </tr>
          <tr>
            <td className="p-3 border">Focus</td>
            <td className="p-3 border">Dialog management</td>
            <td className="p-3 border">Reliable data delivery</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>Session Layer manages application-level sessions/dialogs</li>
      <li>Provides session establishment, maintenance, and termination</li>
      <li>Dialog control: simplex, half-duplex, or full-duplex</li>
      <li>Synchronization points allow recovery without restarting</li>
      <li>Token management prevents operation conflicts</li>
      <li>Common protocols: NetBIOS, RPC, PPTP</li>
      <li>A session can span multiple transport connections</li>
    </ul>

    {/* GATE Important */}
    <h2 className="text-3xl font-bold mt-8">Important for GATE</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Know the main functions: dialog control, synchronization, token management</li>
        <li>Understand the difference between session and transport connection</li>
        <li>Session layer is rarely asked in detail; focus on main concepts</li>
        <li>TCP/IP model combines Session, Presentation, Application into one layer</li>
        <li>In practice, session management is often done at application layer</li>
      </ul>
    </div>
  </div>
);

export default SessionLayer;
