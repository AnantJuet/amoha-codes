import React from "react";

const ClientCentricConsistency: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Client-Centric Consistency Models
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Client-centric consistency models focus on providing consistency guarantees from the
      perspective of a single client rather than the entire system. These models are
      particularly useful in systems with eventual consistency, where they help provide
      a more intuitive experience for individual users while maintaining the benefits
      of relaxed consistency.
    </p>

    <h2 className="text-3xl font-bold mt-8">Client-Centric vs Data-Centric</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`PERSPECTIVE DIFFERENCE:
=======================

DATA-CENTRIC VIEW:
                 DATA STORE
    +----------------------------------+
    |  "What do ALL clients see?"      |
    |  "How are ALL operations ordered?"|
    +----------------------------------+
        ^       ^       ^       ^
        |       |       |       |
     Client  Client  Client  Client


CLIENT-CENTRIC VIEW:
                 DATA STORE
    +----------------------------------+
    |  "What does THIS client see?"    |
    |  "How are MY operations ordered?" |
    +----------------------------------+
        ^
        |
    >>> Client <<<  (Focus on single client)
        |
     Session


KEY INSIGHT:
============
+-----------------------------------------------+
| Client-centric models guarantee consistency  |
| for a single client's operations, even when  |
| the underlying store is eventually consistent |
+-----------------------------------------------+

Use Case:
- Mobile app connecting to different replicas
- User session moving across data centers
- Maintaining sanity for individual users`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Four Client-Centric Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Guarantee</th>
            <th className="p-3 border">Intuition</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-blue-600">Monotonic Reads</td>
            <td className="p-3 border">Never see older data after seeing newer</td>
            <td className="p-3 border">Time doesn't go backward</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-green-600">Monotonic Writes</td>
            <td className="p-3 border">Writes complete in order</td>
            <td className="p-3 border">My writes are sequential</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-purple-600">Read Your Writes</td>
            <td className="p-3 border">Always see own writes</td>
            <td className="p-3 border">My changes are visible to me</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-orange-600">Writes Follow Reads</td>
            <td className="p-3 border">Writes see data that was read</td>
            <td className="p-3 border">Write based on what I saw</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Monotonic Reads</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MONOTONIC READS GUARANTEE:
==========================

"If a client reads value v from x, any subsequent
 read of x will return v or a more recent value."


VALID EXECUTION (Monotonic Reads):
==================================

Client Session:
    Read(x) @ Replica A -> returns "version 5"
         |
         | (moves to different replica)
         v
    Read(x) @ Replica B -> returns "version 5" or higher
         |
         v
    Read(x) @ Replica C -> returns "version 5" or higher

The client never sees an older version!


INVALID EXECUTION (Violates Monotonic Reads):
=============================================

Client Session:
    Read(x) @ Replica A -> returns "version 5"
         |
         | (moves to different replica)
         v
    Read(x) @ Replica B -> returns "version 3"  VIOLATION!

The client went "back in time" - confusing!


REAL-WORLD EXAMPLE:
===================
Email inbox:
- You see 10 unread messages on phone
- Switch to laptop
- You should see 10 or more, never 8

Without monotonic reads:
- Phone shows: 10 unread (Replica A, up-to-date)
- Laptop shows: 8 unread (Replica B, stale)
- User thinks: "Where did my emails go?!"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Monotonic Writes</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`MONOTONIC WRITES GUARANTEE:
===========================

"A write by a client is completed before any
 subsequent write by the same client."


VALID EXECUTION (Monotonic Writes):
===================================

Client Session:
    Write(x=1) @ Replica A
         |
         | (all replicas see x=1 before...)
         v
    Write(x=2) @ Replica B
         |
         v
    Write(x=3) @ Replica C

All replicas eventually see: x=1, then x=2, then x=3
(in that order)


INVALID EXECUTION (Violates Monotonic Writes):
==============================================

Client Session:
    Write(x=1) @ Replica A
         |
    Write(x=2) @ Replica B  (before x=1 propagates)
         |
         v
Some replicas see x=2 first, then x=1
Final value could be x=1 (wrong!)


REAL-WORLD EXAMPLE:
===================
Blog post editing:
1. Create draft: "Hello"
2. Edit to: "Hello World"
3. Publish (makes visible)

Without monotonic writes:
- Publish might complete before edit
- Users see: "Hello" instead of "Hello World"

With monotonic writes:
- Edit always completes before publish
- Users see: "Hello World" (correct)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Read Your Writes (Session Consistency)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`READ YOUR WRITES GUARANTEE:
===========================

"A read by a client of data item x following a
 write to x by the same client will always return
 the written value or a more recent one."


VALID EXECUTION (Read Your Writes):
===================================

Client Session:
    Write(profile.name = "Alice")
         |
         v
    Read(profile.name) -> "Alice"  ✓

The client sees their own update!


INVALID EXECUTION (Violates Read Your Writes):
==============================================

Client Session:
    Write(profile.name = "Alice") @ Replica A
         |
         | (switches replica before sync)
         v
    Read(profile.name) @ Replica B -> "Old Name"  ✗

User: "I just updated my name, why is it old?!"


IMPLEMENTATION APPROACHES:
==========================

