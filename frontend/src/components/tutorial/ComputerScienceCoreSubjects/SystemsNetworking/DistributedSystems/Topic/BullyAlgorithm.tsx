import React from "react";

const BullyAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Bully Algorithm for Leader Election
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Bully Algorithm is a classic leader election algorithm for distributed systems where
      processes have unique identifiers. It ensures that the process with the highest ID among
      the active processes becomes the coordinator. The name comes from the fact that higher-ID
      processes "bully" lower-ID processes into submission.
    </p>

    <h2 className="text-3xl font-bold mt-8">Algorithm Overview</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Key Principle</h3>
      <p className="leading-relaxed">
        When a process detects coordinator failure, it initiates an election. Any process with
        a higher ID can "bully" the initiator by taking over the election. The highest-ID
        surviving process wins and announces itself as the new coordinator.
      </p>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Types</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Message</th>
            <th className="p-3 border">Direction</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">ELECTION</td>
            <td className="p-3 border">To higher-ID processes</td>
            <td className="p-3 border">
              Announce election and challenge higher-ID processes
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">OK (ALIVE)</td>
            <td className="p-3 border">Reply to sender</td>
            <td className="p-3 border">
              Acknowledge: "I'm alive and taking over"
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">COORDINATOR</td>
            <td className="p-3 border">To all processes</td>
            <td className="p-3 border">
              Announce: "I am the new coordinator"
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Bully Algorithm:

When Process P detects coordinator failure:
  1. P sends ELECTION message to all processes with higher IDs
  2. P waits for OK responses (timeout T)

  If NO OK received:
     P wins election
     P sends COORDINATOR message to ALL processes
     P becomes the new coordinator

  If OK received:
     P waits for COORDINATOR message (timeout T')
     If timeout expires, restart election

When Process Q receives ELECTION from P (where Q > P):
  1. Q sends OK to P
  2. Q starts its own election (if not already running)

When Process receives COORDINATOR(id):
  Set coordinator = id`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Visual Example</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scenario: 7 processes, P7 (coordinator) crashes, P4 detects

Initial:     P1  P2  P3  P4  P5  P6  [P7 crashed]

Step 1: P4 sends ELECTION to P5, P6, P7
        P4 ──ELECTION──► P5 ✓
        P4 ──ELECTION──► P6 ✓
        P4 ──ELECTION──► P7 ✗ (crashed)

Step 2: P5 and P6 respond with OK
        P4 ◄──OK── P5
        P4 ◄──OK── P6
        P4 now waits (someone higher will take over)

Step 3: P5 and P6 start their own elections
        P5 ──ELECTION──► P6 ✓
        P5 ──ELECTION──► P7 ✗
        P6 ──ELECTION──► P7 ✗

Step 4: P6 responds OK to P5
        P5 ◄──OK── P6
        P5 now waits

Step 5: P6 receives no OK (no higher process alive)
        P6 wins election!
        P6 ──COORDINATOR──► P1, P2, P3, P4, P5

Final:  P6 is the new coordinator`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Another Example: Lowest Process Initiates</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scenario: P1 detects coordinator (P5) has crashed

Processes: P1(active) P2(active) P3(active) P4(active) [P5 crashed]

     P1         P2         P3         P4         P5
      │          │          │          │          ✗
      │──ELEC───►│          │          │
      │──ELEC────┼─────────►│          │
      │──ELEC────┼──────────┼─────────►│
      │          │          │          │
      │◄───OK────│          │          │
      │◄───OK────┼──────────│          │
      │◄───OK────┼──────────┼──────────│
      │          │          │          │
      │  (wait)  │──ELEC───►│          │
      │          │──ELEC────┼─────────►│
      │          │          │          │
      │          │◄───OK────│          │
      │          │◄───OK────┼──────────│
      │          │          │          │
      │          │  (wait)  │──ELEC───►│
      │          │          │          │
      │          │          │◄───OK────│
      │          │          │          │
      │          │          │  (wait)  │ (No higher, wins!)
      │          │          │          │
      │◄─────────┼──────────┼───COORD──│
      │          │◄─────────┼───COORD──│
      │          │          │◄──COORD──│
      │          │          │          │

P4 is the new coordinator`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Complexity Analysis</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Worst Case: O(N^2)</h3>
      <p className="leading-relaxed">
        When the lowest-ID process initiates the election:
      </p>
      <div className="font-mono mt-4 text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`If P1 starts election with N processes:

P1 sends (N-1) ELECTION messages
P2 sends (N-2) ELECTION messages
...
P(N-1) sends 1 ELECTION message

Total ELECTION messages = (N-1) + (N-2) + ... + 1 = N(N-1)/2

Each ELECTION gets an OK reply (except from winner):
OK messages ≈ N(N-1)/2

COORDINATOR messages = N-1

Total = O(N^2)`}
        </pre>
      </div>
    </div>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Best Case: O(N)</h3>
      <p className="leading-relaxed">
        When the highest-ID active process initiates:
      </p>
      <div className="font-mono mt-4 text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`If P(N-1) starts election (only P(N) is down):

P(N-1) sends 1 ELECTION to P(N) - no response
P(N-1) wins immediately
P(N-1) sends (N-2) COORDINATOR messages

Total = 1 + (N-2) = O(N)`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Edge Cases</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Edge Cases:

1. Multiple Simultaneous Elections
   - Multiple processes detect failure at same time
   - All start elections
   - Still converges: highest ID wins all

2. Recovering Process with Higher ID
   - Old coordinator P7 recovers after P6 became coordinator
   - P7 starts election
   - P7 sends ELECTION to no one (it's highest)
   - P7 becomes coordinator again

3. Message Loss
   - Use timeouts and retransmission
   - If OK not received, assume process is down
   - If COORDINATOR not received, restart election

4. Network Partition
   - Can result in multiple leaders!
   - Bully algorithm doesn't handle partitions well
   - Need additional mechanisms (quorum, fencing)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Timeout Considerations</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Timeout</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Recommended Value</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">T (Election Response)</td>
            <td className="p-3 border">Wait for OK after sending ELECTION</td>
            <td className="p-3 border">2 * max_message_delay</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">T' (Coordinator)</td>
            <td className="p-3 border">Wait for COORDINATOR after receiving OK</td>
            <td className="p-3 border">T * (N - my_id)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Heartbeat</td>
            <td className="p-3 border">Detect coordinator failure</td>
            <td className="p-3 border">Application-dependent</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Advantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Simple to understand and implement</li>
          <li>Works with any network topology</li>
          <li>Highest-ID process always wins (deterministic)</li>
          <li>Fast when highest-ID process initiates</li>
          <li>Handles process recovery well</li>
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Disadvantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>O(N^2) messages in worst case</li>
          <li>Network partition can cause split-brain</li>
          <li>High overhead when lowest-ID detects failure</li>
          <li>Requires complete membership knowledge</li>
          <li>Timeouts can cause unnecessary elections</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pseudocode Implementation</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`class Process:
    id: int
    coordinator: int
    election_in_progress: bool

def start_election(self):
    self.election_in_progress = True
    higher_processes = [p for p in all_processes if p.id > self.id]

    if not higher_processes:
        # I am the highest, I win
        self.announce_victory()
        return

    # Send ELECTION to all higher processes
    for p in higher_processes:
        send(p, ELECTION(self.id))

    # Wait for OK responses
    if wait_for_ok(timeout=T):
        # Someone higher responded, wait for COORDINATOR
        if not wait_for_coordinator(timeout=T_PRIME):
            # Timed out waiting, restart election
            self.start_election()
    else:
        # No OK received, I win
        self.announce_victory()

def announce_victory(self):
    self.coordinator = self.id
    self.election_in_progress = False
    for p in all_processes:
        if p.id != self.id:
            send(p, COORDINATOR(self.id))

def on_receive_election(self, from_id):
    send(from_id, OK)
    if not self.election_in_progress:
        self.start_election()

def on_receive_coordinator(self, new_coordinator_id):
    self.coordinator = new_coordinator_id
    self.election_in_progress = False`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Process with highest ID among active processes becomes coordinator</li>
        <li>Three message types: ELECTION, OK, COORDINATOR</li>
        <li>ELECTION sent only to higher-ID processes</li>
        <li>OK means "I'm taking over, step aside"</li>
        <li>No OK response means sender wins the election</li>
        <li>Worst case O(N^2) messages when lowest ID initiates</li>
        <li>Best case O(N) messages when highest active ID initiates</li>
        <li>Does not handle network partitions (can have multiple leaders)</li>
      </ul>
    </div>
  </div>
);

export default BullyAlgorithm;
