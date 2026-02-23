import React from "react";

const SQLConstraints: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL Constraints</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Constraints are rules enforced on data columns to maintain the accuracy
      and integrity of data in the database. They prevent invalid data from
      being inserted and ensure data relationships are maintained.
    </p>

    <h2 className="text-3xl font-bold mt-8">Types of Constraints</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Constraint Types:

1. NOT NULL      - Column cannot have NULL value
2. UNIQUE        - All values must be different
3. PRIMARY KEY   - NOT NULL + UNIQUE (identifies row)
4. FOREIGN KEY   - Links to another table
5. CHECK         - Values must satisfy condition
6. DEFAULT       - Default value if none specified`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NOT NULL Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- NOT NULL: Ensures column always has a value

CREATE TABLE employee (
    emp_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100),  -- Can be NULL
    salary DECIMAL(10,2) NOT NULL
);

-- This will FAIL:
INSERT INTO employee (emp_id, name, salary)
VALUES (1, NULL, 50000);
-- Error: Column 'name' cannot be null

-- Adding NOT NULL to existing column:
ALTER TABLE employee
MODIFY email VARCHAR(100) NOT NULL;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">UNIQUE Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- UNIQUE: All values in column must be distinct

CREATE TABLE users (
    user_id INT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE
);

-- Composite UNIQUE constraint:
CREATE TABLE enrollment (
    student_id INT,
    course_id INT,
    semester VARCHAR(10),
    UNIQUE (student_id, course_id, semester)
);

-- Adding UNIQUE constraint:
ALTER TABLE employee
ADD CONSTRAINT uk_emp_email UNIQUE (email);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">PRIMARY KEY Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- PRIMARY KEY: Unique identifier for each row
-- = NOT NULL + UNIQUE

CREATE TABLE department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL
);

-- Composite Primary Key:
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    PRIMARY KEY (order_id, product_id)
);

-- Named Primary Key:
CREATE TABLE customer (
    cust_id INT,
    name VARCHAR(50),
    CONSTRAINT pk_customer PRIMARY KEY (cust_id)
);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">FOREIGN KEY Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- FOREIGN KEY: Links to primary key in another table

CREATE TABLE department (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);

-- With referential actions:
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    FOREIGN KEY (customer_id)
        REFERENCES customer(cust_id)
        ON DELETE CASCADE
        ON UPDATE SET NULL
);

Referential Actions:
- CASCADE:    Delete/update child rows too
- SET NULL:   Set foreign key to NULL
- SET DEFAULT: Set to default value
- NO ACTION:  Prevent if children exist
- RESTRICT:   Same as NO ACTION`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">CHECK Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- CHECK: Ensures values satisfy a condition

CREATE TABLE employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT CHECK (age >= 18 AND age <= 65),
    salary DECIMAL(10,2) CHECK (salary > 0),
    gender CHAR(1) CHECK (gender IN ('M', 'F', 'O'))
);

-- Named CHECK constraint:
CREATE TABLE product (
    product_id INT PRIMARY KEY,
    price DECIMAL(10,2),
    discount DECIMAL(5,2),
    CONSTRAINT chk_discount
        CHECK (discount >= 0 AND discount <= price)
);

-- Adding CHECK to existing table:
ALTER TABLE employee
ADD CONSTRAINT chk_salary CHECK (salary >= 15000);`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">DEFAULT Constraint</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- DEFAULT: Provides default value for column

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    order_date DATE DEFAULT CURRENT_DATE,
    status VARCHAR(20) DEFAULT 'Pending',
    quantity INT DEFAULT 1
);

-- Insert without specifying default columns:
INSERT INTO orders (order_id) VALUES (1);
-- Result: order_date = today, status = 'Pending', quantity = 1

-- Adding DEFAULT to existing column:
ALTER TABLE employee
ALTER COLUMN country SET DEFAULT 'USA';`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Constraint Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Constraint</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">NULLs Allowed</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">NOT NULL</td>
            <td className="p-3 border">Prevent NULL values</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">UNIQUE</td>
            <td className="p-3 border">Ensure uniqueness</td>
            <td className="p-3 border">Yes (one NULL)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">PRIMARY KEY</td>
            <td className="p-3 border">Identify rows uniquely</td>
            <td className="p-3 border">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">FOREIGN KEY</td>
            <td className="p-3 border">Referential integrity</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">CHECK</td>
            <td className="p-3 border">Validate values</td>
            <td className="p-3 border">Yes</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">DEFAULT</td>
            <td className="p-3 border">Provide default value</td>
            <td className="p-3 border">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>PRIMARY KEY = NOT NULL + UNIQUE</li>
        <li>FOREIGN KEY maintains referential integrity</li>
        <li>CHECK validates data against conditions</li>
        <li>Constraints can be named for easier management</li>
        <li>Use ON DELETE/UPDATE for cascading actions</li>
      </ul>
    </div>
  </div>
);

export default SQLConstraints;
