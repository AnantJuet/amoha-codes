import React from "react";

const PrimaryBasedProtocols: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Primary-Based Protocols
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Primary-based protocols designate a single replica as the primary (or master) that
      handles all write operations for a data item. This approach simplifies consistency
      management by serializing all updates through one point, though it introduces
      challenges around primary failure and write scalability.
    </p>

    <h2 className="text-3xl font-bold mt-8">Primary-Based Protocol Types</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TWO MAIN VARIANTS:
==================

1. REMOTE-WRITE PROTOCOL
========================
Primary is fixed; clients always write remotely.

Client             Primary            Backups
(anywhere)         (fixed)            (fixed)
    |                 |                  |
    |----Write------->|                  |
    |                 |----Replicate---->|
    |<----ACK---------|                  |


2. LOCAL-WRITE PROTOCOL
=======================
Primary migrates to where writes occur.

Client             Primary            Backups
(anywhere)         (moves!)           (fixed)
    |                 |                  |
    | (becomes primary)                  |
    |<<<<<<<<<<<<<<<<<|                  |
    |                 |                  |
    Write locally     |                  |
    |                 |                  |
    |----Replicate---------------------->|`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Remote-Write Protocol Details</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`REMOTE-WRITE (PRIMARY-BACKUP) PROTOCOL:
=======================================

Architecture:
                         +------------+
                         |  PRIMARY   |
                    +--->|  (writes)  |<---+
                    |    +------+-----+    |
                    |           |          |
             Write  |           | Replicate|
                    |           |          |
+--------+     +----+---+  +----v---+  +---+----+
| Client |---->| Backup |  | Backup |  | Backup |
+--------+     | (read) |  | (read) |  | (read) |
               +--------+  +--------+  +--------+


WRITE OPERATION FLOW:
=====================

Step 1: Client sends write to Primary
        Client ----W(x)=5----> Primary

Step 2: Primary updates local copy
        Primary: x = 5 (local)

Step 3: Primary forwards to all backups
        Primary ----W(x)=5----> Backup1
        Primary ----W(x)=5----> Backup2
        Primary ----W(x)=5----> Backup3

Step 4: Backups acknowledge
        Backup1 ----ACK----> Primary
        Backup2 ----ACK----> Primary
        Backup3 ----ACK----> Primary

Step 5: Primary acknowledges client
        Primary ----ACK----> Client


SYNCHRONOUS VS ASYNCHRONOUS:
============================

SYNCHRONOUS (Blocking):
-----------------------
Client waits for ALL backups to acknowledge.

Timeline:
Client  Primary  B1  B2  B3
   |       |      |   |   |
   |--W--->|      |   |   |
   |       |--W-->|   |   |
   |       |--W------>|   |
   |       |--W---------->|
   |       |<-ACK-|   |   |
   |       |<-ACK-----|   |
   |       |<-ACK---------|
   |<-ACK--|      |   |   |
   |       |      |   |   |

Latency = Network RTT + Slowest Backup
Guarantees: Strong consistency


ASYNCHRONOUS (Non-blocking):
----------------------------
Client gets ACK after primary update.

Timeline:
Client  Primary  B1  B2  B3
   |       |      |   |   |
   |--W--->|      |   |   |
   |<-ACK--|      |   |   |  (Fast!)
   |       |--W-->|   |   |  (Background)
   |       |--W------>|   |
   |       |--W---------->|
   |       |      |   |   |

Latency = Network RTT to Primary only
Risk: Data loss if primary fails before sync`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Local-Write Protocol Details</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`LOCAL-WRITE (MIGRATING PRIMARY) PROTOCOL:
=========================================

Primary responsibility moves to where writes occur.

INITIAL STATE:
==============
              x is on Server A (primary)
+--------+    +--------+    +--------+
|Server A|    |Server B|    |Server C|
| x (P)  |    |  x     |    |  x     |
+--------+    +--------+    +--------+


SCENARIO: Client near Server B wants to write x

Step 1: Migrate primary to Server B
+--------+    +--------+    +--------+
|Server A|    |Server B|    |Server C|
|  x     |<---|  x (P) |    |  x     |
+--------+    +--------+    +--------+
           (Primary moves)


Step 2: Client writes locally (fast!)
+--------+    +--------+    +--------+
|Server A|    |Server B|    |Server C|
|  x     |    |x=5 (P) |    |  x     |
+--------+    +--------+    +--------+
                 ^
                 |
              Client writes here (local)


Step 3: Propagate to backups
+--------+    +--------+    +--------+
|Server A|    |Server B|    |Server C|
| x=5    |<---|x=5 (P) |--->| x=5    |
+--------+    +--------+    +--------+


TRADE-OFFS:
===========
Advantages:
- Low write latency (local write)
- Good for write-locality patterns

Disadvantages:
- Migration overhead
- Complex primary tracking
- Potential for "ping-pong" if writers are distributed


USE CASES:
==========
- Mobile users with strong locality
- Disconnected operation (laptop sync)
- Edge computing scenarios`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Primary Election and Failover</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`HANDLING PRIMARY FAILURE:
=========================

