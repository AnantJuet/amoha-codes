import React from "react";

const NameResolution: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Name Resolution in Distributed Systems
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Name resolution is the process of translating a name into the information needed
      to access the named entity, typically an address. In distributed systems, name
      resolution involves communication between clients and name servers to look up
      and return the binding information for a given name.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Resolution Process</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Name Resolution Overview:

┌──────────────────────────────────────────────────────────────────┐
│                    NAME RESOLUTION FLOW                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────┐        ┌──────────────┐        ┌───────────────┐  │
│  │  Client  │───────►│ Name Service │───────►│   Address     │  │
│  │          │ Name   │   (Resolver) │ Lookup │   Database    │  │
│  │          │◄───────│              │◄───────│               │  │
│  └──────────┘ Address└──────────────┘ Result └───────────────┘  │
│       │                                                          │
│       │ Use address                                              │
│       ▼                                                          │
│  ┌──────────┐                                                    │
│  │  Entity  │                                                    │
│  │ (Target) │                                                    │
│  └──────────┘                                                    │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

Detailed Steps:
1. Application requests resolution of name "N"
2. Resolver receives the request
3. Resolver queries name database(s)
4. Database returns address "A" for name "N"
5. Resolver returns address to application
6. Application uses address to contact entity`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Closure Mechanism</h2>

    <p className="leading-relaxed">
      Closure refers to knowing where to start the name resolution process. Every
      naming system must have an initial binding - a well-known starting point.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">System</th>
            <th className="p-3 border">Closure Mechanism</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">DNS</td>
            <td className="p-3 border">
              Root servers have well-known IP addresses
            </td>
            <td className="p-3 border">
              Root hints file, 13 root server addresses
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">File System</td>
            <td className="p-3 border">
              Root directory is at known location
            </td>
            <td className="p-3 border">
              "/" on Unix, "C:\" on Windows
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">URL</td>
            <td className="p-3 border">
              Scheme prefix indicates protocol/resolver
            </td>
            <td className="p-3 border">
              "http://", "ftp://", "file://"
            </td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">LDAP</td>
            <td className="p-3 border">
              Base DN and server address configured
            </td>
            <td className="p-3 border">
              ldap://ldap.example.com/dc=example,dc=com
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Iterative Name Resolution</h2>

    <p className="leading-relaxed">
      In iterative resolution, the client resolver contacts each name server in turn.
      Each server returns a referral to the next server until the final answer is found.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Iterative Resolution (DNS Example):

Client wants to resolve: www.example.com

┌────────────┐
│   Client   │
│  Resolver  │
└─────┬──────┘
      │
      │ (1) Query: www.example.com?
      ▼
┌────────────┐
│    Root    │ → "I don't know, but .com is at 192.0.32.1"
│   Server   │
└────────────┘
      │
      │ (2) Query: www.example.com?
      ▼
┌────────────┐
│  .com TLD  │ → "I don't know, but example.com NS is at 93.184.216.34"
│   Server   │
└────────────┘
      │
      │ (3) Query: www.example.com?
      ▼
┌────────────┐
│example.com │ → "www.example.com is at 93.184.216.119"
│Authoritative│
└────────────┘
      │
      │ (4) Final answer returned to client
      ▼
┌────────────┐
│   Client   │ → Now knows: www.example.com = 93.184.216.119
└────────────┘

Messages: Client sends queries; servers send referrals or answers`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Recursive Name Resolution</h2>

    <p className="leading-relaxed">
      In recursive resolution, each name server forwards the query to the next server
      and waits for the complete answer, which is then passed back through the chain.
    </p>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Recursive Resolution:

Client wants to resolve: www.example.com

┌────────────┐
│   Client   │
└─────┬──────┘
      │ (1) Query
      ▼
┌────────────┐
│   Local    │───────────────────────────────────────────┐
│  Resolver  │                                           │
└────────────┘                                           │
      │ (2) Forward                                      │
      ▼                                                  │
┌────────────┐                                           │
│    Root    │────────────────────────────┐              │
│   Server   │                            │              │
└────────────┘                            │              │
      │ (3) Forward                       │              │
      ▼                                   │              │
┌────────────┐                            │              │
│  .com TLD  │─────────────┐              │              │
│   Server   │             │              │              │
└────────────┘             │              │              │
      │ (4) Forward        │              │              │
      ▼                    │              │              │
┌────────────┐             │              │              │
│example.com │             │              │              │
│Authoritative│            │              │              │
└─────┬──────┘             │              │              │
      │                    │              │              │
      │ (5) Answer: 93.184.216.119        │              │
      └───────────────────►│              │              │
                           │ (6) Answer   │              │
                           └─────────────►│              │
                                          │ (7) Answer   │
                                          └─────────────►│
                                                         │
                                          ┌──────────────┘
                                          │ (8) Final answer
                                          ▼
                                    ┌────────────┐
                                    │   Client   │
                                    └────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Comparison: Iterative vs Recursive</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Iterative</th>
            <th className="p-3 border">Recursive</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Client Complexity</td>
            <td className="p-3 border">High (handles all steps)</td>
            <td className="p-3 border">Low (single request)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Server Load</td>
            <td className="p-3 border">Lower (just respond)</td>
            <td className="p-3 border">Higher (must forward)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Caching Benefits</td>
            <td className="p-3 border">Client-side only</td>
            <td className="p-3 border">Each server can cache</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Traffic</td>
            <td className="p-3 border">More client traffic</td>
            <td className="p-3 border">Distributed across servers</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fault Tolerance</td>
            <td className="p-3 border">Client can retry different path</td>
            <td className="p-3 border">Failure at any server fails query</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Caching in Name Resolution</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Caching Strategy:

