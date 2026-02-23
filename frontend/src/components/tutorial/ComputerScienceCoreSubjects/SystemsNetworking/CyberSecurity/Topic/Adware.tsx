import React from "react";

const Adware: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Adware
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Adware is software that automatically displays or downloads advertising content,
      often without user consent. While some adware is legitimate and bundled with free
      software, malicious adware can track user behavior, redirect browsers, inject ads
      into web pages, and create security vulnerabilities that expose systems to other threats.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Adware</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Behavior</th>
            <th className="p-3 border">Risk Level</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Legitimate</td>
            <td className="p-3 border">Disclosed ads in free software</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Browser Hijacker</td>
            <td className="p-3 border">Changes homepage, search engine</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pop-up Adware</td>
            <td className="p-3 border">Displays intrusive pop-ups</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Ad Injector</td>
            <td className="p-3 border">Injects ads into web pages</td>
            <td className="p-3 border">High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tracking Adware</td>
            <td className="p-3 border">Collects browsing data</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">How Adware Works</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Adware Operation:

DISTRIBUTION:
+------------------+
| Bundled software |  "Free" downloads
| Browser extensions|  Toolbars, add-ons
| Drive-by install |  Malvertising
| Fake updates     |  "Update Flash now!"
+--------+---------+
         |
INSTALLATION:
+--------v---------+
| Browser helper   |  Extensions, plugins
| System service   |  Background process
| Proxy settings   |  Traffic interception
| Registry mods    |  Persistence
+--------+---------+
         |
MONETIZATION:
+--------v---------+
| Display ads      |  Pop-ups, banners
| Redirect traffic |  Affiliate links
| Sell user data   |  Browsing habits
| Click fraud      |  Fake ad clicks
+------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Adware Behaviors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Adware Symptoms:

BROWSER MODIFICATIONS:
- Homepage changed without consent
- Default search engine replaced
- New toolbars appear
- Browser slowdown

ADVERTISEMENT INJECTION:
- Ads appear on ad-free sites
- Pop-ups and pop-unders
- In-text advertisement links
- Full-page overlays

TRACKING ACTIVITIES:
- Browsing history collection
- Search query logging
- Purchase behavior tracking
- Cross-site tracking cookies

SYSTEM IMPACT:
- Slower computer performance
- Increased network traffic
- Browser crashes
- Security warnings

Example Ad Injection:
[Original Page]           [With Adware]
+----------------+        +----------------+
| News Article   |        | [INJECTED AD]  |
|                |   -->  | News Article   |
| [Legitimate Ad]|        | [INJECTED AD]  |
+----------------+        | [Legitimate Ad]|
                          +----------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Adware vs Malware Spectrum</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Adware Classification Spectrum:

LEGITIMATE <-------------------------> MALICIOUS

+------------+  +------------+  +------------+  +------------+
| Ad-supported|  | PUP        |  | Aggressive |  | Malicious  |
| Software    |  | (Unwanted) |  | Adware     |  | Adware     |
+------------+  +------------+  +------------+  +------------+
| Disclosed   |  | Bundled    |  | Difficult  |  | Installs   |
| User consent|  | Opt-out    |  | to remove  |  | malware    |
| Easy remove |  | Annoying   |  | Tracks user|  | Steals data|
+------------+  +------------+  +------------+  +------------+

PUP = Potentially Unwanted Program
- Not clearly malicious
- Often bundled with free software
- Uses dark patterns for installation
- Difficult to distinguish from wanted software`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention and Removal</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Custom Installation:</strong> Always choose custom install to decline bundleware</li>
      <li><strong>Trusted Sources:</strong> Download software from official websites</li>
      <li><strong>Ad Blockers:</strong> Use reputable browser ad-blocking extensions</li>
      <li><strong>Browser Reset:</strong> Reset browser settings if hijacked</li>
      <li><strong>Extension Audit:</strong> Regularly review installed extensions</li>
      <li><strong>Anti-Malware Scan:</strong> Use dedicated adware removal tools</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Adware displays advertisements, often without clear consent</li>
        <li>Browser hijackers modify settings and redirect searches</li>
        <li>Ad injection replaces or adds ads on legitimate websites</li>
        <li>Tracking adware collects and sells browsing behavior</li>
        <li>Always use custom installation to avoid bundled adware</li>
        <li>Adware can serve as a gateway for more serious malware</li>
      </ul>
    </div>
  </div>
);

export default Adware;
