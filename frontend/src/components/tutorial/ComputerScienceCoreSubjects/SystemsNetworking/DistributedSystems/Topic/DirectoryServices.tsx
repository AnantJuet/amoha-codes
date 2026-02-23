import React from "react";

const DirectoryServices: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Directory Services in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A directory service is a specialized database optimized for reading, browsing, and
      searching rather than frequent updates. It stores information about entities as
      attributes and allows lookups based on attribute values rather than just names.
      Directory services are essential for managing users, resources, and configurations
      in distributed systems.
    </p>

    <h2 className="text-3xl font-bold mt-8">Directory Service vs Name Service</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Name Service</th>
            <th className="p-3 border">Directory Service</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Primary Function</td>
            <td className="p-3 border">Map names to addresses</td>
            <td className="p-3 border">Store and search entity attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lookup Method</td>
            <td className="p-3 border">Exact name match</td>
            <td className="p-3 border">Attribute-based queries</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Model</td>
            <td className="p-3 border">Simple key-value</td>
            <td className="p-3 border">Hierarchical with attributes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Example Query</td>
            <td className="p-3 border">"What is IP of www.example.com?"</td>
            <td className="p-3 border">"Find all printers on floor 3"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Examples</td>
            <td className="p-3 border">DNS</td>
            <td className="p-3 border">LDAP, Active Directory, X.500</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Directory Information Tree (DIT)</h2>

    <p className="leading-relaxed">
      Directory services organize data in a hierarchical structure called the Directory
      Information Tree. Each node (entry) has a unique Distinguished Name (DN) and
      contains attributes describing the entity.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Directory Information Tree (DIT):

                    ┌─────────────────────────┐
                    │  dc=com (Domain)        │
                    │  Root of the tree       │
                    └───────────┬─────────────┘
                                │
                    ┌───────────┴───────────┐
                    │                       │
          ┌─────────▼─────────┐   ┌─────────▼─────────┐
          │  dc=example       │   │  dc=acme          │
          │  (Organization)   │   │  (Organization)   │
          └─────────┬─────────┘   └───────────────────┘
                    │
       ┌────────────┼────────────┐
       │            │            │
┌──────▼──────┐ ┌───▼───┐ ┌──────▼──────┐
│ ou=People   │ │ou=Groups│ │ou=Devices │
│(Org Unit)   │ │        │ │           │
└──────┬──────┘ └───┬───┘ └──────┬──────┘
       │            │            │
   ┌───┴───┐    ┌───┴───┐    ┌───┴───┐
   │       │    │       │    │       │
┌──▼───┐┌──▼───┐┌──▼───┐┌──▼───┐┌──▼───┐┌──▼───┐
│uid=  ││uid=  ││cn=   ││cn=   ││cn=   ││cn=   │
│alice ││bob   ││admin ││dev   ││print1││scan1 │
└──────┘└──────┘└──────┘└──────┘└──────┘└──────┘

Distinguished Name (DN) Examples:
- cn=alice,ou=People,dc=example,dc=com
- cn=admin,ou=Groups,dc=example,dc=com
- cn=print1,ou=Devices,dc=example,dc=com`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Entry Structure</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Directory Entry Structure:

┌─────────────────────────────────────────────────────────────────┐
│  DN: cn=alice,ou=People,dc=example,dc=com                       │
├─────────────────────────────────────────────────────────────────┤
│  objectClass: top                                               │
│  objectClass: person                                            │
│  objectClass: organizationalPerson                              │
│  objectClass: inetOrgPerson                                     │
├─────────────────────────────────────────────────────────────────┤
│  ATTRIBUTES:                                                    │
│  ┌─────────────────┬──────────────────────────────────────────┐│
│  │ cn              │ Alice Johnson                            ││
│  │ sn              │ Johnson                                  ││
│  │ givenName       │ Alice                                    ││
│  │ uid             │ alice                                    ││
│  │ mail            │ alice@example.com                        ││
│  │ telephoneNumber │ +1-555-123-4567                          ││
│  │ userPassword    │ {SSHA}encrypted...                       ││
│  │ employeeNumber  │ 10042                                    ││
│  │ department      │ Engineering                              ││
│  │ manager         │ cn=bob,ou=People,dc=example,dc=com       ││
│  └─────────────────┴──────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘

Attribute Types:
- Single-valued: uid, employeeNumber
- Multi-valued: mail, telephoneNumber, objectClass`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Object Classes</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Structural Classes</h3>
        <p className="leading-relaxed mb-2">
          Define the core structure of an entry. Every entry must have exactly
          one structural object class.
        </p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>person</li>
          <li>organizationalUnit</li>
          <li>device</li>
          <li>groupOfNames</li>
        </ul>
      </div>

      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Auxiliary Classes</h3>
        <p className="leading-relaxed mb-2">
          Add additional attributes to an entry. Can be combined with
          structural classes for extended functionality.
        </p>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>posixAccount</li>
          <li>shadowAccount</li>
          <li>extensibleObject</li>
          <li>labeledURIObject</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Directory Operations</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Operation</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Bind</td>
            <td className="p-3 border">Authenticate to directory</td>
            <td className="p-3 border">Login with DN and password</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Search</td>
            <td className="p-3 border">Find entries matching criteria</td>
            <td className="p-3 border">(department=Engineering)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Compare</td>
            <td className="p-3 border">Check if attribute has value</td>
            <td className="p-3 border">Is userPassword = "secret"?</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Add</td>
            <td className="p-3 border">Create new entry</td>
            <td className="p-3 border">Add new user entry</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Delete</td>
            <td className="p-3 border">Remove existing entry</td>
            <td className="p-3 border">Delete user when they leave</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Modify</td>
            <td className="p-3 border">Change entry attributes</td>
            <td className="p-3 border">Update phone number</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ModifyDN</td>
            <td className="p-3 border">Rename or move entry</td>
            <td className="p-3 border">Move user to different OU</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Unbind</td>
            <td className="p-3 border">Close directory session</td>
            <td className="p-3 border">Logout</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Search Filters</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Search Filter Syntax:

