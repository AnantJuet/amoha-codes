import React from "react";

const ExpressionTranslation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Translating Expressions to Intermediate Code
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Expression translation is the process of converting arithmetic, relational, and logical
      expressions from source code into intermediate representations like three-address code.
      This translation uses syntax-directed definitions where semantic actions are attached
      to grammar productions to generate code during parsing.
    </p>

    <h2 className="text-3xl font-bold mt-8">Syntax-Directed Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Syntax-Directed Definition for Expressions:

Productions with Semantic Actions:

S → id = E        { emit(id.name "=" E.place); }

E → E1 + T        { E.place = newTemp();
                    emit(E.place "=" E1.place "+" T.place); }

E → E1 - T        { E.place = newTemp();
                    emit(E.place "=" E1.place "-" T.place); }

E → T             { E.place = T.place; }

T → T1 * F        { T.place = newTemp();
                    emit(T.place "=" T1.place "*" F.place); }

T → T1 / F        { T.place = newTemp();
                    emit(T.place "=" T1.place "/" F.place); }

T → F             { T.place = F.place; }

F → ( E )         { F.place = E.place; }

F → id            { F.place = id.name; }

F → num           { F.place = num.value; }


Key Attributes:
- place: The name (temp or variable) holding the value
- newTemp(): Generates a new temporary variable
- emit(): Outputs a three-address instruction`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Translation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: x = a + b * c - d

Parse Tree with Semantic Actions:

                S (emit: x = t3)
                |
         id(x) = E (place=t3, emit: t3=t2-d)
                |
          E (place=t2, emit: t2=a+t1) - T (place=d)
          |                             |
     E (place=a) + T (place=t1,         F
     |              emit: t1=b*c)       |
     T             |                   id(d)
     |          T * F
     F         |     |
     |        F    id(c)
    id(a)     |
            id(b)

Step-by-step Execution:
1. Parse 'a': F.place = "a"
2. F → T: T.place = "a"
3. T → E: E.place = "a"
4. Parse 'b': F.place = "b"
5. F → T: T.place = "b"
6. Parse 'c': F.place = "c"
7. T * F: t1 = newTemp()
          emit("t1 = b * c")
          T.place = "t1"
8. E + T: t2 = newTemp()
          emit("t2 = a + t1")
          E.place = "t2"
9. Parse 'd': F.place = "d"
10. F → T: T.place = "d"
11. E - T: t3 = newTemp()
           emit("t3 = t2 - d")
           E.place = "t3"
12. id = E: emit("x = t3")

Generated Code:
    t1 = b * c
    t2 = a + t1
    t3 = t2 - d
    x = t3`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Unary Operators</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar Extension for Unary Operators:

F → - F1          { F.place = newTemp();
                    emit(F.place "=" "uminus" F1.place); }

F → ! F1          { F.place = newTemp();
                    emit(F.place "=" "not" F1.place); }


Example: a = -b * c

Parse and Generate:
1. Parse 'b': F.place = "b"
2. -F: t1 = newTemp()
       emit("t1 = uminus b")
       F.place = "t1"
3. F → T: T.place = "t1"
4. Parse 'c': F.place = "c"
5. T * F: t2 = newTemp()
          emit("t2 = t1 * c")
6. T → E: E.place = "t2"
7. a = E: emit("a = t2")

Generated Code:
    t1 = uminus b
    t2 = t1 * c
    a = t2

Or equivalently:
    t1 = -b
    t2 = t1 * c
    a = t2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Type Conversion and Coercion</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Handling Mixed-Type Expressions:

E → E1 + T        {
                    if (E1.type == T.type) {
                        E.type = E1.type;
                        E.place = newTemp();
                        emit(E.place "=" E1.place "+" T.place);
                    }
                    else if (E1.type == int && T.type == float) {
                        E.type = float;
                        t = newTemp();
                        emit(t "=" "intToFloat" E1.place);
                        E.place = newTemp();
                        emit(E.place "=" t "+" T.place);
                    }
                    else if (E1.type == float && T.type == int) {
                        E.type = float;
                        t = newTemp();
                        emit(t "=" "intToFloat" T.place);
                        E.place = newTemp();
                        emit(E.place "=" E1.place "+" t);
                    }
                  }

Example: x = 5 + 3.14  (int + float)

