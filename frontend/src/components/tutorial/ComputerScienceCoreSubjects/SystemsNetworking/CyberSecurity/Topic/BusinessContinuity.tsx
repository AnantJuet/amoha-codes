import React from "react";

const BusinessContinuity: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Business Continuity Planning
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Business Continuity Planning (BCP) is the process of creating systems of prevention and
      recovery to deal with potential threats to an organization. It ensures that critical
      business functions can continue during and after a disaster, including cyberattacks,
      natural disasters, and other disruptions.
    </p>

    <h2 className="text-3xl font-bold mt-8">BCP vs DR</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Business Continuity vs Disaster Recovery:

+------------------------------------------------------------------+
|                    BUSINESS CONTINUITY                            |
|                                                                   |
|  Focus: Maintaining business operations                           |
|  Scope: People, processes, facilities, technology                 |
|  Goal: Minimize business impact during disruption                 |
|                                                                   |
|  +------------------------------------------------------------+  |
|  |                  DISASTER RECOVERY                          |  |
|  |                                                              |  |
|  |  Focus: Restoring IT systems and data                       |  |
|  |  Scope: Technology, data, infrastructure                    |  |
|  |  Goal: Restore IT operations after disruption               |  |
|  +------------------------------------------------------------+  |
|                                                                   |
+------------------------------------------------------------------+

Relationship:
- DR is a subset of BC
- BC addresses the broader business context
- DR specifically handles IT recovery
- Both are essential for organizational resilience`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BCP Development Process</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Activities</th>
            <th className="p-3 border">Deliverables</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1. Project Initiation</td>
            <td className="p-3 border">Get executive support, define scope</td>
            <td className="p-3 border">Project charter, team</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2. Business Impact Analysis</td>
            <td className="p-3 border">Identify critical functions, impacts</td>
            <td className="p-3 border">BIA report, RTO/RPO</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3. Risk Assessment</td>
            <td className="p-3 border">Identify threats and vulnerabilities</td>
            <td className="p-3 border">Risk register</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4. Strategy Development</td>
            <td className="p-3 border">Define recovery strategies</td>
            <td className="p-3 border">Strategy document</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5. Plan Development</td>
            <td className="p-3 border">Document procedures</td>
            <td className="p-3 border">BC Plan document</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">6. Testing & Exercises</td>
            <td className="p-3 border">Validate plan effectiveness</td>
            <td className="p-3 border">Test results, improvements</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">7. Maintenance</td>
            <td className="p-3 border">Keep plan current</td>
            <td className="p-3 border">Updated plan</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Business Impact Analysis (BIA)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Business Impact Analysis:

PURPOSE
- Identify critical business functions
- Determine impact of disruption
- Establish recovery priorities
- Define RTO and RPO requirements

KEY METRICS
+------------------+----------------------------------+
| RTO              | Recovery Time Objective          |
| (Recovery Time)  | Maximum tolerable downtime       |
|                  | "When do we need it back?"       |
+------------------+----------------------------------+
| RPO              | Recovery Point Objective         |
| (Recovery Point) | Maximum tolerable data loss      |
|                  | "How much data can we lose?"     |
+------------------+----------------------------------+
| MTPD             | Maximum Tolerable Period of      |
|                  | Disruption - absolute limit      |
+------------------+----------------------------------+

Example BIA Results:
+--------------------+--------+--------+----------+
| Business Function  | RTO    | RPO    | Priority |
+--------------------+--------+--------+----------+
| Online Sales       | 4 hrs  | 1 hr   | Critical |
| Email System       | 24 hrs | 4 hrs  | High     |
| HR System          | 72 hrs | 24 hrs | Medium   |
| Training Portal    | 1 week | 1 week | Low      |
+--------------------+--------+--------+----------+

Impact Categories:
- Financial (revenue, fines)
- Operational (productivity)
- Reputational (customer trust)
- Legal/Regulatory (compliance)
- Safety (health and safety)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recovery Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recovery Strategy Options:

PEOPLE
- Cross-training staff
- Remote work capabilities
- Emergency staffing plans
- Succession planning

FACILITIES
- Hot site: Fully equipped, immediate
- Warm site: Partially equipped, setup needed
- Cold site: Space only, requires setup
- Cloud: Virtual infrastructure
- Mobile: Portable recovery capability

TECHNOLOGY
- Data backup and recovery
- System redundancy
- Cloud services
- Virtualization

THIRD PARTIES
- Vendor agreements
- SLA requirements
- Alternate suppliers
- Mutual aid agreements

Strategy Selection Based on RTO:
+------------------+----------------------------------+
| RTO              | Appropriate Strategy             |
+------------------+----------------------------------+
| < 4 hours        | Hot site, active-active          |
| 4-24 hours       | Warm site, rapid recovery        |
| 1-3 days         | Cold site, restore from backup   |
| > 3 days         | Basic recovery, minimal site     |
+------------------+----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BC Plan Components</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Component</th>
            <th className="p-3 border">Contents</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Executive Summary</td>
            <td className="p-3 border">Plan overview for leadership</td>
            <td className="p-3 border">Quick reference</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Activation Criteria</td>
            <td className="p-3 border">When to activate the plan</td>
            <td className="p-3 border">Decision making</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Roles and Responsibilities</td>
            <td className="p-3 border">Who does what</td>
            <td className="p-3 border">Accountability</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Contact Lists</td>
            <td className="p-3 border">Emergency contacts</td>
            <td className="p-3 border">Communication</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Recovery Procedures</td>
            <td className="p-3 border">Step-by-step instructions</td>
            <td className="p-3 border">Guidance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Resource Requirements</td>
            <td className="p-3 border">What is needed to recover</td>
            <td className="p-3 border">Resource planning</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Communication Plan</td>
            <td className="p-3 border">How to communicate during crisis</td>
            <td className="p-3 border">Coordination</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Testing and Exercises</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BC Plan Testing Types:

WALKTHROUGH (Tabletop)
- Discussion-based
- Review plan with team
- Low cost, low disruption
- Identifies gaps in plan

SIMULATION
- Realistic scenario
- Practice response
- More resource intensive
- Tests decision making

PARALLEL TEST
- Activate recovery systems
- Run alongside production
- Validates technical recovery
- No production impact

FULL INTERRUPTION
- Actually fail over
- Complete test of recovery
- High risk, high value
- Validates everything

Testing Frequency:
- Tabletop exercises: Quarterly
- Simulation exercises: Annually
- Technical tests: Semi-annually
- Full tests: Every 2-3 years (or as needed)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BCP Cyber Considerations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Ransomware:</strong> Isolated backups, tested restoration procedures</li>
      <li><strong>Data Breach:</strong> Communication plans, legal requirements</li>
      <li><strong>System Compromise:</strong> Clean system images, rebuild procedures</li>
      <li><strong>DDoS:</strong> Failover, CDN, mitigation services</li>
      <li><strong>Supply Chain:</strong> Vendor dependencies, alternative suppliers</li>
      <li><strong>Insider Threat:</strong> Access controls, separation of duties</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>BCP addresses business continuity; DR addresses IT recovery</li>
        <li>Business Impact Analysis drives recovery priorities</li>
        <li>RTO and RPO determine appropriate recovery strategies</li>
        <li>Plans must be tested and updated regularly</li>
        <li>Executive support is essential for effective BCP</li>
        <li>Consider cyber threats as a major disruption category</li>
      </ul>
    </div>
  </div>
);

export default BusinessContinuity;
