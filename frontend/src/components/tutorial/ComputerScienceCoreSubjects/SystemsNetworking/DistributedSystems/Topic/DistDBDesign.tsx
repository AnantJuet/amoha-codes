import React from "react";

const DistDBDesign: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Distributed Database Design
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Distributed Database Design is the process of determining how to partition data across
      multiple sites and how to allocate fragments to achieve optimal performance, availability,
      and cost efficiency. Good design requires understanding application requirements, access
      patterns, and network characteristics.
    </p>

    <h2 className="text-3xl font-bold mt-8">Design Approaches</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Two Main Design Approaches:

1. TOP-DOWN DESIGN (Greenfield)
   Start from scratch with global requirements.

   +--------------------+
   | Global Requirements|
   +----------+---------+
              |
              v
   +--------------------+
   | Conceptual Design  |
   | (Global Schema)    |
   +----------+---------+
              |
              v
   +--------------------+
   | Fragmentation      |
   | Design             |
   +----------+---------+
              |
              v
   +--------------------+
   | Allocation Design  |
   +----------+---------+
              |
              v
   +--------------------+
   | Physical Design    |
   | (Each Site)        |
   +--------------------+

2. BOTTOM-UP DESIGN (Integration)
   Integrate existing databases.

   +--------+  +--------+  +--------+
   | DB_1   |  | DB_2   |  | DB_3   |
   +---+----+  +----+---+  +----+---+
       |            |           |
       v            v           v
   +--------------------------------+
   |    Schema Integration          |
   |    (Mapping & Translation)     |
   +---------------+----------------+
                   |
                   v
   +--------------------------------+
   |    Global Schema               |
   +--------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Methodology</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Activities</th>
            <th className="p-3 border">Outputs</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">1. Requirements Analysis</td>
            <td className="p-3 border">Gather data, query, and performance requirements</td>
            <td className="p-3 border">Requirements document</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">2. Conceptual Design</td>
            <td className="p-3 border">Design global schema, entity-relationship model</td>
            <td className="p-3 border">Global conceptual schema</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">3. Distribution Design</td>
            <td className="p-3 border">Fragmentation and allocation decisions</td>
            <td className="p-3 border">Fragmentation & allocation schema</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">4. Physical Design</td>
            <td className="p-3 border">Indexes, storage structures per site</td>
            <td className="p-3 border">Physical schema per site</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">5. Implementation</td>
            <td className="p-3 border">Deploy and configure DDBMS</td>
            <td className="p-3 border">Running system</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Requirements Gathering</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Requirements to Gather:

1. DATA REQUIREMENTS
   - Entities and relationships
   - Data volumes and growth rates
   - Data dependencies and constraints

   Example:
   - CUSTOMER: 1M records, 5% growth/year
   - ORDER: 10M records, 20% growth/year
   - ORDER references CUSTOMER (FK)

2. APPLICATION REQUIREMENTS
   - Query types and frequencies
   - Update patterns
   - Response time requirements

   Example Query Matrix:
   +-------------+----------+--------+-------+
   | Query       | Freq/day | Tables | Sites |
   +-------------+----------+--------+-------+
   | Get Orders  | 10000    | O,C    | All   |
   | New Order   | 5000     | O      | Local |
   | Report      | 10       | O,C,P  | HQ    |
   +-------------+----------+--------+-------+

3. SITE REQUIREMENTS
   - Geographic locations
   - Network connectivity
   - Storage and compute capacity

   Example:
   Sites: NY (HQ), LA, London, Tokyo
   Network: NY-LA: 100ms, NY-London: 150ms

4. OPERATIONAL REQUIREMENTS
   - Availability targets (99.9%?)
   - Recovery time objectives
   - Security and compliance`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Fragmentation Design Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Fragmentation Design Steps:

STEP 1: Identify Fragmentation Candidates
-----------------------------------------
Analyze each relation:
- Size: Large tables benefit more
- Access patterns: Different sites access different subsets?
- Update frequency: High update = careful fragmentation

STEP 2: Choose Fragmentation Type
-----------------------------------------
For each candidate relation:

If queries filter by rows (WHERE region='X'):
  -> Consider HORIZONTAL fragmentation

If queries access column subsets:
  -> Consider VERTICAL fragmentation

If both patterns exist:
  -> Consider MIXED fragmentation

STEP 3: Define Fragment Predicates
-----------------------------------------
Horizontal: Define selection conditions
  EMP_North = sigma_{region='North'}(EMPLOYEE)
  EMP_South = sigma_{region='South'}(EMPLOYEE)

Vertical: Define attribute groups
  EMP_Basic = pi_{id, name, dept}(EMPLOYEE)
  EMP_Payroll = pi_{id, salary, ssn}(EMPLOYEE)

STEP 4: Verify Correctness
-----------------------------------------
Check:
[ ] Completeness: All data in fragments
[ ] Reconstruction: Can rebuild original
[ ] Disjointness: No duplicate data (horizontal)

STEP 5: Consider Derived Fragmentation
-----------------------------------------
Related tables fragmented same way:
  ORDERS derived from CUSTOMER by customer_region`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Allocation Design Process</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Allocation Design Steps:

STEP 1: Gather Access Statistics
-----------------------------------------
For each fragment Fi at each site Sj:
- Read frequency: rij (reads per day)
- Write frequency: wij (writes per day)
- Update frequency: uij (updates per day)

STEP 2: Calculate Costs
-----------------------------------------
For placing fragment Fi at site Sk:

