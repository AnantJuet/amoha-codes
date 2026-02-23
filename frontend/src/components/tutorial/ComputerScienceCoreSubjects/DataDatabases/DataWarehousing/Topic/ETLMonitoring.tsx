import React from "react";

const ETLMonitoring: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      ETL Monitoring and Logging
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      ETL monitoring tracks the health, performance, and status of data pipelines. Effective
      monitoring ensures data quality, identifies issues early, and maintains SLA compliance
      for business-critical data delivery.
    </p>

    {/* Monitoring Framework */}
    <h2 className="text-3xl font-bold mt-8">ETL Monitoring Framework</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL Monitoring Components:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    MONITORING LAYERS                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  OPERATIONAL MONITORING                                    │ │
│  │  • Job status (running, success, failed)                  │ │
│  │  • Execution duration                                      │ │
│  │  • Resource utilization (CPU, memory, I/O)                │ │
│  │  • Error logs and exceptions                              │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  DATA QUALITY MONITORING                                   │ │
│  │  • Row counts (source vs target)                          │ │
│  │  • Null rates and completeness                            │ │
│  │  • Data freshness                                          │ │
│  │  • Validation rule pass rates                             │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  SLA MONITORING                                            │ │
│  │  • Data availability time                                  │ │
│  │  • Job completion deadlines                               │ │
│  │  • End-to-end pipeline latency                            │ │
│  │  • Historical trend analysis                              │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  ALERTING                                                  │ │
│  │  • Email/Slack/PagerDuty notifications                    │ │
│  │  • Escalation policies                                     │ │
│  │  • Threshold-based triggers                               │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Key Metrics */}
    <h2 className="text-3xl font-bold mt-8">Key Monitoring Metrics</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Metric</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Alert Threshold</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Job Success Rate</td>
            <td className="p-3 border">% of jobs completing successfully</td>
            <td className="p-3 border">&lt; 95%</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Execution Time</td>
            <td className="p-3 border">Job duration vs historical average</td>
            <td className="p-3 border">&gt; 2x average</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Row Count Delta</td>
            <td className="p-3 border">Difference from expected rows</td>
            <td className="p-3 border">&gt; 10% variance</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Freshness</td>
            <td className="p-3 border">Time since last successful load</td>
            <td className="p-3 border">&gt; SLA deadline</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Error Rate</td>
            <td className="p-3 border">% of records failing validation</td>
            <td className="p-3 border">&gt; 1%</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Queue Depth</td>
            <td className="p-3 border">Pending jobs in queue</td>
            <td className="p-3 border">&gt; 50 jobs</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Logging Tables */}
    <h2 className="text-3xl font-bold mt-8">ETL Audit Tables Design</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`ETL Audit Table Schema:
════════════════════════════════════════════════════════════════

-- Job Execution Log
CREATE TABLE etl_job_log (
    job_run_id        BIGINT PRIMARY KEY,
    job_name          VARCHAR(100),
    start_time        TIMESTAMP,
    end_time          TIMESTAMP,
    status            VARCHAR(20),    -- RUNNING, SUCCESS, FAILED
    rows_extracted    BIGINT,
    rows_transformed  BIGINT,
    rows_loaded       BIGINT,
    rows_rejected     BIGINT,
    error_message     TEXT,
    triggered_by      VARCHAR(50),    -- SCHEDULE, MANUAL, DEPENDENCY
    parameters        JSON
);

-- Step-Level Log
CREATE TABLE etl_step_log (
    step_id           BIGINT PRIMARY KEY,
    job_run_id        BIGINT REFERENCES etl_job_log,
    step_name         VARCHAR(100),
    step_type         VARCHAR(50),    -- EXTRACT, TRANSFORM, LOAD
    source_table      VARCHAR(100),
    target_table      VARCHAR(100),
    start_time        TIMESTAMP,
    end_time          TIMESTAMP,
    status            VARCHAR(20),
    rows_processed    BIGINT,
    error_details     TEXT
);

-- Data Quality Log
CREATE TABLE etl_dq_log (
    dq_run_id         BIGINT PRIMARY KEY,
    job_run_id        BIGINT REFERENCES etl_job_log,
    table_name        VARCHAR(100),
    rule_name         VARCHAR(100),
    check_time        TIMESTAMP,
    total_rows        BIGINT,
    passed_rows       BIGINT,
    failed_rows       BIGINT,
    pass_rate         DECIMAL(5,2),
    severity          VARCHAR(20),
    sample_failures   JSON
);

Sample Query - Job Performance:
SELECT
    job_name,
    DATE(start_time) as run_date,
    AVG(EXTRACT(EPOCH FROM (end_time - start_time))) as avg_duration_sec,
    SUM(CASE WHEN status = 'SUCCESS' THEN 1 ELSE 0 END) as success_count,
    SUM(CASE WHEN status = 'FAILED' THEN 1 ELSE 0 END) as fail_count
FROM etl_job_log
WHERE start_time >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY job_name, DATE(start_time)
ORDER BY run_date DESC;`}
      </pre>
    </div>

    {/* Dashboard Example */}
    <h2 className="text-3xl font-bold mt-8">Monitoring Dashboard Elements</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Job Status Overview</h3>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Today's Jobs:
✓ 45 Successful
✗ 3 Failed
⏳ 2 Running
⏸ 5 Pending

Success Rate: 93.75%`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Data Freshness</h3>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`Table          Last Load  Status
─────────────────────────────────
fact_sales     2:15 AM    ✓ Fresh
dim_customer   2:18 AM    ✓ Fresh
dim_product    2:12 AM    ✓ Fresh
fact_inventory 1:45 AM    ⚠ Stale`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Row Count Trends</h3>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`fact_sales Daily Load:
Jan 10: ████████ 125,000
Jan 11: ████████ 132,000
Jan 12: ████████ 128,500
Jan 13: ███      42,000 ⚠
Jan 14: ████████ 130,200`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Execution Time Trend</h3>
        <div className="bg-gray-100 text-gray-900 p-3 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`daily_warehouse_load:
Avg: 45 min
Today: 52 min (+15%)
SLA: 60 min

Status: ✓ Within SLA`}
          </pre>
        </div>
      </div>
    </div>

    {/* Alerting Rules */}
    <h2 className="text-3xl font-bold mt-8">Alerting Best Practices</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Critical Alerts (Immediate)</h3>
        <p className="text-sm">Job failures, SLA breaches, zero row loads, security issues. Route to PagerDuty/on-call.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Warning Alerts (Business Hours)</h3>
        <p className="text-sm">High error rates, slow performance, data quality degradation. Route to Slack/email.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Informational (Daily Digest)</h3>
        <p className="text-sm">Summary reports, trend analysis, capacity planning. Aggregated daily email.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Monitor operational health, data quality, and SLA compliance</li>
        <li>Log job execution details in audit tables for troubleshooting</li>
        <li>Track key metrics: success rate, duration, row counts, freshness</li>
        <li>Set up tiered alerting: critical, warning, informational</li>
        <li>Create dashboards for at-a-glance pipeline health</li>
        <li>Compare current metrics to historical baselines for anomaly detection</li>
        <li>Include error details and sample failures for debugging</li>
        <li>Review monitoring data regularly to identify trends and issues</li>
      </ul>
    </div>
  </div>
);

export default ETLMonitoring;
