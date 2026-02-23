import React from "react";

const DataValidation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Validation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data validation ensures that data meets defined quality standards and business rules
      before being loaded into the data warehouse. It acts as a quality gate that prevents
      bad data from corrupting analytical results.
    </p>

    {/* Validation Types */}
    <h2 className="text-3xl font-bold mt-8">Types of Data Validation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Validation Categories:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    VALIDATION TYPES                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. FORMAT VALIDATION                                            │
│     ├── Data type correctness (string, number, date)            │
│     ├── Pattern matching (email, phone, SSN)                    │
│     └── Length constraints (varchar limits)                     │
│                                                                  │
│  2. RANGE VALIDATION                                             │
│     ├── Numeric bounds (age between 0-120)                      │
│     ├── Date ranges (not in future, not too old)                │
│     └── Allowed values (enum/lookup validation)                 │
│                                                                  │
│  3. REFERENTIAL VALIDATION                                       │
│     ├── Foreign key existence                                   │
│     ├── Parent-child relationships                              │
│     └── Cross-table consistency                                 │
│                                                                  │
│  4. BUSINESS RULE VALIDATION                                     │
│     ├── Custom logic (order total = sum of items)               │
│     ├── Conditional rules (if status=shipped, ship_date exists) │
│     └── Cross-field validation (start_date < end_date)         │
│                                                                  │
│  5. COMPLETENESS VALIDATION                                      │
│     ├── Required fields not null                                │
│     ├── Expected row counts                                     │
│     └── All expected records present                            │
│                                                                  │
│  6. CONSISTENCY VALIDATION                                       │
│     ├── Same values across sources                              │
│     ├── Aggregation consistency (detail = summary)              │
│     └── Temporal consistency (no gaps in time series)           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Validation Rules Table */}
    <h2 className="text-3xl font-bold mt-8">Common Validation Rules</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Rule Type</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example Check</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Not Null</td>
            <td className="p-3 border">Required field must have value</td>
            <td className="p-3 border">customer_name IS NOT NULL</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Data Type</td>
            <td className="p-3 border">Value matches expected type</td>
            <td className="p-3 border">TRY_CAST(amount AS DECIMAL)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Range</td>
            <td className="p-3 border">Value within bounds</td>
            <td className="p-3 border">amount BETWEEN 0 AND 999999</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Pattern</td>
            <td className="p-3 border">Value matches format</td>
            <td className="p-3 border">email LIKE '%@%.%'</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Lookup</td>
            <td className="p-3 border">Value exists in reference</td>
            <td className="p-3 border">status IN ('A','I','P')</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Uniqueness</td>
            <td className="p-3 border">No duplicate values</td>
            <td className="p-3 border">COUNT(*) = COUNT(DISTINCT id)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Referential</td>
            <td className="p-3 border">FK exists in parent</td>
            <td className="p-3 border">customer_key IN dim_customer</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cross-field</td>
            <td className="p-3 border">Fields consistent</td>
            <td className="p-3 border">start_date &lt;= end_date</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* SQL Examples */}
    <h2 className="text-3xl font-bold mt-8">Validation SQL Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Validation SQL Examples:
════════════════════════════════════════════════════════════════

-- 1. NOT NULL validation
SELECT COUNT(*) as null_count
FROM staging_customers
WHERE customer_name IS NULL
   OR email IS NULL;

-- 2. Data type validation
SELECT *
FROM staging_orders
WHERE TRY_CAST(order_amount AS DECIMAL(10,2)) IS NULL
  AND order_amount IS NOT NULL;  -- Failed type conversion

-- 3. Range validation
SELECT *
FROM staging_customers
WHERE age < 0 OR age > 120
   OR registration_date > CURRENT_DATE
   OR registration_date < '1900-01-01';

-- 4. Pattern validation (email)
SELECT *
FROM staging_customers
WHERE email IS NOT NULL
  AND email NOT SIMILAR TO '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}';

-- 5. Lookup/Enum validation
SELECT *
FROM staging_orders
WHERE status NOT IN ('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED');

-- 6. Uniqueness validation
SELECT customer_id, COUNT(*) as cnt
FROM staging_customers
GROUP BY customer_id
HAVING COUNT(*) > 1;

-- 7. Referential integrity validation
SELECT s.customer_id, s.order_id
FROM staging_orders s
LEFT JOIN dim_customer d ON s.customer_id = d.customer_id
WHERE d.customer_id IS NULL;  -- Orphan records

