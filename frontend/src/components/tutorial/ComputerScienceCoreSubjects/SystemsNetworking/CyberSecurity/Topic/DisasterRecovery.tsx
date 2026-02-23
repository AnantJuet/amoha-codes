import React from "react";

const DisasterRecovery: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Disaster Recovery
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Disaster Recovery (DR) is the set of policies, tools, and procedures designed to enable
      the recovery or continuation of vital technology infrastructure and systems following a
      natural or human-induced disaster. In cybersecurity, DR is crucial for recovering from
      ransomware attacks, data breaches, and other cyber incidents.
    </p>

    <h2 className="text-3xl font-bold mt-8">DR Planning Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Disaster Recovery Planning Steps:

+------------------------------------------------------------------+
|                  DISASTER RECOVERY PLANNING                       |
+------------------------------------------------------------------+

1. ASSET INVENTORY
   +----------------+
   | Identify all   |  Systems, applications, data
   | IT assets      |  Dependencies and criticality
   +----------------+

2. RISK ASSESSMENT
   +----------------+
   | Identify       |  Natural disasters, cyber attacks
   | threats        |  Hardware failures, human error
   +----------------+

3. DEFINE REQUIREMENTS
   +----------------+
   | Set RTO/RPO    |  Based on business needs
   | per system     |  From BIA results
   +----------------+

4. DEVELOP STRATEGIES
   +----------------+
   | Select         |  Backup, replication
   | recovery       |  Failover sites
   | methods        |  Cloud DR
   +----------------+

5. DOCUMENT PROCEDURES
   +----------------+
   | Create         |  Step-by-step recovery
   | runbooks       |  Roles and responsibilities
   +----------------+

6. TEST AND VALIDATE
   +----------------+
   | Regular        |  Verify recovery works
   | testing        |  Identify gaps
   +----------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Site Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Site Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">RTO</th>
            <th className="p-3 border">Cost</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Hot Site</td>
            <td className="p-3 border">Fully operational duplicate</td>
            <td className="p-3 border">Minutes to hours</td>
            <td className="p-3 border">Highest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Warm Site</td>
            <td className="p-3 border">Partial equipment, needs data</td>
            <td className="p-3 border">Hours to days</td>
            <td className="p-3 border">Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cold Site</td>
            <td className="p-3 border">Space only, no equipment</td>
            <td className="p-3 border">Days to weeks</td>
            <td className="p-3 border">Lowest</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cloud DR</td>
            <td className="p-3 border">Virtual infrastructure on demand</td>
            <td className="p-3 border">Minutes to hours</td>
            <td className="p-3 border">Variable</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Mobile Site</td>
            <td className="p-3 border">Portable/containerized datacenter</td>
            <td className="p-3 border">Hours to days</td>
            <td className="p-3 border">Medium-High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Backup Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Backup Types and Strategies:

BACKUP TYPES
+------------------+----------------------------------+
| Full Backup      | Complete copy of all data        |
|                  | Longest time, largest storage    |
+------------------+----------------------------------+
| Incremental      | Only changes since last backup   |
|                  | Fast backup, slow restore        |
+------------------+----------------------------------+
| Differential     | Changes since last full backup   |
|                  | Balanced approach                |
+------------------+----------------------------------+

3-2-1 BACKUP RULE
+------------------------------------------------------------------+
|  3 copies of data                                                 |
|  2 different storage types                                        |
|  1 copy offsite                                                   |
+------------------------------------------------------------------+

BACKUP STRATEGY EXAMPLE
+------------------------------------------------------------------+
| Day      | Backup Type   | Retention                             |
+------------------------------------------------------------------+
| Daily    | Incremental   | 7 days                                |
| Weekly   | Full          | 4 weeks                               |
| Monthly  | Full          | 12 months                             |
| Yearly   | Full          | 7 years                               |
+------------------------------------------------------------------+

RANSOMWARE CONSIDERATIONS
- Air-gapped/offline backups
- Immutable storage (WORM)
- Backup integrity testing
- Separate backup credentials
- Regular restore testing`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replication Methods</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Replication Options:

SYNCHRONOUS REPLICATION
+------------------------------------------------------------------+
|  Primary        Write       Secondary                             |
|  +------+  ----------->  +------+                                |
|  | Data |                | Data |  Identical                     |
|  +------+  <-----------  +------+                                |
|               Acknowledge                                         |
|                                                                   |
|  + Zero data loss (RPO = 0)                                      |
|  - Requires low latency connection                               |
|  - Performance impact                                            |
+------------------------------------------------------------------+

ASYNCHRONOUS REPLICATION
+------------------------------------------------------------------+
|  Primary        Write       Secondary                             |
|  +------+  ----------->  +------+                                |
|  | Data |                | Data |  Slightly behind               |
|  +------+                +------+                                |
|               (delayed)                                           |
|                                                                   |
|  + Works over distance                                           |
|  + Less performance impact                                       |
|  - Some data loss possible (RPO > 0)                             |
+------------------------------------------------------------------+

REPLICATION TOPOLOGIES
- One-to-one: Single primary to single secondary
- One-to-many: Primary to multiple secondaries
- Many-to-one: Multiple primaries to one secondary
- Cascading: Chain of replication`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DR Testing Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Test Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Risk Level</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Plan Review</td>
            <td className="p-3 border">Read and verify documentation</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Tabletop Exercise</td>
            <td className="p-3 border">Walk through scenarios</td>
            <td className="p-3 border">None</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Component Test</td>
            <td className="p-3 border">Test individual systems</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Parallel Test</td>
            <td className="p-3 border">Run DR alongside production</td>
            <td className="p-3 border">Low-Medium</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failover Test</td>
            <td className="p-3 border">Actually switch to DR site</td>
            <td className="p-3 border">Medium-High</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Full DR Test</td>
            <td className="p-3 border">Complete failover, operate from DR</td>
            <td className="p-3 border">High</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">DR Plan Contents</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`DR Plan Document Structure:

1. OVERVIEW
   - Purpose and scope
   - Plan activation criteria
   - Roles and responsibilities

2. CONTACT INFORMATION
   - DR team contacts
   - Vendor contacts
   - Management escalation

3. SYSTEM INVENTORY
   - Critical systems list
   - Dependencies map
   - RTO/RPO for each system

4. RECOVERY PROCEDURES
   - Step-by-step instructions per system
   - Verification steps
   - Rollback procedures

5. COMMUNICATION PLAN
   - Notification procedures
   - Status reporting
   - External communications

6. TESTING SCHEDULE
   - Test frequency
   - Test procedures
   - Success criteria

7. APPENDICES
   - Network diagrams
   - Configuration details
   - Vendor agreements`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Cloud DR Solutions</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>AWS:</strong> CloudEndure, AWS Backup, Route 53 failover</li>
      <li><strong>Azure:</strong> Azure Site Recovery, Azure Backup</li>
      <li><strong>GCP:</strong> Cloud Storage, Compute Engine snapshots</li>
      <li><strong>DRaaS:</strong> Zerto, Veeam, Druva - managed DR services</li>
      <li><strong>Multi-Cloud:</strong> Replicate across cloud providers for resilience</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>RTO and RPO drive DR strategy and investment decisions</li>
        <li>Follow the 3-2-1 backup rule for data protection</li>
        <li>Test backups regularly - untested backups may not work</li>
        <li>Air-gapped backups are essential for ransomware protection</li>
        <li>Cloud DR offers flexibility and cost advantages</li>
        <li>Document and update DR procedures regularly</li>
      </ul>
    </div>
  </div>
);

export default DisasterRecovery;
