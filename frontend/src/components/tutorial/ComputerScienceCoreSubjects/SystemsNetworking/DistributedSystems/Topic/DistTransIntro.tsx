import React from "react";

const DistTransIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Distributed Transactions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A distributed transaction is a set of operations that spans multiple nodes, databases,
      or services in a distributed system, executed as a single logical unit of work. These
      transactions ensure data consistency across multiple resources while handling the
      complexities of network communication, partial failures, and concurrent access in
      distributed environments.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Distributed Transaction?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Transaction Architecture:

    Client Application
           |
           v
    +----------------+
    | Transaction    |
    | Coordinator    |
    +----------------+
      /     |     \\
     /      |      \\
    v       v       v
+------+ +------+ +------+
| Node | | Node | | Node |
|  A   | |  B   | |  C   |
+------+ +------+ +------+
   |        |        |
   v        v        v
+------+ +------+ +------+
| DB A | | DB B | | DB C |
+------+ +------+ +------+

A single transaction may need to:
- Debit from Account A (Node A)
- Credit to Account B (Node B)
- Log the transfer (Node C)

All operations must succeed or all must fail!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Distributed Transactions?</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Reason</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Data Distribution</td>
            <td className="p-3 border">Data spread across multiple databases</td>
            <td className="p-3 border">Global e-commerce with regional databases</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Horizontal scaling requires data partitioning</td>
            <td className="p-3 border">Sharded user database across servers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Microservices</td>
            <td className="p-3 border">Each service owns its data store</td>
            <td className="p-3 border">Order service + Inventory service + Payment service</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">Data replication across nodes</td>
            <td className="p-3 border">Primary-replica database clusters</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Local vs Distributed Transactions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Local Transaction:
+----------------------------------+
|          Single Database         |
|  +----------------------------+  |
|  | BEGIN TRANSACTION          |  |
|  | UPDATE accounts SET ...    |  |
|  | INSERT INTO logs ...       |  |
|  | COMMIT                     |  |
|  +----------------------------+  |
+----------------------------------+
- Simple, fast, ACID guaranteed by DBMS

Distributed Transaction:
+----------------------------------+
|        Coordinator Node          |
|  +----------------------------+  |
|  | BEGIN DISTRIBUTED TRANS    |  |
|  +----------------------------+  |
+----------------------------------+
         /           \\
        v             v
+-------------+  +-------------+
| Database A  |  | Database B  |
| UPDATE acc  |  | INSERT log  |
+-------------+  +-------------+
        \\            /
         v          v