-- 8. Cross-field validation
SELECT *
FROM staging_orders
WHERE ship_date < order_date
   OR (status = 'SHIPPED' AND ship_date IS NULL)
   OR (status = 'DELIVERED' AND delivery_date IS NULL);

-- 9. Row count validation
SELECT
    'staging' as source, COUNT(*) as row_count FROM staging_orders
UNION ALL
SELECT
    'expected' as source, expected_count FROM etl_control
WHERE table_name = 'orders' AND load_date = CURRENT_DATE;

-- 10. Aggregation validation
SELECT
    CASE WHEN SUM(s.quantity) = h.total_quantity
         THEN 'PASS' ELSE 'FAIL' END as validation_result
FROM staging_order_items s
CROSS JOIN staging_order_header h
WHERE s.order_id = h.order_id
GROUP BY h.order_id, h.total_quantity;`}
      </pre>
    </div>

    {/* Validation Framework */}
    <h2 className="text-3xl font-bold mt-8">Validation Framework Design</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Validation Results Table Design:
════════════════════════════════════════════════════════════════

CREATE TABLE validation_results (
    validation_id       INT PRIMARY KEY,
    run_date           TIMESTAMP,
    source_table       VARCHAR(100),
    rule_name          VARCHAR(100),
    rule_description   VARCHAR(500),
    severity           VARCHAR(20),    -- ERROR, WARNING, INFO
    failed_count       INT,
    total_count        INT,
    pass_rate          DECIMAL(5,2),
    sample_failures    TEXT,           -- JSON with example bad records
    status             VARCHAR(20)     -- PASS, FAIL, SKIP
);

Sample Validation Results:
┌───────────────┬────────────────────┬──────────┬────────┬───────┐
│ source_table  │ rule_name          │ severity │ failed │ status│
├───────────────┼────────────────────┼──────────┼────────┼───────┤
│ stg_customers │ email_format       │ ERROR    │ 15     │ FAIL  │
│ stg_customers │ age_range          │ WARNING  │ 3      │ PASS  │
│ stg_orders    │ fk_customer_exists │ ERROR    │ 0      │ PASS  │
│ stg_orders    │ date_sequence      │ ERROR    │ 7      │ FAIL  │
│ stg_orders    │ row_count_match    │ ERROR    │ 0      │ PASS  │
└───────────────┴────────────────────┴──────────┴────────┴───────┘

Error Actions:
• ERROR + FAIL → Stop ETL, fix data, retry
• WARNING + FAIL → Log issue, continue ETL
• ERROR + PASS → Continue ETL`}
      </pre>
    </div>

    {/* Validation Stages */}
    <h2 className="text-3xl font-bold mt-8">Validation at Each ETL Stage</h2>
    <div className="grid md:grid-cols-3 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Pre-Extraction</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Source system availability</li>
          <li>Expected file presence</li>
          <li>Source data freshness</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Post-Extraction</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Row count verification</li>
          <li>Schema validation</li>
          <li>Basic data type checks</li>
        </ul>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Post-Transformation</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Business rule compliance</li>
          <li>Referential integrity</li>
          <li>Data quality metrics</li>
        </ul>
      </div>
    </div>

    {/* Error Handling */}
    <h2 className="text-3xl font-bold mt-8">Handling Validation Failures</h2>
    <div className="space-y-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Reject and Continue</h3>
        <p className="text-sm">Move failed records to error table, continue processing valid records. Best for non-critical issues.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Fail and Stop</h3>
        <p className="text-sm">Halt entire ETL process on critical validation failures. Best for data integrity issues.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Flag and Load</h3>
        <p className="text-sm">Add quality flag column to indicate validation status. Best for audit and reporting.</p>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Default and Continue</h3>
        <p className="text-sm">Replace invalid values with defaults. Best for non-critical fields with known fallbacks.</p>
      </div>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Validation ensures data meets quality standards before loading</li>
        <li>Types: format, range, referential, business rule, completeness</li>
        <li>Validate at each ETL stage: extraction, transformation, loading</li>
        <li>Use severity levels (ERROR, WARNING) to control ETL behavior</li>
        <li>Log all validation results for auditing and debugging</li>
        <li>Handle failures appropriately: reject, stop, flag, or default</li>
        <li>Row count validation ensures no data loss during ETL</li>
        <li>Referential validation prevents orphan records in fact tables</li>
      </ul>
    </div>
  </div>
);

export default DataValidation;
