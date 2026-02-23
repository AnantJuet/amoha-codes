import React from "react";

const SSLTLS: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      SSL/TLS Protocols
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) are cryptographic
      protocols designed to provide secure communication over a network. TLS is the protocol that
      enables HTTPS, securing web traffic, email, instant messaging, and VoIP. While SSL is deprecated,
      "SSL" is often still used colloquially to refer to TLS.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Protocol Evolution</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Version</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Year</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">SSL 2.0</td>
            <td className="border border-gray-300 px-4 py-2">1995</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated</td>
            <td className="border border-gray-300 px-4 py-2">Serious security flaws</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">SSL 3.0</td>
            <td className="border border-gray-300 px-4 py-2">1996</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated</td>
            <td className="border border-gray-300 px-4 py-2">POODLE vulnerability</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">TLS 1.0</td>
            <td className="border border-gray-300 px-4 py-2">1999</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated</td>
            <td className="border border-gray-300 px-4 py-2">BEAST, CRIME attacks</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">TLS 1.1</td>
            <td className="border border-gray-300 px-4 py-2">2006</td>
            <td className="border border-gray-300 px-4 py-2 text-red-600 dark:text-red-400">Deprecated</td>
            <td className="border border-gray-300 px-4 py-2">Weak cipher suites</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">TLS 1.2</td>
            <td className="border border-gray-300 px-4 py-2">2008</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Supported</td>
            <td className="border border-gray-300 px-4 py-2">Widely used, secure with proper config</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">TLS 1.3</td>
            <td className="border border-gray-300 px-4 py-2">2018</td>
            <td className="border border-gray-300 px-4 py-2 text-green-600 dark:text-green-400">Recommended</td>
            <td className="border border-gray-300 px-4 py-2">Fastest, most secure</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">TLS 1.2 Handshake</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <div className="space-y-2 dark:text-gray-300 text-sm">
        <div className="grid grid-cols-3 gap-2 text-center font-bold">
          <div>Client</div>
          <div></div>
          <div>Server</div>
        </div>
        <div className="grid grid-cols-3 gap-2 items-center">
          <div className="text-right">ClientHello</div>
          <div className="text-center">→</div>
          <div>(version, random, cipher suites)</div>
        </div>
        <div className="grid grid-cols-3 gap-2 items-center">
          <div>(chosen cipher, certificate)</div>
          <div className="text-center">←</div>
          <div className="text-left">ServerHello, Certificate, ServerHelloDone</div>
        </div>
        <div className="grid grid-cols-3 gap-2 items-center">
          <div className="text-right">ClientKeyExchange, ChangeCipherSpec, Finished</div>
          <div className="text-center">→</div>
          <div>(pre-master secret)</div>
        </div>
        <div className="grid grid-cols-3 gap-2 items-center">
          <div>(confirm encryption)</div>
          <div className="text-center">←</div>
          <div className="text-left">ChangeCipherSpec, Finished</div>
        </div>
        <div className="grid grid-cols-3 gap-2 items-center font-bold text-green-600 dark:text-green-400">
          <div className="text-right">Encrypted Application Data</div>
          <div className="text-center">↔</div>
          <div>Encrypted Application Data</div>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">TLS 1.3 Improvements</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Faster Handshake</h3>
        <ul className="list-disc list-inside dark:text-gray-300 text-sm">
          <li>1-RTT handshake (vs 2-RTT in TLS 1.2)</li>
          <li>0-RTT resumption for returning clients</li>
          <li>Key exchange happens in first message</li>
        </ul>
      </div>
      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
        <h3 className="font-bold mb-2 dark:text-white">Stronger Security</h3>
        <ul className="list-disc list-inside dark:text-gray-300 text-sm">
          <li>Removed weak algorithms (RSA key exchange, RC4, etc.)</li>
          <li>Forward secrecy mandatory (ECDHE/DHE)</li>
          <li>Encrypted certificates</li>
        </ul>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Cipher Suites</h2>
    <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
      <p className="dark:text-gray-300 mb-2">A cipher suite specifies the algorithms used:</p>
      <div className="font-mono text-sm text-gray-900 bg-white p-2 rounded">
        TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
      </div>
      <ul className="list-disc list-inside mt-2 dark:text-gray-300 text-sm">
        <li><strong>ECDHE:</strong> Key exchange algorithm (Elliptic Curve Diffie-Hellman Ephemeral)</li>
        <li><strong>RSA:</strong> Authentication algorithm</li>
        <li><strong>AES_256_GCM:</strong> Bulk encryption (256-bit AES in Galois/Counter Mode)</li>
        <li><strong>SHA384:</strong> MAC/PRF algorithm</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">TLS Components</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Component</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Key Exchange</td>
            <td className="border border-gray-300 px-4 py-2">Establish shared secret</td>
            <td className="border border-gray-300 px-4 py-2">ECDHE, DHE, RSA</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Authentication</td>
            <td className="border border-gray-300 px-4 py-2">Verify server identity</td>
            <td className="border border-gray-300 px-4 py-2">RSA, ECDSA</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Bulk Encryption</td>
            <td className="border border-gray-300 px-4 py-2">Encrypt application data</td>
            <td className="border border-gray-300 px-4 py-2">AES-GCM, ChaCha20</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">MAC</td>
            <td className="border border-gray-300 px-4 py-2">Message integrity</td>
            <td className="border border-gray-300 px-4 py-2">SHA-256, SHA-384</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Forward Secrecy</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <p className="dark:text-gray-300">
        Forward secrecy (also called perfect forward secrecy) ensures that session keys cannot be
        compromised even if the server's private key is later compromised. This is achieved by using
        ephemeral key exchange algorithms (ECDHE/DHE) that generate unique session keys.
      </p>
      <p className="mt-2 dark:text-gray-300 font-bold">
        TLS 1.3 requires forward secrecy - RSA key exchange is no longer supported.
      </p>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Common TLS Issues</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <ul className="list-disc list-inside space-y-2 dark:text-gray-300">
        <li><strong>Certificate errors:</strong> Expired, wrong domain, untrusted CA</li>
        <li><strong>Mixed content:</strong> HTTPS page loading HTTP resources</li>
        <li><strong>Weak cipher suites:</strong> Using deprecated algorithms</li>
        <li><strong>Protocol downgrade:</strong> Forcing older, vulnerable versions</li>
        <li><strong>Certificate pinning bypass:</strong> MITM attacks on mobile apps</li>
      </ul>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>TLS is the modern successor to SSL; use TLS 1.2 or 1.3</li>
        <li>TLS provides encryption, authentication, and integrity for network communication</li>
        <li>TLS 1.3 is faster (1-RTT) and more secure than TLS 1.2</li>
        <li>Cipher suites define the algorithms used for key exchange, encryption, and authentication</li>
        <li>Forward secrecy protects past sessions even if long-term keys are compromised</li>
      </ul>
    </div>
  </div>
);

export default SSLTLS;
