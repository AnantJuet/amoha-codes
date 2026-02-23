import React from 'react';

const DiningPhilosophers: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">

    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Dining Philosophers Problem
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 12 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Dining Philosophers Problem, proposed by Edsger Dijkstra in 1965, is a classic
      synchronization problem that illustrates challenges in allocating shared resources
      among multiple processes while avoiding deadlock and starvation.
    </p>

    {/* Problem Description */}
    <h2 className="text-3xl font-bold mt-8">Problem Description</h2>
    <p className="leading-relaxed">
      Five philosophers sit around a circular table. Each philosopher has a plate of
      spaghetti, and there is one chopstick between each pair of adjacent philosophers
      (5 chopsticks total).
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li>Each philosopher alternates between thinking and eating</li>
      <li>To eat, a philosopher needs both left and right chopsticks</li>
      <li>A philosopher can only pick up one chopstick at a time</li>
      <li>A philosopher must put down both chopsticks when done eating</li>
    </ul>

    {/* Visualization */}
    <h2 className="text-3xl font-bold mt-8">Table Arrangement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
                    Philosopher 0
                        (P0)
                    ┌─────────┐
              C4    │    C0   │
                    │         │
        ┌───────────┴─────────┴───────────┐
        │                                 │
   P4   │                                 │   P1
  (   ) │         DINING TABLE            │ (   )
        │                                 │
        │                                 │   C1
   C3   │                                 │
        │                                 │
        └───────────┬─────────┬───────────┘
                    │    C2   │
              P3    │         │    P2
             (   )  └─────────┘  (   )


Legend:
  P0-P4: Philosophers (5)
  C0-C4: Chopsticks (5)

  Pi uses chopsticks Ci and C(i+1) mod 5

  P0 needs C0 and C4
  P1 needs C1 and C0
  P2 needs C2 and C1
  P3 needs C3 and C2
  P4 needs C4 and C3
`}
      </pre>
    </div>

    {/* Naive Solution - Deadlock */}
    <h2 className="text-3xl font-bold mt-8">Naive Solution (Causes Deadlock!)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Each chopstick is a semaphore
semaphore chopstick[5] = {1, 1, 1, 1, 1};

// Philosopher i
void philosopher(int i) {
    while (true) {
        think();

        wait(chopstick[i]);           // Pick up left chopstick
        wait(chopstick[(i+1) % 5]);   // Pick up right chopstick

        eat();

        signal(chopstick[i]);         // Put down left
        signal(chopstick[(i+1) % 5]); // Put down right
    }
}

// DEADLOCK SCENARIO:
// All philosophers pick up their left chopstick simultaneously
// All wait for right chopstick (held by neighbor) → DEADLOCK!

Time    P0       P1       P2       P3       P4
  │    left     left     left     left     left
  │    C0       C1       C2       C3       C4
  │    wait     wait     wait     wait     wait
  ▼    C4       C0       C1       C2       C3
       (P4)     (P0)     (P1)     (P2)     (P3)
       DEADLOCK - circular wait!`}
      </pre>
    </div>

    {/* Solution 1: At Most 4 Philosophers */}
    <h2 className="text-3xl font-bold mt-8">Solution 1: Limit Philosophers at Table</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Allow at most 4 philosophers to sit simultaneously
semaphore chopstick[5] = {1, 1, 1, 1, 1};
semaphore room = 4;    // Max 4 philosophers at table

void philosopher(int i) {
    while (true) {
        think();

        wait(room);                    // Enter room (max 4)
        wait(chopstick[i]);            // Pick up left
        wait(chopstick[(i+1) % 5]);    // Pick up right

        eat();

        signal(chopstick[i]);          // Put down left
        signal(chopstick[(i+1) % 5]);  // Put down right
        signal(room);                  // Leave room
    }
}

// With only 4 philosophers, at least one can always eat
// (5 chopsticks, at most 4 philosophers → 1 extra chopstick)`}
      </pre>
    </div>

    {/* Solution 2: Asymmetric */}
    <h2 className="text-3xl font-bold mt-8">Solution 2: Asymmetric (Odd-Even)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Odd philosophers: pick left first, then right
// Even philosophers: pick right first, then left
semaphore chopstick[5] = {1, 1, 1, 1, 1};

