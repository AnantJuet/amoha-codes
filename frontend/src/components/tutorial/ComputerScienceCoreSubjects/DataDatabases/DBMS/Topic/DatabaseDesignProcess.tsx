import React from "react";

const DatabaseDesignProcess: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Database Design Process</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Database design is a systematic process of creating a detailed data model
      for a database. It involves several phases from requirements gathering to
      physical implementation, ensuring the database meets user needs efficiently.
    </p>

    <h2 className="text-3xl font-bold mt-8">Design Phases</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Database Design Phases:

1. Requirements Analysis
   ↓
2. Conceptual Design (ER Model)
   ↓
3. Logical Design (Relational Schema)
   ↓
4. Normalization
   ↓
5. Physical Design
   ↓
6. Implementation & Tuning`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phase 1: Requirements Analysis</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Requirements Analysis:

Tasks:
- Interview stakeholders
- Study existing systems
- Document data requirements
- Identify operations/transactions
- Define constraints and rules

Deliverables:
- Data requirements document
- Transaction requirements
- Business rules
- Volume and frequency estimates

Example Requirements:
"System must store customer information including
name, email, multiple addresses. Customers place
orders for products. Each order has items with
quantities. System handles 10,000 orders/day."`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phase 2: Conceptual Design</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Conceptual Design (ER Modeling):

Create high-level data model:
- Identify entities
- Define attributes
- Establish relationships
- Determine cardinalities

ER Diagram:

[Customer]──<places>──[Order]──<contains>──[Product]
    │                    │                     │
 name                 order_id              product_id
 email               order_date               name
 phone                 total                  price

No DBMS-specific details yet.
Technology-independent model.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phase 3: Logical Design</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Logical Design (Relational Schema):

Convert ER model to relational tables:

Customer(customer_id PK, name, email, phone)

Address(address_id PK, customer_id FK,
        street, city, zip)

Order(order_id PK, customer_id FK,
      order_date, total)

Order_Item(order_id FK, product_id FK,
           quantity, price)
           PK(order_id, product_id)

Product(product_id PK, name, price, stock)

Define:
- Primary keys
- Foreign keys
- Data types
- NOT NULL constraints`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phase 4: Normalization</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Normalization:

Apply normal forms to reduce redundancy:

Before (denormalized):
Order(order_id, customer_name, customer_email,
      product_name, product_price, quantity)

After (normalized to 3NF):
Customer(customer_id, name, email)
Product(product_id, name, price)
Order(order_id, customer_id, order_date)
Order_Item(order_id, product_id, quantity)

Check:
- 1NF: Atomic values ✓
- 2NF: No partial dependencies ✓
- 3NF: No transitive dependencies ✓
- BCNF: All determinants are keys ✓`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Phase 5: Physical Design</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Physical Design:

DBMS-specific decisions:
- Data types (INT, VARCHAR(50), DECIMAL(10,2))
- Indexes (which columns, type)
- Partitioning strategy
- Storage parameters
- File organization

Index Design:
CREATE INDEX idx_customer_email ON Customer(email);
CREATE INDEX idx_order_date ON Order(order_date);
CREATE INDEX idx_order_customer ON Order(customer_id);

Considerations:
- Query patterns
- Data volume
- Update frequency
- Performance requirements`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Design Process Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Phase</th>
            <th className="p-3 border">Input</th>
            <th className="p-3 border">Output</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">Requirements</td>
            <td className="p-3 border">User needs</td>
            <td className="p-3 border">Requirements document</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Conceptual</td>
            <td className="p-3 border">Requirements</td>
            <td className="p-3 border">ER Diagram</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Logical</td>
            <td className="p-3 border">ER Diagram</td>
            <td className="p-3 border">Relational Schema</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Normalization</td>
            <td className="p-3 border">Schema</td>
            <td className="p-3 border">Normalized Schema</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Physical</td>
            <td className="p-3 border">Normalized Schema</td>
            <td className="p-3 border">DDL Scripts</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Design is iterative, not linear</li>
        <li>Requirements first, implementation last</li>
        <li>Conceptual: What data (entities, relationships)</li>
        <li>Logical: How to structure (tables, keys)</li>
        <li>Physical: How to store (indexes, types)</li>
      </ul>
    </div>
  </div>
);

export default DatabaseDesignProcess;
