import React from "react";

const DataCleansing: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Data Cleansing
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 15 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Data cleansing (or data cleaning) is the process of detecting and correcting corrupt,
      inaccurate, or irrelevant data. It is a critical step in ETL to ensure data quality
      in the data warehouse and enable accurate analytical insights.
    </p>

    {/* Common Data Quality Issues */}
    <h2 className="text-3xl font-bold mt-8">Common Data Quality Issues</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Quality Problems:
════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│                    COMMON DATA ISSUES                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  1. MISSING VALUES                                               │
│     ├── NULL values where data should exist                     │
│     └── Empty strings instead of NULL                           │
│                                                                  │
│  2. INCONSISTENT FORMATS                                         │
│     ├── Dates: "01/15/2026" vs "2026-01-15" vs "15-Jan-26"     │
│     ├── Phone: "(555) 123-4567" vs "5551234567"                │
│     └── Names: "JOHN SMITH" vs "John Smith" vs "smith, john"    │
│                                                                  │
│  3. DUPLICATE RECORDS                                            │
│     ├── Exact duplicates                                        │
│     └── Near duplicates (slight variations)                     │
│                                                                  │
│  4. INVALID VALUES                                               │
│     ├── Age: -5, 999                                            │
│     ├── Date: "2026-13-45"                                      │
│     └── Email: "not_an_email"                                   │
│                                                                  │
│  5. INCONSISTENT VALUES                                          │
│     ├── State: "NY", "N.Y.", "New York", "new york"            │
│     └── Gender: "M", "Male", "1", "Man"                        │
│                                                                  │
│  6. ORPHAN RECORDS                                               │
│     └── Foreign key references non-existent parent              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}
      </pre>
    </div>

    {/* Cleansing Techniques */}
    <h2 className="text-3xl font-bold mt-8">Data Cleansing Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Issue</th>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Missing Values</td>
            <td className="p-3 border">Default substitution, imputation</td>
            <td className="p-3 border">NULL → "Unknown"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Extra Whitespace</td>
            <td className="p-3 border">Trim leading/trailing spaces</td>
            <td className="p-3 border">"  John  " → "John"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Case Inconsistency</td>
            <td className="p-3 border">Standardize case</td>
            <td className="p-3 border">"NEW YORK" → "New York"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Invalid Format</td>
            <td className="p-3 border">Parse and reformat</td>
            <td className="p-3 border">"01/15/26" → "2026-01-15"</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Duplicates</td>
            <td className="p-3 border">Deduplication rules</td>
            <td className="p-3 border">Keep most recent record</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Out of Range</td>
            <td className="p-3 border">Validation and correction</td>
            <td className="p-3 border">Age 999 → NULL/flag</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Code Mapping</td>
            <td className="p-3 border">Lookup table translation</td>
            <td className="p-3 border">"NY" → "New York"</td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* SQL Examples */}
    <h2 className="text-3xl font-bold mt-8">Cleansing SQL Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Cleansing SQL Examples:
════════════════════════════════════════════════════════════════

-- 1. Handle NULL values
SELECT
    COALESCE(customer_name, 'Unknown') as customer_name,
    COALESCE(email, 'no-email@unknown.com') as email,
    COALESCE(phone, 'N/A') as phone
FROM staging_customers;

-- 2. Trim whitespace
SELECT
    TRIM(customer_name) as customer_name,
    TRIM(BOTH ' ' FROM address) as address,
    REPLACE(phone, ' ', '') as phone  -- Remove all spaces
FROM staging_customers;

-- 3. Standardize case
SELECT
    UPPER(state) as state_code,
    INITCAP(city) as city,  -- PostgreSQL
    -- CONCAT(UPPER(LEFT(city,1)), LOWER(SUBSTRING(city,2))) -- MySQL
    LOWER(email) as email
FROM staging_customers;

-- 4. Date format standardization
SELECT
    CASE
        WHEN date_str LIKE '__/__/____'
            THEN TO_DATE(date_str, 'MM/DD/YYYY')
        WHEN date_str LIKE '____-__-__'
            THEN TO_DATE(date_str, 'YYYY-MM-DD')
        ELSE NULL
    END as standardized_date