Simple Filters:
(attribute=value)           Equality
(attribute=val*)            Prefix match
(attribute=*val)            Suffix match
(attribute=*val*)           Substring match
(attribute>=value)          Greater or equal
(attribute<=value)          Less or equal
(attribute=*)               Presence (has attribute)

Compound Filters:
(&(filter1)(filter2))       AND
(|(filter1)(filter2))       OR
(!(filter))                 NOT

Examples:

Find all users in Engineering:
(&(objectClass=person)(department=Engineering))

Find users whose name starts with "A":
(&(objectClass=person)(cn=A*))

Find printers on floor 2 or 3:
(&(objectClass=device)(|(location=floor2)(location=floor3)))

Find users without email:
(&(objectClass=person)(!(mail=*)))

Find managers in Sales or Marketing:
(&(objectClass=person)
  (title=Manager)
  (|(department=Sales)(department=Marketing)))`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Search Scope</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Search Scope Options:

                    ┌─────────────────────────┐
                    │  dc=example,dc=com      │ ◄─── Base DN
                    └───────────┬─────────────┘
                                │
       ┌────────────────────────┼────────────────────────┐
       │                        │                        │
┌──────▼──────┐          ┌──────▼──────┐          ┌──────▼──────┐
│  ou=People  │          │  ou=Groups  │          │ ou=Devices  │
└──────┬──────┘          └──────┬──────┘          └─────────────┘
       │                        │
   ┌───┴───┐                ┌───┴───┐
┌──▼───┐┌──▼───┐        ┌───▼──┐┌───▼──┐
│alice ││ bob  │        │admin ││ dev  │
└──────┘└──────┘        └──────┘└──────┘

SCOPE: base
- Search only the base entry itself
- Returns: dc=example,dc=com (if matches filter)

SCOPE: one (one level)
- Search immediate children of base
- Returns: ou=People, ou=Groups, ou=Devices

SCOPE: sub (subtree)
- Search base and all descendants
- Returns: All entries in the tree

SCOPE: subordinate (children)
- Search all descendants except base
- Returns: Everything except dc=example,dc=com`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Replication and Distribution</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Master-Slave Replication</h3>
        <p className="leading-relaxed">
          One master server handles all writes. Changes are propagated to read-only
          slave replicas. Provides read scalability and fault tolerance.
        </p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>Simple to implement</li>
          <li>Write bottleneck at master</li>
          <li>Eventual consistency</li>
        </ul>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Multi-Master Replication</h3>
        <p className="leading-relaxed">
          Multiple servers can accept writes. Changes are synchronized between
          all masters. Requires conflict resolution.
        </p>
        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
          <li>No single point of failure</li>
          <li>Complex conflict handling</li>
          <li>Higher write availability</li>
        </ul>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Directory Services</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Service</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Common Use</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">OpenLDAP</td>
            <td className="p-3 border">Open source LDAP implementation</td>
            <td className="p-3 border">Linux authentication, address books</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Active Directory</td>
            <td className="p-3 border">Microsoft's directory service</td>
            <td className="p-3 border">Windows domain management</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">389 Directory Server</td>
            <td className="p-3 border">Red Hat/Fedora LDAP server</td>
            <td className="p-3 border">Enterprise identity management</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Apache Directory</td>
            <td className="p-3 border">Java-based LDAP server</td>
            <td className="p-3 border">Java applications, testing</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Directory services are optimized for read-heavy, attribute-based lookups</li>
        <li>Data is organized in a hierarchical tree (DIT) with entries having DNs</li>
        <li>Entries contain attributes; schemas define allowed attributes</li>
        <li>Object classes determine entry structure (structural + auxiliary)</li>
        <li>Search filters use prefix notation with AND, OR, NOT operators</li>
        <li>Search scope controls which part of tree to search (base, one, sub)</li>
        <li>Replication provides fault tolerance and read scalability</li>
        <li>LDAP is the standard protocol for accessing directory services</li>
      </ul>
    </div>
  </div>
);

export default DirectoryServices;
