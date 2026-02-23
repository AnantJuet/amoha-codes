import React from 'react';

const FDMTDMWDM: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      FDM, TDM, and WDM Explained
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Frequency Division Multiplexing (FDM), Time Division Multiplexing (TDM), and Wavelength Division
      Multiplexing (WDM) are the three primary techniques for combining multiple signals into a single
      transmission medium. Each technique divides the channel differently to accommodate multiple users.
    </p>

    <h2 className="text-3xl font-bold mt-8">Frequency Division Multiplexing (FDM)</h2>
    <p className="leading-relaxed">
      FDM is an analog multiplexing technique that divides the total bandwidth into multiple
      non-overlapping frequency bands. Each signal is modulated onto a different carrier frequency.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    FDM Concept:

    Input Signals:           Modulated Signals:
    Signal A (voice) --[Mod f1]--> |===|
    Signal B (voice) --[Mod f2]--> |   |===|
    Signal C (voice) --[Mod f3]--> |   |   |===|
                                   f1  f2  f3  --> Combined Signal

    Frequency Spectrum:
    |--[Ch A]--|--G--|--[Ch B]--|--G--|--[Ch C]--|
    |__________|_____|__________|_____|__________|___> f
    0         4k    8k        12k   16k       20k
              (G = Guard Band)
      `}</pre>
    </div>

    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold mb-2">FDM Advantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Simple implementation</li>
          <li>All channels transmit simultaneously</li>
          <li>Suitable for analog signals</li>
          <li>No synchronization needed</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold mb-2">FDM Disadvantages</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Wasted bandwidth (guard bands)</li>
          <li>Crosstalk between channels</li>
          <li>Requires analog hardware</li>
          <li>Not flexible for varying traffic</li>
        </ul>
      </div>
    </div>

    <div className="p-4 border rounded-lg mt-4">
      <h3 className="font-bold mb-2">FDM Applications</h3>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>AM/FM Radio Broadcasting</li>
        <li>Cable Television (CATV)</li>
        <li>First-generation cellular (AMPS)</li>
        <li>ADSL (Asymmetric Digital Subscriber Line)</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Time Division Multiplexing (TDM)</h2>
    <p className="leading-relaxed">
      TDM is a digital multiplexing technique that divides time into frames, with each frame divided
      into time slots. Each signal is assigned one or more time slots in every frame.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    TDM Concept:

    Frame 1                    Frame 2
    |  A  |  B  |  C  |  D  |  A  |  B  |  C  |  D  |
    |_____|_____|_____|_____|_____|_____|_____|_____|___> Time

    Synchronous TDM: Fixed slots (even if empty)
    |  A  |  -  |  C  |  -  |  A  |  -  |  C  |  -  |

    Statistical TDM: Dynamic allocation (efficient)
    |  A  |  C  |  A  |  C  |  C  |  A  |
      `}</pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">Synchronous TDM</th>
            <th className="p-3 border">Statistical TDM</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Slot Allocation</td>
            <td className="p-3 border">Fixed (predetermined)</td>
            <td className="p-3 border">Dynamic (on demand)</td>
          </tr>
          <tr>
            <td className="p-3 border">Efficiency</td>
            <td className="p-3 border">Lower (empty slots)</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">More complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Addressing</td>
            <td className="p-3 border">Position-based</td>
            <td className="p-3 border">Needs address field</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="p-4 border rounded-lg mt-4">
      <h3 className="font-bold mb-2">TDM Applications</h3>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>T1/E1 telephone lines (DS1)</li>
        <li>ISDN (Integrated Services Digital Network)</li>
        <li>GSM cellular (TDMA)</li>
        <li>SONET/SDH fiber networks</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Wavelength Division Multiplexing (WDM)</h2>
    <p className="leading-relaxed">
      WDM is used in optical fiber communication where multiple light wavelengths (colors) are
      combined and transmitted through a single fiber. Each wavelength carries a separate data stream.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg font-mono text-sm overflow-x-auto mt-4">
      <pre className="text-gray-900">{`
    WDM Concept:

    λ1 (1310nm) ----\\
    λ2 (1330nm) -----[WDM]======[FIBER]======[WDM]
    λ3 (1350nm) ----/  MUX                    DEMUX
    λ4 (1370nm) ----/                         |||||
                                              λ1-λ4

    Types:
    - CWDM: Coarse WDM (8-16 channels, 20nm spacing)
    - DWDM: Dense WDM (80-160+ channels, 0.4nm spacing)
      `}</pre>
    </div>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Feature</th>
            <th className="p-3 border">CWDM</th>
            <th className="p-3 border">DWDM</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Channels</td>
            <td className="p-3 border">8-18</td>
            <td className="p-3 border">80-160+</td>
          </tr>
          <tr>
            <td className="p-3 border">Spacing</td>
            <td className="p-3 border">20 nm</td>
            <td className="p-3 border">0.4-0.8 nm</td>
          </tr>
          <tr>
            <td className="p-3 border">Distance</td>
            <td className="p-3 border">Up to 80 km</td>
            <td className="p-3 border">Thousands of km</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Lower</td>
            <td className="p-3 border">Higher</td>
          </tr>
          <tr>
            <td className="p-3 border">Use Case</td>
            <td className="p-3 border">Metro networks</td>
            <td className="p-3 border">Long-haul backbone</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">FDM</th>
            <th className="p-3 border">TDM</th>
            <th className="p-3 border">WDM</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Division By</td>
            <td className="p-3 border">Frequency</td>
            <td className="p-3 border">Time</td>
            <td className="p-3 border">Wavelength</td>
          </tr>
          <tr>
            <td className="p-3 border">Signal Type</td>
            <td className="p-3 border">Analog</td>
            <td className="p-3 border">Digital</td>
            <td className="p-3 border">Optical</td>
          </tr>
          <tr>
            <td className="p-3 border">Medium</td>
            <td className="p-3 border">Copper/Wireless</td>
            <td className="p-3 border">Any</td>
            <td className="p-3 border">Fiber Optic</td>
          </tr>
          <tr>
            <td className="p-3 border">Bandwidth Usage</td>
            <td className="p-3 border">Part of BW always</td>
            <td className="p-3 border">Full BW in slot</td>
            <td className="p-3 border">Full per wavelength</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>FDM: Analog, divides by frequency bands, used in radio/TV</li>
        <li>TDM: Digital, divides by time slots, synchronous or statistical</li>
        <li>WDM: Optical, divides by wavelength, CWDM or DWDM</li>
        <li>Guard bands/times/wavelengths prevent interference</li>
        <li>Statistical TDM more efficient than synchronous TDM</li>
        <li>DWDM enables terabit capacities in fiber networks</li>
      </ul>
    </div>
  </div>
);

export default FDMTDMWDM;
