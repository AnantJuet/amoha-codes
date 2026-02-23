import React from "react";

const RBAC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Role-Based Access Control (RBAC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Role-Based Access Control (RBAC) is an access control model that assigns permissions to
      roles rather than individual users. Users are then assigned to roles, inheriting the
      associated permissions. RBAC simplifies access management in organizations by grouping
      permissions logically and reducing administrative overhead.
    </p>

    <h2 className="text-3xl font-bold mt-8">RBAC Core Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RBAC Components:

USERS        ROLES         PERMISSIONS      RESOURCES
+------+     +-------+     +------------+   +----------+
| Alice| --> | Admin | --> | Create     |   | Database |
| Bob  |     +-------+     | Read       |-->| Files    |
| Carol|     | Editor| --> | Update     |   | APIs     |
+------+     +-------+     | Delete     |   +----------+
             | Viewer| --> +------------+
             +-------+

Relationships:
- Users are assigned to Roles (many-to-many)
- Roles have Permissions (many-to-many)
- Permissions apply to Resources

Example Assignment:
Alice --> [Admin]        --> [Create, Read, Update, Delete]
Bob   --> [Editor]       --> [Create, Read, Update]
Carol --> [Viewer]       --> [Read]`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RBAC Models</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Model</th>
            <th className="p-3 border">Features</th>
            <th className="p-3 border">Use Case</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">RBAC0 (Core)</td>
            <td className="p-3 border">Basic user-role-permission</td>
            <td className="p-3 border">Simple applications</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RBAC1 (Hierarchical)</td>
            <td className="p-3 border">Role inheritance</td>
            <td className="p-3 border">Organizational hierarchy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RBAC2 (Constrained)</td>
            <td className="p-3 border">Separation of duties</td>
            <td className="p-3 border">Regulatory compliance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">RBAC3 (Symmetric)</td>
            <td className="p-3 border">Hierarchy + Constraints</td>
            <td className="p-3 border">Enterprise systems</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Role Hierarchy</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Role Hierarchy Example:

              +-------------+
              | Super Admin |
              +-------------+
                    |
           inherits all below
                    |
              +-----v-----+
              |   Admin   |
              +-----------+
                    |
        +-----------+-----------+
        |                       |
   +----v----+            +-----v-----+
   | Manager |            |  Auditor  |
   +---------+            +-----------+
        |
   +----v----+
   |  Editor |
   +---------+
        |
   +----v----+
   | Viewer  |
   +---------+

Inheritance Rules:
- Senior roles inherit junior role permissions
- Super Admin > Admin > Manager > Editor > Viewer
- Auditor branch has read-only access path`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RBAC Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`RBAC Implementation Example:

// Database Schema
CREATE TABLE roles (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    parent_role_id INT  -- For hierarchy
);

CREATE TABLE permissions (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    resource VARCHAR(100),
    action VARCHAR(50)
);

CREATE TABLE role_permissions (
    role_id INT,
    permission_id INT
);

CREATE TABLE user_roles (
    user_id INT,
    role_id INT
);

// Permission Check (pseudocode)
function hasPermission(user, resource, action):
    roles = getUserRoles(user)
    for role in roles:
        permissions = getRolePermissions(role)
        if matchesPermission(permissions, resource, action):
            return true
    return false

// Middleware Example
@RequireRole("admin")
def deleteUser(userId):
    // Only admin can access
    ...`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Separation of Duties (SoD)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Separation of Duties Constraints:

STATIC SoD (Assigned Roles):
- User cannot have both roles simultaneously
- Example: "Requester" and "Approver"

  User --> Requester  (can request purchases)
  User --> Approver   (CONFLICT - cannot approve own)

DYNAMIC SoD (Active Roles):
- User can have both roles but not use together
- Example: Different sessions for different roles

SoD Examples:
+-------------------+-------------------+
| Conflicting Roles | Reason            |
+-------------------+-------------------+
| Developer         | Code review       |
| Code Reviewer     | separation        |
+-------------------+-------------------+
| Payment Creator   | Fraud prevention  |
| Payment Approver  |                   |
+-------------------+-------------------+
| User Admin        | Prevent insider   |
| Auditor           | threat            |
+-------------------+-------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">RBAC Best Practices</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Least Privilege:</strong> Assign minimum necessary permissions</li>
      <li><strong>Role Design:</strong> Create roles based on job functions</li>
      <li><strong>Regular Reviews:</strong> Audit role assignments periodically</li>
      <li><strong>Avoid Role Explosion:</strong> Keep role count manageable</li>
      <li><strong>Document Roles:</strong> Maintain clear role descriptions</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>RBAC assigns permissions to roles, not directly to users</li>
        <li>Role hierarchy enables permission inheritance</li>
        <li>Separation of duties prevents conflicts of interest</li>
        <li>Regular access reviews prevent privilege creep</li>
        <li>RBAC simplifies administration for large organizations</li>
        <li>Combine with ABAC for fine-grained contextual control</li>
      </ul>
    </div>
  </div>
);

export default RBAC;