┌─────────────────────────────────────────────────────────────────┐
│                     CACHING LAYERS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────┐                                            │
│  │  Application   │  → Application-level cache (browser)        │
│  │     Cache      │    TTL: varies by content type              │
│  └───────┬────────┘                                            │
│          │                                                      │
│  ┌───────▼────────┐                                            │
│  │    OS/Stub     │  → Operating system resolver cache          │
│  │    Resolver    │    TTL: follows DNS TTL                     │
│  └───────┬────────┘                                            │
│          │                                                      │
│  ┌───────▼────────┐                                            │
│  │     Local      │  → Local DNS server/forwarder               │
│  │   DNS Server   │    TTL: follows DNS TTL                     │
│  └───────┬────────┘                                            │
│          │                                                      │
│  ┌───────▼────────┐                                            │
│  │   ISP/Public   │  → ISP or public resolver cache             │
│  │    Resolver    │    Large shared cache                       │
│  └────────────────┘                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Cache Entry Structure:
┌──────────────────────────────────────────────────────┐
│  Name: www.example.com                                │
│  Type: A (Address record)                             │
│  Value: 93.184.216.119                                │
│  TTL: 3600 seconds (1 hour)                          │
│  Timestamp: 2026-01-16 10:30:00                      │
│  Expires: 2026-01-16 11:30:00                        │
└──────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Negative Caching</h2>

    <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
      <p className="leading-relaxed">
        Negative caching stores the fact that a name does not exist or cannot be
        resolved. This prevents repeated queries for non-existent names and reduces
        load on name servers.
      </p>
      <ul className="list-disc list-inside leading-relaxed space-y-1 mt-2">
        <li>NXDOMAIN responses are cached in DNS</li>
        <li>Negative TTL is typically shorter than positive TTL</li>
        <li>Prevents denial-of-service from non-existent name queries</li>
        <li>Must be carefully managed to allow new name creation</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Name Resolution Algorithms</h2>

    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Iterative Resolution Algorithm:

function resolve_iterative(name):
    current_servers = root_servers
    remaining_name = name

    while remaining_name is not empty:
        for server in current_servers:
            response = query(server, remaining_name)

            if response.type == ANSWER:
                return response.address

            elif response.type == REFERRAL:
                current_servers = response.referral_servers
                break

            elif response.type == ERROR:
                continue  // try next server

        if all servers failed:
            return RESOLUTION_FAILED

    return RESOLUTION_FAILED

Recursive Resolution Algorithm:

function resolve_recursive(name, server):
    // Check local cache first
    if cache.has(name) and cache.get(name).not_expired():
        return cache.get(name)

    response = query(server, name)

    if response.type == ANSWER:
        cache.store(name, response, response.ttl)
        return response.address

    elif response.type == REFERRAL:
        // Recursively resolve through referral
        result = resolve_recursive(name, response.referral_server)
        return result

    return RESOLUTION_FAILED`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Resolution Optimization Techniques</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Prefetching</h3>
        <p className="leading-relaxed">
          Proactively resolve names that are likely to be needed soon. For example,
          resolving links on a web page before the user clicks them.
        </p>
      </div>

      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Replication</h3>
        <p className="leading-relaxed">
          Deploy multiple copies of name servers in different locations to reduce
          latency and provide fault tolerance.
        </p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Anycast</h3>
        <p className="leading-relaxed">
          Route queries to the nearest server among replicas using anycast addressing.
          Used by DNS root servers.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Connection Reuse</h3>
        <p className="leading-relaxed">
          Keep connections to name servers open for multiple queries to avoid
          connection setup overhead (DNS over TCP, HTTP/2).
        </p>
      </div>
    </div>

    <h2 className="text-3xl font-bold mt-8">Resolution Failures</h2>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Failure Type</th>
            <th className="p-3 border">Cause</th>
            <th className="p-3 border">Handling</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">NXDOMAIN</td>
            <td className="p-3 border">Name does not exist</td>
            <td className="p-3 border">Cache negative result, inform user</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SERVFAIL</td>
            <td className="p-3 border">Server error during resolution</td>
            <td className="p-3 border">Retry with different server</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Timeout</td>
            <td className="p-3 border">Server unreachable or slow</td>
            <td className="p-3 border">Retry, use cached if available</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">REFUSED</td>
            <td className="p-3 border">Server refuses to answer</td>
            <td className="p-3 border">Try different resolver</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Name resolution translates names to addresses for entity access</li>
        <li>Closure mechanism provides the starting point for resolution</li>
        <li>Iterative resolution: client contacts each server in sequence</li>
        <li>Recursive resolution: servers forward queries on client's behalf</li>
        <li>Caching dramatically improves resolution performance</li>
        <li>TTL controls cache entry validity and consistency</li>
        <li>Negative caching prevents repeated queries for non-existent names</li>
        <li>Optimization techniques: prefetching, replication, anycast</li>
      </ul>
    </div>
  </div>
);

export default NameResolution;