+----------------------------------+
|  +----------------------------+  |
|  | PREPARE all nodes         |  |
|  | COMMIT all nodes          |  |
|  +----------------------------+  |
+----------------------------------+
- Complex, requires coordination protocol`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Challenges in Distributed Transactions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Challenge</th>
            <th className="p-3 border">Problem</th>
            <th className="p-3 border">Solution Approach</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold text-red-600">Network Failures</td>
            <td className="p-3 border">Messages can be lost, delayed, or duplicated</td>
            <td className="p-3 border">Timeout mechanisms, acknowledgments, idempotency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-red-600">Node Failures</td>
            <td className="p-3 border">Participants may crash during transaction</td>
            <td className="p-3 border">Recovery protocols, logging, replicas</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-red-600">No Global Clock</td>
            <td className="p-3 border">Difficult to order events consistently</td>
            <td className="p-3 border">Logical clocks, vector clocks, timestamps</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-red-600">Partial Failures</td>
            <td className="p-3 border">Some nodes succeed while others fail</td>
            <td className="p-3 border">Two-phase commit, saga pattern</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold text-red-600">Concurrency</td>
            <td className="p-3 border">Multiple transactions accessing same data</td>
            <td className="p-3 border">Distributed locking, optimistic control</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transaction Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Key Components of Distributed Transaction System:

1. TRANSACTION MANAGER (Coordinator)
   +------------------------------+
   | - Initiates transactions     |
   | - Coordinates participants   |
   | - Makes commit/abort decision|
   | - Handles recovery           |
   +------------------------------+

2. RESOURCE MANAGERS (Participants)
   +------------------------------+
   | - Manage local resources     |
   | - Execute local operations   |
   | - Vote on commit/abort       |
   | - Maintain transaction logs  |
   +------------------------------+

3. COMMUNICATION SUBSYSTEM
   +------------------------------+
   | - Reliable message delivery  |
   | - Network protocol handling  |
   | - Failure detection          |
   +------------------------------+

4. RECOVERY SUBSYSTEM
   +------------------------------+
   | - Transaction logging        |
   | - Crash recovery             |
   | - State reconstruction       |
   +------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Transaction Lifecycle</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Distributed Transaction Lifecycle:

1. BEGIN
   Client ---> Coordinator: "Start Transaction T1"
   Coordinator: Assigns TID, initializes state

2. EXECUTE
   Coordinator ---> Participants: "Execute operations"
   Each participant performs local operations
   Results collected at coordinator

3. PREPARE (Voting Phase)
   Coordinator ---> All Participants: "Prepare to commit?"
   Participants: Check constraints, acquire locks
   Participants ---> Coordinator: "Yes" or "No"

4. DECIDE (Decision Phase)
   If all "Yes": Coordinator decides COMMIT
   If any "No": Coordinator decides ABORT

5. COMPLETE
   Coordinator ---> All Participants: Decision
   Participants: Execute decision, release locks
   Participants ---> Coordinator: "Done"

Timeline:
+------+--------+--------+--------+--------+
| BEGIN| EXECUTE| PREPARE| DECIDE |COMPLETE|
+------+--------+--------+--------+--------+
   T0      T1       T2       T3       T4`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Real-World Example: E-Commerce Order</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Placing an Order - Distributed Transaction:

Services Involved:
- Order Service (orders database)
- Inventory Service (inventory database)
- Payment Service (payments database)
- Notification Service (message queue)

Transaction Flow:
+------------------+
| Order Request    |
+------------------+
        |
        v
+------------------+
| Create Order     |----> Order DB
| (PENDING)        |
+------------------+
        |
        v
+------------------+
| Reserve Stock    |----> Inventory DB
| (quantity - 1)   |
+------------------+
        |
        v
+------------------+
| Process Payment  |----> Payment DB
| (charge card)    |
+------------------+
        |
        v
+------------------+
| Confirm Order    |----> Order DB
| (CONFIRMED)      |
+------------------+
        |
        v
+------------------+
| Send Notification|----> Message Queue
+------------------+

If Payment fails:
- Rollback order status
- Release reserved stock
- No notification sent`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Distributed Transactions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Flat Transaction</td>
            <td className="p-3 border">Single level, all-or-nothing</td>
            <td className="p-3 border">Simple money transfer</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Nested Transaction</td>
            <td className="p-3 border">Hierarchical subtransactions</td>
            <td className="p-3 border">Complex workflows with partial rollback</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Chained Transaction</td>
            <td className="p-3 border">Sequential, committed segments</td>
            <td className="p-3 border">Long-running batch processing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Saga</td>
            <td className="p-3 border">Compensating transactions for rollback</td>
            <td className="p-3 border">Microservices orchestration</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Distributed transactions span multiple nodes, databases, or services</li>
        <li>They provide atomicity across distributed resources</li>
        <li>A coordinator manages the overall transaction lifecycle</li>
        <li>Participants execute local operations and vote on commit/abort</li>
        <li>Network and node failures make distributed transactions complex</li>
        <li>Protocols like 2PC ensure all participants reach the same decision</li>
        <li>Trade-offs exist between consistency, availability, and performance</li>
        <li>Modern systems often use eventual consistency patterns like Sagas</li>
      </ul>
    </div>
  </div>
);

export default DistTransIntro;
