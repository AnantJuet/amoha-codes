import React from "react";

const Operators: React.FC = () => (
  <div className="mt-15">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Java Operators
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>Operators</b> are special symbols that perform operations on variables and values.
      Java provides a rich set of operators categorized into several groups.
    </p>

    <h2 className="text-2xl font-bold mt-6">Arithmetic Operators</h2>
    <p className="leading-relaxed mt-3">
      Used to perform common mathematical operations.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Operator</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Example</th>
            <th className="border p-2">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">+</td><td className="border p-2">Addition</td><td className="border p-2">5 + 3</td><td className="border p-2">8</td></tr>
          <tr><td className="border p-2">-</td><td className="border p-2">Subtraction</td><td className="border p-2">5 - 3</td><td className="border p-2">2</td></tr>
          <tr><td className="border p-2">*</td><td className="border p-2">Multiplication</td><td className="border p-2">5 * 3</td><td className="border p-2">15</td></tr>
          <tr><td className="border p-2">/</td><td className="border p-2">Division</td><td className="border p-2">10 / 3</td><td className="border p-2">3</td></tr>
          <tr><td className="border p-2">%</td><td className="border p-2">Modulus</td><td className="border p-2">10 % 3</td><td className="border p-2">1</td></tr>
          <tr><td className="border p-2">++</td><td className="border p-2">Increment</td><td className="border p-2">x++</td><td className="border p-2">x + 1</td></tr>
          <tr><td className="border p-2">--</td><td className="border p-2">Decrement</td><td className="border p-2">x--</td><td className="border p-2">x - 1</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int a = 10, b = 3;

System.out.println("a + b = " + (a + b));  // 13
System.out.println("a - b = " + (a - b));  // 7
System.out.println("a * b = " + (a * b));  // 30
System.out.println("a / b = " + (a / b));  // 3 (integer division)
System.out.println("a % b = " + (a % b));  // 1 (remainder)

// For decimal division
System.out.println("10.0 / 3 = " + (10.0 / 3));  // 3.3333...`}
      </pre>
    </div>

    <h3 className="text-xl font-semibold mt-4">Increment and Decrement</h3>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int x = 5;

// Post-increment: use then increment
System.out.println(x++);  // prints 5, then x becomes 6

// Pre-increment: increment then use
System.out.println(++x);  // x becomes 7, prints 7

// Post-decrement
System.out.println(x--);  // prints 7, then x becomes 6

// Pre-decrement
System.out.println(--x);  // x becomes 5, prints 5`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Assignment Operators</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Operator</th>
            <th className="border p-2">Example</th>
            <th className="border p-2">Equivalent To</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">=</td><td className="border p-2">x = 5</td><td className="border p-2">x = 5</td></tr>
          <tr><td className="border p-2">+=</td><td className="border p-2">x += 3</td><td className="border p-2">x = x + 3</td></tr>
          <tr><td className="border p-2">-=</td><td className="border p-2">x -= 3</td><td className="border p-2">x = x - 3</td></tr>
          <tr><td className="border p-2">*=</td><td className="border p-2">x *= 3</td><td className="border p-2">x = x * 3</td></tr>
          <tr><td className="border p-2">/=</td><td className="border p-2">x /= 3</td><td className="border p-2">x = x / 3</td></tr>
          <tr><td className="border p-2">%=</td><td className="border p-2">x %= 3</td><td className="border p-2">x = x % 3</td></tr>
          <tr><td className="border p-2">&=</td><td className="border p-2">x &= 3</td><td className="border p-2">x = x & 3</td></tr>
          <tr><td className="border p-2">|=</td><td className="border p-2">x |= 3</td><td className="border p-2">x = x | 3</td></tr>
          <tr><td className="border p-2">^=</td><td className="border p-2">x ^= 3</td><td className="border p-2">x = x ^ 3</td></tr>
          <tr><td className="border p-2">{">>="}</td><td className="border p-2">x {">>="} 2</td><td className="border p-2">x = x {">>"} 2</td></tr>
          <tr><td className="border p-2">{"<<="}</td><td className="border p-2">x {"<<="} 2</td><td className="border p-2">x = x {"<<"} 2</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int x = 10;

x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24
x /= 4;   // x = 6
x %= 4;   // x = 2`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Comparison (Relational) Operators</h2>
    <p className="leading-relaxed mt-3">
      Used to compare two values. They return a boolean result.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Operator</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Example</th>
            <th className="border p-2">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">==</td><td className="border p-2">Equal to</td><td className="border p-2">5 == 5</td><td className="border p-2">true</td></tr>
          <tr><td className="border p-2">!=</td><td className="border p-2">Not equal to</td><td className="border p-2">5 != 3</td><td className="border p-2">true</td></tr>
          <tr><td className="border p-2">&gt;</td><td className="border p-2">Greater than</td><td className="border p-2">5 &gt; 3</td><td className="border p-2">true</td></tr>
          <tr><td className="border p-2">&lt;</td><td className="border p-2">Less than</td><td className="border p-2">5 &lt; 3</td><td className="border p-2">false</td></tr>
          <tr><td className="border p-2">&gt;=</td><td className="border p-2">Greater than or equal</td><td className="border p-2">5 &gt;= 5</td><td className="border p-2">true</td></tr>
          <tr><td className="border p-2">&lt;=</td><td className="border p-2">Less than or equal</td><td className="border p-2">5 &lt;= 3</td><td className="border p-2">false</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int a = 5, b = 3;

System.out.println(a == b);  // false
System.out.println(a != b);  // true
System.out.println(a > b);   // true
System.out.println(a < b);   // false
System.out.println(a >= 5);  // true
System.out.println(b <= 3);  // true`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Logical Operators</h2>
    <p className="leading-relaxed mt-3">
      Used to combine multiple boolean expressions.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Operator</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">&&</td><td className="border p-2">Logical AND</td><td className="border p-2">true if both are true</td><td className="border p-2">x &gt; 0 && x &lt; 10</td></tr>
          <tr><td className="border p-2">||</td><td className="border p-2">Logical OR</td><td className="border p-2">true if at least one is true</td><td className="border p-2">x &lt; 0 || x &gt; 100</td></tr>
          <tr><td className="border p-2">!</td><td className="border p-2">Logical NOT</td><td className="border p-2">Reverses the result</td><td className="border p-2">!(x &gt; 5)</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int age = 25;
boolean hasLicense = true;

// AND: both conditions must be true
boolean canDrive = age >= 18 && hasLicense;  // true

// OR: at least one condition must be true
boolean isWeekend = false;
boolean isHoliday = true;
boolean dayOff = isWeekend || isHoliday;  // true

// NOT: reverses the boolean value
boolean isMinor = !(age >= 18);  // false

// Short-circuit evaluation
// Second condition not evaluated if first determines result
boolean result = false && (10 / 0 > 0);  // No error!`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">Bitwise Operators</h2>
    <p className="leading-relaxed mt-3">
      Operate on individual bits of integer types.
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Operator</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className="border p-2">&</td><td className="border p-2">AND</td><td className="border p-2">1 if both bits are 1</td></tr>
          <tr><td className="border p-2">|</td><td className="border p-2">OR</td><td className="border p-2">1 if at least one bit is 1</td></tr>
          <tr><td className="border p-2">^</td><td className="border p-2">XOR</td><td className="border p-2">1 if bits are different</td></tr>
          <tr><td className="border p-2">~</td><td className="border p-2">NOT</td><td className="border p-2">Inverts all bits</td></tr>
          <tr><td className="border p-2">&lt;&lt;</td><td className="border p-2">Left shift</td><td className="border p-2">Shifts bits left</td></tr>
          <tr><td className="border p-2">&gt;&gt;</td><td className="border p-2">Right shift</td><td className="border p-2">Shifts bits right (signed)</td></tr>
          <tr><td className="border p-2">&gt;&gt;&gt;</td><td className="border p-2">Unsigned right shift</td><td className="border p-2">Shifts bits right (unsigned)</td></tr>
        </tbody>
      </table>
    </div>

    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`int a = 5;   // Binary: 0101
int b = 3;   // Binary: 0011

System.out.println(a & b);   // 1  (0001)
System.out.println(a | b);   // 7  (0111)
System.out.println(a ^ b);   // 6  (0110)
System.out.println(~a);      // -6 (inverts all bits)

// Shift operators
System.out.println(a << 1);  // 10 (1010) - multiply by 2
System.out.println(a >> 1);  // 2  (0010) - divide by 2`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Ternary Operator</h2>
    <p className="leading-relaxed mt-3">
      A shorthand for if-else that returns a value based on a condition.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Syntax: condition ? valueIfTrue : valueIfFalse

int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status);  // Adult