1. Sticky Sessions:
   Client always uses same replica
   +--------+     +----------+
   | Client |---->| Replica A| (sticky)
   +--------+     +----------+

2. Version Tracking:
   Client tracks write version
   Write -> returns version V
   Read -> wait for replica to have version >= V

3. Synchronous Write-Through:
   Write synchronously to all replicas
   (Expensive but guarantees RYW)


REAL-WORLD EXAMPLE:
===================
Social media post:
1. User posts: "Just got promoted!"
2. User refreshes page
3. User expects to see their post

Without RYW:
- Post goes to Replica A
- Refresh hits Replica B (no post yet)
- User: "Where's my post?! Did it fail?"

With RYW:
- System ensures user sees their post
- Even if it routes to different replica`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">4. Writes Follow Reads</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`WRITES FOLLOW READS GUARANTEE:
==============================

"A write by a client following a read of data item x
 is guaranteed to take place on the same or a more
 recent value of x."


VALID EXECUTION (Writes Follow Reads):
======================================

Client Session:
    Read(post) -> "Original content" (version 5)
         |
         v
    Write(comment on post)
         |
    The comment is written seeing version 5 or newer
    (The post exists when comment is written)


INVALID EXECUTION (Violates Writes Follow Reads):
=================================================

Client Session:
    Read(post) @ Replica A -> "Original content"
         |
         | (switches to replica without the post)
         v
    Write(comment on post) @ Replica B
    ERROR: Post doesn't exist on Replica B!

Or worse: Comment added to DIFFERENT version of post


REAL-WORLD EXAMPLE:
===================
Forum reply system:
1. User reads thread with 50 replies
2. User writes reply #51
3. Reply should see all 50 previous replies

Without Writes-Follow-Reads:
- User reads from up-to-date replica
- Writes to stale replica (only 30 replies)
- Reply #51 becomes reply #31
- Context is lost!

With Writes-Follow-Reads:
- Write waits for replica to catch up
- Reply correctly follows all previous replies


ANOTHER EXAMPLE - Version Control:
==================================
1. Read file at version 10
2. Edit and save
3. Save should be based on version 10+

Without guarantee:
- Could overwrite version 12 changes
- Lost updates!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementing Client-Centric Consistency</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`IMPLEMENTATION TECHNIQUES:
==========================

1. SESSION TOKENS
=================
Client carries version vector in session

Session Token: {
  "replica_A": 15,
  "replica_B": 12,
  "replica_C": 14
}

On read: Check if replica >= session versions
On write: Update session token


2. STICKY SESSIONS
==================
Route client to same replica

            Load Balancer
                 |
        +--------+--------+
        |        |        |
        v        v        v
     Replica  Replica  Replica
        A        B        C
        ^
        |
     Client1 (sticky to A)


3. VECTOR CLOCKS
================
Track causality with vector timestamps

Read:  Returns data + vector clock VC_read
Write: Include VC_read in write request
       Replica ensures VC_local >= VC_read


4. HYBRID APPROACH
==================
Combine techniques based on needs

+------------------+----------------------+
|    Operation     |    Technique         |
+------------------+----------------------+
| Initial request  | Any replica          |
| Subsequent reads | Version check        |
| Writes           | Wait for sync        |
| Session end      | Clear state          |
+------------------+----------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Combining Guarantees</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Combination</th>
            <th className="p-3 border">Provides</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">MR + RYW</td>
            <td className="p-3 border">See own writes, never go back</td>
            <td className="p-3 border">User profiles, settings</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MW + WFR</td>
            <td className="p-3 border">Ordered writes on seen data</td>
            <td className="p-3 border">Document editing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">All Four</td>
            <td className="p-3 border">Session consistency</td>
            <td className="p-3 border">Full user session guarantee</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MR + MR + RYW + WFR</td>
            <td className="p-3 border">PRAM / FIFO consistency</td>
            <td className="p-3 border">Per-process ordering</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Systems</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`SYSTEMS WITH CLIENT-CENTRIC GUARANTEES:
======================================

1. Amazon DynamoDB
   - Session consistency option
   - Strongly consistent reads available
   - Read-your-writes with consistent read flag

2. Azure Cosmos DB
   - Session consistency level
   - Provides all four guarantees within session
   - Session token passed with requests

3. MongoDB
   - Causal consistency sessions
   - Read-your-writes guaranteed
   - Uses operation timestamps

4. Google Cloud Spanner
   - Strong consistency (provides all)
   - External consistency guarantee
   - No special session handling needed

5. Cassandra
   - LOCAL_ONE + consistency can achieve RYW
   - Requires careful configuration
   - Client-side token tracking possible`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Client-centric models focus on single client experience</li>
        <li>Monotonic Reads: Never see older data after seeing newer</li>
        <li>Monotonic Writes: Writes complete in client's order</li>
        <li>Read Your Writes: Always see your own updates</li>
        <li>Writes Follow Reads: Writes based on what you read</li>
        <li>Can be layered on eventually consistent systems</li>
        <li>Implemented via session tokens, sticky sessions, or version tracking</li>
        <li>Combining all four provides PRAM/session consistency</li>
      </ul>
    </div>
  </div>
);

export default ClientCentricConsistency;
