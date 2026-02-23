import React from "react";

const SQLTCL: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">SQL TCL - Transaction Control Language</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Transaction Control Language (TCL) commands manage the changes made by DML
      statements. They allow you to group operations into logical units and control
      whether changes are permanently saved or discarded.
    </p>

    <h2 className="text-3xl font-bold mt-8">TCL Commands Overview</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`TCL Commands:

COMMIT      - Save all changes permanently
ROLLBACK    - Undo all changes since last commit
SAVEPOINT   - Create a point to rollback to
SET TRANSACTION - Set transaction properties

Transaction Boundary:
BEGIN → [DML Operations] → COMMIT or ROLLBACK`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">COMMIT Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- COMMIT: Save all changes permanently

BEGIN TRANSACTION;

INSERT INTO account (id, balance) VALUES (1, 1000);
UPDATE account SET balance = balance - 100 WHERE id = 1;
INSERT INTO transaction_log VALUES (1, 'Debit', 100, NOW());

COMMIT;  -- All changes are now permanent

-- After COMMIT:
-- - Changes visible to other transactions
-- - Cannot be undone
-- - Locks released

-- Auto-commit mode:
-- Some databases auto-commit each statement
-- Disable: SET AUTOCOMMIT = 0;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">ROLLBACK Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- ROLLBACK: Undo all changes since BEGIN

BEGIN TRANSACTION;

DELETE FROM employee WHERE dept = 'Temp';  -- Deletes 50 rows
UPDATE salary SET amount = 0;              -- Oops! Wrong update

ROLLBACK;  -- All changes undone

-- After ROLLBACK:
-- - All changes since BEGIN are undone
-- - Data restored to state before transaction
-- - Locks released

-- Use cases:
-- - Error recovery
-- - Cancel mistaken operations
-- - Abort failed transactions`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SAVEPOINT Statement</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- SAVEPOINT: Create intermediate points in transaction

BEGIN TRANSACTION;

INSERT INTO orders VALUES (1, 'Product A', 100);
SAVEPOINT order_created;

INSERT INTO inventory VALUES (1, -100);  -- Reduce stock
SAVEPOINT inventory_updated;

INSERT INTO shipping VALUES (1, 'Address');  -- This fails!
-- Error: Invalid address

ROLLBACK TO inventory_updated;  -- Undo only shipping
-- order and inventory changes preserved

-- Or rollback further:
ROLLBACK TO order_created;  -- Undo inventory too
-- Only order insert preserved

COMMIT;  -- Save whatever is left

-- Delete savepoint
RELEASE SAVEPOINT order_created;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SAVEPOINT Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Complex transaction with multiple savepoints

BEGIN TRANSACTION;

-- Step 1: Create order
INSERT INTO orders (order_id, customer_id, total)
VALUES (101, 1, 500);
SAVEPOINT sp_order;

-- Step 2: Add order items
INSERT INTO order_items VALUES (101, 'P1', 2, 200);
INSERT INTO order_items VALUES (101, 'P2', 1, 100);
SAVEPOINT sp_items;

-- Step 3: Process payment
UPDATE accounts SET balance = balance - 500
WHERE customer_id = 1;

IF balance < 0 THEN
    ROLLBACK TO sp_items;  -- Keep order, undo payment
    -- Try alternative payment...
END IF;

SAVEPOINT sp_payment;

-- Step 4: Update inventory
UPDATE products SET stock = stock - 2 WHERE id = 'P1';
UPDATE products SET stock = stock - 1 WHERE id = 'P2';

IF stock < 0 THEN
    ROLLBACK TO sp_payment;  -- Keep payment, undo inventory
    -- Handle out of stock...
END IF;

COMMIT;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">SET TRANSACTION</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- SET TRANSACTION: Configure transaction properties

-- Set isolation level
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Set access mode
SET TRANSACTION READ ONLY;   -- Can only read
SET TRANSACTION READ WRITE;  -- Can read and write

-- Combined
SET TRANSACTION
    ISOLATION LEVEL SERIALIZABLE
    READ ONLY;

-- Example usage:
SET TRANSACTION READ ONLY;
BEGIN;
SELECT * FROM accounts;      -- OK
UPDATE accounts SET ...;     -- ERROR: read-only
COMMIT;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">TCL Summary</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Command</th>
            <th className="p-3 border">Purpose</th>
            <th className="p-3 border">Scope</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">COMMIT</td>
            <td className="p-3 border">Save changes permanently</td>
            <td className="p-3 border">Entire transaction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ROLLBACK</td>
            <td className="p-3 border">Undo all changes</td>
            <td className="p-3 border">Entire transaction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">ROLLBACK TO</td>
            <td className="p-3 border">Undo to savepoint</td>
            <td className="p-3 border">Partial transaction</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">SAVEPOINT</td>
            <td className="p-3 border">Create checkpoint</td>
            <td className="p-3 border">Within transaction</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>COMMIT makes changes permanent</li>
        <li>ROLLBACK undoes changes since BEGIN</li>
        <li>SAVEPOINT creates partial rollback points</li>
        <li>DDL commands auto-commit</li>
        <li>Use transactions for data integrity</li>
      </ul>
    </div>
  </div>
);

export default SQLTCL;
