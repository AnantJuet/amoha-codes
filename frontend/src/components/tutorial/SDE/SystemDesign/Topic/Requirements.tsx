import React from 'react';

const Requirements: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Functional vs Non-Functional Requirements
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 19 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Requirements analysis is an essential process in software development. It helps to determine whether
      a system or project will meet its objectives and achieve success. To make this analysis effective,
      requirements are generally divided into two categories: Functional Requirements and Non-Functional Requirements.
    </p>

    <h2 className="text-2xl font-bold mt-6">What are Functional Requirements?</h2>
    <p className="leading-relaxed">
      Functional requirements define the specific features and operations a system must perform to meet
      business and user needs. They describe what the system should do and how it should interact with
      users or other systems.
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li>Focus on system behavior and functionality</li>
      <li>Represent the features that can be directly observed and tested in the final product</li>
      <li>Common examples include user authentication, data processing, search, payment handling, and report generation</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Sample Questions to Ask:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>What features should the system include?</li>
      <li>What edge cases must be considered in the design?</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">What are Non-Functional Requirements?</h2>
    <p className="leading-relaxed">
      Non-functional requirements (NFRs) define how a system should operate, focusing on performance,
      reliability, and user experience rather than specific features. They ensure the system is efficient,
      secure, and maintainable over time.
    </p>
    <ul className="list-disc list-inside space-y-2 mt-4">
      <li><strong>Performance:</strong> Speed and responsiveness</li>
      <li><strong>Security:</strong> Protection against unauthorized access</li>
      <li><strong>Usability:</strong> Ease of use</li>
      <li><strong>Reliability:</strong> System stability and availability</li>
      <li><strong>Scalability:</strong> Ability to handle growth</li>
      <li><strong>Maintainability:</strong> Ease of updates and fixes</li>
      <li><strong>Portability:</strong> Ability to run in different environments</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">Sample Questions to Ask:</h3>
    <ul className="list-disc list-inside space-y-2">
      <li>How fast should the system respond to user actions?</li>
      <li>How secure should it be against unauthorized access?</li>
      <li>How available and reliable should the system be?</li>
    </ul>

    <h2 className="text-2xl font-bold mt-6">Examples</h2>

    <h3 className="text-xl font-semibold mt-4">1. Online Banking System</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Functional Requirements</th>
            <th className="p-3 border">Non-Functional Requirements</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Users should be able to log in with username and password</td>
            <td className="p-3 border">System should respond within 2 seconds</td>
          </tr>
          <tr>
            <td className="p-3 border">Users should be able to check account balance</td>
            <td className="p-3 border">99.9% uptime availability</td>
          </tr>
          <tr>
            <td className="p-3 border">Users should receive notifications after transactions</td>
            <td className="p-3 border">All data must be encrypted</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3 className="text-xl font-semibold mt-4">2. Food Delivery App</h3>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Functional Requirements</th>
            <th className="p-3 border">Non-Functional Requirements</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Users can browse restaurants and menus</td>
            <td className="p-3 border">App should load in under 3 seconds</td>
          </tr>
          <tr>
            <td className="p-3 border">Users can place orders and track delivery</td>
            <td className="p-3 border">Handle 10,000 concurrent users</td>
          </tr>
          <tr>
            <td className="p-3 border">Users can rate and review restaurants</td>
            <td className="p-3 border">GPS tracking accuracy within 10 meters</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-2xl font-bold mt-6">Key Differences</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Functional Requirements</th>
            <th className="p-3 border">Non-Functional Requirements</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Definition</td>
            <td className="p-3 border">What the system should do</td>
            <td className="p-3 border">How the system should perform</td>
          </tr>
          <tr>
            <td className="p-3 border">Scope</td>
            <td className="p-3 border">Features and operations</td>
            <td className="p-3 border">Quality attributes</td>
          </tr>
          <tr>
            <td className="p-3 border">Testing</td>
            <td className="p-3 border">Functional testing</td>
            <td className="p-3 border">Performance, security testing</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default Requirements;
