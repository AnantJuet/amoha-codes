import React from "react";

const DataMarts: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Marts
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A Data Mart is a subset of a data warehouse focused on a specific business area, department,
      or subject. It provides a simplified, targeted view of data optimized for the analytical needs
      of a particular group of users.
    </p>

    {/* What is Data Mart */}
    <h2 className="text-3xl font-bold mt-8">What is a Data Mart?</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Mart - Focused Subset of Data Warehouse:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│              ENTERPRISE DATA WAREHOUSE (EDW)                     │
│                                                                  │
│   Contains ALL enterprise data:                                  │
│   • All subjects (Sales, Finance, HR, Marketing, etc.)          │
│   • All time periods (5-10 years history)                       │
│   • All business units and regions                              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│  SALES DATA   │   │ FINANCE DATA  │   │ MARKETING     │
│     MART      │   │     MART      │   │  DATA MART    │
├───────────────┤   ├───────────────┤   ├───────────────┤
│ • Revenue     │   │ • GL Accounts │   │ • Campaigns   │
│ • Products    │   │ • Cost Centers│   │ • Leads       │
│ • Customers   │   │ • Budgets     │   │ • Conversions │
│ • Territories │   │ • Actuals     │   │ • Channels    │
└───────────────┘   └───────────────┘   └───────────────┘
       │                   │                   │
       ▼                   ▼                   ▼
   Sales Team         Finance Team      Marketing Team

Key Characteristics:
• Subset of enterprise data warehouse
• Focused on single subject or department
• Optimized for specific queries
• Easier to understand and use
• Typically uses star schema design`}
      </pre>
    </div>

    {/* Data Warehouse vs Data Mart */}
    <h2 className="text-3xl font-bold mt-8">Data Warehouse vs Data Mart</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Data Warehouse</th>
            <th className="p-3 border">Data Mart</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Scope</td>
            <td className="p-3 border">Enterprise-wide</td>
            <td className="p-3 border">Department/Subject specific</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Size</td>
            <td className="p-3 border">Terabytes to Petabytes</td>
            <td className="p-3 border">Gigabytes to Terabytes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Users</td>
            <td className="p-3 border">Entire organization</td>
            <td className="p-3 border">Specific department</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Implementation</td>
            <td className="p-3 border">Months to years</td>
            <td className="p-3 border">Weeks to months</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Schema</td>
            <td className="p-3 border">Often 3NF normalized</td>
            <td className="p-3 border">Typically star schema</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cost</td>
            <td className="p-3 border">High</td>
            <td className="p-3 border">Lower</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Benefits */}
    <h2 className="text-3xl font-bold mt-8">Benefits of Data Marts</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Faster Query Performance</h3>
        <p className="text-sm">Smaller data volume means quicker response times for analytical queries.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Simplified Access</h3>
        <p className="text-sm">Users only see relevant data, reducing complexity and confusion.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Department Autonomy</h3>
        <p className="text-sm">Departments can control and customize their own data mart.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Lower Cost</h3>
        <p className="text-sm">Less infrastructure needed compared to full enterprise DW.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Faster Implementation</h3>
        <p className="text-sm">Can be built in weeks rather than months or years.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Better Security</h3>
        <p className="text-sm">Sensitive data can be isolated to specific data marts.</p>
      </div>
    </div>

    {/* Common Data Marts */}
    <h2 className="text-3xl font-bold mt-8">Common Types of Data Marts</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Data Marts by Department:
════════════════════════════════════════════════════════════════

┌─────────────────┬────────────────────────────────────────────┐
│ Data Mart       │ Typical Contents                           │
├─────────────────┼────────────────────────────────────────────┤
│ Sales           │ Revenue, orders, customers, products       │
│ Marketing       │ Campaigns, leads, conversions, channels    │
│ Finance         │ GL, AP, AR, budgets, forecasts             │
│ HR              │ Employees, payroll, benefits, turnover     │
│ Supply Chain    │ Inventory, suppliers, shipments, orders    │
│ Customer        │ 360° customer view, CLV, segments          │
│ Product         │ Product performance, lifecycle, margins    │
└─────────────────┴────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data mart is a subset of DW focused on specific department or subject</li>
        <li>Provides simplified, targeted view for specific user groups</li>
        <li>Typically uses star schema for optimal query performance</li>
        <li>Faster to implement and lower cost than full enterprise DW</li>
        <li>Can be dependent (sourced from DW) or independent (sourced directly)</li>
        <li>Common marts: Sales, Finance, Marketing, HR, Supply Chain</li>
        <li>Enables department autonomy while maintaining enterprise standards</li>
      </ul>
    </div>
  </div>
);

export default DataMarts;
