import React from "react";

const ABAC: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Attribute-Based Access Control (ABAC)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Attribute-Based Access Control (ABAC) is a flexible access control model that evaluates
      attributes of subjects, resources, actions, and environment to make access decisions.
      Unlike RBAC which uses predefined roles, ABAC enables fine-grained, dynamic policies
      that can consider contextual factors like time, location, and risk level.
    </p>

    <h2 className="text-3xl font-bold mt-8">ABAC Components</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ABAC Attribute Categories:

+------------------+------------------+------------------+------------------+
| SUBJECT          | RESOURCE         | ACTION           | ENVIRONMENT      |
| (Who)            | (What)           | (How)            | (Context)        |
+------------------+------------------+------------------+------------------+
| User ID          | File type        | Read             | Time of day      |
| Department       | Classification   | Write            | Location         |
| Role             | Owner            | Delete           | IP address       |
| Clearance        | Sensitivity      | Execute          | Device type      |
| Manager          | Creation date    | Approve          | Risk score       |
| Location         | Project          | Transfer         | Network zone     |
+------------------+------------------+------------------+------------------+

Policy Decision:
IF (subject.attributes AND resource.attributes AND action AND environment)
THEN ALLOW/DENY`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ABAC vs RBAC</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">RBAC</th>
            <th className="p-3 border">ABAC</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Granularity</td>
            <td className="p-3 border">Role-level</td>
            <td className="p-3 border">Attribute-level (fine)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Flexibility</td>
            <td className="p-3 border">Limited to roles</td>
            <td className="p-3 border">Highly flexible</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Context-aware</td>
            <td className="p-3 border">No</td>
            <td className="p-3 border">Yes (time, location, etc.)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Scalability</td>
            <td className="p-3 border">Role explosion risk</td>
            <td className="p-3 border">Scales with attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Complexity</td>
            <td className="p-3 border">Simple to understand</td>
            <td className="p-3 border">More complex policies</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">ABAC Policy Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ABAC Policy Examples:

POLICY 1: Document Access
IF:
  subject.department == resource.department
  AND subject.clearance >= resource.classification
  AND action == "read"
THEN: ALLOW

POLICY 2: Time-Based Access
IF:
  subject.role == "contractor"
  AND action IN ["read", "write"]
  AND environment.time BETWEEN "09:00" AND "17:00"
  AND environment.day IN ["Mon", "Tue", "Wed", "Thu", "Fri"]
THEN: ALLOW

POLICY 3: Location-Restricted Access
IF:
  resource.type == "financial_data"
  AND environment.network == "corporate"
  AND environment.country == subject.home_country
THEN: ALLOW

POLICY 4: Risk-Based Access
IF:
  action == "large_transfer"
  AND environment.risk_score < 50
  AND subject.mfa_verified == true
THEN: ALLOW
ELSE: REQUIRE_STEP_UP_AUTH`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">XACML Architecture</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`XACML (eXtensible Access Control Markup Language):

+-------------+
|     PEP     |  Policy Enforcement Point
| (Intercept) |  - Intercepts access requests
+------+------+  - Enforces decisions
       |
       v
+------+------+
|     PDP     |  Policy Decision Point
|  (Decide)   |  - Evaluates policies
+------+------+  - Returns permit/deny
       |
   +---+---+
   |       |
   v       v
+--+--+ +--+--+
| PAP | | PIP |
+-----+ +-----+
Policy   Policy Information Point
Admin    - Retrieves attributes
Point    - User, resource, environment
- Create
  policies

Request Flow:
1. User requests access
2. PEP intercepts, sends to PDP
3. PDP queries PIP for attributes
4. PDP evaluates policies
5. PDP returns decision
6. PEP enforces decision`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ABAC Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ABAC Implementation Example (Python):

class ABACPolicy:
    def __init__(self, conditions, effect):
        self.conditions = conditions
        self.effect = effect  # "allow" or "deny"

    def evaluate(self, subject, resource, action, env):
        for condition in self.conditions:
            if not condition(subject, resource, action, env):
                return None  # Not applicable
        return self.effect

class PolicyEngine:
    def __init__(self):
        self.policies = []

    def check_access(self, subject, resource, action, env):
        for policy in self.policies:
            result = policy.evaluate(
                subject, resource, action, env)
            if result == "deny":
                return False
            if result == "allow":
                return True
        return False  # Default deny

# Example policy
policy = ABACPolicy(
    conditions=[
        lambda s,r,a,e: s['dept'] == r['dept'],
        lambda s,r,a,e: s['clearance'] >= r['level'],
        lambda s,r,a,e: a == 'read'
    ],
    effect="allow"
)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>ABAC evaluates attributes of subject, resource, action, and environment</li>
        <li>More flexible than RBAC but more complex to implement</li>
        <li>Enables context-aware, dynamic access decisions</li>
        <li>XACML is the standard for ABAC policy definition</li>
        <li>Ideal for complex, multi-tenant, and cloud environments</li>
        <li>Can be combined with RBAC (role as one attribute)</li>
      </ul>
    </div>
  </div>
);

export default ABAC;
