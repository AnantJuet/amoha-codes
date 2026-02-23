import React from "react";

const ConsistencyProtocols: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Consistency Protocols
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Consistency protocols are the mechanisms and algorithms that distributed systems
      use to implement their consistency models. These protocols define how replicas
      coordinate to maintain the desired level of consistency while handling concurrent
      operations, failures, and network partitions.
    </p>

    <h2 className="text-3xl font-bold mt-8">Protocol Categories Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CONSISTENCY PROTOCOL TAXONOMY:
==============================

                    Consistency Protocols
                           |
          +----------------+----------------+
          |                                 |
    Primary-Based                    Replicated-Write
          |                                 |
    +-----+-----+                    +------+------+
    |           |                    |             |
  Remote      Local              Active        Quorum-
  Write       Write             Replication    Based
  Protocol    Protocol          Protocol       Protocol


PRIMARY-BASED PROTOCOLS:
========================
- Single primary handles writes
- Simplifies conflict resolution
- May have availability limitations

REPLICATED-WRITE PROTOCOLS:
===========================
- Multiple replicas can accept writes
- More complex conflict handling
- Better availability`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Protocol Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol Type</th>
            <th className="p-3 border">Write Handling</th>
            <th className="p-3 border">Consistency</th>
            <th className="p-3 border">Availability</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Primary-Backup</td>
            <td className="p-3 border">Single primary</td>
            <td className="p-3 border text-green-600">Strong</td>
            <td className="p-3 border text-yellow-600">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Local-Write</td>
            <td className="p-3 border">Migrating primary</td>
            <td className="p-3 border text-green-600">Strong</td>
            <td className="p-3 border text-green-600">Good</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Active Replication</td>
            <td className="p-3 border">All replicas</td>
            <td className="p-3 border text-green-600">Strong</td>
            <td className="p-3 border text-green-600">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Quorum-Based</td>
            <td className="p-3 border">Subset of replicas</td>
            <td className="p-3 border text-yellow-600">Tunable</td>
            <td className="p-3 border text-green-600">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Primary-Backup Protocol</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PRIMARY-BACKUP (REMOTE-WRITE) PROTOCOL:
=======================================

All writes go to primary, then propagate to backups.

SYNCHRONOUS VERSION:
====================

Client        Primary         Backup1        Backup2
   |             |               |               |
   |--Write(x)-->|               |               |
   |             |--Replicate--->|               |
   |             |--Replicate---------------->---|
   |             |<-----ACK------|               |
   |             |<-----ACK---------------------|
   |<---ACK------|               |               |
   |             |               |               |

Properties:
- Client waits for all replicas
- Strong consistency guaranteed
- High write latency
- If any replica fails, write blocks


ASYNCHRONOUS VERSION:
=====================

Client        Primary         Backup1        Backup2
   |             |               |               |
   |--Write(x)-->|               |               |
   |<---ACK------|               |               |
   |             |--Replicate--->| (async)       |
   |             |--Replicate---------------->---| (async)
   |             |               |               |

Properties:
- Client gets fast response
- Eventual consistency
- Risk of data loss if primary fails
- Better write throughput


READ HANDLING:
==============
Option 1: All reads go to primary
  - Simple, always consistent
  - Primary becomes bottleneck

Option 2: Reads can go to any replica
  - Better read scalability
  - May read stale data (async mode)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Chain Replication</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CHAIN REPLICATION PROTOCOL:
===========================

Replicas form a chain; writes enter at head, reads at tail.

WRITE PATH:
-----------
Client
   |
   |--Write-->[ HEAD ] --> [ MID ] --> [ TAIL ]
              Node 1      Node 2      Node 3
                                         |
                                         |--ACK-->Client

PROPERTIES:
- Strong consistency
- High throughput (pipelining)
- Simple failure handling
- Reads always see committed data


READ PATH:
----------
Client
   |
   |--Read-------------------->[ TAIL ]
                               Node 3
                                 |
                                 |--Response-->Client

Only TAIL serves reads (always has committed data)


FAILURE HANDLING:
=================

Head Failure:
[ HEAD X ] --> [ MID ] --> [ TAIL ]
                 |
                 v
           [ NEW HEAD ] --> [ TAIL ]
           (Successor becomes new head)


Tail Failure:
[ HEAD ] --> [ MID ] --> [ TAIL X ]
               |
               v
[ HEAD ] --> [ NEW TAIL ]
             (Predecessor becomes new tail)


Middle Node Failure:
[ HEAD ] --> [ MID X ] --> [ TAIL ]
    |                         ^
    +-------------------------+
    (Skip failed node in chain)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two-Phase Commit (2PC)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TWO-PHASE COMMIT PROTOCOL:
==========================

Ensures all-or-nothing updates across replicas.

PHASE 1: PREPARE (Voting)
=========================

Coordinator         Participant1      Participant2
     |                   |                 |
     |---PREPARE-------->|                 |
     |---PREPARE-------------------->------|
     |                   |                 |
     |   (Participants acquire locks,      |
     |    log prepare record)              |
     |                   |                 |
     |<--VOTE YES--------|                 |
     |<--VOTE YES--------------------|-----|
     |                   |                 |


PHASE 2: COMMIT/ABORT
=====================

If ALL votes are YES:
Coordinator         Participant1      Participant2
     |                   |                 |
     |---COMMIT--------->|                 |
     |---COMMIT-------------------->-------|
     |                   |                 |
     |   (Participants commit,             |
     |    release locks)                   |
     |                   |                 |
     |<--ACK-------------|                 |
     |<--ACK-------------------------|-----|

If ANY vote is NO:
     |---ABORT---------->|                 |
     |---ABORT-------------------->--------|
     |   (Participants rollback)           |


PROBLEMS WITH 2PC:
==================

1. BLOCKING
   If coordinator fails after PREPARE,
   participants are stuck holding locks.

   Coordinator X      Participant (locked, waiting)
       |                    |
       X (crash)            | (blocked forever?)
                            |

2. SINGLE POINT OF FAILURE
   Coordinator is critical path.

3. PERFORMANCE
   Two round trips minimum.
   Locks held during entire protocol.


SOLUTION: THREE-PHASE COMMIT (3PC)
==================================
Adds PRE-COMMIT phase to reduce blocking.
But still has issues with network partitions.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Paxos Protocol</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PAXOS CONSENSUS PROTOCOL:
=========================

Achieves consensus despite failures. Three roles:
- Proposers: Propose values
- Acceptors: Vote on proposals
- Learners: Learn the decided value


BASIC PAXOS (Single-Decree):
============================

PHASE 1: PREPARE
----------------
Proposer         Acceptors (majority needed)
    |               A1    A2    A3
    |---Prepare(n)-->|     |     |
    |---Prepare(n)-------->|     |
    |---Prepare(n)-------------->|
    |                |     |     |
    |<--Promise(n)---|     |     |
    |<--Promise(n)---------|     |
    |<--Promise(n)---------------|
    |                |     |     |

Acceptor promises:
- Not accept proposals < n
- Returns any already accepted value


PHASE 2: ACCEPT
---------------
Proposer         Acceptors
    |               A1    A2    A3
    |---Accept(n,v)->|     |     |
    |---Accept(n,v)------->|     |
    |---Accept(n,v)------------>|
    |                |     |     |
    |<--Accepted-----|     |     |
    |<--Accepted-----------|     |
    |<--Accepted----------------|
    |                |     |     |
    Value v is chosen when majority accepts!


WHY IT WORKS:
=============
- Proposal numbers create ordering
- Majority intersection guarantees safety
- Can make progress with any majority`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Raft Consensus Protocol</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RAFT CONSENSUS PROTOCOL:
========================

