import React from "react";

const SensitiveDataExposure: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Sensitive Data Exposure
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Sensitive Data Exposure occurs when applications fail to adequately protect sensitive
      information such as financial data, healthcare records, and personal identifiable information (PII).
      This vulnerability ranks among the OWASP Top 10 and can lead to identity theft, fraud, and
      regulatory violations.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Sensitive Data</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Examples</th>
            <th className="p-3 border">Regulations</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">PII</td>
            <td className="p-3 border">SSN, name, address, DOB</td>
            <td className="p-3 border">GDPR, CCPA</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Financial</td>
            <td className="p-3 border">Credit cards, bank accounts</td>
            <td className="p-3 border">PCI-DSS</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Healthcare</td>
            <td className="p-3 border">Medical records, diagnoses</td>
            <td className="p-3 border">HIPAA</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Credentials</td>
            <td className="p-3 border">Passwords, API keys, tokens</td>
            <td className="p-3 border">Various</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Exposure Scenarios</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Sensitive Data Exposure Scenarios:

1. DATA IN TRANSIT
   - Unencrypted HTTP connections
   - Weak TLS/SSL configurations
   - Missing HSTS headers

2. DATA AT REST
   - Unencrypted database storage
   - Plain text password storage
   - Exposed backup files

3. DATA IN USE
   - Logging sensitive information
   - Caching credentials
   - Displaying full credit card numbers

Example - Poor Credential Storage:
// VULNERABLE: Plain text password storage
INSERT INTO users (username, password)
VALUES ('admin', 'password123');

// SECURE: Properly hashed password
INSERT INTO users (username, password_hash)
VALUES ('admin', '$2b$12$hash...');`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Attack Vectors</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Common Attack Methods:

1. MAN-IN-THE-MIDDLE (MITM)
   Attacker intercepts unencrypted traffic
   Steals credentials, session tokens

2. DATABASE BREACH
   SQL injection exposes data
   Compromised admin credentials
   Misconfigured database permissions

3. BACKUP EXPOSURE
   Unprotected backup files
   Exposed cloud storage buckets
   Improper disposal of old media

4. LOG FILE ANALYSIS
   Sensitive data in application logs
   Debug mode exposing secrets
   Centralized log aggregation access`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Prevention Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Data Protection Measures:

1. ENCRYPTION IN TRANSIT
   - Use TLS 1.2+ for all connections
   - Implement HSTS headers
   - Disable weak cipher suites

2. ENCRYPTION AT REST
   - Encrypt databases and backups
   - Use strong key management
   - Implement field-level encryption

3. SECURE CREDENTIAL HANDLING
   - Hash passwords with bcrypt/Argon2
   - Never log sensitive data
   - Mask data in UI (****1234)

4. DATA CLASSIFICATION
   - Identify sensitive data types
   - Apply appropriate controls
   - Minimize data collection

5. ACCESS CONTROLS
   - Principle of least privilege
   - Audit data access
   - Implement data loss prevention`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Classify data by sensitivity and apply appropriate protections</li>
        <li>Encrypt data both in transit (TLS) and at rest</li>
        <li>Never store passwords in plain text - use strong hashing</li>
        <li>Avoid logging sensitive information</li>
        <li>Regularly audit and purge unnecessary sensitive data</li>
        <li>Comply with relevant regulations (GDPR, PCI-DSS, HIPAA)</li>
      </ul>
    </div>
  </div>
);

export default SensitiveDataExposure;
