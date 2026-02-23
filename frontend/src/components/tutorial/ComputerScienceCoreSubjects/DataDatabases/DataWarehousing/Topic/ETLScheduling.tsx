import React from "react";

const ETLScheduling: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ETL Scheduling and Orchestration
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ETL scheduling defines when and how ETL jobs run, while orchestration manages the
      dependencies and execution order of multiple jobs. Proper scheduling ensures data
      freshness while minimizing system impact and meeting business SLAs.
    </p>

    {/* Scheduling Concepts */}
    <h2 className="text-3xl font-bold mt-8">Scheduling Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL Scheduling and Orchestration:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    JOB ORCHESTRATION                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TRIGGER TYPES:                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ TIME-BASED        │ EVENT-BASED       │ DEPENDENCY-BASED│    │
│  │ • Cron schedule   │ • File arrival    │ • Job completion│    │
│  │ • Fixed intervals │ • API trigger     │ • Success/fail  │    │
│  │ • Calendar-based  │ • Message queue   │ • Data available│    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
│  JOB DEPENDENCIES (DAG - Directed Acyclic Graph):               │
│                                                                  │
│        ┌─────────┐                                              │
│        │Extract  │                                              │
│        │Customers│                                              │
│        └────┬────┘                                              │
│             │                                                    │
│             ▼                                                    │
│  ┌──────────────────┐                                           │
│  │Transform Customers│                                           │
│  └────────┬─────────┘                                           │
│           │                                                      │
│           ├──────────────────┐                                  │
│           ▼                  ▼                                  │
│    ┌──────────────┐   ┌──────────────┐                         │
│    │Load Dim_Cust │   │Extract Orders│                         │
│    └──────┬───────┘   └──────┬───────┘                         │
│           │                  │                                  │
│           └────────┬─────────┘                                  │
│                    ▼                                            │
│             ┌──────────────┐                                    │
│             │Load Fact_Sales│                                   │
│             └──────────────┘                                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Schedule Types */}
    <h2 className="text-3xl font-bold mt-8">Common Schedule Types</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Schedule</th>
            <th className="p-3 border">Frequency</th>
            <th className="p-3 border">Use Case</th>
            <th className="p-3 border">Cron Expression</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Nightly</td>
            <td className="p-3 border">Once per day</td>
            <td className="p-3 border">Standard DW refresh</td>
            <td className="p-3 border font-mono text-gray-900">0 2 * * *</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Hourly</td>
            <td className="p-3 border">Every hour</td>
            <td className="p-3 border">Near real-time reporting</td>
            <td className="p-3 border font-mono text-gray-900">0 * * * *</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Every 15 mins</td>
            <td className="p-3 border">4x per hour</td>
            <td className="p-3 border">Operational dashboards</td>
            <td className="p-3 border font-mono text-gray-900">*/15 * * * *</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Weekly</td>
            <td className="p-3 border">Once per week</td>
            <td className="p-3 border">Aggregate summaries</td>
            <td className="p-3 border font-mono text-gray-900">0 3 * * 0</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Monthly</td>
            <td className="p-3 border">Once per month</td>
            <td className="p-3 border">Financial close</td>
            <td className="p-3 border font-mono text-gray-900">0 4 1 * *</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Event-driven</td>
            <td className="p-3 border">On trigger</td>
            <td className="p-3 border">File arrival, API call</td>
            <td className="p-3 border">N/A (webhook)</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Orchestration Tools */}
    <h2 className="text-3xl font-bold mt-8">Orchestration Tools</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Apache Airflow</h3>
        <p className="text-sm">Most popular open-source orchestrator. Python-based DAGs, extensive plugins, web UI for monitoring.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Prefect</h3>
        <p className="text-sm">Modern Python orchestration with cloud offering. Dynamic workflows, better error handling.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Dagster</h3>
        <p className="text-sm">Data-aware orchestration. Strong typing, software-defined assets, great for data engineering.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Azure Data Factory</h3>
        <p className="text-sm">Microsoft cloud ETL and orchestration. Visual pipeline designer, Azure integration.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">AWS Step Functions</h3>
        <p className="text-sm">Serverless workflow orchestration. State machine model, AWS service integration.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">dbt Cloud</h3>
        <p className="text-sm">Orchestration for dbt jobs. Built-in scheduling, job dependencies, CI/CD integration.</p>
      </div>
    </div>

    {/* Airflow Example */}
    <h2 className="text-3xl font-bold mt-8">Apache Airflow DAG Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`# Airflow DAG Example
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.bash import BashOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'data_team',
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
    'email_on_failure': True,
    'email': ['data-alerts@company.com']
}

with DAG(
    'daily_warehouse_load',
    default_args=default_args,
    description='Daily ETL pipeline',
    schedule_interval='0 2 * * *',  # 2 AM daily
    start_date=datetime(2026, 1, 1),
    catchup=False
) as dag:

    extract_customers = PythonOperator(
        task_id='extract_customers',
        python_callable=extract_customer_data
    )

    extract_orders = PythonOperator(
        task_id='extract_orders',
        python_callable=extract_order_data
    )

    transform_data = PythonOperator(
        task_id='transform_data',
        python_callable=transform_all_data
    )

    load_dimensions = PythonOperator(
        task_id='load_dimensions',
        python_callable=load_dim_tables
    )

    load_facts = PythonOperator(
        task_id='load_facts',
        python_callable=load_fact_tables
    )

    run_dbt = BashOperator(
        task_id='run_dbt_models',
        bash_command='cd /dbt && dbt run'
    )

    # Define dependencies
    [extract_customers, extract_orders] >> transform_data
    transform_data >> load_dimensions >> load_facts >> run_dbt`}
      </pre>
    </div>

    {/* Best Practices */}
    <h2 className="text-3xl font-bold mt-8">Scheduling Best Practices</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Schedule During Off-Peak Hours</h3>
        <p className="text-sm">Run heavy ETL jobs during nights/weekends to minimize impact on source systems and DW queries.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Consider Time Zones</h3>
        <p className="text-sm">Schedule based on business time zones. Global companies may need multiple load windows.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Account for Dependencies</h3>
        <p className="text-sm">Ensure source data is available before extraction. Build slack time for upstream delays.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Implement Retries</h3>
        <p className="text-sm">Configure automatic retries with exponential backoff for transient failures.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Set Up Alerts</h3>
        <p className="text-sm">Configure notifications for job failures, long-running jobs, and SLA breaches.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Avoid Resource Conflicts</h3>
        <p className="text-sm">Stagger job start times to prevent resource contention on shared infrastructure.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Scheduling defines when ETL jobs run; orchestration manages dependencies</li>
        <li>Use DAGs (Directed Acyclic Graphs) to model job dependencies</li>
        <li>Common frequencies: nightly, hourly, real-time, event-driven</li>
        <li>Apache Airflow is the most popular open-source orchestrator</li>
        <li>Schedule heavy jobs during off-peak hours</li>
        <li>Implement retries and alerting for reliability</li>
        <li>Consider time zones and source system availability</li>
        <li>Monitor SLA compliance and job performance metrics</li>
      </ul>
    </div>
  </div>
);

export default ETLScheduling;