void philosopher(int i) {
    while (true) {
        think();

        if (i % 2 == 0) {              // Even philosopher
            wait(chopstick[(i+1) % 5]); // Right first
            wait(chopstick[i]);         // Then left
        } else {                        // Odd philosopher
            wait(chopstick[i]);         // Left first
            wait(chopstick[(i+1) % 5]); // Then right
        }

        eat();

        signal(chopstick[i]);
        signal(chopstick[(i+1) % 5]);
    }
}

// Breaks circular wait by changing pickup order`}
      </pre>
    </div>

    {/* Solution 3: Pick Both or None */}
    <h2 className="text-3xl font-bold mt-8">Solution 3: Atomic Pickup (Both or None)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`// Philosopher can only pick up both chopsticks together
semaphore chopstick[5] = {1, 1, 1, 1, 1};
semaphore mutex = 1;    // For atomic pickup

void philosopher(int i) {
    while (true) {
        think();

        wait(mutex);                   // Enter critical section
        wait(chopstick[i]);            // Pick up left
        wait(chopstick[(i+1) % 5]);    // Pick up right
        signal(mutex);                 // Exit critical section

        eat();

        signal(chopstick[i]);
        signal(chopstick[(i+1) % 5]);
    }
}

// Problem: Low concurrency (only one philosopher picks at a time)
// But guarantees no deadlock`}
      </pre>
    </div>

    {/* Solution 4: Monitor-Based */}
    <h2 className="text-3xl font-bold mt-8">Solution 4: Monitor-Based Solution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`monitor DiningPhilosophers {
    enum {THINKING, HUNGRY, EATING} state[5];
    condition self[5];

    void pickup(int i) {
        state[i] = HUNGRY;
        test(i);                        // Try to acquire chopsticks
        if (state[i] != EATING)
            self[i].wait();             // Wait if couldn't eat
    }

    void putdown(int i) {
        state[i] = THINKING;
        test((i + 4) % 5);              // Check left neighbor
        test((i + 1) % 5);              // Check right neighbor
    }

    void test(int i) {
        // Can eat if: hungry AND both neighbors not eating
        if (state[(i + 4) % 5] != EATING &&
            state[i] == HUNGRY &&
            state[(i + 1) % 5] != EATING) {
            state[i] = EATING;
            self[i].signal();           // Wake up if waiting
        }
    }

    initialization_code() {
        for (int i = 0; i < 5; i++)
            state[i] = THINKING;
    }
}

// Philosopher i
void philosopher(int i) {
    while (true) {
        think();
        DiningPhilosophers.pickup(i);
        eat();
        DiningPhilosophers.putdown(i);
    }
}`}
      </pre>
    </div>

    {/* State Transition */}
    <h2 className="text-3xl font-bold mt-8">Philosopher State Transitions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`
    ┌─────────────────────────────────────────────────┐
    │                                                 │
    │   ┌──────────┐                                 │
    │   │ THINKING │ ◄────────────────────┐         │
    │   └────┬─────┘                      │         │
    │        │                            │         │
    │        │ want to eat                │ done    │
    │        │ (pickup)                   │ eating  │
    │        ▼                            │(putdown)│
    │   ┌──────────┐                      │         │
    │   │  HUNGRY  │                      │         │
    │   └────┬─────┘                      │         │
    │        │                            │         │
    │        │ both chopsticks            │         │
    │        │ available (test)           │         │
    │        ▼                            │         │
    │   ┌──────────┐                      │         │
    │   │  EATING  │ ─────────────────────┘         │
    │   └──────────┘                                │
    │                                                │
    └─────────────────────────────────────────────────┘
`}
      </pre>
    </div>

    {/* Solution Comparison */}
    <h2 className="text-3xl font-bold mt-8">Solution Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Solution</th>
            <th className="p-3 border">Deadlock Free</th>
            <th className="p-3 border">Starvation Free</th>
            <th className="p-3 border">Concurrency</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Naive</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Limit to 4</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border">Asymmetric</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border">Atomic Pickup</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Possible</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Monitor</td>
            <td className="p-3 border">Yes</td>
            <td className="p-3 border">Yes (if fair)</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-1">
      <li>The problem illustrates deadlock with circular resource dependencies</li>
      <li>Breaking any of the four deadlock conditions solves the problem</li>
      <li>Multiple valid solutions exist with different trade-offs</li>
      <li>The monitor solution provides good concurrency without deadlock</li>
      <li>This pattern applies to many real-world resource allocation problems</li>
    </ul>
  </div>
);

export default DiningPhilosophers;
