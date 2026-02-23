import React from 'react';

const ALOHA: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ALOHA Protocol
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ALOHA is one of the earliest random access protocols developed at the University of Hawaii
      in 1971. It allows multiple stations to transmit data over a shared channel without
      coordination. If collisions occur, stations wait a random time and retransmit.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of ALOHA</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Pure ALOHA</h3>
    <p className="leading-relaxed">
      In Pure ALOHA, a station transmits whenever it has data to send. If a collision occurs
      (detected by lack of acknowledgment), the station waits a random time and retransmits.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Pure ALOHA:

    Station A: |---Frame---|              |---Frame---|
    Station B:       |---Frame---|                        (Collision!)
    Station C:                        |---Frame---|
    Time: ---+--------+--------+--------+--------+----->

    Collision: Any overlap causes both frames to be lost
    Vulnerable period: 2 * Frame time (T_fr)

    If A transmits at time t, collision if B transmits
    during [t - T_fr, t + T_fr]
      `}</pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Slotted ALOHA</h3>
    <p className="leading-relaxed">
      Slotted ALOHA divides time into discrete slots equal to frame transmission time.
      Stations can only begin transmission at the start of a slot, reducing the vulnerable period.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Slotted ALOHA:

    Slots:    |  Slot 1  |  Slot 2  |  Slot 3  |  Slot 4  |
    Station A:|---Frame--|          |          |          |
    Station B:|          |---Frame--|          |          |
    Station C:|          |---Frame--|          |          | (Collision in Slot 2!)
    Time: ----+----------+----------+----------+---------->

    Transmission must start at slot boundary
    Vulnerable period: 1 * Frame time (T_fr)
    Double efficiency compared to Pure ALOHA
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Efficiency Analysis</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Protocol</th>
            <th className="p-3 border">Vulnerable Period</th>
            <th className="p-3 border">Max Throughput</th>
            <th className="p-3 border">At Load G</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Pure ALOHA</td>
            <td className="p-3 border">2T</td>
            <td className="p-3 border">18.4% (1/2e)</td>
            <td className="p-3 border">G = 0.5</td>
          </tr>
          <tr>
            <td className="p-3 border">Slotted ALOHA</td>
            <td className="p-3 border">T</td>
            <td className="p-3 border">36.8% (1/e)</td>
            <td className="p-3 border">G = 1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Throughput Formulas</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
      <h3 className="font-bold mb-2">Mathematical Analysis</h3>
      <div className="font-mono text-sm text-gray-900">
        Let G = offered load (average frames per frame time)<br/><br/>
        Pure ALOHA: S = G * e^(-2G)<br/>
        Maximum at G = 0.5: S_max = 0.184 (18.4%)<br/><br/>
        Slotted ALOHA: S = G * e^(-G)<br/>
        Maximum at G = 1: S_max = 0.368 (36.8%)
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Pure ALOHA</th>
            <th className="p-3 border">Slotted ALOHA</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Time Division</td>
            <td className="p-3 border">Continuous</td>
            <td className="p-3 border">Discrete slots</td>
          </tr>
          <tr>
            <td className="p-3 border">Synchronization</td>
            <td className="p-3 border">Not required</td>
            <td className="p-3 border">Required</td>
          </tr>
          <tr>
            <td className="p-3 border">Collision Probability</td>
            <td className="p-3 border">Higher</td>
            <td className="p-3 border">Lower</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">More complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Applications</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Satellite Communication:</strong> Original use case</li>
      <li><strong>RFID Systems:</strong> Tag collision resolution</li>
      <li><strong>Sensor Networks:</strong> Low traffic environments</li>
      <li><strong>Foundation:</strong> Basis for CSMA protocols</li>
    </ul>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Pure ALOHA: Transmit anytime, 18.4% max efficiency</li>
        <li>Slotted ALOHA: Transmit at slot boundaries, 36.8% max efficiency</li>
        <li>Collisions detected by missing acknowledgments</li>
        <li>Random backoff before retransmission</li>
        <li>Simple but inefficient; foundation for CSMA</li>
      </ul>
    </div>
  </div>
);

export default ALOHA;
