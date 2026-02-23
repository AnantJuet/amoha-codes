import React from "react";

const CristiansAlgorithm: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cristian's Algorithm for Clock Synchronization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Cristian's Algorithm is a clock synchronization algorithm used to synchronize time with
      a time server by client processes. This algorithm works well with low-latency networks
      where Round Trip Time is short compared to the required accuracy.
    </p>

    <h2 className="text-3xl font-bold mt-8">How It Works</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Cristian's Algorithm:

Client                                 Time Server
  │                                         │
  │ T₀ (Request sent)                       │
  │─────────── Request ────────────────────►│
  │                                         │
  │                                         │ Process
  │                                         │ Request
  │                                         │
  │◄────────── Response ───────────────────│
  │            (T_SERVER)                   │
  │                                         │
  │ T₁ (Response received)                  │
  │                                         │

Synchronized Time = T_SERVER + (T₁ - T₀) / 2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm Steps</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Step</th>
            <th className="p-3 border">Action</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1</td>
            <td className="p-3 border">Send Request</td>
            <td className="p-3 border">
              Client sends request to clock server at time T₀
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2</td>
            <td className="p-3 border">Server Responds</td>
            <td className="p-3 border">
              Clock Server returns its current time (T_SERVER)
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3</td>
            <td className="p-3 border">Receive Response</td>
            <td className="p-3 border">
              Client receives response at time T₁
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4</td>
            <td className="p-3 border">Calculate Time</td>
            <td className="p-3 border">
              Client calculates synchronized time using the formula
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">The Formula</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <h3 className="text-xl font-bold mb-3">Synchronized Time Calculation</h3>
      <div className="font-mono text-lg text-gray-900">
        T_CLIENT = T_SERVER + (T₁ - T₀) / 2
      </div>
      <p className="mt-4 leading-relaxed">
        Where:
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li><strong>T_CLIENT:</strong> The synchronized clock time</li>
        <li><strong>T_SERVER:</strong> The clock time returned by the server</li>
        <li><strong>T₀:</strong> Time at which request was sent by client</li>
        <li><strong>T₁:</strong> Time at which response was received by client</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Understanding the Formula</h2>

    <p className="leading-relaxed">
      <strong>T₁ - T₀</strong> represents the combined time taken by the network and server to:
    </p>
    <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
      <li>Transfer the request to the server</li>
      <li>Process the request</li>
      <li>Return the response to the client</li>
    </ul>

    <p className="leading-relaxed mt-4">
      Assuming network latency for request and response are approximately equal,
      <strong>(T₁ - T₀) / 2</strong> estimates the one-way network delay.
    </p>

    <h2 className="text-3xl font-bold mt-8">Error Bounds</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4">
      <p className="leading-relaxed">
        The synchronization error can be at most <strong>±(T₁ - T₀) / 2</strong> seconds.
      </p>
      <div className="font-mono mt-4 text-gray-900">
        Error ∈ [-(T₁ - T₀)/2, (T₁ - T₀)/2]
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Improved Synchronization</h2>

    <p className="leading-relaxed">
      Using iterative testing over the network, we can define a minimum transfer time
      to improve synchronization accuracy:
    </p>

    <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
      <h4 className="font-bold mb-2">With Minimum Transfer Time (T_min):</h4>
      <div className="font-mono text-gray-900">
        Error ∈ [-(T₁ - T₀)/2 + T_min, (T₁ - T₀)/2 - T_min]
      </div>
      <p className="mt-4 leading-relaxed">
        If request and response times differ significantly, use separate minimums:
      </p>
      <div className="font-mono mt-2 text-gray-900">
        T_CLIENT = T_SERVER + (T₁ - T₀)/2 + (T_min2 - T_min1)/2
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Advantages</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Simple to Implement</h4>
        <p className="text-sm">Relatively simple algorithm that can be implemented on most systems</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Fast Synchronization</h4>
        <p className="text-sm">Can synchronize the system clock quickly and efficiently</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Low Network Traffic</h4>
        <p className="text-sm">Requires only one round trip between client and server</p>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
        <h4 className="font-bold mb-2">Good for Small Networks</h4>
        <p className="text-sm">Works well where network latency is relatively low</p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Limitations</h2>

    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Trusted Server Required:</strong> Requires a trusted time server with accurate time</li>
      <li><strong>Single Point of Failure:</strong> If time server fails or is compromised, synchronization fails</li>
      <li><strong>Network Assumptions:</strong> Assumes symmetric network delays</li>
      <li><strong>Not for High-Latency Networks:</strong> Accuracy degrades with high network latency</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Example Calculation</h2>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Example:
  T₀ = 10:00:00.000 (request sent)
  T₁ = 10:00:00.100 (response received, 100ms later)
  T_SERVER = 10:00:05.000 (server time in response)

Calculation:
  Round Trip Time = T₁ - T₀ = 100ms
  One-way delay estimate = 100ms / 2 = 50ms

  T_CLIENT = 10:00:05.000 + 50ms = 10:00:05.050

The client sets its clock to 10:00:05.050
Maximum error: ±50ms`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Client-server model where server provides authoritative time</li>
        <li>Estimates one-way delay as half of round-trip time</li>
        <li>Error bounded by half of round-trip time</li>
        <li>Works best with low-latency, reliable networks</li>
        <li>Simple but requires trusted time server</li>
        <li>Can be improved with iterative measurements</li>
      </ul>
    </div>
  </div>
);

export default CristiansAlgorithm;