Query Cost (from all sites):
QC = SUM_j(rij * comm_cost(Sj, Sk))

Update Cost (to all replicas):
UC = SUM_replicas(uij * comm_cost(Sj, replica))

Storage Cost:
SC = size(Fi) * storage_rate(Sk)

STEP 3: Evaluate Allocation Options
-----------------------------------------
Option A: Single copy at site with most access
Option B: Replicate at all sites with significant access
Option C: Partial replication based on threshold

Cost Comparison:
+----------+-----------+----------+--------+
| Option   | Query Cost| Upd Cost | Total  |
+----------+-----------+----------+--------+
| Single-A | 500       | 100      | 600    |
| Single-B | 800       | 50       | 850    |
| Replicate| 200       | 300      | 500    | <- Best
+----------+-----------+----------+--------+

STEP 4: Consider Constraints
-----------------------------------------
- Storage capacity at each site
- Network bandwidth limits
- Availability requirements (min replicas)
- Regulatory requirements (data location)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Considerations</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Factor</th>
            <th className="p-3 border">Impact on Fragmentation</th>
            <th className="p-3 border">Impact on Allocation</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Query Locality</td>
            <td className="p-3 border">Fragment by access patterns</td>
            <td className="p-3 border">Place near accessors</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Read/Write Ratio</td>
            <td className="p-3 border">More fragments if read-heavy</td>
            <td className="p-3 border">More replicas if read-heavy</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Size</td>
            <td className="p-3 border">Large = more fragmentation</td>
            <td className="p-3 border">Large = fewer replicas</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Availability</td>
            <td className="p-3 border">Minimal impact</td>
            <td className="p-3 border">More replicas needed</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Network Cost</td>
            <td className="p-3 border">Finer fragments reduce transfer</td>
            <td className="p-3 border">Strategic placement critical</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete Design Example</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`E-Commerce Distributed Database Design:

SCENARIO:
- Online retailer with customers in US, EU, Asia
- Sites: New York (US), Frankfurt (EU), Singapore (Asia)
- Tables: CUSTOMER, ORDER, PRODUCT, INVENTORY

-----------------------------------------
REQUIREMENTS ANALYSIS:

Queries:
- Customer orders: 80% local region
- Product search: Global, read-heavy
- Inventory check: Near real-time
- Analytics: Weekly, from HQ (NY)

-----------------------------------------
FRAGMENTATION DESIGN:

CUSTOMER: Horizontal by Region
- CUST_US = WHERE region = 'US'
- CUST_EU = WHERE region = 'EU'
- CUST_ASIA = WHERE region = 'Asia'

ORDER: Derived Horizontal (from CUSTOMER)
- ORD_US = SEMIJOIN with CUST_US
- ORD_EU = SEMIJOIN with CUST_EU
- ORD_ASIA = SEMIJOIN with CUST_ASIA

PRODUCT: No fragmentation (small, read-heavy)

INVENTORY: Horizontal by Warehouse
- INV_US_EAST, INV_US_WEST
- INV_EU_CENTRAL
- INV_ASIA_EAST

-----------------------------------------
ALLOCATION DESIGN:

+-------------+------+------+------+
| Fragment    | NY   | FRA  | SG   |
+-------------+------+------+------+
| CUST_US     | Pri  |      |      |
| CUST_EU     |      | Pri  |      |
| CUST_ASIA   |      |      | Pri  |
| ORD_US      | Pri  | Rep  |      |
| ORD_EU      |      | Pri  | Rep  |
| ORD_ASIA    |      |      | Pri  |
| PRODUCT     | Pri  | Rep  | Rep  | <- Full replication
| INV_US_*    | Pri  |      |      |
| INV_EU_*    |      | Pri  |      |
| INV_ASIA_*  |      |      | Pri  |
+-------------+------+------+------+
Pri = Primary, Rep = Replica

-----------------------------------------
RESULT:
- Local queries: Fast (data locality)
- Cross-region orders: 1 hop maximum
- Product search: Always local
- Analytics: Full data available at NY`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Trade-offs</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Trade-off</th>
            <th className="p-3 border">Option A</th>
            <th className="p-3 border">Option B</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Fragmentation Granularity</td>
            <td className="p-3 border">Fine: Better locality, complex mgmt</td>
            <td className="p-3 border">Coarse: Simpler, less optimal</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Replication Level</td>
            <td className="p-3 border">High: Fast reads, slow writes</td>
            <td className="p-3 border">Low: Fast writes, remote reads</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Consistency Model</td>
            <td className="p-3 border">Strong: Correct but slow</td>
            <td className="p-3 border">Eventual: Fast but stale reads</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Placement Strategy</td>
            <td className="p-3 border">Optimal: Best perf, redesign needed</td>
            <td className="p-3 border">Flexible: Easier change, not optimal</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Two approaches: Top-down (new system) and Bottom-up (integration)</li>
        <li>Design phases: Requirements, Conceptual, Distribution, Physical, Implementation</li>
        <li>Fragmentation design based on query patterns and data characteristics</li>
        <li>Allocation design minimizes cost while meeting availability requirements</li>
        <li>Key inputs: access statistics, network costs, storage constraints</li>
        <li>Trade-offs exist between granularity, replication, consistency, and flexibility</li>
        <li>Design should be revisited as access patterns evolve over time</li>
      </ul>
    </div>
  </div>
);

export default DistDBDesign;
