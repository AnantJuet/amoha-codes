import React from "react";

const WiFiSecurity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      WiFi Security (WEP, WPA, WPA2, WPA3)
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      WiFi security protocols protect wireless networks from unauthorized access and eavesdropping.
      These protocols have evolved significantly over time, from the broken WEP to the modern
      WPA3, each addressing vulnerabilities in its predecessors. Choosing the right security
      protocol is essential for protecting your network.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Evolution of WiFi Security</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Protocol</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Encryption</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">WEP</td>
            <td className="border border-gray-300 px-4 py-2">1997</td>
            <td className="border border-gray-300 px-4 py-2">RC4</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Broken - Do not use</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WPA</td>
            <td className="border border-gray-300 px-4 py-2">2003</td>
            <td className="border border-gray-300 px-4 py-2">TKIP (RC4-based)</td>
            <td className="border border-gray-300 px-4 py-2 text-orange-600 dark:text-orange-400">Deprecated</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WPA2</td>
            <td className="border border-gray-300 px-4 py-2">2004</td>
            <td className="border border-gray-300 px-4 py-2">AES-CCMP</td>
            <td className="border border-gray-300 px-4 py-2 text-yellow-600 dark:text-yellow-400">Still secure (with patches)</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WPA3</td>
            <td className="border border-gray-300 px-4 py-2">2018</td>
            <td className="border border-gray-300 px-4 py-2">AES-GCMP, SAE</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Recommended</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WEP (Wired Equivalent Privacy)</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <div className="flex items-center gap-2 mb-2">
        <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">BROKEN</span>
        <span className="dark:text-gray-300 font-bold">Never use WEP</span>
      </div>
      <p className="dark:text-gray-300 mb-2">
        Original WiFi security protocol with serious cryptographic flaws:
      </p>
      <ul className="list-disc list-inside dark:text-gray-300 text-sm">
        <li>Uses weak 40-bit or 104-bit keys with 24-bit IV</li>
        <li>RC4 stream cipher with key scheduling weakness</li>
        <li>Can be cracked in minutes with tools like Aircrack-ng</li>
        <li>IV reuse allows statistical attacks</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WPA (WiFi Protected Access)</h2>
    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
      <p className="dark:text-gray-300 mb-2">
        Interim solution while WPA2 was being developed:
      </p>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li><strong>TKIP:</strong> Temporal Key Integrity Protocol - improved key handling</li>
        <li>Per-packet key mixing</li>
        <li>Message integrity check (MIC)</li>
        <li>Still uses RC4 cipher (deprecated)</li>
        <li>Vulnerable to dictionary attacks on weak passwords</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WPA2 (802.11i)</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
      <p className="dark:text-gray-300 mb-2">
        The most widely deployed WiFi security standard:
      </p>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li><strong>AES-CCMP:</strong> Strong 128-bit AES encryption</li>
        <li>Counter mode with CBC-MAC protocol</li>
        <li>4-way handshake for key establishment</li>
        <li>Personal (PSK) and Enterprise (802.1X) modes</li>
      </ul>
      <div className="mt-2 bg-white p-2 rounded text-gray-900">
        <p className="dark:text-gray-300 text-sm">
          <strong>KRACK Vulnerability (2017):</strong> Key reinstallation attack - patch your devices
        </p>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WPA3</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <p className="dark:text-gray-300 mb-2">
        Latest WiFi security standard with significant improvements:
      </p>
      <div className="space-y-2">
        <div className="bg-white p-3 rounded text-gray-900">
          <h4 className="font-bold dark:text-white">SAE (Simultaneous Authentication of Equals)</h4>
          <p className="dark:text-gray-300 text-sm">
            Replaces PSK with Dragonfly key exchange. Resistant to offline dictionary attacks
            even with weak passwords. Provides forward secrecy.
          </p>
        </div>
        <div className="bg-white p-3 rounded text-gray-900">
          <h4 className="font-bold dark:text-white">192-bit Security Mode</h4>
          <p className="dark:text-gray-300 text-sm">
            For enterprise/government with AES-256-GCMP and stronger key derivation.
          </p>
        </div>
        <div className="bg-white p-3 rounded text-gray-900">
          <h4 className="font-bold dark:text-white">Enhanced Open (OWE)</h4>
          <p className="dark:text-gray-300 text-sm">
            Encryption for open networks without passwords. Protects against passive eavesdropping.
          </p>
        </div>
        <div className="bg-white p-3 rounded text-gray-900">
          <h4 className="font-bold dark:text-white">Protected Management Frames (PMF)</h4>
          <p className="dark:text-gray-300 text-sm">
            Mandatory protection against deauthentication attacks.
          </p>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Personal vs Enterprise</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <h3 className="font-bold mb-2 dark:text-white">Personal (WPA2/WPA3-Personal)</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Pre-shared key (password) for all users</li>
          <li>Simple setup</li>
          <li>Suitable for homes and small offices</li>
          <li>Use strong, unique passwords</li>
        </ul>
      </div>
      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-bold mb-2 dark:text-white">Enterprise (WPA2/WPA3-Enterprise)</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>802.1X authentication with RADIUS</li>
          <li>Individual user credentials</li>
          <li>Better auditing and access control</li>
          <li>More complex to deploy</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">WiFi Security Best Practices</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li>Use WPA3 if available; WPA2-AES minimum</li>
        <li>Create strong passwords (12+ characters, mixed types)</li>
        <li>Change default router admin credentials</li>
        <li>Keep router firmware updated</li>
        <li>Disable WPS (WiFi Protected Setup)</li>
        <li>Use separate guest network for visitors</li>
        <li>Hide SSID only provides minimal security benefit</li>
        <li>Enable MAC filtering as additional layer (not primary security)</li>
        <li>Use VPN on public WiFi networks</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>WEP is completely broken; WPA with TKIP is deprecated</li>
        <li>WPA2-AES (CCMP) is still secure with patches but has known vulnerabilities</li>
        <li>WPA3 with SAE provides the strongest security with forward secrecy</li>
        <li>Enterprise mode (802.1X) offers better security for organizations</li>
        <li>Strong passwords and updated firmware are essential regardless of protocol</li>
      </ul>
    </div>
  </div>
);

export default WiFiSecurity;
