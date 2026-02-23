import React from "react";

const AccessControl: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Access Control
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Access control is the selective restriction of access to resources based on defined policies.
      It determines who can access what resources and what operations they can perform, forming
      a critical component of information security.
    </p>

    <h2 className="text-3xl font-bold mt-8">Access Control Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">DAC</td>
            <td className="p-3 border">Owner controls access</td>
            <td className="p-3 border">File systems, personal resources</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">MAC</td>
            <td className="p-3 border">System enforces access via labels</td>
            <td className="p-3 border">Military, government</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RBAC</td>
            <td className="p-3 border">Access based on roles</td>
            <td className="p-3 border">Enterprise applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ABAC</td>
            <td className="p-3 border">Access based on attributes</td>
            <td className="p-3 border">Complex policies, cloud</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Role-Based Access Control (RBAC)</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RBAC Structure:

Users --> Roles --> Permissions --> Resources

Example:
+--------+     +-----------+     +-------------+
| Alice  |---->| Admin     |---->| All access  |
+--------+     +-----------+     +-------------+

+--------+     +-----------+     +-------------+
| Bob    |---->| Editor    |---->| Read/Write  |
+--------+     +-----------+     +-------------+

+--------+     +-----------+     +-------------+
| Carol  |---->| Viewer    |---->| Read only   |
+--------+     +-----------+     +-------------+

Benefits:
- Easy to manage and audit
- Scales well with organization growth
- Supports separation of duties`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Attribute-Based Access Control (ABAC)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ABAC Policy Example:

IF:
  - user.department = "Finance"
  - user.clearance >= "Secret"
  - resource.classification <= user.clearance
  - time.current BETWEEN "09:00" AND "18:00"
  - action = "read"
THEN:
  ALLOW

Attributes can include:
- User: role, department, clearance, location
- Resource: type, classification, owner
- Action: read, write, delete, execute
- Environment: time, location, device`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Access Control Principles</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Least Privilege:</strong> Grant minimum necessary access</li>
      <li><strong>Separation of Duties:</strong> Divide critical tasks among multiple people</li>
      <li><strong>Need to Know:</strong> Access only information required for job</li>
      <li><strong>Default Deny:</strong> Block access unless explicitly granted</li>
      <li><strong>Defense in Depth:</strong> Multiple layers of access control</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">ACL vs RBAC</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">ACL</th>
            <th className="p-3 border">RBAC</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Granularity</td>
            <td className="p-3 border">Per user/resource</td>
            <td className="p-3 border">Per role</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Harder to manage</td>
            <td className="p-3 border">Scales better</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">User Changes</td>
            <td className="p-3 border">Update many ACLs</td>
            <td className="p-3 border">Change role assignment</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>RBAC is most common in enterprise applications</li>
        <li>ABAC provides fine-grained, context-aware decisions</li>
        <li>Always enforce access control on the server side</li>
        <li>Apply principle of least privilege consistently</li>
        <li>Regular access reviews prevent privilege creep</li>
        <li>Log and monitor access control decisions</li>
      </ul>
    </div>
  </div>
);

export default AccessControl;
