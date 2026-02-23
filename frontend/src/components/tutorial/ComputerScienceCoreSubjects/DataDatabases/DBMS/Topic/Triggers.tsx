import React from "react";

const Triggers: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">Triggers in DBMS</h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      A trigger is a special type of stored procedure that automatically executes
      when a specific event occurs in the database. Triggers are used to maintain
      data integrity, enforce business rules, and audit changes.
    </p>

    <h2 className="text-3xl font-bold mt-8">Trigger Concepts</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Trigger Components:

1. Event: What activates the trigger
   - INSERT, UPDATE, DELETE

2. Timing: When trigger fires
   - BEFORE: Before the event
   - AFTER: After the event
   - INSTEAD OF: Replace the event (views)

3. Level: How often trigger fires
   - ROW-level: Once per affected row
   - STATEMENT-level: Once per statement

Trigger Flow:
Event → Timing Check → Trigger Code → Complete Operation`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Creating Triggers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Basic syntax
CREATE TRIGGER trigger_name
{BEFORE | AFTER} {INSERT | UPDATE | DELETE}
ON table_name
FOR EACH ROW
BEGIN
    -- Trigger code
END;

-- AFTER INSERT trigger
DELIMITER //
CREATE TRIGGER after_employee_insert
AFTER INSERT ON employee
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (action, emp_id, timestamp)
    VALUES ('INSERT', NEW.emp_id, NOW());
END //
DELIMITER ;

-- BEFORE UPDATE trigger
DELIMITER //
CREATE TRIGGER before_salary_update
BEFORE UPDATE ON employee
FOR EACH ROW
BEGIN
    IF NEW.salary < 0 THEN
        SET NEW.salary = 0;
    END IF;
END //
DELIMITER ;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NEW and OLD Keywords</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`NEW and OLD Reference Values:

INSERT: NEW = new row values (OLD not available)
UPDATE: NEW = new values, OLD = previous values
DELETE: OLD = deleted row values (NEW not available)

+----------+---------------+---------------+
| Event    | OLD           | NEW           |
+----------+---------------+---------------+
| INSERT   | Not available | New row       |
| UPDATE   | Before change | After change  |
| DELETE   | Deleted row   | Not available |
+----------+---------------+---------------+

-- Example: Log salary changes
DELIMITER //
CREATE TRIGGER log_salary_change
AFTER UPDATE ON employee
FOR EACH ROW
BEGIN
    IF OLD.salary != NEW.salary THEN
        INSERT INTO salary_history
        (emp_id, old_salary, new_salary, change_date)
        VALUES
        (NEW.emp_id, OLD.salary, NEW.salary, NOW());
    END IF;
END //
DELIMITER ;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Trigger Use Cases</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. Audit Trail
DELIMITER //
CREATE TRIGGER audit_employee_changes
AFTER UPDATE ON employee
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (
        table_name, record_id, old_value, new_value,
        changed_by, changed_at
    )
    VALUES (
        'employee', NEW.emp_id,
        CONCAT('salary:', OLD.salary),
        CONCAT('salary:', NEW.salary),
        CURRENT_USER(), NOW()
    );
END //
DELIMITER ;

2. Enforce Business Rules
DELIMITER //
CREATE TRIGGER check_order_quantity
BEFORE INSERT ON order_items
FOR EACH ROW
BEGIN
    DECLARE available INT;
    SELECT stock INTO available FROM products
    WHERE product_id = NEW.product_id;

    IF NEW.quantity > available THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Insufficient stock';
    END IF;
END //
DELIMITER ;

3. Maintain Derived Data
DELIMITER //
CREATE TRIGGER update_order_total
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE orders
    SET total = total + (NEW.quantity * NEW.price)
    WHERE order_id = NEW.order_id;
END //
DELIMITER ;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">BEFORE vs AFTER Triggers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">BEFORE</th>
            <th className="p-3 border">AFTER</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-900">
          <tr>
            <td className="p-3 border font-semibold">When</td>
            <td className="p-3 border">Before row change</td>
            <td className="p-3 border">After row change</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Modify NEW</td>
            <td className="p-3 border text-green-500">Yes</td>
            <td className="p-3 border text-red-500">No</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Cancel Event</td>
            <td className="p-3 border text-green-500">Yes (SIGNAL)</td>
            <td className="p-3 border text-red-500">No (already done)</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">Use For</td>
            <td className="p-3 border">Validation, modification</td>
            <td className="p-3 border">Audit, cascade updates</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Managing Triggers</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`-- Show all triggers
SHOW TRIGGERS;

-- Show triggers for a table
SHOW TRIGGERS FROM database_name
WHERE \`Table\` = 'employee';

-- View trigger definition
SHOW CREATE TRIGGER trigger_name;

-- Drop trigger
DROP TRIGGER IF EXISTS trigger_name;

-- Disable trigger (MySQL 8.0+)
ALTER TABLE employee DISABLE TRIGGER trigger_name;

-- Enable trigger
ALTER TABLE employee ENABLE TRIGGER trigger_name;`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Trigger Best Practices</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-2">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li><strong>Keep Simple:</strong> Avoid complex logic in triggers</li>
        <li><strong>Avoid Recursion:</strong> Don't trigger actions that fire same trigger</li>
        <li><strong>Document:</strong> Clearly document trigger purpose</li>
        <li><strong>Performance:</strong> Minimize operations in triggers</li>
        <li><strong>Testing:</strong> Thoroughly test trigger behavior</li>
      </ul>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Triggers fire automatically on DML events</li>
        <li>BEFORE: Can modify NEW, validate, cancel</li>
        <li>AFTER: For auditing and cascading updates</li>
        <li>Use NEW/OLD to access row values</li>
        <li>Avoid heavy processing in triggers</li>
      </ul>
    </div>
  </div>
);

export default Triggers;
