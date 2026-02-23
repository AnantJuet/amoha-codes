import React from "react";

const MobileGenerations: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Mobile Network Generations (2G, 3G, 4G, 5G)
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Mobile network technology has progressed through distinct generations, each bringing
      significant improvements in speed, capacity, and capabilities. From 1G analog voice
      to 5G's ultra-reliable low-latency communications, each generation has transformed
      how we communicate and interact with technology.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">1G - First Generation (1980s)</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Characteristics</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>Analog voice transmission</li>
            <li>FDMA access method</li>
            <li>No encryption (insecure)</li>
            <li>Large phones, poor battery</li>
            <li>Speed: ~2.4 Kbps</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Technologies</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>AMPS (Americas)</li>
            <li>TACS (Europe)</li>
            <li>NMT (Nordic)</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">2G - Second Generation (1990s)</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Characteristics</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>Digital transmission</li>
            <li>Encrypted voice calls</li>
            <li>SMS text messaging</li>
            <li>Smaller, cheaper phones</li>
            <li>Speed: 14.4-64 Kbps</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Technologies</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>GSM (TDMA-based) - dominant</li>
            <li>CDMA (IS-95)</li>
            <li>2.5G: GPRS (114 Kbps)</li>
            <li>2.75G: EDGE (384 Kbps)</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">3G - Third Generation (2000s)</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Characteristics</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>Mobile broadband internet</li>
            <li>Video calling</li>
            <li>Mobile apps emerging</li>
            <li>Smartphones rise</li>
            <li>Speed: 384 Kbps - 2 Mbps</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Technologies</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>UMTS (W-CDMA)</li>
            <li>CDMA2000</li>
            <li>3.5G: HSPA (14 Mbps)</li>
            <li>3.75G: HSPA+ (42 Mbps)</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">4G - Fourth Generation (2010s)</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Characteristics</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>All-IP network architecture</li>
            <li>HD video streaming</li>
            <li>VoLTE voice over LTE</li>
            <li>Low latency (~50ms)</li>
            <li>Speed: 100 Mbps - 1 Gbps</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Technologies</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>LTE (Long Term Evolution)</li>
            <li>LTE-Advanced (LTE-A)</li>
            <li>LTE-Advanced Pro</li>
            <li>WiMAX (less common)</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 bg-white p-3 rounded text-gray-900">
        <h4 className="font-bold dark:text-white">Key LTE Features:</h4>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>OFDMA downlink, SC-FDMA uplink</li>
          <li>MIMO (Multiple Input Multiple Output)</li>
          <li>Carrier Aggregation (up to 32 carriers)</li>
          <li>Flat all-IP architecture</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">5G - Fifth Generation (2020s)</h2>
    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Characteristics</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>Ultra-high speeds (multi-Gbps)</li>
            <li>Ultra-low latency (1-10ms)</li>
            <li>Massive device connectivity</li>
            <li>Network slicing</li>
            <li>Edge computing integration</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 dark:text-white">Technologies</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>5G NR (New Radio)</li>
            <li>Sub-6 GHz bands</li>
            <li>mmWave (24-100 GHz)</li>
            <li>Massive MIMO</li>
            <li>Beamforming</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">5G Use Case Categories</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
        <h3 className="font-bold mb-2 dark:text-white">eMBB</h3>
        <p className="text-sm dark:text-gray-300">Enhanced Mobile Broadband</p>
        <ul className="list-disc list-inside text-xs dark:text-gray-300 mt-2">
          <li>4K/8K video streaming</li>
          <li>AR/VR experiences</li>
          <li>Cloud gaming</li>
        </ul>
      </div>
      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
        <h3 className="font-bold mb-2 dark:text-white">URLLC</h3>
        <p className="text-sm dark:text-gray-300">Ultra-Reliable Low-Latency</p>
        <ul className="list-disc list-inside text-xs dark:text-gray-300 mt-2">
          <li>Autonomous vehicles</li>
          <li>Remote surgery</li>
          <li>Industrial automation</li>
        </ul>
      </div>
      <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
        <h3 className="font-bold mb-2 dark:text-white">mMTC</h3>
        <p className="text-sm dark:text-gray-300">Massive Machine-Type Comm</p>
        <ul className="list-disc list-inside text-xs dark:text-gray-300 mt-2">
          <li>Smart cities</li>
          <li>IoT sensors</li>
          <li>1M devices/km2</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Generation Comparison</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
            <th className="border border-gray-300 px-4 py-2 text-left">2G</th>
            <th className="border border-gray-300 px-4 py-2 text-left">3G</th>
            <th className="border border-gray-300 px-4 py-2 text-left">4G</th>
            <th className="border border-gray-300 px-4 py-2 text-left">5G</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300 text-sm">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Peak Speed</td>
            <td className="border border-gray-300 px-4 py-2">384 Kbps</td>
            <td className="border border-gray-300 px-4 py-2">42 Mbps</td>
            <td className="border border-gray-300 px-4 py-2">1 Gbps</td>
            <td className="border border-gray-300 px-4 py-2">20 Gbps</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Latency</td>
            <td className="border border-gray-300 px-4 py-2">300-1000ms</td>
            <td className="border border-gray-300 px-4 py-2">100-500ms</td>
            <td className="border border-gray-300 px-4 py-2">30-50ms</td>
            <td className="border border-gray-300 px-4 py-2">1-10ms</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Devices/km2</td>
            <td className="border border-gray-300 px-4 py-2">~1,000</td>
            <td className="border border-gray-300 px-4 py-2">~10,000</td>
            <td className="border border-gray-300 px-4 py-2">~100,000</td>
            <td className="border border-gray-300 px-4 py-2">1,000,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Each generation roughly provides 10x speed improvement over the previous</li>
        <li>2G introduced digital voice and SMS; 3G enabled mobile internet</li>
        <li>4G LTE brought all-IP architecture and HD streaming capabilities</li>
        <li>5G targets three use cases: eMBB (speed), URLLC (latency), mMTC (IoT)</li>
        <li>5G uses mmWave and sub-6 GHz bands with massive MIMO and beamforming</li>
      </ul>
    </div>
  </div>
);

export default MobileGenerations;
