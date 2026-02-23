import React from "react";

const BooleanTranslation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Translating Boolean Expressions
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Boolean expressions appear in two contexts: as values to be computed (numerical representation)
      or as control flow elements (flow-of-control representation). The translation approach differs
      based on context. Control flow translation uses short-circuit evaluation, where the second
      operand is evaluated only if necessary.
    </p>

    <h2 className="text-3xl font-bold mt-8">Two Representations of Boolean Expressions</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`1. NUMERICAL REPRESENTATION
   - Boolean values stored as 0 (false) and 1 (true)
   - Used when boolean result is assigned to a variable
   - Example: flag = (a > b)

2. FLOW-OF-CONTROL REPRESENTATION
   - Boolean expression controls jump to different locations
   - Used in conditions (if, while, for)
   - Short-circuit evaluation
   - Example: if (a > b && c < d) goto L_true


Example: x = (a > b)

Numerical Representation:
    if a > b goto L1
    t1 = 0
    goto L2
L1: t1 = 1
L2: x = t1


Example: if (a > b) stmt1; else stmt2;

Flow-of-Control:
    if a > b goto L_true
    goto L_false
L_true: (code for stmt1)
    goto L_end
L_false: (code for stmt2)
L_end: (continue)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Short-Circuit Evaluation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Short-Circuit (Lazy) Evaluation:

AND (&&):
    A && B
    - If A is false, don't evaluate B (result is false)
    - Only evaluate B if A is true

OR (||):
    A || B
    - If A is true, don't evaluate B (result is true)
    - Only evaluate B if A is false


Example: if (ptr != NULL && ptr->value > 0)

With short-circuit:
    if ptr == NULL goto L_false  ; Don't access ptr->value!
    if ptr->value > 0 goto L_true
L_false: (else branch)
    goto L_end
L_true: (then branch)
L_end:

Without short-circuit (DANGEROUS!):
    t1 = (ptr != NULL)
    t2 = (ptr->value > 0)  ; Crash if ptr is NULL!
    t3 = t1 && t2
    if t3 goto L_true`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Translation Scheme for Boolean Expressions</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar with Inherited Attributes:

B → B1 || B2      { B1.true = B.true;
                    B1.false = newlabel();
                    B2.true = B.true;
                    B2.false = B.false;
                  }

B → B1 && B2      { B1.true = newlabel();
                    B1.false = B.false;
                    B2.true = B.true;
                    B2.false = B.false;
                  }

B → ! B1          { B1.true = B.false;
                    B1.false = B.true;
                  }

B → E1 relop E2   { emit("if" E1.place relop E2.place "goto" B.true);
                    emit("goto" B.false);
                  }

B → true          { emit("goto" B.true); }

B → false         { emit("goto" B.false); }


