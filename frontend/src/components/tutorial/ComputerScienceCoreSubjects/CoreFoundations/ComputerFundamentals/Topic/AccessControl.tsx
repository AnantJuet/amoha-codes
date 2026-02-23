import React from 'react';

const AccessControlTheory: React.FC = () => (
  <div className="p-8 space-y-8  rounded-xl shadow-lg  mt-20">

    {/* ================= Access Control Overview ================= */}
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Access Control in Computer Network
    </h1>
    <p className="text-sm text-gray-500">Last Updated : 03 Oct, 2025</p>

    <p className="text-lg leading-relaxed">
      Access control is a security strategy that determines who or what can view or use resources in a computer system. It is a fundamental concept that reduces risk for organizations by controlling access to networks, files, and applications. Access control systems use identification, authentication, and authorization to ensure that only authorized users can access resources, often leveraging multi-factor authentication (MFA) for added security.
    </p>

    {/* ================= Authentication Factors ================= */}
    <h2 className="text-3xl font-bold mt-6">Authentication Factors</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li>Password or PIN</li>
      <li>Biometric measurements (fingerprint, retina scan)</li>
      <li>Card or security key</li>
    </ul>

    {/* ================= Components of Access Control ================= */}
    <h2 className="text-3xl font-bold mt-6">Components of Access Control</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li>
        <strong>Authentication:</strong> Verifying the identity of a user when logging in.
      </li>
      <li>
        <strong>Authorization:</strong> Determining which resources and services an authenticated user can access.
      </li>
      <li>
        <strong>Access:</strong> Granting verified users access to resources after authentication and authorization.
      </li>
      <li>
        <strong>Manage:</strong> Adding or removing user permissions to maintain access control.
      </li>
      <li>
        <strong>Audit:</strong> Monitoring user activities to detect and prevent access violations.
      </li>
    </ul>

    {/* ================= How Access Control Works ================= */}
    <h2 className="text-3xl font-bold mt-6">How Access Control Works</h2>
    <p className="text-lg leading-relaxed">
      Users provide credentials (passwords, PINs, security tokens, biometrics) for identification and authentication. MFA adds extra layers of security. Once verified, access control policies grant the appropriate permissions, allowing users to access resources according to their roles and requirements.
    </p>

    {/* ================= Types of Access Control ================= */}
    <h2 className="text-3xl font-bold mt-6">Types of Access Control</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li><strong>Attribute-based Access Control (ABAC):</strong> Uses rules, policies, and attributes of users, systems, and environment to grant or deny access.</li>
      <li><strong>Discretionary Access Control (DAC):</strong> Data owners decide who can access specific resources.</li>
      <li><strong>History-Based Access Control (HBAC):</strong> Evaluates users' past activity, behavior, and request patterns.</li>
      <li><strong>Identity-Based Access Control (IBAC):</strong> Grants access based on individual user identity.</li>
      <li><strong>Mandatory Access Control (MAC):</strong> Central authority regulates access rights based on security levels.</li>
      <li><strong>Organization-Based Access Control (OrBAC):</strong> Policies defined independently of system implementation.</li>
      <li><strong>Role-Based Access Control (RBAC):</strong> Access assigned based on job roles and responsibilities.</li>
      <li><strong>Rule-Based Access Control (RAC):</strong> Context-based rules, e.g., access allowed during certain times.</li>
    </ul>

    <p className="text-lg leading-relaxed">
      Access control can also be categorized as:
    </p>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li><strong>Physical Access Control:</strong> Restricts access to buildings, rooms, and IT assets.</li>
      <li><strong>Logical Access Control:</strong> Restricts access to networks, systems, files, and data.</li>
    </ul>

    {/* ================= Challenges of Access Control ================= */}
    <h2 className="text-3xl font-bold mt-6">Challenges of Access Control</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li>Managing distributed IT systems combining cloud and on-premise resources.</li>
      <li>Coordinating policy creation and implementation for compliance.</li>
      <li>Monitoring and reporting to ensure adherence to security policies.</li>
      <li>Selecting the right access control model to balance security and efficiency.</li>
    </ul>

    {/* ================= Authentication Mechanisms ================= */}
    <h2 className="text-3xl font-bold mt-6">Authentication Mechanisms</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li>Two-factor authentication</li>
      <li>Multi-factor authentication</li>
      <li>One-time passwords (OTP)</li>
      <li>Three-factor authentication</li>
      <li>Biometrics</li>
      <li>Hard tokens & Soft tokens</li>
      <li>Contextual authentication & Device identification</li>
    </ul>

    {/* ================= Methods to Implement Access Control ================= */}
    <h2 className="text-3xl font-bold mt-6">Methods to Implement Access Control</h2>
    <ul className="list-disc list-inside ml-6 text-lg space-y-2">
      <li>Virtual Private Networks (VPNs) for secure remote access.</li>
      <li>Identity repositories and provisioning tools.</li>
      <li>Password management and security policy enforcement services.</li>
      <li>Monitoring and reporting applications.</li>
    </ul>

    {/* ================= Authentication vs Authorization ================= */}
    <h2 className="text-3xl font-bold mt-6">Authentication vs Authorization</h2>
    <table className="table-auto border-collapse border border-gray-400 text-left w-full text-lg">
      <thead className='bg-gray-400 text-gray-900'>
        <tr className="bg-gray-400 text-gray-900">
          <th className="border px-4 py-2">Authentication</th>
          <th className="border px-4 py-2">Authorization</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Verifies the identity of a user.</td>
          <td className="border px-4 py-2">Determines what resources an authenticated user can access.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Occurs before authorization.</td>
          <td className="border px-4 py-2">Occurs after authentication.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Uses credentials like username, password, biometrics.</td>
          <td className="border px-4 py-2">Uses roles, privileges, and pre-defined access rights.</td>
        </tr>
        <tr>
          <td className="border px-4 py-2">Visible to the user.</td>
          <td className="border px-4 py-2">Not visible to the user.</td>
        </tr>
      </tbody>
    </table>

    {/* ================= Conclusion ================= */}
    <h2 className="text-3xl font-bold mt-6">Conclusion</h2>
    <p className="text-lg leading-relaxed">
      Access control is a critical part of computer network security. By using firewalls, MFA, RBAC, ABAC, VPNs, intrusion detection systems, and encryption, organizations can limit access to sensitive resources, prevent unauthorized access, and maintain network security.
    </p>

  </div>
);

export default AccessControlTheory;
