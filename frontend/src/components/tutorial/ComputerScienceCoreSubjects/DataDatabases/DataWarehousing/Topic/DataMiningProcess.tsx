import React from "react";

const DataMiningProcess: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Mining Process (CRISP-DM)
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      CRISP-DM (Cross-Industry Standard Process for Data Mining) is the most widely
      used methodology for data mining projects. It provides a structured approach
      with six phases that guide projects from business understanding to deployment.
    </p>

    {/* CRISP-DM Cycle */}
    <h2 className="text-3xl font-bold mt-8">CRISP-DM Lifecycle</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`CRISP-DM Process Cycle:
════════════════════════════════════════════════════════════════

                    ┌─────────────────┐
                    │    Business     │
                    │  Understanding  │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              ▼              │
              │    ┌─────────────────┐      │
              │    │      Data       │      │
              │    │  Understanding  │      │
              │    └────────┬────────┘      │
              │             │               │
    ┌─────────┴─────┐       │       ┌──────┴──────┐
    │               │       ▼       │             │
    │  Deployment   │    ┌─────────────────┐      │
    │               │    │      Data       │      │
    └───────┬───────┘    │  Preparation    │      │
            │            └────────┬────────┘      │
            │                     │               │
            │    ┌────────────────┼───────────────┘
            │    │                ▼
            │    │       ┌─────────────────┐
            │    │       │    Modeling     │
            │    │       └────────┬────────┘
            │    │                │
            │    │                ▼
            │    │       ┌─────────────────┐
            └────┼──────▶│   Evaluation    │
                 │       └─────────────────┘
                 │              │
                 └──────────────┘ (iterate if needed)

The process is ITERATIVE - you can go back to previous phases!`}
      </pre>
    </div>

    {/* Six Phases */}
    <h2 className="text-3xl font-bold mt-8">The Six Phases</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h3 className="font-bold text-lg mb-2">1. Business Understanding</h3>
        <p className="text-sm mb-2">Understand project objectives and requirements from a business perspective.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-xs font-bold">Tasks:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Determine business objectives</li>
              <li>Assess situation and resources</li>
              <li>Define data mining goals</li>
              <li>Produce project plan</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold">Output:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Business goals document</li>
              <li>Success criteria</li>
              <li>Project plan</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-900/20">
        <h3 className="font-bold text-lg mb-2">2. Data Understanding</h3>
        <p className="text-sm mb-2">Collect initial data and proceed to understand and identify data quality issues.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-xs font-bold">Tasks:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Collect initial data</li>
              <li>Describe data (volume, format)</li>
              <li>Explore data (statistics, viz)</li>
              <li>Verify data quality</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold">Output:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Data description report</li>
              <li>Exploratory analysis</li>
              <li>Data quality report</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
        <h3 className="font-bold text-lg mb-2">3. Data Preparation</h3>
        <p className="text-sm mb-2">Construct the final dataset from initial raw data for modeling.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-xs font-bold">Tasks:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Select relevant data</li>
              <li>Clean data (missing, outliers)</li>
              <li>Construct new features</li>
              <li>Integrate and format data</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold">Output:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Dataset ready for modeling</li>
              <li>Dataset description</li>
              <li>Feature documentation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-900/20">
        <h3 className="font-bold text-lg mb-2">4. Modeling</h3>
        <p className="text-sm mb-2">Select and apply various modeling techniques and calibrate parameters.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-xs font-bold">Tasks:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Select modeling technique</li>
              <li>Generate test design</li>
              <li>Build model</li>
              <li>Assess model</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold">Output:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Trained models</li>
              <li>Model description</li>
              <li>Performance metrics</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg bg-red-50 dark:bg-red-900/20">
        <h3 className="font-bold text-lg mb-2">5. Evaluation</h3>
        <p className="text-sm mb-2">Evaluate the model against business objectives before deployment.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-xs font-bold">Tasks:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Evaluate results vs objectives</li>
              <li>Review process</li>
              <li>Determine next steps</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold">Output:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Assessment of results</li>
              <li>Approved models</li>
              <li>Decision to deploy or iterate</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-900/20">
        <h3 className="font-bold text-lg mb-2">6. Deployment</h3>
        <p className="text-sm mb-2">Deploy the model and organize results for business use.</p>
        <div className="grid md:grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-xs font-bold">Tasks:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Plan deployment</li>
              <li>Plan monitoring/maintenance</li>
              <li>Produce final report</li>
              <li>Review project</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold">Output:</p>
            <ul className="list-disc list-inside text-xs">
              <li>Deployment plan</li>
              <li>Final report</li>
              <li>Operational model</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Time Distribution */}
    <h2 className="text-3xl font-bold mt-8">Typical Time Distribution</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Time Spent Per Phase (Typical Project):
════════════════════════════════════════════════════════════════

Business Understanding  ████░░░░░░░░░░░░░░░░░░░░░░░░░░  10%
Data Understanding      ██████████░░░░░░░░░░░░░░░░░░░░  20%
Data Preparation        ████████████████████░░░░░░░░░░  50% ← Most time!
Modeling               ██████░░░░░░░░░░░░░░░░░░░░░░░░  10%
Evaluation             ████░░░░░░░░░░░░░░░░░░░░░░░░░░   5%
Deployment             ████░░░░░░░░░░░░░░░░░░░░░░░░░░   5%

"Data preparation takes ~50% of project time"
"80% of effort is in data work, only 20% in modeling"`}
      </pre>
    </div>

    {/* Alternative Methodologies */}
    <h2 className="text-3xl font-bold mt-8">Alternative Methodologies</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Methodology</th>
            <th className="p-3 border">Focus</th>
            <th className="p-3 border">Phases</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">CRISP-DM</td>
            <td className="p-3 border">Industry standard</td>
            <td className="p-3 border">6 phases, iterative</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SEMMA (SAS)</td>
            <td className="p-3 border">SAS-specific</td>
            <td className="p-3 border">Sample, Explore, Modify, Model, Assess</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">KDD Process</td>
            <td className="p-3 border">Academic origin</td>
            <td className="p-3 border">Selection, Preprocessing, Transformation, Mining, Evaluation</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">TDSP (Microsoft)</td>
            <td className="p-3 border">Agile data science</td>
            <td className="p-3 border">Business Understanding, Data Acquisition, Modeling, Deployment</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>CRISP-DM is the industry-standard methodology for data mining</li>
        <li>Six phases: Business, Data Understanding, Data Prep, Modeling, Evaluation, Deployment</li>
        <li>The process is iterative - expect to revisit earlier phases</li>
        <li>Data preparation typically consumes 50% or more of project time</li>
        <li>Business understanding drives the entire project direction</li>
        <li>Evaluation must consider business goals, not just technical metrics</li>
        <li>Documentation at each phase is essential for reproducibility</li>
        <li>Deployment is not the end - monitoring and maintenance are ongoing</li>
      </ul>
    </div>
  </div>
);

export default DataMiningProcess;
