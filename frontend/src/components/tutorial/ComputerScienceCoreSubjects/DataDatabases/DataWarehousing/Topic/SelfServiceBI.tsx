import React from "react";

const SelfServiceBI: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Self-Service Business Intelligence
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Self-Service BI empowers business users to access, analyze, and visualize data
      independently without relying on IT or data teams. It democratizes data access
      while maintaining governance and security.
    </p>

    {/* Traditional vs Self-Service */}
    <h2 className="text-3xl font-bold mt-8">Traditional vs Self-Service BI</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`BI Evolution:
════════════════════════════════════════════════════════════════

TRADITIONAL BI (IT-Centric):
────────────────────────────
User Request → IT Ticket → Wait (days/weeks) → Report Delivered

Business    ┌──────────┐    IT Team     ┌──────────┐   Business
  User  ───▶│  Request │───▶ Queue  ───▶│  Build   │───▶ User
            └──────────┘                 └──────────┘
                          ⏱️ Days to Weeks


SELF-SERVICE BI (User-Centric):
───────────────────────────────
User → Access Data → Explore → Create → Insights (minutes/hours)

Business    ┌──────────┐    ┌──────────┐   ┌──────────┐
  User  ───▶│ Connect  │───▶│ Analyze  │───▶│ Visualize│
            │   Data   │    │   Data   │    │  Share   │
            └──────────┘    └──────────┘    └──────────┘
                          ⏱️ Minutes to Hours

IT Role Shifts: Build → Enable (governance, data prep, training)`}
      </pre>
    </div>

    {/* Self-Service Capabilities */}
    <h2 className="text-3xl font-bold mt-8">Self-Service Capabilities</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Access</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Connect to multiple data sources</li>
          <li>Browse available datasets</li>
          <li>Preview data before use</li>
          <li>Search for relevant data</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Data Preparation</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Combine data from multiple sources</li>
          <li>Clean and transform data</li>
          <li>Create calculated fields</li>
          <li>Filter and aggregate</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Visualization</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Drag-and-drop chart creation</li>
          <li>Interactive dashboards</li>
          <li>Custom visualizations</li>
          <li>Auto-generated insights</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold text-lg mb-2">Sharing & Collaboration</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Publish dashboards</li>
          <li>Share with colleagues</li>
          <li>Schedule reports</li>
          <li>Comment and annotate</li>
        </ul>
      </div>
    </div>

    {/* Benefits and Challenges */}
    <h2 className="text-3xl font-bold mt-8">Benefits and Challenges</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Benefits</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Faster time to insights</li>
          <li>Reduced IT backlog</li>
          <li>Empowered business users</li>
          <li>More agile decision-making</li>
          <li>Better data literacy</li>
          <li>Innovation from frontlines</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2 text-red-800 dark:text-red-200">Challenges</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Data quality concerns</li>
          <li>Inconsistent metrics</li>
          <li>Security and compliance</li>
          <li>Training requirements</li>
          <li>Spreadsheet chaos risk</li>
          <li>Governance complexity</li>
        </ul>
      </div>
    </div>

    {/* Governance Framework */}
    <h2 className="text-3xl font-bold mt-8">Self-Service Governance</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Balancing Freedom and Control:
════════════════════════════════════════════════════════════════

           IT-Controlled                    User-Controlled
           (Governed)                       (Self-Service)
    ◄────────────────────────────────────────────────────────►

    ┌─────────────────┐          ┌─────────────────┐
    │ CERTIFIED DATA  │          │ PERSONAL DATA   │
    │                 │          │                 │
    │ • Master data   │          │ • Excel uploads │
    │ • KPI definitions│          │ • Personal joins│
    │ • Shared metrics │          │ • Sandbox work  │
    │ • Production    │          │ • Experiments   │
    │   dashboards    │          │                 │
    └─────────────────┘          └─────────────────┘

Best Practice: "Governed Self-Service"
──────────────────────────────────────
• IT provides certified data and metrics
• Users explore and create on top of certified foundation
• Personal work can be promoted to certified after review`}
      </pre>
    </div>

    {/* Implementation Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Implementation Best Practices</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">1. Start with Clean, Certified Data</h3>
        <p className="text-sm">Provide users with trusted, well-documented datasets as a foundation.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">2. Establish a Data Catalog</h3>
        <p className="text-sm">Help users discover and understand available data through searchable catalogs.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">3. Invest in Training</h3>
        <p className="text-sm">Offer training programs, documentation, and office hours for support.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">4. Define Metric Standards</h3>
        <p className="text-sm">Publish official definitions for key metrics to ensure consistency.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">5. Create Champions Program</h3>
        <p className="text-sm">Identify and support power users who can help others in their teams.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Self-service BI empowers users to analyze data independently</li>
        <li>Shifts IT role from building reports to enabling users</li>
        <li>Key capabilities: data access, prep, visualization, sharing</li>
        <li>Benefits include faster insights and reduced IT backlog</li>
        <li>Challenges include governance, data quality, and training</li>
        <li>Governed self-service balances freedom with control</li>
        <li>Certified data provides a trusted foundation for exploration</li>
        <li>Success requires training, documentation, and support</li>
      </ul>
    </div>
  </div>
);

export default SelfServiceBI;