Generated Code:
    t1 = intToFloat 5
    t2 = t1 + 3.14
    x = t2`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Relational Expressions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Relational operators produce boolean (0 or 1) values:

E → E1 relop E2   { E.place = newTemp();
                    emit("if" E1.place relop E2.place "goto" nextinstr+3);
                    emit(E.place "=" "0");
                    emit("goto" nextinstr+2);
                    emit(E.place "=" "1");
                  }

Example: a = (x > y)

Generated Code:
    if x > y goto L1
    t1 = 0
    goto L2
L1: t1 = 1
L2: a = t1


Alternative (simpler, less efficient):
E → E1 relop E2   { E.place = newTemp();
                    emit(E.place "=" E1.place relop E2.place);
                  }

Generated Code:
    t1 = x > y    ; Boolean result
    a = t1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complex Expression Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: x = (a + b) * (c - d) / e

Parse Tree Structure:
           =
          / \\
         x   /
            / \\
           *   e
          / \\
         +   -
        / \\ / \\
       a  b c  d

Translation (bottom-up):
1. a, b, c, d, e are leaves → use their names directly
2. a + b: t1 = newTemp(); emit("t1 = a + b")
3. c - d: t2 = newTemp(); emit("t2 = c - d")
4. t1 * t2: t3 = newTemp(); emit("t3 = t1 * t2")
5. t3 / e: t4 = newTemp(); emit("t4 = t3 / e")
6. x = t4: emit("x = t4")

Generated Three-Address Code:
    t1 = a + b
    t2 = c - d
    t3 = t1 * t2
    t4 = t3 / e
    x = t4

Quadruple Representation:
+---+----+------+------+--------+
| # | op | arg1 | arg2 | result |
+---+----+------+------+--------+
| 0 | +  |  a   |  b   |   t1   |
| 1 | -  |  c   |  d   |   t2   |
| 2 | *  |  t1  |  t2  |   t3   |
| 3 | /  |  t3  |  e   |   t4   |
| 4 | =  |  t4  |  -   |   x    |
+---+----+------+------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation Functions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C/C++ Implementation

// Global variables
int tempCount = 0;
vector<string> code;

// Generate new temporary
string newTemp() {
    return "t" + to_string(tempCount++);
}

// Emit three-address instruction
void emit(string result, string op, string arg1, string arg2 = "") {
    string instr;
    if (arg2.empty())
        instr = result + " = " + op + " " + arg1;
    else
        instr = result + " = " + arg1 + " " + op + " " + arg2;
    code.push_back(instr);
}

// Expression node structure
struct ExprNode {
    string place;    // Where result is stored
    string type;     // Data type
};

// Translate binary operation
ExprNode translateBinOp(string op, ExprNode left, ExprNode right) {
    ExprNode result;
    result.place = newTemp();
    result.type = commonType(left.type, right.type);

    // Handle type coercion if needed
    string leftPlace = left.place;
    string rightPlace = right.place;

    if (left.type != result.type) {
        string t = newTemp();
        emit(t, "cast_" + result.type, leftPlace);
        leftPlace = t;
    }
    if (right.type != result.type) {
        string t = newTemp();
        emit(t, "cast_" + result.type, rightPlace);
        rightPlace = t;
    }

    emit(result.place, op, leftPlace, rightPlace);
    return result;
}

// Translate unary operation
ExprNode translateUnaryOp(string op, ExprNode operand) {
    ExprNode result;
    result.place = newTemp();
    result.type = operand.type;
    emit(result.place, op, operand.place);
    return result;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Increment and Decrement Operators</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Handling ++ and -- operators:

Pre-increment: ++x
    x = x + 1
    (value is new x)

Post-increment: x++
    t = x           ; Save old value
    x = x + 1
    (value is old x, stored in t)


Example: y = x++ + ++z

Generated Code:
    t1 = x          ; Save x for post-increment
    x = x + 1       ; Post-increment x
    z = z + 1       ; Pre-increment z
    t2 = t1 + z     ; Use old x, new z
    y = t2

Translation Rules:
E → id ++         { E.place = newTemp();
                    emit(E.place "=" id.name);
                    emit(id.name "=" id.name "+" "1");
                  }

E → ++ id         { emit(id.name "=" id.name "+" "1");
                    E.place = id.name;
                  }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Expression translation uses syntax-directed definitions</li>
        <li>Each expression has a "place" attribute holding its result location</li>
        <li>newTemp() generates unique temporary variable names</li>
        <li>emit() outputs three-address code instructions</li>
        <li>Binary operations: result = operand1 op operand2</li>
        <li>Unary operations: result = op operand</li>
        <li>Type coercion may require additional conversion instructions</li>
        <li>Relational expressions produce boolean (0/1) values</li>
        <li>Pre/post increment/decrement require careful handling</li>
        <li>Translation is typically bottom-up (post-order tree traversal)</li>
      </ul>
    </div>
  </div>
);

export default ExpressionTranslation;
