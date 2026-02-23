import React from "react";

const DataMiningApplications: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Mining Applications
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data mining has transformed decision-making across virtually every industry.
      From detecting fraud to discovering new drugs, mining techniques extract
      actionable insights from vast amounts of data.
    </p>

    {/* Application Overview */}
    <h2 className="text-3xl font-bold mt-8">Applications by Industry</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Mining Application Domains:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│  FINANCE & BANKING                 RETAIL & E-COMMERCE          │
│  ├── Fraud detection               ├── Customer segmentation    │
│  ├── Credit scoring                ├── Market basket analysis   │
│  ├── Risk assessment               ├── Recommendation systems   │
│  └── Algorithmic trading           └── Demand forecasting       │
│                                                                  │
│  HEALTHCARE & MEDICINE             TELECOMMUNICATIONS           │
│  ├── Disease prediction            ├── Churn prediction         │
│  ├── Drug discovery                ├── Network optimization     │
│  ├── Medical imaging               ├── Fraud detection          │
│  └── Patient outcomes              └── Customer profiling       │
│                                                                  │
│  MANUFACTURING                     MARKETING & ADVERTISING      │
│  ├── Predictive maintenance        ├── Campaign optimization    │
│  ├── Quality control               ├── Customer lifetime value  │
│  ├── Supply chain                  ├── Sentiment analysis       │
│  └── Defect detection              └── A/B testing analysis     │
│                                                                  │
│  SECURITY & GOVERNMENT             SCIENCE & RESEARCH           │
│  ├── Intrusion detection           ├── Genomics research        │
│  ├── Crime pattern analysis        ├── Climate modeling         │
│  ├── Tax fraud detection           ├── Astronomy discoveries    │
│  └── Terrorism prevention          └── Social network analysis  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Detailed Applications */}
    <h2 className="text-3xl font-bold mt-8">Detailed Application Examples</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2 text-red-800 dark:text-red-200">Fraud Detection</h3>
        <p className="text-sm mb-2">Identify fraudulent transactions in real-time.</p>
        <div className="bg-white p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Techniques Used:
• Anomaly detection - Flag unusual patterns
• Classification - Categorize transactions
• Neural networks - Learn complex fraud patterns

Example Signals:
• Unusual location for card use
• Abnormal transaction amount
• Rapid successive transactions
• New merchant category

Impact: Saves billions annually in fraud losses`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2 text-blue-800 dark:text-blue-200">Recommendation Systems</h3>
        <p className="text-sm mb-2">Suggest products, content, or connections to users.</p>
        <div className="bg-white p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Approaches:
• Collaborative filtering - Users like you also liked...
• Content-based - Similar to what you've viewed
• Hybrid - Combination of both

Examples:
• Netflix: Movie recommendations
• Amazon: "Customers also bought"
• Spotify: Discover Weekly playlist
• LinkedIn: People you may know

Impact: Drives 35%+ of Amazon revenue`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-200">Healthcare Diagnosis</h3>
        <p className="text-sm mb-2">Assist doctors in diagnosing diseases from medical data.</p>
        <div className="bg-white p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Applications:
• Medical imaging analysis (X-rays, MRIs)
• Disease risk prediction
• Treatment outcome prediction
• Drug interaction detection

Example - Cancer Detection:
• Input: Mammogram images
• Technique: Deep learning (CNN)
• Output: Cancer probability
• Accuracy: Sometimes exceeds radiologists

Impact: Earlier detection, better outcomes`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2 text-purple-800 dark:text-purple-200">Predictive Maintenance</h3>
        <p className="text-sm mb-2">Predict equipment failures before they happen.</p>
        <div className="bg-white p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Data Sources:
• Sensor readings (temperature, vibration)
• Maintenance logs
• Operating conditions

Techniques:
• Time series analysis
• Survival analysis
• Classification (fail/not fail)

Benefits:
• Reduce unplanned downtime by 50%
• Lower maintenance costs by 25%
• Extend equipment lifespan`}
          </pre>
        </div>
      </div>
    </div>

    {/* Business Impact */}
    <h2 className="text-3xl font-bold mt-8">Business Impact Examples</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Application</th>
            <th className="p-3 border">Company Example</th>
            <th className="p-3 border">Business Impact</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Recommendations</td>
            <td className="p-3 border">Netflix</td>
            <td className="p-3 border">$1B+ saved annually in retention</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Fraud Detection</td>
            <td className="p-3 border">PayPal</td>
            <td className="p-3 border">Fraud rate reduced to 0.32%</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Churn Prediction</td>
            <td className="p-3 border">Telecom</td>
            <td className="p-3 border">20-30% reduction in churn</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Dynamic Pricing</td>
            <td className="p-3 border">Airlines</td>
            <td className="p-3 border">5-10% revenue increase</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Inventory Optimization</td>
            <td className="p-3 border">Walmart</td>
            <td className="p-3 border">Millions saved in inventory costs</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Emerging Applications */}
    <h2 className="text-3xl font-bold mt-8">Emerging Applications</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Autonomous Vehicles</h3>
        <p className="text-sm">Object detection, path planning, and real-time decision making.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Climate Science</h3>
        <p className="text-sm">Weather prediction, climate modeling, and disaster forecasting.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Drug Discovery</h3>
        <p className="text-sm">Molecular analysis, protein folding, drug-target interaction.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Smart Cities</h3>
        <p className="text-sm">Traffic optimization, energy management, public safety.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data mining applies across virtually every industry</li>
        <li>Finance: Fraud detection and credit scoring are major applications</li>
        <li>Retail: Recommendations and market basket analysis drive revenue</li>
        <li>Healthcare: Diagnosis assistance and drug discovery save lives</li>
        <li>Manufacturing: Predictive maintenance reduces downtime</li>
        <li>ROI from data mining can be substantial (millions to billions)</li>
        <li>Success requires domain expertise plus technical skills</li>
        <li>Ethical considerations are increasingly important</li>
      </ul>
    </div>
  </div>
);

export default DataMiningApplications;
