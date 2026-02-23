import React from 'react';

const Multiplexing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Multiplexing in Computer Networks
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Multiplexing is a technique used to combine multiple signals or data streams into a single
      transmission medium to maximize the utilization of bandwidth. The device that performs
      multiplexing is called a Multiplexer (MUX), and the reverse process is called Demultiplexing
      performed by a Demultiplexer (DEMUX).
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Multiplexing?</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-3">
      <li><strong>Bandwidth Efficiency:</strong> Utilizes the full capacity of transmission media</li>
      <li><strong>Cost Reduction:</strong> Single channel serves multiple users, reducing infrastructure costs</li>
      <li><strong>Scalability:</strong> Easily add more signals without new physical connections</li>
      <li><strong>Resource Sharing:</strong> Multiple users can share expensive communication links</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Multiplexing Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Multiplexing and Demultiplexing:

    Input 1 ----\\                              /---- Output 1
    Input 2 -----[  MUX  ]====Link====[ DEMUX ]---- Output 2
    Input 3 ----/                              \\---- Output 3
                    n:1      1 Channel     1:n

    Multiple low-bandwidth channels -> Single high-bandwidth channel
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Multiplexing</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    Multiplexing Techniques:

                        Multiplexing
                             |
          +------------------+------------------+
          |                  |                  |
    Frequency Division  Time Division    Wavelength Division
    Multiplexing (FDM)  Multiplexing(TDM) Multiplexing (WDM)
          |                  |
          |            +-----+-----+
          |            |           |
          |      Synchronous  Statistical
          |         TDM          TDM
          |
    +-----+-----+
    |           |
   FDM        OFDM
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">1. Frequency Division Multiplexing (FDM)</h2>
    <p className="leading-relaxed">
      FDM divides the available bandwidth into multiple non-overlapping frequency bands. Each signal
      is modulated onto a different carrier frequency, allowing simultaneous transmission.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    FDM - Frequency Division:

    Bandwidth
    ^
    |  [Channel 1][Guard][Channel 2][Guard][Channel 3]
    |  |_________|  |   |_________|  |   |_________|
    |     f1     |   |     f2     |   |     f3
    +-------------------------------------------------> Frequency

    Each channel has its own frequency band
    Guard bands prevent interference
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2. Time Division Multiplexing (TDM)</h2>
    <p className="leading-relaxed">
      TDM divides time into fixed intervals (time slots), with each signal getting dedicated slots
      in a repeating pattern. The entire bandwidth is available to each signal during its time slot.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TDM - Time Division:

    |<-------- One Frame -------->|
    | Ch1 | Ch2 | Ch3 | Ch1 | Ch2 | Ch3 | Ch1 | ...
    |_____|_____|_____|_____|_____|_____|_____|_____>
                                                Time

    Synchronous TDM: Fixed slots, even if channel has no data
    Statistical TDM: Slots assigned on demand (more efficient)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">3. Wavelength Division Multiplexing (WDM)</h2>
    <p className="leading-relaxed">
      WDM is used in fiber optic communication where multiple light wavelengths (colors) carry
      different signals simultaneously through a single fiber. It is analogous to FDM for optical systems.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    WDM - Wavelength Division (Fiber Optics):

    Signal 1 (λ1) ---\\
    Signal 2 (λ2) ----[WDM MUX]====Fiber====[WDM DEMUX]
    Signal 3 (λ3) ---/                      |   |   |
                                           λ1  λ2  λ3

    Multiple wavelengths travel through same fiber
    DWDM: Dense WDM (100+ channels)
    CWDM: Coarse WDM (fewer channels, wider spacing)
      `}</pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Table</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">FDM</th>
            <th className="p-3 border">TDM</th>
            <th className="p-3 border">WDM</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Sharing Method</td>
            <td className="p-3 border">Frequency bands</td>
            <td className="p-3 border">Time slots</td>
            <td className="p-3 border">Light wavelengths</td>
          </tr>
          <tr>
            <td className="p-3 border">Signal Type</td>
            <td className="p-3 border">Analog</td>
            <td className="p-3 border">Digital</td>
            <td className="p-3 border">Optical</td>
          </tr>
          <tr>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Coax, Wireless</td>
            <td className="p-3 border">Any</td>
            <td className="p-3 border">Fiber optic</td>
          </tr>
          <tr>
            <td className="p-3 border">Guard Needed</td>
            <td className="p-3 border">Guard bands</td>
            <td className="p-3 border">Guard times</td>
            <td className="p-3 border">Guard wavelengths</td>
          </tr>
          <tr>
            <td className="p-3 border">Applications</td>
            <td className="p-3 border">Radio, Cable TV</td>
            <td className="p-3 border">Phone, Digital</td>
            <td className="p-3 border">Fiber backbone</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Multiplexing combines multiple signals into one transmission channel</li>
        <li>FDM: Divides bandwidth into frequency bands (analog)</li>
        <li>TDM: Divides time into slots, synchronous or statistical</li>
        <li>WDM: Multiple light wavelengths in fiber optics</li>
        <li>Guards (band/time/wavelength) prevent interference</li>
        <li>Maximizes bandwidth utilization and reduces costs</li>
      </ul>
    </div>
  </div>
);

export default Multiplexing;