Detection:
----------
- Heartbeat timeouts
- Health check failures
- Network partition detection


FAILOVER PROCESS:
=================

1. DETECT FAILURE
   Backup1: "No heartbeat from Primary for 10s"
   Backup2: "No heartbeat from Primary for 10s"
   Backup3: "No heartbeat from Primary for 10s"

2. LEADER ELECTION
   Backups run election algorithm:
   - Raft: Request votes, term numbers
   - Paxos: Prepare/Promise/Accept
   - Zab: Election with epoch numbers

3. NEW PRIMARY SELECTED
   Backup2 wins election (most up-to-date log)

4. RECONFIGURATION
   +--------+    +--------+    +--------+
   |  OLD   |    |  NEW   |    | Backup |
   |PRIMARY |    |PRIMARY |    |        |
   | (dead) |    |(Backup2)|   |(Backup3)|
   +--------+    +--------+    +--------+


SPLIT-BRAIN PREVENTION:
=======================

Problem: Network partition creates two "primaries"

Partition:
+--------+  X  +--------+    +--------+
|Primary |  X  | Backup1|    | Backup2|
+--------+  X  +--------+    +--------+
     ^      X       |             |
     |      X       +---election--+
   Clients  X            |
   think    X       New Primary?
  primary   X
  is here   X       TWO PRIMARIES!


Solution: Quorum-based election
- Need majority to elect new primary
- Old primary cannot get quorum
- Only one primary possible

With 5 nodes, need 3 for quorum:
Original primary: Has 1 vote (itself)
Other partition: Has 4 votes -> Can elect new primary
Original primary: Cannot function, steps down`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison of Variants</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Remote-Write (Fixed Primary)</th>
            <th className="p-3 border">Local-Write (Migrating Primary)</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Write Latency</td>
            <td className="p-3 border">Network RTT to primary</td>
            <td className="p-3 border">Local (after migration)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border text-green-600">Lower</td>
            <td className="p-3 border text-red-600">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Primary Location</td>
            <td className="p-3 border">Fixed until failure</td>
            <td className="p-3 border">Moves with writes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Best For</td>
            <td className="p-3 border">Distributed writers</td>
            <td className="p-3 border">Localized write patterns</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failover</td>
            <td className="p-3 border">Elect from backups</td>
            <td className="p-3 border">Elect from any replica</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Implementations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SYSTEMS USING PRIMARY-BASED PROTOCOLS:
======================================

1. MySQL REPLICATION
   - Single master, multiple read replicas
   - Async replication by default
   - Semi-sync option available
   - GTID for failover coordination

2. POSTGRESQL STREAMING REPLICATION
   - Primary-standby architecture
   - Synchronous_commit options:
     * off: Async (fast, risky)
     * local: Sync to WAL only
     * remote_write: Sync to standby memory
     * on: Sync to standby WAL
     * remote_apply: Sync to standby apply

3. MONGODB REPLICA SETS
   - Single primary, multiple secondaries
   - Automatic failover via election
   - Write concern: w:1 to w:majority
   - Read preference: primary, secondary, nearest

4. REDIS SENTINEL
   - Master-replica replication
   - Sentinel monitors and triggers failover
   - Async replication (WAIT command for sync)

5. KAFKA
   - Leader-follower per partition
   - ISR (In-Sync Replicas) tracking
   - acks=all for durability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Primary-Based Protocol Pseudocode</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PRIMARY NODE LOGIC:
===================

class Primary:
    def __init__(self):
        self.data = {}
        self.backups = []
        self.version = 0

    def write(self, key, value, sync_mode):
        # Update local
        self.version += 1
        self.data[key] = (value, self.version)

        if sync_mode == SYNCHRONOUS:
            # Wait for all backups
            acks = []
            for backup in self.backups:
                ack = backup.replicate(key, value, self.version)
                acks.append(ack)

            if all(acks):
                return SUCCESS
            else:
                return FAILURE

        elif sync_mode == ASYNCHRONOUS:
            # Return immediately, replicate in background
            async_replicate(self.backups, key, value, self.version)
            return SUCCESS

    def read(self, key):
        return self.data.get(key)


BACKUP NODE LOGIC:
==================

class Backup:
    def __init__(self):
        self.data = {}
        self.version = 0

    def replicate(self, key, value, version):
        if version > self.version:
            self.data[key] = (value, version)
            self.version = version
            return ACK
        return NACK

    def read(self, key):
        # Return local copy (may be stale in async mode)
        return self.data.get(key)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Primary-based protocols use a single primary for all writes</li>
        <li>Remote-write: fixed primary, clients write remotely</li>
        <li>Local-write: primary migrates to where writes occur</li>
        <li>Synchronous replication: strong consistency, higher latency</li>
        <li>Asynchronous replication: better performance, risk of data loss</li>
        <li>Failover requires election among backups (quorum needed)</li>
        <li>Split-brain prevented by requiring majority for election</li>
        <li>Used by MySQL, PostgreSQL, MongoDB, Redis, Kafka</li>
      </ul>
    </div>
  </div>
);

export default PrimaryBasedProtocols;
