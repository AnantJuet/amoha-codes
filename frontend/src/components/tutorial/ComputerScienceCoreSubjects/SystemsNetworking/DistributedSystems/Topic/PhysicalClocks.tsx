import React from "react";

const PhysicalClocks: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Physical Clocks in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Physical clocks are hardware devices that measure the passage of real time in computer systems.
      In distributed systems, maintaining accurate and synchronized physical clocks is crucial for
      coordinating activities, ordering events, and ensuring consistency across multiple nodes.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Physical Clock?</h2>
    <p className="leading-relaxed">
      A physical clock is a device that counts oscillations of a crystal oscillator to measure time.
      Each computer has its own hardware clock that keeps track of time independently. These clocks
      are prone to drift due to manufacturing variations, temperature changes, and other factors.
    </p>

    <h2 className="text-3xl font-bold mt-8">Clock Components</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Physical Clock Architecture:

┌─────────────────────────────────────────────────┐
│              Computer System                     │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────────────┐    ┌──────────────────┐   │
│  │ Crystal Oscillator│───►│    Counter       │   │
│  │   (Quartz)        │    │  (Tick Counter)  │   │
│  └──────────────────┘    └────────┬─────────┘   │
│                                    │             │
│                                    ▼             │
│                          ┌──────────────────┐   │
│                          │  Clock Register   │   │
│                          │   (Time Value)    │   │
│                          └────────┬─────────┘   │
│                                    │             │
│                                    ▼             │
│                          ┌──────────────────┐   │
│                          │  System Software  │   │
│                          │  (Time Services)  │   │
│                          └──────────────────┘   │
└─────────────────────────────────────────────────┘

Typical oscillator frequency: 32.768 kHz or higher
One tick = 1/frequency seconds`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clock Time Representation</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Hardware Clock H(t)</td>
            <td className="p-3 border">Raw counter value from hardware</td>
            <td className="p-3 border">Tick count since boot</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Software Clock C(t)</td>
            <td className="p-3 border">Adjusted time reported by OS</td>
            <td className="p-3 border">Unix timestamp</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UTC (Coordinated Universal Time)</td>
            <td className="p-3 border">International time standard</td>
            <td className="p-3 border">Based on atomic clocks</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Clock Skew</td>
            <td className="p-3 border">Difference between two clocks</td>
            <td className="p-3 border">C1(t) - C2(t)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clock Drift</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Understanding Clock Drift</h3>
      <p className="leading-relaxed">
        Clock drift occurs when a clock runs faster or slower than the reference time (UTC).
        The drift rate (rho) measures how much a clock deviates from perfect time.
      </p>
      <div className="font-mono mt-4 text-gray-900">
        <p>Drift Rate: rho = |dC/dt - 1|</p>
        <p className="mt-2">For a clock running at rate dC/dt:</p>
        <p className="mt-1">- If dC/dt {">"} 1: Clock runs fast</p>
        <p className="mt-1">- If dC/dt {"<"} 1: Clock runs slow</p>
        <p className="mt-1">- If dC/dt = 1: Perfect clock (ideal)</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clock Drift Visualization</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Clock Time vs Real Time:

Clock     ^
Time      │              Fast Clock
C(t)      │             (drift > 0)
          │           ╱
          │         ╱
          │       ╱    Perfect Clock
          │     ╱    ╱ (drift = 0)
          │   ╱    ╱
          │ ╱    ╱
          │╱   ╱     Slow Clock
          │  ╱      (drift < 0)
          │╱
          └─────────────────────────► Real Time t

Maximum Drift Bounds:
For drift rate ρ (rho):
  (1 - ρ) ≤ dC/dt ≤ (1 + ρ)

After time interval Δt:
  Maximum skew between two clocks = 2ρΔt`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sources of Clock Error</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Temperature Variations</h4>
        <p className="text-sm">Crystal oscillators are sensitive to temperature changes, causing frequency variations</p>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Manufacturing Tolerances</h4>
        <p className="text-sm">Each crystal has slight differences in its natural frequency</p>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Aging Effects</h4>
        <p className="text-sm">Crystal frequency changes over time due to aging of the material</p>
      </div>
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Power Supply Variations</h4>
        <p className="text-sm">Voltage fluctuations can affect oscillator frequency</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Typical Drift Rates</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Clock Type</th>
            <th className="p-3 border">Drift Rate</th>
            <th className="p-3 border">Error per Day</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Quartz Crystal (typical)</td>
            <td className="p-3 border">10^-5 to 10^-6</td>
            <td className="p-3 border">~1-10 seconds</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Temperature-Compensated</td>
            <td className="p-3 border">10^-7</td>
            <td className="p-3 border">~10 milliseconds</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Oven-Controlled (OCXO)</td>
            <td className="p-3 border">10^-8</td>
            <td className="p-3 border">~1 millisecond</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Atomic Clock</td>
            <td className="p-3 border">10^-13</td>
            <td className="p-3 border">~1 nanosecond</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Synchronization Problem</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Why Physical Clock Synchronization is Hard:

