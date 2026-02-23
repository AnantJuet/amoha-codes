import React from "react";

const InputValidation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Input Validation
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Input validation is the process of ensuring that user-supplied data meets expected criteria
      before processing. Proper input validation is a critical defense against injection attacks,
      XSS, and other security vulnerabilities.
    </p>

    <h2 className="text-3xl font-bold mt-8">Validation Strategies</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Input Validation Approaches:

1. WHITELIST (Allowlist) - PREFERRED
   Only accept known good input
   Example: Only allow a-z, A-Z, 0-9

2. BLACKLIST (Denylist) - WEAK
   Block known bad patterns
   Problem: Attackers find bypasses

3. SANITIZATION
   Clean or transform dangerous input
   Example: Remove HTML tags

4. REJECTION
   Reject invalid input entirely
   Safest approach for critical fields

Principle: Never trust user input!
Validate on server side (client-side is bypassed)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Validation Techniques</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Technique</th>
            <th className="p-3 border">Description</th>
            <th className="p-3 border">Example</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Type Checking</td>
            <td className="p-3 border">Verify data type</td>
            <td className="p-3 border">Integer, string, date</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Length Limits</td>
            <td className="p-3 border">Min/max boundaries</td>
            <td className="p-3 border">Password 8-128 chars</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Format Validation</td>
            <td className="p-3 border">Match expected pattern</td>
            <td className="p-3 border">Email regex, phone format</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Range Checking</td>
            <td className="p-3 border">Value within bounds</td>
            <td className="p-3 border">Age 0-150, price {`>= 0`}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Common Input Sources</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2 mt-2">
      <li><strong>Form Fields:</strong> Text inputs, dropdowns, checkboxes</li>
      <li><strong>URL Parameters:</strong> Query strings, path parameters</li>
      <li><strong>HTTP Headers:</strong> User-Agent, Referer, cookies</li>
      <li><strong>API Payloads:</strong> JSON, XML request bodies</li>
      <li><strong>File Uploads:</strong> Filenames, content types, content</li>
      <li><strong>Hidden Fields:</strong> Often manipulated by attackers</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Validation Examples</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// Email validation (regex example)
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
if (!emailRegex.test(email)) {
  throw new Error("Invalid email format");
}

// Integer validation
const age = parseInt(input, 10);
if (isNaN(age) || age < 0 || age > 150) {
  throw new Error("Invalid age");
}

// Length validation
if (username.length < 3 || username.length > 30) {
  throw new Error("Username must be 3-30 characters");
}

// Whitelist validation
const allowedRoles = ['user', 'admin', 'moderator'];
if (!allowedRoles.includes(role)) {
  throw new Error("Invalid role");
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Client vs Server Validation</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Client-Side</th>
            <th className="p-3 border">Server-Side</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Purpose</td>
            <td className="p-3 border">User experience</td>
            <td className="p-3 border">Security</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Bypassable</td>
            <td className="p-3 border">Yes, easily</td>
            <td className="p-3 border">No (if implemented correctly)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Required</td>
            <td className="p-3 border">Optional (UX)</td>
            <td className="p-3 border">Mandatory (security)</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Never trust any user input - always validate</li>
        <li>Prefer whitelist over blacklist validation</li>
        <li>Server-side validation is mandatory for security</li>
        <li>Client-side validation is only for user experience</li>
        <li>Validate all input sources, not just form fields</li>
        <li>Validate both syntax (format) and semantics (meaning)</li>
      </ul>
    </div>
  </div>
);

export default InputValidation;
