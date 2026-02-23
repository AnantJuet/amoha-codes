import React from "react";

const BurpSuite: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Burp Suite - Web Security Testing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Burp Suite is an integrated platform for performing security testing of web applications.
      It is designed to support the entire testing process, from initial mapping and analysis
      of an application's attack surface to finding and exploiting security vulnerabilities.
    </p>

    <h2 className="text-3xl font-bold mt-8">Burp Suite Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Burp Suite Architecture:

+------------------------------------------------------------------+
|                         BURP SUITE                                |
+------------------------------------------------------------------+
|                                                                   |
|  +----------+  +----------+  +----------+  +----------+          |
|  |  PROXY   |  |  TARGET  |  | INTRUDER |  | REPEATER |          |
|  | Intercept|  | Site Map |  | Fuzzing  |  | Manual   |          |
|  | Modify   |  | Scope    |  | Brute    |  | Testing  |          |
|  +----------+  +----------+  +----------+  +----------+          |
|                                                                   |
|  +----------+  +----------+  +----------+  +----------+          |
|  | SEQUENCER|  | DECODER  |  | COMPARER |  | EXTENDER |          |
|  | Token    |  | Encode/  |  | Diff     |  | Plugins  |          |
|  | Analysis |  | Decode   |  | Compare  |  | BApps    |          |
|  +----------+  +----------+  +----------+  +----------+          |
|                                                                   |
|  +----------+  +----------+                                       |
|  | SCANNER  |  | CRAWLER  |  (Professional Edition)              |
|  | Auto Vuln|  | Spider   |                                       |
|  +----------+  +----------+                                       |
+------------------------------------------------------------------+

Browser <---> Burp Proxy <---> Target Web Application`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Tool Descriptions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Tool</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Key Features</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Proxy</td>
            <td className="p-3 border">Intercept HTTP/S traffic</td>
            <td className="p-3 border">View, modify, forward requests</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Target</td>
            <td className="p-3 border">Application mapping</td>
            <td className="p-3 border">Site map, scope definition</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Intruder</td>
            <td className="p-3 border">Automated attacks</td>
            <td className="p-3 border">Fuzzing, brute force, enumeration</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Repeater</td>
            <td className="p-3 border">Manual testing</td>
            <td className="p-3 border">Modify and resend requests</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Sequencer</td>
            <td className="p-3 border">Token analysis</td>
            <td className="p-3 border">Randomness quality testing</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Decoder</td>
            <td className="p-3 border">Data transformation</td>
            <td className="p-3 border">Encode/decode various formats</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Comparer</td>
            <td className="p-3 border">Response comparison</td>
            <td className="p-3 border">Visual diff of requests/responses</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Setting Up Burp Proxy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Proxy Configuration:

1. Start Burp Suite
2. Go to Proxy > Options
3. Default listener: 127.0.0.1:8080

Browser Configuration:
+------------------+----------------------------------+
| Browser          | Proxy Setting                    |
+------------------+----------------------------------+
| Firefox          | Settings > Network > Manual Proxy|
| Chrome           | Use FoxyProxy extension         |
| System-wide      | System proxy settings           |
+------------------+----------------------------------+

HTTPS Interception:
1. Visit http://burp in browser (with proxy enabled)
2. Download CA Certificate
3. Import into browser's certificate store
4. Mark as trusted for websites

Proxy > Intercept Tab:
- Intercept is on/off toggle
- Forward: Send request to server
- Drop: Discard request
- Action: Send to other tools`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Intruder Attack Types</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Intruder Attack Types:

1. SNIPER
   - Single payload set
   - Targets one position at a time
   - Use for: Single parameter testing

   Request: login?user=[PAYLOAD]&pass=test
   Payload: admin, root, user
   Requests: user=admin, user=root, user=user

2. BATTERING RAM
   - Single payload set
   - Same payload in all positions simultaneously
   - Use for: Matching values in multiple fields

   Request: login?user=[PAYLOAD]&pass=[PAYLOAD]
   Payload: admin
   Request: user=admin&pass=admin

3. PITCHFORK
   - Multiple payload sets
   - Parallel iteration (1-1, 2-2, 3-3)
   - Use for: Known credential pairs

   Positions: user=[P1]&pass=[P2]
   Set1: admin, user     Set2: admin123, user123
   Requests: admin/admin123, user/user123

4. CLUSTER BOMB
   - Multiple payload sets
   - All combinations tested
   - Use for: Brute force attacks

   Positions: user=[P1]&pass=[P2]
   Set1: admin, user     Set2: pass1, pass2
   Requests: admin/pass1, admin/pass2, user/pass1, user/pass2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Testing Scenarios</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Vulnerability</th>
            <th className="p-3 border">Burp Tool</th>
            <th className="p-3 border">Technique</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">SQL Injection</td>
            <td className="p-3 border">Intruder/Repeater</td>
            <td className="p-3 border">Inject SQL payloads, observe errors</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">XSS</td>
            <td className="p-3 border">Repeater/Intruder</td>
            <td className="p-3 border">Inject script tags, check reflection</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CSRF</td>
            <td className="p-3 border">Repeater</td>
            <td className="p-3 border">Remove/modify tokens, test acceptance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Brute Force</td>
            <td className="p-3 border">Intruder (Cluster Bomb)</td>
            <td className="p-3 border">Username/password combinations</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">IDOR</td>
            <td className="p-3 border">Intruder (Sniper)</td>
            <td className="p-3 border">Enumerate IDs in requests</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Session Analysis</td>
            <td className="p-3 border">Sequencer</td>
            <td className="p-3 border">Test token randomness</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Repeater Usage</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Using Repeater for Manual Testing:

1. Capture request in Proxy
2. Right-click > Send to Repeater
3. Modify request as needed
4. Click "Send"
5. Analyze response

Example SQL Injection Test:
Original:  id=1
Modified:  id=1'
Modified:  id=1 OR 1=1
Modified:  id=1 UNION SELECT null,null,null--

Response Analysis:
- Status codes (200, 500, 302)
- Response length differences
- Error messages
- Content differences

Tips:
- Use Ctrl+R to send to Repeater
- Create multiple tabs for comparison
- Use Render tab to view HTML output
- Check response time for blind injection`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Useful Extensions (BApps)</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Logger++:</strong> Advanced logging of all traffic</li>
      <li><strong>Autorize:</strong> Automated authorization testing</li>
      <li><strong>JSON Web Tokens:</strong> JWT manipulation and testing</li>
      <li><strong>SQLMap Integration:</strong> Send requests to SQLMap</li>
      <li><strong>Retire.js:</strong> Detect outdated JavaScript libraries</li>
      <li><strong>Turbo Intruder:</strong> High-speed request sending</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Install Burp CA certificate for HTTPS interception</li>
        <li>Define target scope to focus testing efforts</li>
        <li>Use Intruder for automated attacks, Repeater for manual testing</li>
        <li>Community Edition is free but has limitations</li>
        <li>Professional Edition includes scanner and advanced features</li>
        <li>Extend functionality with BApp extensions</li>
      </ul>
    </div>
  </div>
);

export default BurpSuite;