Machine A                Machine B
   │                        │
   │ T=100.000s             │ T=100.003s
   │                        │
   │ Event e1 occurs        │
   │                        │ Event e2 occurs
   │                        │
   v                        v

Problem: Did e1 happen before or after e2?
- A's clock says e1 at 100.000s
- B's clock says e2 at 100.003s
- But A's clock might be 5ms slow!

If A's true time was 100.005s when e1 occurred:
  e2 actually happened BEFORE e1!

This is why we need clock synchronization.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Synchronization</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">External Synchronization</h3>
        <p className="leading-relaxed">
          Clocks are synchronized to an external reference (UTC). If synchronized within bound D:
        </p>
        <div className="font-mono mt-2 text-gray-900">
          |C(t) - UTC| {"<"} D for all clocks
        </div>
        <p className="text-sm mt-2 italic">Used when absolute time matters</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Internal Synchronization</h3>
        <p className="leading-relaxed">
          Clocks are synchronized with each other. If synchronized within bound D:
        </p>
        <div className="font-mono mt-2 text-gray-900">
          |Ci(t) - Cj(t)| {"<"} D for all pairs
        </div>
        <p className="text-sm mt-2 italic">Used when relative ordering matters</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Synchronization Frequency</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">How Often to Synchronize?</h3>
      <p className="leading-relaxed">
        Given maximum drift rate rho and desired maximum skew delta:
      </p>
      <div className="font-mono mt-4 text-gray-900">
        <p>Resynchronization interval: delta_t {"<="} delta / (2 * rho)</p>
        <p className="mt-4">Example:</p>
        <p>- Maximum allowed skew: delta = 1 ms</p>
        <p>- Drift rate: rho = 10^-5</p>
        <p>- Sync interval: delta_t {"<="} 0.001 / (2 * 0.00001) = 50 seconds</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Clock Adjustment Challenges</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Never Move Clock Backward:</strong> Can cause duplicate timestamps and break causality</li>
      <li><strong>Gradual Adjustment:</strong> Slow down or speed up clock to converge to correct time</li>
      <li><strong>Network Delay:</strong> Communication delays make it hard to know exact remote time</li>
      <li><strong>Fault Tolerance:</strong> Some clocks may fail or provide incorrect time</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Physical clocks use crystal oscillators that drift over time</li>
        <li>Clock skew is the difference between two clocks at a given time</li>
        <li>Clock drift rate measures how fast a clock deviates from real time</li>
        <li>External synchronization aligns clocks to UTC</li>
        <li>Internal synchronization keeps clocks consistent with each other</li>
        <li>Never set clocks backward; use gradual adjustment instead</li>
        <li>Synchronization frequency depends on drift rate and acceptable skew</li>
      </ul>
    </div>
  </div>
);

export default PhysicalClocks;
