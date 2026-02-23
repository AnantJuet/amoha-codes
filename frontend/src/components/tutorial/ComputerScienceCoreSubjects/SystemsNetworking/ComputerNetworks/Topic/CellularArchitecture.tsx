import React from "react";

const CellularArchitecture: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Cellular Network Architecture
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Cellular network architecture defines how mobile networks are structured, from the radio
      access connecting devices to base stations, through the core network that provides
      connectivity, authentication, and routing. The architecture has evolved significantly
      from 2G to 5G, becoming flatter, more software-defined, and IP-based.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">GSM/2G Architecture</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="text-center dark:text-gray-300 mb-4">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <div className="bg-gray-100 text-gray-900 p-2 rounded">MS</div>
          <span>↔</span>
          <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded">BTS</div>
          <span>↔</span>
          <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded">BSC</div>
          <span>↔</span>
          <div className="bg-green-100 dark:bg-green-800 p-2 rounded">MSC</div>
          <span>↔</span>
          <div className="bg-purple-100 dark:bg-purple-800 p-2 rounded">PSTN/Internet</div>
        </div>
      </div>
      <ul className="list-disc list-inside text-sm dark:text-gray-300">
        <li><strong>MS:</strong> Mobile Station (phone)</li>
        <li><strong>BTS:</strong> Base Transceiver Station (tower)</li>
        <li><strong>BSC:</strong> Base Station Controller (manages multiple BTS)</li>
        <li><strong>MSC:</strong> Mobile Switching Center (call routing)</li>
        <li><strong>HLR/VLR:</strong> Home/Visitor Location Register (subscriber data)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">UMTS/3G Architecture</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <div className="text-center dark:text-gray-300 mb-4">
        <div className="flex flex-wrap justify-center items-center gap-2">
          <div className="bg-gray-100 text-gray-900 p-2 rounded">UE</div>
          <span>↔</span>
          <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded">Node B</div>
          <span>↔</span>
          <div className="bg-blue-100 dark:bg-blue-800 p-2 rounded">RNC</div>
          <span>↔</span>
          <div className="bg-green-100 dark:bg-green-800 p-2 rounded">SGSN/GGSN</div>
        </div>
      </div>
      <ul className="list-disc list-inside text-sm dark:text-gray-300">
        <li><strong>UE:</strong> User Equipment</li>
        <li><strong>Node B:</strong> Base station (WCDMA)</li>
        <li><strong>RNC:</strong> Radio Network Controller</li>
        <li><strong>SGSN:</strong> Serving GPRS Support Node (packet routing)</li>
        <li><strong>GGSN:</strong> Gateway GPRS Support Node (connects to internet)</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">LTE/4G Architecture</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <p className="dark:text-gray-300 mb-2 font-bold">Evolved Packet System (EPS)</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2 dark:text-white">E-UTRAN (Radio Access)</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li><strong>eNodeB:</strong> Evolved Node B (base station)</li>
            <li>Flatter architecture - no RNC</li>
            <li>eNodeBs connect directly to core</li>
            <li>X2 interface between eNodeBs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 dark:text-white">EPC (Core Network)</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li><strong>MME:</strong> Mobility Management Entity</li>
            <li><strong>SGW:</strong> Serving Gateway</li>
            <li><strong>PGW:</strong> PDN Gateway</li>
            <li><strong>HSS:</strong> Home Subscriber Server</li>
            <li><strong>PCRF:</strong> Policy and Charging Rules</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">5G Architecture</h2>
    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
      <p className="dark:text-gray-300 mb-4">
        5G introduces a Service-Based Architecture (SBA) with cloud-native network functions:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-bold mb-2 dark:text-white">NG-RAN (Radio Access)</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li><strong>gNodeB:</strong> 5G NR base station</li>
            <li><strong>ng-eNB:</strong> Upgraded LTE base station</li>
            <li>Split architecture (CU/DU)</li>
            <li>Massive MIMO antennas</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 dark:text-white">5G Core (5GC)</h3>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li><strong>AMF:</strong> Access and Mobility Function</li>
            <li><strong>SMF:</strong> Session Management Function</li>
            <li><strong>UPF:</strong> User Plane Function</li>
            <li><strong>UDM:</strong> Unified Data Management</li>
            <li><strong>PCF:</strong> Policy Control Function</li>
            <li><strong>NRF:</strong> Network Repository Function</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">5G Deployment Options</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Option</th>
            <th className="border border-gray-300 px-4 py-2 text-left">RAN</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Core</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">NSA (Option 3x)</td>
            <td className="border border-gray-300 px-4 py-2">LTE + NR</td>
            <td className="border border-gray-300 px-4 py-2">EPC (4G)</td>
            <td className="border border-gray-300 px-4 py-2">5G NR anchored to LTE, initial deployment</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SA (Option 2)</td>
            <td className="border border-gray-300 px-4 py-2">NR only</td>
            <td className="border border-gray-300 px-4 py-2">5GC</td>
            <td className="border border-gray-300 px-4 py-2">Full 5G, enables all features</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Network Slicing</h2>
    <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-200 dark:border-teal-800">
      <p className="dark:text-gray-300 mb-2">
        5G enables network slicing - creating multiple virtual networks on shared infrastructure:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white p-3 rounded text-center text-gray-900">
          <p className="font-bold dark:text-white">eMBB Slice</p>
          <p className="text-sm dark:text-gray-300">High bandwidth for streaming</p>
        </div>
        <div className="bg-white p-3 rounded text-center text-gray-900">
          <p className="font-bold dark:text-white">URLLC Slice</p>
          <p className="text-sm dark:text-gray-300">Low latency for autonomous vehicles</p>
        </div>
        <div className="bg-white p-3 rounded text-center text-gray-900">
          <p className="font-bold dark:text-white">mMTC Slice</p>
          <p className="text-sm dark:text-gray-300">Massive IoT sensors</p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Architecture Evolution Summary</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
            <th className="border border-gray-300 px-4 py-2 text-left">2G/3G</th>
            <th className="border border-gray-300 px-4 py-2 text-left">4G LTE</th>
            <th className="border border-gray-300 px-4 py-2 text-left">5G</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300 text-sm">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Base Station</td>
            <td className="border border-gray-300 px-4 py-2">BTS/Node B</td>
            <td className="border border-gray-300 px-4 py-2">eNodeB</td>
            <td className="border border-gray-300 px-4 py-2">gNodeB</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Controller</td>
            <td className="border border-gray-300 px-4 py-2">BSC/RNC</td>
            <td className="border border-gray-300 px-4 py-2">None (flat)</td>
            <td className="border border-gray-300 px-4 py-2">CU/DU split</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Core Architecture</td>
            <td className="border border-gray-300 px-4 py-2">Hierarchical</td>
            <td className="border border-gray-300 px-4 py-2">Flat, all-IP</td>
            <td className="border border-gray-300 px-4 py-2">Service-based</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Virtualization</td>
            <td className="border border-gray-300 px-4 py-2">Hardware-based</td>
            <td className="border border-gray-300 px-4 py-2">Beginning NFV</td>
            <td className="border border-gray-300 px-4 py-2">Cloud-native</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Cellular architecture includes Radio Access Network (RAN) and Core Network</li>
        <li>Architecture has evolved from hierarchical (2G/3G) to flat (4G) to service-based (5G)</li>
        <li>LTE simplified architecture by removing RNC; eNodeB connects directly to core</li>
        <li>5G uses cloud-native, microservices-based network functions</li>
        <li>Network slicing enables customized virtual networks for different use cases</li>
      </ul>
    </div>
  </div>
);

export default CellularArchitecture;