Designed for understandability. Three states:
- Leader: Handles all client requests
- Follower: Passive, responds to leader
- Candidate: Trying to become leader


LEADER ELECTION:
================

Normal Operation:
+--------+     +----------+     +----------+
|Follower| <-- |  LEADER  | --> |Follower  |
+--------+     +----------+     +----------+
                    |
               heartbeats

Election Triggered (no heartbeat):
+----------+     +----------+     +----------+
|Candidate | --> |Candidate | --> |Follower  |
|(requests |     |(loses)   |     |          |
| votes)   |     |          |     |          |
+----------+     +----------+     +----------+
     |
     v
+----------+
|  LEADER  |  (wins majority)
+----------+


LOG REPLICATION:
================

Client      Leader         Followers
   |           |            F1   F2
   |--Write--->|             |    |
   |           |--AppendEntry->   |
   |           |--AppendEntry---->|
   |           |             |    |
   |           |<---ACK------|    |
   |           |<---ACK----------|
   |           |             |    |
   |           | (committed when majority ACK)
   |<--ACK-----|             |    |
   |           |--Commit---->|    |
   |           |--Commit-------->|


RAFT LOG STRUCTURE:
===================
Index:    1      2      3      4      5
        +------+------+------+------+------+
Term:   |  1   |  1   |  2   |  2   |  2   |
        +------+------+------+------+------+
Command:|x=1   |y=2   |x=3   |z=1   |y=5   |
        +------+------+------+------+------+
                             ^
                       commitIndex`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Protocol Selection Guide</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Requirement</th>
            <th className="p-3 border">Recommended Protocol</th>
            <th className="p-3 border">Example System</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Strong consistency, single leader</td>
            <td className="p-3 border">Primary-Backup, Raft</td>
            <td className="p-3 border">etcd, ZooKeeper</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">High throughput reads</td>
            <td className="p-3 border">Chain Replication</td>
            <td className="p-3 border">FAWN-KV, HyperDex</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Distributed transactions</td>
            <td className="p-3 border">2PC, 3PC</td>
            <td className="p-3 border">Database systems</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault-tolerant consensus</td>
            <td className="p-3 border">Paxos, Raft</td>
            <td className="p-3 border">Spanner, CockroachDB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tunable consistency</td>
            <td className="p-3 border">Quorum-based</td>
            <td className="p-3 border">Cassandra, DynamoDB</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Byzantine fault tolerance</td>
            <td className="p-3 border">PBFT, HotStuff</td>
            <td className="p-3 border">Blockchain systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Two main categories: primary-based and replicated-write protocols</li>
        <li>Primary-backup: simple but primary is single point of failure</li>
        <li>Chain replication: high throughput with strong consistency</li>
        <li>2PC: ensures atomic commits but is blocking</li>
        <li>Paxos: fault-tolerant consensus but complex to understand</li>
        <li>Raft: understandable consensus with leader election</li>
        <li>Quorum-based: flexible consistency-availability trade-off</li>
        <li>Choose protocol based on consistency, availability, and fault tolerance needs</li>
      </ul>
    </div>
  </div>
);

export default ConsistencyProtocols;