FROM staging_orders;

-- 5. Remove duplicates (keep latest)
SELECT * FROM (
    SELECT *,
        ROW_NUMBER() OVER (
            PARTITION BY customer_id
            ORDER BY modified_date DESC
        ) as rn
    FROM staging_customers
) sub
WHERE rn = 1;

-- 6. Code standardization with lookup
SELECT
    s.customer_id,
    COALESCE(m.standard_state, s.state) as state
FROM staging_customers s
LEFT JOIN state_mapping m ON UPPER(s.state) = m.source_state;

-- 7. Validate and flag invalid data
SELECT
    *,
    CASE
        WHEN email NOT LIKE '%@%.%' THEN 'Invalid Email'
        WHEN age < 0 OR age > 120 THEN 'Invalid Age'
        WHEN phone NOT SIMILAR TO '[0-9]{10}' THEN 'Invalid Phone'
        ELSE 'Valid'
    END as data_quality_flag
FROM staging_customers;`}
      </pre>
    </div>

    {/* Cleansing Patterns */}
    <h2 className="text-3xl font-bold mt-8">Common Cleansing Patterns</h2>
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Name Parsing</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Split full name
SELECT
  SPLIT_PART(name, ' ', 1) as first,
  SPLIT_PART(name, ' ', 2) as last
FROM customers;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Phone Standardization</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Remove non-digits
SELECT
  REGEXP_REPLACE(phone,
    '[^0-9]', '', 'g')
    as clean_phone
FROM customers;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Address Standardization</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Abbreviation expansion
SELECT REPLACE(
  REPLACE(address,
    'St.', 'Street'),
    'Ave.', 'Avenue')
FROM customers;`}
          </pre>
        </div>
      </div>
      <div className="p-4 border rounded-lg">
        <h3 className="font-bold mb-2">Email Validation</h3>
        <div className="bg-gray-100 text-gray-900 p-2 rounded font-mono text-xs text-gray-900">
          <pre className="whitespace-pre-wrap text-gray-900">
{`-- Validate email format
SELECT email,
  email ~ '^[A-Za-z0-9._%+-]+
  @[A-Za-z0-9.-]+\\.[A-Z]{2,}$'
  as is_valid
FROM customers;`}
          </pre>
        </div>
      </div>
    </div>

    {/* Data Cleansing Process */}
    <h2 className="text-3xl font-bold mt-8">Cleansing Process Flow</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Cleansing Process:
════════════════════════════════════════════════════════════════

┌─────────────┐
│  Raw Data   │
│  (Staging)  │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: PROFILE DATA                                        │
│  • Analyze patterns and distributions                        │
│  • Identify anomalies and outliers                           │
│  • Document data quality issues                              │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 2: DEFINE RULES                                        │
│  • Create validation rules                                   │
│  • Define standardization mappings                           │
│  • Set default values for missing data                       │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 3: APPLY CLEANSING                                     │
│  • Execute transformations                                   │
│  • Apply validation rules                                    │
│  • Log exceptions and rejected records                       │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  STEP 4: VERIFY RESULTS                                      │
│  • Compare before/after metrics                              │
│  • Review exception reports                                  │
│  • Validate business rule compliance                         │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────┐
│ Clean Data  │
│ (Ready for  │
│   Loading)  │
└─────────────┘`}
      </pre>
    </div>

    {/* Key Points */}
    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Data cleansing fixes errors, inconsistencies, and missing values</li>
        <li>Common issues: NULLs, duplicates, invalid formats, inconsistent codes</li>
        <li>Use COALESCE/ISNULL for handling NULL values</li>
        <li>TRIM removes unwanted whitespace from strings</li>
        <li>Standardize codes using lookup/mapping tables</li>
        <li>Remove duplicates using ROW_NUMBER() with appropriate ordering</li>
        <li>Validate data and flag records that fail quality checks</li>
        <li>Document all cleansing rules for reproducibility</li>
      </ul>
    </div>
  </div>
);

export default DataCleansing;
