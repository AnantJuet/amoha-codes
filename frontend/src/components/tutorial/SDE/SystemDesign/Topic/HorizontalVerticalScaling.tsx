import React from 'react';

const HorizontalVerticalScaling: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Horizontal vs Vertical Scaling
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      In system design, scaling is crucial for managing increased loads. Horizontal scaling and vertical
      scaling are two different approaches to scaling a system, both of which can be used to improve the
      performance and capacity of the system.
    </p>

    <h2 className="text-2xl font-bold mt-6">Why Do We Need Scaling?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Handle increased user load and traffic</li>
      <li>Ensure high availability and reliability</li>
      <li>Maintain performance and response time</li>
      <li>Support growing data and storage needs</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Vertical Scaling (Scaling Up)</h2>
    <p className="leading-relaxed">
      Vertical scaling refers to the process of increasing the capacity or capabilities of an individual
      hardware or software component within a system. We upgrade the same system rather than adding more
      systems by adding more power (better processors, increased RAM, or other power-increasing adjustments).
    </p>

    <h3 className="text-xl font-semibold mt-4">Examples:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Upgrading a MySQL server from 16 GB RAM to 64 GB to handle more queries</li>
      <li>Moving a website hosted on a 2-core VM to an 8-core, higher-RAM VM</li>
      <li>E-commerce platform running on a single large AWS EC2 instance with increased resources</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Advantages:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Increased Capacity:</strong> A server's performance can be enhanced by upgrading its hardware</li>
      <li><strong>Easier Management:</strong> Upgrading a single node is simpler than maintaining several nodes</li>
      <li><strong>Simple to Implement:</strong> Useful for monolithic and small-scale applications</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Disadvantages:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Limited Scalability:</strong> Constrained by the hardware's physical limitations</li>
      <li><strong>Single Point of Failure:</strong> One server still receives all incoming requests</li>
      <li><strong>Downtime:</strong> Scaling up often requires restarting or replacing the machine</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Horizontal Scaling (Scaling Out)</h2>
    <p className="leading-relaxed">
      Horizontal scaling refers to the process of increasing the capacity or performance of a system by
      adding more machines or servers to distribute the workload across a larger number of individual units.
    </p>

    <h3 className="text-xl font-semibold mt-4">Examples:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>Adding more web servers behind a load balancer</li>
      <li>Deploying multiple instances of an application in containers</li>
      <li>Distributing a database across multiple nodes (sharding)</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Advantages:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Unlimited Scalability:</strong> Can add as many servers as needed</li>
      <li><strong>High Availability:</strong> No single point of failure</li>
      <li><strong>Cost-Effective:</strong> Can use commodity hardware</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Disadvantages:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Complexity:</strong> More difficult to manage and maintain</li>
      <li><strong>Data Consistency:</strong> Challenges in keeping data synchronized</li>
      <li><strong>Network Overhead:</strong> Communication between nodes adds latency</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Comparison</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Vertical Scaling</th>
            <th className="p-3 border">Horizontal Scaling</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Approach</td>
            <td className="p-3 border">Add resources to existing server</td>
            <td className="p-3 border">Add more servers</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Simple</td>
            <td className="p-3 border">Complex</td>
          </tr>
          <tr>
            <td className="p-3 border">Limit</td>
            <td className="p-3 border">Hardware limit</td>
            <td className="p-3 border">No theoretical limit</td>
          </tr>
          <tr>
            <td className="p-3 border">Downtime</td>
            <td className="p-3 border">Required for upgrades</td>
            <td className="p-3 border">Zero downtime possible</td>
          </tr>
          <tr>
            <td className="p-3 border">Fault Tolerance</td>
            <td className="p-3 border">Single point of failure</td>
            <td className="p-3 border">High availability</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Expensive for high-end hardware</td>
            <td className="p-3 border">Cost-effective with commodity hardware</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">When to Use Which?</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><strong>Vertical Scaling:</strong> Good for small to medium applications, quick fixes, and when simplicity is preferred</li>
      <li><strong>Horizontal Scaling:</strong> Best for large-scale applications, high availability requirements, and when unlimited growth is expected</li>
    </ul>
  </div>
);

export default HorizontalVerticalScaling;
