import React from "react";

const OLAPCube: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      OLAP Cube
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      An OLAP cube is a multidimensional data structure that organizes business data
      along multiple dimensions, enabling fast analytical queries. Despite the name "cube,"
      OLAP structures can have any number of dimensions (also called hypercubes).
    </p>

    {/* Cube Concept */}
    <h2 className="text-3xl font-bold mt-8">Understanding the Cube Concept</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`OLAP Cube Visualization:
════════════════════════════════════════════════════════════════

3D Cube Example (Time x Product x Region):

                    Product
                      │
               ┌──────┼──────┐
               │      │      │
              A       B      C
              │       │      │
           ┌──┼───┬───┼──┬───┼──┐
           │  │   │   │  │   │  │
          Q1  │  Q1   │ Q1   │  │
           │  │   │   │  │   │  │  ◄── Time
     ┌─────┴──┼───┴───┼──┴───┼──┘
     │        │       │      │
   North    South   East   West  ◄── Region

Each cell contains a measure (e.g., Sales Amount):

Sales[Product=A, Time=Q1, Region=North] = $125,000
Sales[Product=B, Time=Q2, Region=South] = $89,500

Dimensions (Axes):        Measures (Cell Values):
─────────────────         ────────────────────────
• Time                    • Sales Amount
• Product                 • Quantity
• Region                  • Profit
• Customer                • Margin %
• Channel                 • Units Sold`}
      </pre>
    </div>

    {/* Cube Components */}
    <h2 className="text-3xl font-bold mt-8">Cube Components</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Dimensions</h3>
        <p className="text-sm mb-2">Categories by which data is organized and analyzed. Each dimension has a hierarchy of levels.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Time Dimension Hierarchy:
Year → Quarter → Month → Week → Day

Geography Dimension Hierarchy:
Country → Region → State → City → Store`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Measures</h3>
        <p className="text-sm mb-2">Numeric values stored in cube cells that can be aggregated. The facts being analyzed.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Common Measures:
• Sales Amount (SUM)
• Quantity Sold (SUM)
• Average Price (AVG)
• Distinct Customer Count (COUNT DISTINCT)
• Profit Margin % (calculated)`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Hierarchies</h3>
        <p className="text-sm mb-2">Levels within dimensions that enable drill-up and drill-down navigation.</p>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Product Hierarchy:
All Products
├── Electronics
│   ├── Computers
│   │   ├── Laptops
│   │   └── Desktops
│   └── Phones
└── Clothing
    ├── Men's
    └── Women's`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Members</h3>
        <p className="text-sm">Individual values within a dimension level. E.g., "January", "California", "Product A".</p>
      </div>
    </div>

    {/* Cube Aggregations */}
    <h2 className="text-3xl font-bold mt-8">Cube Aggregations</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Pre-computed Aggregations in OLAP Cube:
════════════════════════════════════════════════════════════════

Base data (leaf level):
┌─────────┬─────────┬────────┬─────────┐
│ Product │ Region  │ Month  │ Sales   │
├─────────┼─────────┼────────┼─────────┤
│ A       │ North   │ Jan    │ 10,000  │
│ A       │ North   │ Feb    │ 12,000  │
│ A       │ South   │ Jan    │ 8,000   │
│ A       │ South   │ Feb    │ 9,000   │
│ B       │ North   │ Jan    │ 15,000  │
│ B       │ North   │ Feb    │ 18,000  │
└─────────┴─────────┴────────┴─────────┘

Pre-computed aggregations (stored in cube):
─────────────────────────────────────────

By Product + Region (Month rolled up):
┌─────────┬─────────┬─────────┐
│ Product │ Region  │ Sales   │
├─────────┼─────────┼─────────┤
│ A       │ North   │ 22,000  │  (10K + 12K)
│ A       │ South   │ 17,000  │  (8K + 9K)
│ B       │ North   │ 33,000  │  (15K + 18K)
└─────────┴─────────┴─────────┘

By Product (Region + Month rolled up):
┌─────────┬─────────┐
│ Product │ Sales   │
├─────────┼─────────┤
│ A       │ 39,000  │
│ B       │ 33,000  │
└─────────┴─────────┘

Grand Total (all dimensions rolled up):
Total Sales = 72,000`}
      </pre>
    </div>

    {/* Cube Processing */}
    <h2 className="text-3xl font-bold mt-8">Cube Processing</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Full Processing</h3>
        <p className="text-sm">Rebuilds entire cube from source data. Required for major changes. Time-consuming for large cubes.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Incremental Processing</h3>
        <p className="text-sm">Adds new data to existing cube without full rebuild. Faster but requires proper partitioning.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Partition Processing</h3>
        <p className="text-sm">Process specific partition (e.g., current month). Enables parallel processing and faster updates.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Aggregation Design</h3>
        <p className="text-sm">Define which aggregations to pre-compute. Balance between storage size and query performance.</p>
      </div>
    </div>

    {/* Sparsity */}
    <h2 className="text-3xl font-bold mt-8">Cube Sparsity</h2>
    <div className="p-4 border rounded-lg mt-4">
      <p className="leading-relaxed mb-4">
        Sparsity occurs when many dimension combinations have no data. A cube with 1000 products,
        100 stores, and 365 days has 36.5 million possible cells, but most may be empty.
      </p>
      <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-sm text-gray-900">
        <pre className="whitespace-pre-wrap text-gray-900">
{`Sparsity Example:
═══════════════════════════════════════

Products: 1,000    Stores: 100    Days: 365
Possible cells: 36,500,000
Actual data points: 2,000,000

Sparsity = (36.5M - 2M) / 36.5M = 94.5% sparse

Impact:
• MOLAP: May waste storage on empty cells
• ROLAP: Only stores actual data (efficient)
• Solutions: Compression, sparse storage algorithms`}
        </pre>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>OLAP cube organizes data along multiple dimensions</li>
        <li>Key components: Dimensions, Measures, Hierarchies, Members</li>
        <li>Cube cells contain measure values at dimension intersections</li>
        <li>Pre-computed aggregations enable fast query response</li>
        <li>Hierarchies allow drill-up/drill-down navigation</li>
        <li>Cube processing can be full, incremental, or partition-based</li>
        <li>Sparsity affects storage efficiency and processing time</li>
        <li>Aggregation design balances storage vs query performance</li>
      </ul>
    </div>
  </div>
);

export default OLAPCube;
