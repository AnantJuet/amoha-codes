import React from "react";

const TokenRingMutex: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Token Ring Mutex Algorithm
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Token Ring Mutex Algorithm achieves mutual exclusion by circulating a unique token among
      processes arranged in a logical ring. Only the process holding the token can enter the
      critical section, providing a simple and elegant solution to distributed mutual exclusion.
    </p>

    <h2 className="text-3xl font-bold mt-8">Ring Topology</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Token Ring Structure:

            ┌──────────────────────────────┐
            │                              │
            ▼                              │
        ┌───────┐                      ┌───────┐
        │  P1   │─────────────────────►│  P4   │
        │       │                      │       │
        └───────┘                      └───────┘
            │                              ▲
            │                              │
            ▼                              │
        ┌───────┐                      ┌───────┐
        │  P2   │─────────────────────►│  P3   │
        │[TOKEN]│                      │       │
        └───────┘                      └───────┘

Token circulates: P1 → P2 → P3 → P4 → P1 → ...

Only P2 (token holder) can enter Critical Section`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Token Ring Protocol</h3>
      <div className="font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Initialization:
  - Arrange N processes in logical ring (P0 → P1 → ... → Pn-1 → P0)
  - One process starts with the token

On receiving TOKEN:
  if want_to_enter_CS:
      enter_critical_section()
      // perform critical section work
      exit_critical_section()

  // Always pass token to next process in ring
  send(TOKEN, next_process)

To enter CS:
  want_to_enter_CS = true
  wait until TOKEN received

To exit CS:
  // Token is passed when we're done
  // (handled in "On receiving TOKEN")`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Token Circulation Example</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Scenario: P2 and P4 want to enter CS

Initial: Token at P1, P2 wants CS, P4 wants CS

Time 1: P1 has token
        P1 doesn't want CS
        P1 → passes token to P2

Time 2: P2 has token
        P2 wants CS!
        P2 enters CS
        P2 executes CS
        P2 exits CS
        P2 → passes token to P3

Time 3: P3 has token
        P3 doesn't want CS
        P3 → passes token to P4

Time 4: P4 has token
        P4 wants CS!
        P4 enters CS
        P4 executes CS
        P4 exits CS
        P4 → passes token to P1

Time 5: Token back at P1
        Cycle continues...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Message Complexity</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Scenario</th>
            <th className="p-3 border">Messages per CS</th>
            <th className="p-3 border">Explanation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Best Case</td>
            <td className="p-3 border">1</td>
            <td className="p-3 border">
              Process already has token when it wants CS
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Worst Case</td>
            <td className="p-3 border">N-1</td>
            <td className="p-3 border">
              Token must traverse entire ring to reach requesting process
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Average (High Contention)</td>
            <td className="p-3 border">~1</td>
            <td className="p-3 border">
              Each process uses token when received
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">No Contention</td>
            <td className="p-3 border">Infinite</td>
            <td className="p-3 border">
              Token keeps circulating even if no one wants CS
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronization Delay</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Time to Enter CS (after requesting):

Best case:  0 message delays
            (Process already holds token)

Worst case: N-1 message delays
            (Token just passed to next process)

Average:    (N-1)/2 message delays
            (Expected position in ring)

Between consecutive CS entries:
  - Minimum: 1 message delay (pass to next who also wants CS)
  - Maximum: N message delays (full ring traversal)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Correctness Properties</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Safety (Mutual Exclusion)</h3>
        <p className="leading-relaxed text-sm">
          Guaranteed because there is exactly one token. Only the token holder can enter CS.
          No two processes can hold the token simultaneously.
        </p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Liveness (No Deadlock)</h3>
        <p className="leading-relaxed text-sm">
          Token always circulates. Every process will eventually receive the token
          (assuming no failures). No circular waiting possible.
        </p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Fairness</h3>
        <p className="leading-relaxed text-sm">
          Bounded waiting: A process waits at most N-1 token passes before getting the token.
          Ring order ensures fairness.
        </p>
      </div>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Ordering</h3>
        <p className="leading-relaxed text-sm">
          Not strictly fair in terms of request time. Follows ring order, not timestamp order.
          A process might wait longer even if it requested earlier.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Handling Failures</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Failure Scenarios:

1. Token Loss (Process crashes with token):
   Detection: No token received after timeout
   Recovery:  Elect leader to regenerate token
              OR use token regeneration protocol

   ┌───────┐     ┌───────┐     ┌───────┐
   │  P1   │────►│  P2   │──X──│  P3   │
   │       │     │[TOKEN]│CRASH│       │
   └───────┘     └───────┘     └───────┘

   Solution: P1 detects missing token via timeout
             Initiates token regeneration

2. Process Crash (Non-token holder):
   Detection: Predecessor's message fails
   Recovery:  Update ring to skip failed process

   Before: P1 → P2 → P3 → P4 → P1
   P3 crashes
   After:  P1 → P2 → P4 → P1

3. Duplicate Tokens (Network partition recovery):
   Detection: Two processes in CS simultaneously
   Recovery:  Use sequence numbers on tokens
              Discard lower-numbered token`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Token Regeneration Protocol</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Detecting and Regenerating Lost Token</h3>
      <div className="font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Protocol:

1. Each process maintains:
   - last_token_seen: timestamp of last token
   - timeout: maximum time between token sightings

2. If timeout expires without seeing token:
   - Broadcast "TOKEN_LOST" message
   - Initiate election to choose regenerator

3. Elected process generates new token with:
   - Incremented sequence number
   - Starts circulation

4. Old tokens (lower sequence) are discarded

Prevention of duplicate tokens:
  token = (sequence_number, generator_id)
  Only accept token if sequence > last_seen_sequence`}
        </pre>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages and Disadvantages</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Advantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Simple to implement</li>
          <li>No starvation possible</li>
          <li>Decentralized (no coordinator)</li>
          <li>Low message overhead under high contention</li>
          <li>Fair in ring order</li>
        </ul>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Disadvantages</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Continuous token circulation even when idle</li>
          <li>Token loss requires recovery protocol</li>
          <li>Variable delay to enter CS (0 to N-1)</li>
          <li>Ring maintenance on node join/leave</li>
          <li>Not strictly request-time fair</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison with Other Algorithms</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Token Ring</th>
            <th className="p-3 border">Centralized</th>
            <th className="p-3 border">Distributed</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Messages (entry)</td>
            <td className="p-3 border">1 to N-1</td>
            <td className="p-3 border">2-3</td>
            <td className="p-3 border">2(N-1)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Delay (entry)</td>
            <td className="p-3 border">0 to N-1</td>
            <td className="p-3 border">2</td>
            <td className="p-3 border">2</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Idle Overhead</td>
            <td className="p-3 border">High (token circles)</td>
            <td className="p-3 border">None</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure Impact</td>
            <td className="p-3 border">Token loss, ring repair</td>
            <td className="p-3 border">System halt</td>
            <td className="p-3 border">System halt</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Processes arranged in logical ring; token circulates continuously</li>
        <li>Only token holder can enter critical section</li>
        <li>Message complexity: 1 (best) to N-1 (worst) messages</li>
        <li>Entry delay: 0 to N-1 message times</li>
        <li>No deadlock or starvation; bounded waiting of N-1 passes</li>
        <li>Token loss is main failure mode; requires regeneration protocol</li>
        <li>Efficient under high contention, inefficient when idle</li>
      </ul>
    </div>
  </div>
);

export default TokenRingMutex;