Attributes:
- B.true:  label to jump to if B is true
- B.false: label to jump to if B is false`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AND Translation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: a < b && c > d

Given: B.true = L_true, B.false = L_false

Translation of B1 && B2:
    B1 = (a < b)
    B2 = (c > d)

    B1.true = L1 (new label - continue to check B2)
    B1.false = L_false (short-circuit: if B1 false, whole thing false)
    B2.true = L_true (if B2 true, whole thing true)
    B2.false = L_false (if B2 false, whole thing false)

Generated Code:
    if a < b goto L1      ; B1: if true, check B2
    goto L_false          ; B1: if false, skip B2
L1: if c > d goto L_true  ; B2: if true, result true
    goto L_false          ; B2: if false, result false

Control Flow:
         ┌─────────────┐
         │  a < b ?    │
         └──────┬──────┘
           true │ false
                ↓     ↓
         ┌──────┐    ┌─────────┐
         │ L1   │    │ L_false │
         └──┬───┘    └─────────┘
            │
            ↓
         ┌─────────────┐
         │  c > d ?    │
         └──────┬──────┘
           true │ false
                ↓     ↓
         ┌────────┐  ┌─────────┐
         │ L_true │  │ L_false │
         └────────┘  └─────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OR Translation Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: a < b || c > d

Given: B.true = L_true, B.false = L_false

Translation of B1 || B2:
    B1 = (a < b)
    B2 = (c > d)

    B1.true = L_true (short-circuit: if B1 true, whole thing true)
    B1.false = L1 (new label - continue to check B2)
    B2.true = L_true (if B2 true, whole thing true)
    B2.false = L_false (if B2 false, whole thing false)

Generated Code:
    if a < b goto L_true  ; B1: if true, skip B2
    goto L1               ; B1: if false, check B2
L1: if c > d goto L_true  ; B2: if true, result true
    goto L_false          ; B2: if false, result false

Control Flow:
         ┌─────────────┐
         │  a < b ?    │
         └──────┬──────┘
           true │ false
                ↓     ↓
         ┌────────┐  ┌────┐
         │ L_true │  │ L1 │
         └────────┘  └──┬─┘
                        │
                        ↓
                  ┌─────────────┐
                  │  c > d ?    │
                  └──────┬──────┘
                    true │ false
                         ↓     ↓
                  ┌────────┐  ┌─────────┐
                  │ L_true │  │ L_false │
                  └────────┘  └─────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">NOT Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: !(a < b)

Translation of !B1:
    Simply swap true and false labels!

    B1.true = B.false   (if inner is true, outer is false)
    B1.false = B.true   (if inner is false, outer is true)

Given: B.true = L_true, B.false = L_false

Generated Code:
    if a < b goto L_false   ; If a < b, !(a<b) is false
    goto L_true             ; Otherwise, !(a<b) is true

Note: No additional instructions needed for NOT!
Just swap the labels during translation.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complex Boolean Expression</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: (a < b || c > d) && e < f

Given: B.true = L_true, B.false = L_false

Parse Tree:
            &&
           /  \\
         ||    <
        /  \\  / \\
       <    > e   f
      / \\  / \\
     a  b c  d

Translation (inside-out):

1. For &&:
   Left.true = L1 (intermediate)
   Left.false = L_false (short-circuit)
   Right.true = L_true
   Right.false = L_false

2. For || (left of &&):
   B1.true = L1 (if true, go check right side of &&)
   B1.false = L2 (if false, check B2)
   B2.true = L1
   B2.false = L_false

Generated Code:
    if a < b goto L1        ; First ||: if true, check && right
    goto L2                 ; First ||: if false, check second part
L2: if c > d goto L1        ; Second ||: if true, check && right
    goto L_false            ; Second ||: if false, whole && is false
L1: if e < f goto L_true    ; && right side
    goto L_false

Optimized (fall-through):
    if a < b goto L1
    if c <= d goto L_false  ; Inverted condition
L1: if e < f goto L_true
    goto L_false`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Numerical Representation Code</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`When boolean value needed as computation:

x = (a < b && c > d)

Strategy: Set B.true and B.false to assign 1 and 0

Generated Code:
    if a < b goto L1
    goto L3            ; a >= b, result is 0
L1: if c > d goto L2
    goto L3            ; c <= d, result is 0
L2: t1 = 1             ; Both conditions true
    goto L4
L3: t1 = 0             ; At least one condition false
L4: x = t1


Alternative (using t1 directly):
         t1 = 0            ; Assume false
    if a < b goto L1
    goto L2
L1: if c > d goto L3
    goto L2
L3: t1 = 1             ; Both true
L2: x = t1`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C++ Implementation

class BoolExpr {
public:
    string trueLabel;
    string falseLabel;
};

int labelCount = 0;
string newLabel() {
    return "L" + to_string(labelCount++);
}

void translateBoolExpr(ASTNode* node, string trueL, string falseL) {
    if (node->type == NODE_RELOP) {
        // E1 relop E2
        string left = translateExpr(node->left);
        string right = translateExpr(node->right);
        emit("if " + left + " " + node->op + " " + right +
             " goto " + trueL);
        emit("goto " + falseL);
    }
    else if (node->type == NODE_AND) {
        // B1 && B2
        string L1 = newLabel();
        translateBoolExpr(node->left, L1, falseL);
        emitLabel(L1);
        translateBoolExpr(node->right, trueL, falseL);
    }
    else if (node->type == NODE_OR) {
        // B1 || B2
        string L1 = newLabel();
        translateBoolExpr(node->left, trueL, L1);
        emitLabel(L1);
        translateBoolExpr(node->right, trueL, falseL);
    }
    else if (node->type == NODE_NOT) {
        // !B1
        translateBoolExpr(node->child, falseL, trueL);  // Swap labels
    }
    else if (node->type == NODE_TRUE) {
        emit("goto " + trueL);
    }
    else if (node->type == NODE_FALSE) {
        emit("goto " + falseL);
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Two representations: numerical (0/1) and flow-of-control (jumps)</li>
        <li>Short-circuit evaluation skips unnecessary computations</li>
        <li>AND: if first is false, skip second (result is false)</li>
        <li>OR: if first is true, skip second (result is true)</li>
        <li>NOT: simply swap true and false labels (no extra code)</li>
        <li>Each boolean expression has true and false destination labels</li>
        <li>Relational expressions generate conditional jumps</li>
        <li>Inherited attributes pass labels down the parse tree</li>
        <li>Short-circuit is essential for safety (null pointer checks)</li>
      </ul>
    </div>
  </div>
);

export default BooleanTranslation;
