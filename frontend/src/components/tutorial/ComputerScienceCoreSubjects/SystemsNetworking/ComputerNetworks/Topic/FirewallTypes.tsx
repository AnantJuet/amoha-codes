import React from "react";

const FirewallTypes: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Types of Firewalls
    </h1>
    <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed dark:text-gray-300">
      Firewalls have evolved significantly since their inception, with different types operating
      at various layers of the network stack and offering different levels of inspection and control.
      Understanding the types of firewalls helps in selecting the appropriate solution for specific
      security requirements.
    </p>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">1. Packet Filtering Firewall</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
      <p className="dark:text-gray-300 mb-2">
        The simplest type, operating at the network layer (Layer 3). Examines packet headers
        and filters based on source/destination IP, ports, and protocol.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h4 className="font-bold dark:text-white">Advantages:</h4>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>Fast performance</li>
            <li>Low resource usage</li>
            <li>Transparent to users</li>
            <li>Simple to implement</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold dark:text-white">Disadvantages:</h4>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>No state tracking</li>
            <li>Cannot inspect payload</li>
            <li>Vulnerable to IP spoofing</li>
            <li>Complex rule management</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">2. Stateful Inspection Firewall</h2>
    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
      <p className="dark:text-gray-300 mb-2">
        Tracks the state of active connections and makes decisions based on context.
        Maintains a state table of all active sessions.
      </p>
      <div className="bg-white p-3 rounded mt-2 font-mono text-sm text-gray-900">
        <p>State Table Entry:</p>
        <p>| Source IP | Src Port | Dest IP | Dst Port | Protocol | State |</p>
        <p>| 192.168.1.5 | 54321 | 93.184.216.34 | 443 | TCP | ESTABLISHED |</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h4 className="font-bold dark:text-white">Advantages:</h4>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>Tracks connection state</li>
            <li>Better security than packet filtering</li>
            <li>Can handle dynamic protocols</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold dark:text-white">Disadvantages:</h4>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>More resource intensive</li>
            <li>Cannot inspect application data</li>
            <li>State table attacks possible</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">3. Application Layer Firewall (Proxy)</h2>
    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
      <p className="dark:text-gray-300 mb-2">
        Operates at Layer 7, inspecting application-layer protocols (HTTP, FTP, SMTP).
        Acts as an intermediary between client and server.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h4 className="font-bold dark:text-white">Advantages:</h4>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>Deep packet inspection</li>
            <li>Can filter based on content</li>
            <li>Hides internal network structure</li>
            <li>Detailed logging</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold dark:text-white">Disadvantages:</h4>
          <ul className="list-disc list-inside text-sm dark:text-gray-300">
            <li>Slower performance</li>
            <li>May not support all protocols</li>
            <li>More complex configuration</li>
            <li>Can be a single point of failure</li>
          </ul>
        </div>
      </div>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">4. Next-Generation Firewall (NGFW)</h2>
    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
      <p className="dark:text-gray-300 mb-2">
        Combines traditional firewall capabilities with advanced features like IPS,
        application awareness, and threat intelligence.
      </p>
      <h4 className="font-bold mt-2 dark:text-white">Key Features:</h4>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>Deep packet inspection</li>
        <li>Application identification and control</li>
        <li>Integrated Intrusion Prevention System (IPS)</li>
        <li>SSL/TLS inspection</li>
        <li>User identity awareness</li>
        <li>Threat intelligence feeds</li>
        <li>Sandboxing capabilities</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">5. Web Application Firewall (WAF)</h2>
    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
      <p className="dark:text-gray-300 mb-2">
        Specialized firewall protecting web applications from attacks like SQL injection,
        XSS, and CSRF by filtering HTTP traffic.
      </p>
      <h4 className="font-bold mt-2 dark:text-white">Protects Against:</h4>
      <ul className="list-disc list-inside dark:text-gray-300">
        <li>SQL Injection</li>
        <li>Cross-Site Scripting (XSS)</li>
        <li>Cross-Site Request Forgery (CSRF)</li>
        <li>File inclusion vulnerabilities</li>
        <li>OWASP Top 10 threats</li>
      </ul>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Comparison Table</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100 text-gray-900">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Layer</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Speed</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Security</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Use Case</th>
          </tr>
        </thead>
        <tbody className="dark:text-gray-300">
          <tr>
            <td className="border border-gray-300 px-4 py-2">Packet Filtering</td>
            <td className="border border-gray-300 px-4 py-2">3-4</td>
            <td className="border border-gray-300 px-4 py-2">Fastest</td>
            <td className="border border-gray-300 px-4 py-2">Basic</td>
            <td className="border border-gray-300 px-4 py-2">Router ACLs</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Stateful</td>
            <td className="border border-gray-300 px-4 py-2">3-4</td>
            <td className="border border-gray-300 px-4 py-2">Fast</td>
            <td className="border border-gray-300 px-4 py-2">Good</td>
            <td className="border border-gray-300 px-4 py-2">Perimeter</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Application Proxy</td>
            <td className="border border-gray-300 px-4 py-2">7</td>
            <td className="border border-gray-300 px-4 py-2">Slow</td>
            <td className="border border-gray-300 px-4 py-2">High</td>
            <td className="border border-gray-300 px-4 py-2">Content filtering</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">NGFW</td>
            <td className="border border-gray-300 px-4 py-2">3-7</td>
            <td className="border border-gray-300 px-4 py-2">Moderate</td>
            <td className="border border-gray-300 px-4 py-2">Highest</td>
            <td className="border border-gray-300 px-4 py-2">Enterprise</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">WAF</td>
            <td className="border border-gray-300 px-4 py-2">7</td>
            <td className="border border-gray-300 px-4 py-2">Moderate</td>
            <td className="border border-gray-300 px-4 py-2">High (Web)</td>
            <td className="border border-gray-300 px-4 py-2">Web apps</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6 dark:text-white">Hardware vs Software Firewalls</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Hardware Firewalls</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Dedicated appliance</li>
          <li>Higher throughput</li>
          <li>Protects entire network</li>
          <li>More expensive</li>
          <li>Examples: Cisco ASA, Palo Alto, Fortinet</li>
        </ul>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-gray-900">
        <h3 className="font-bold mb-2 dark:text-white">Software Firewalls</h3>
        <ul className="list-disc list-inside text-sm dark:text-gray-300">
          <li>Runs on general-purpose hardware</li>
          <li>Flexible deployment</li>
          <li>Host-based protection</li>
          <li>Lower cost</li>
          <li>Examples: Windows Firewall, iptables, pfSense</li>
        </ul>
      </div>
    </div>

    <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
      <h3 className="text-xl font-bold mb-3 dark:text-white">Key Takeaways</h3>
      <ul className="list-disc list-inside space-y-1 dark:text-gray-300">
        <li>Packet filtering is fast but provides basic security without state tracking</li>
        <li>Stateful firewalls track connections for better security decisions</li>
        <li>Application layer firewalls provide deep inspection but with performance impact</li>
        <li>NGFWs combine multiple security features for comprehensive protection</li>
        <li>WAFs specifically protect web applications from common web attacks</li>
      </ul>
    </div>
  </div>
);

export default FirewallTypes;
