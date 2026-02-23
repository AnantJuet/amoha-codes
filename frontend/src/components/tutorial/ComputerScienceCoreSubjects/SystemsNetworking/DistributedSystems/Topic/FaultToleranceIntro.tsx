import React from "react";

const FaultToleranceIntro: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Introduction to Fault Tolerance
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Fault tolerance is the ability of a distributed system to continue operating
      properly even when some of its components fail. It is a critical property
      for building reliable, highly available systems that users can depend on
      for mission-critical applications.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is Fault Tolerance?</h2>
    <p className="text-lg leading-relaxed mt-2">
      Fault tolerance refers to the capability of a system to continue functioning
      correctly even in the presence of faults. A fault-tolerant system is designed
      to handle failures gracefully, ensuring that the overall system remains
      operational and provides correct results despite component failures.
    </p>

    <h2 className="text-3xl font-bold mt-8">Key Terminology</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Term</th>
            <th className="p-3 border">Definition</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Fault</td>
            <td className="p-3 border">
              The cause of an error in the system
            </td>
            <td className="p-3 border">Hardware defect, software bug</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error</td>
            <td className="p-3 border">
              An incorrect system state caused by a fault
            </td>
            <td className="p-3 border">Corrupted data, wrong computation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failure</td>
            <td className="p-3 border">
              Observable deviation from expected behavior
            </td>
            <td className="p-3 border">Service unavailable, wrong output</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Reliability</td>
            <td className="p-3 border">
              Probability of continuous correct operation
            </td>
            <td className="p-3 border">99.99% uptime (four nines)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Availability</td>
            <td className="p-3 border">
              Fraction of time system is operational
            </td>
            <td className="p-3 border">System accessible 99.9% of time</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fault-Error-Failure Chain</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fault-Error-Failure Propagation:

    ┌─────────┐      ┌─────────┐      ┌─────────┐
    │  FAULT  │ ───▶ │  ERROR  │ ───▶ │ FAILURE │
    └─────────┘      └─────────┘      └─────────┘
         │                │                │
         ▼                ▼                ▼
    Root cause       System state      Observable
    (latent)         deviation         behavior

    Example Chain:
    ┌────────────────┐   ┌────────────────┐   ┌────────────────┐
    │ Memory bit     │   │ Corrupted      │   │ Wrong account  │
    │ flip (fault)   │──▶│ balance value  │──▶│ balance shown  │
    └────────────────┘   │ (error)        │   │ (failure)      │
                         └────────────────┘   └────────────────┘

Fault Tolerance Goal: Prevent faults from becoming failures`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Why Fault Tolerance Matters</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Business Impact</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Downtime costs millions per hour for large systems</li>
          <li>User trust depends on service reliability</li>
          <li>Regulatory compliance requires high availability</li>
          <li>Competitive advantage through reliability</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Technical Necessity</h3>
        <ul className="list-disc list-inside leading-relaxed space-y-1">
          <li>Hardware components eventually fail</li>
          <li>Network partitions are inevitable</li>
          <li>Software bugs cannot be eliminated</li>
          <li>Scale increases failure probability</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fault Tolerance Techniques</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Trade-off</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Redundancy</td>
            <td className="p-3 border">
              Duplicate components to mask failures
            </td>
            <td className="p-3 border">Increased cost and complexity</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Replication</td>
            <td className="p-3 border">
              Maintain multiple copies of data/services
            </td>
            <td className="p-3 border">Consistency challenges</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Checkpointing</td>
            <td className="p-3 border">
              Periodically save state for recovery
            </td>
            <td className="p-3 border">Performance overhead</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Failover</td>
            <td className="p-3 border">
              Switch to backup on primary failure
            </td>
            <td className="p-3 border">Switchover latency</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consensus</td>
            <td className="p-3 border">
              Agreement protocols for coordination
            </td>
            <td className="p-3 border">Latency and complexity</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Availability Metrics</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Availability = MTBF / (MTBF + MTTR)

Where:
  MTBF = Mean Time Between Failures
  MTTR = Mean Time To Repair

Availability Levels ("Nines"):
┌────────────────┬────────────────┬─────────────────────┐
│ Availability   │ Downtime/Year  │ Common Name         │
├────────────────┼────────────────┼─────────────────────┤
│ 99%            │ 3.65 days      │ Two Nines           │
│ 99.9%          │ 8.76 hours     │ Three Nines         │
│ 99.99%         │ 52.56 minutes  │ Four Nines          │
│ 99.999%        │ 5.26 minutes   │ Five Nines          │
│ 99.9999%       │ 31.5 seconds   │ Six Nines           │
└────────────────┴────────────────┴─────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fault Tolerance vs. Fault Avoidance</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Fault Avoidance</h3>
        <p className="leading-relaxed">
          Preventing faults from occurring through quality control, testing,
          and rigorous development practices. While important, it cannot
          guarantee a fault-free system.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Fault Tolerance</h3>
        <p className="leading-relaxed">
          Accepting that faults will occur and designing the system to
          continue operating correctly despite them. This is essential
          for building reliable distributed systems.
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Faults are inevitable in distributed systems at scale</li>
        <li>The fault-error-failure chain shows how problems propagate</li>
        <li>Fault tolerance aims to prevent faults from becoming failures</li>
        <li>Redundancy and replication are fundamental techniques</li>
        <li>Availability is measured in "nines" (99.9%, 99.99%, etc.)</li>
        <li>Both fault avoidance and tolerance are needed for reliability</li>
      </ul>
    </div>
  </div>
);

export default FaultToleranceIntro;