// Finding maximum
int a = 10, b = 20;
int max = (a > b) ? a : b;
System.out.println("Max: " + max);  // 20

// Nested ternary (use sparingly)
int score = 75;
String grade = (score >= 90) ? "A" :
               (score >= 80) ? "B" :
               (score >= 70) ? "C" : "F";`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold text-[#F89820] mt-6">instanceof Operator</h2>
    <p className="leading-relaxed mt-3">
      Checks if an object is an instance of a specific class or interface.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`String text = "Hello";
System.out.println(text instanceof String);  // true
System.out.println(text instanceof Object);  // true

// Pattern matching instanceof (Java 16+)
Object obj = "Hello";
if (obj instanceof String s) {
    System.out.println(s.toUpperCase());  // HELLO
}`}
      </pre>
    </div>

    <h2 className="text-2xl font-bold mt-6">Operator Precedence</h2>
    <p className="leading-relaxed mt-3">
      Operators are evaluated in a specific order. Use parentheses to override.
    </p>
    <div className="bg-gray-100 text-black p-3 rounded-md font-mono mt-3">
      <pre>
{`// Higher precedence operators execute first
int result = 2 + 3 * 4;     // 14, not 20
int result2 = (2 + 3) * 4;  // 20, parentheses override

// Precedence order (high to low):
// 1. () [] .
// 2. ++ -- ! ~
// 3. * / %
// 4. + -
// 5. << >> >>>
// 6. < <= > >= instanceof
// 7. == !=
// 8. &
// 9. ^
// 10. |
// 11. &&
// 12. ||
// 13. ?:
// 14. = += -= etc.`}
      </pre>
    </div>

    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
      <p className="font-semibold">Best Practices</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>Use parentheses to make complex expressions clearer</li>
        <li>Be careful with integer division (use casting if needed)</li>
        <li>Understand short-circuit evaluation in && and ||</li>
        <li>Avoid deeply nested ternary operators</li>
        <li>Use compound assignment operators for cleaner code</li>
      </ul>
    </div>
  </div>
);

export default Operators;
