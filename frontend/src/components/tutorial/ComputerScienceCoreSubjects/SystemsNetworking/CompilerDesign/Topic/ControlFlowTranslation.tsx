import React from "react";

const ControlFlowTranslation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Translating Control Flow Statements
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Control flow statements like if-else, while, for, and switch determine the order
      of execution in a program. Translating these statements to intermediate code involves
      generating conditional and unconditional jumps with appropriate labels. This translation
      uses inherited attributes to pass label information through the parse tree.
    </p>

    <h2 className="text-3xl font-bold mt-8">If Statement Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar Rule:
S → if ( B ) S1

Translation Scheme:
S → if ( B ) S1   { B.true = newlabel();
                    B.false = S.next;
                    S1.next = S.next;
                    emit(B.true ":"); }

Source: if (a > b) x = 1;

Generated Code:
    if a > b goto L1
    goto L2             ; L2 is S.next (code after if)
L1: x = 1
L2: (next statement)

Control Flow:
    ┌───────────────┐
    │    a > b ?    │
    └───────┬───────┘
       true │ false
            ↓     ↓
    ┌───────┐    ┌───────┐
    │ L1:   │    │ L2:   │
    │ x = 1 │    │(next) │
    └───┬───┘    └───────┘
        │             ↑
        └─────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">If-Else Statement Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar Rule:
S → if ( B ) S1 else S2

Translation Scheme:
S → if ( B ) S1 else S2  { B.true = newlabel();
                           B.false = newlabel();
                           S1.next = S.next;
                           S2.next = S.next;
                           emit(B.true ":");
                           // S1 code
                           emit("goto" S.next);
                           emit(B.false ":"); }

Source:
    if (a > b) {
        x = a;
    } else {
        x = b;
    }

Generated Code:
    if a > b goto L1
    goto L2
L1: x = a
    goto L3
L2: x = b
L3: (continue)

Control Flow:
    ┌───────────────┐
    │    a > b ?    │
    └───────┬───────┘
       true │ false
            ↓     ↓
    ┌───────┐    ┌───────┐
    │ L1:   │    │ L2:   │
    │ x = a │    │ x = b │
    └───┬───┘    └───┬───┘
        │            │
        └─────┬──────┘
              ↓
          ┌───────┐
          │  L3:  │
          │(next) │
          └───────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">While Loop Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar Rule:
S → while ( B ) S1

Translation Scheme:
S → while ( B ) S1  { S.begin = newlabel();
                      B.true = newlabel();
                      B.false = S.next;
                      S1.next = S.begin;
                      emit(S.begin ":");
                      // B code
                      emit(B.true ":");
                      // S1 code
                      emit("goto" S.begin); }

Source:
    while (i < n) {
        sum = sum + i;
        i = i + 1;
    }

Generated Code:
L1: if i < n goto L2
    goto L3
L2: t1 = sum + i
    sum = t1
    t2 = i + 1
    i = t2
    goto L1
L3: (continue)

Control Flow:
    ┌─────────────────────┐
    │        L1:          │←────────┐
    │     i < n ?         │         │
    └─────────┬───────────┘         │
         true │ false               │
              ↓     ↓               │
      ┌───────┐    ┌───────┐        │
      │ L2:   │    │ L3:   │        │
      │ body  │    │(exit) │        │
      └───┬───┘    └───────┘        │
          │                         │
          └─────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Do-While Loop Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar Rule:
S → do S1 while ( B )

Translation Scheme:
S → do S1 while ( B )  { S.begin = newlabel();
                         B.true = S.begin;
                         B.false = S.next;
                         S1.next = newlabel();
                         emit(S.begin ":");
                         // S1 code
                         emit(S1.next ":"); }

Source:
    do {
        x = x - 1;
    } while (x > 0);

Generated Code:
L1: t1 = x - 1
    x = t1
    if x > 0 goto L1
    goto L2
L2: (continue)

Optimized (fall-through):
L1: t1 = x - 1
    x = t1
    if x > 0 goto L1
L2: (continue)

Note: Body executes at least once before condition check.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">For Loop Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar Rule:
S → for ( S1 ; B ; S2 ) S3

Translation (equivalent to while):
    S1;
    while (B) {
        S3;
        S2;
    }

Source:
    for (i = 0; i < n; i = i + 1) {
        sum = sum + a[i];
    }

Generated Code:
    i = 0               ; Initialization (S1)
L1: if i < n goto L2    ; Condition (B)
    goto L3
L2: t1 = i * 4          ; Body (S3)
    t2 = a[t1]
    t3 = sum + t2
    sum = t3
    t4 = i + 1          ; Update (S2)
    i = t4
    goto L1
L3: (continue)

Control Flow:
    ┌───────────┐
    │   i = 0   │
    └─────┬─────┘
          ↓
    ┌───────────┐
    │    L1:    │←───────────────┐
    │  i < n ?  │                │
    └─────┬─────┘                │
     true │ false                │
          ↓     ↓                │
    ┌─────┐    ┌─────┐           │
    │ L2: │    │ L3: │           │
    │body │    │exit │           │
    │i++  │    └─────┘           │
    └──┬──┘                      │
       └─────────────────────────┘`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Switch Statement Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source:
    switch (x) {
        case 1: a = 10; break;
        case 2: a = 20; break;
        case 3: a = 30; break;
        default: a = 0;
    }

Method 1: Sequential Testing

Generated Code:
    t1 = x
    if t1 != 1 goto L1
    a = 10
    goto L_end
L1: if t1 != 2 goto L2
    a = 20
    goto L_end
L2: if t1 != 3 goto L3
    a = 30
    goto L_end
L3: a = 0              ; default
L_end: (continue)


Method 2: Jump Table (for dense cases)

Generated Code:
    t1 = x
    if t1 < 1 goto L_default
    if t1 > 3 goto L_default
    t2 = t1 - 1        ; Adjust to 0-based index
    t3 = t2 * 4        ; Address offset
    goto JumpTable[t3]

JumpTable:
    [0]: L1
    [1]: L2
    [2]: L3

L1: a = 10
    goto L_end
L2: a = 20
    goto L_end
L3: a = 30
    goto L_end
L_default: a = 0
L_end: (continue)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Break and Continue</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Handling break and continue requires tracking loop labels:

Stack of loop contexts:
    - Each loop pushes (beginLabel, endLabel) onto stack
    - break: goto topOfStack.endLabel
    - continue: goto topOfStack.beginLabel

Source:
    while (i < n) {
        if (a[i] == 0) continue;
        if (a[i] < 0) break;
        process(a[i]);
    }

Generated Code:
L1: if i < n goto L2    ; Loop begin
    goto L3             ; Loop end
L2: t1 = i * 4
    t2 = a[t1]
    if t2 != 0 goto L4
    goto L1             ; continue → go to L1
L4: if t2 >= 0 goto L5
    goto L3             ; break → go to L3
L5: param t2
    call process, 1
    t3 = i + 1
    i = t3
    goto L1
L3: (continue after loop)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Nested Control Structures</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source:
    if (a > 0) {
        while (b > 0) {
            if (c > 0) {
                x = 1;
            }
            b = b - 1;
        }
    } else {
        x = 0;
    }

Generated Code:
    if a > 0 goto L1
    goto L6
L1: ; Start of outer if-true
L2: if b > 0 goto L3      ; While condition
    goto L5               ; While exit
L3: if c > 0 goto L4      ; Inner if
    goto L4a
L4: x = 1
L4a: t1 = b - 1
    b = t1
    goto L2               ; Back to while
L5: ; End of while
    goto L7               ; Skip else
L6: x = 0                 ; Else branch
L7: (continue)

Label Hierarchy:
L1-L5: Within if-true branch
  L2-L5: While loop
    L3-L4a: Inner if
L6: Else branch
L7: After if-else`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C++ Implementation

struct LoopContext {
    string beginLabel;
    string endLabel;
};

stack<LoopContext> loopStack;

void translateStmt(ASTNode* node, string next) {
    if (node->type == NODE_IF) {
        string L1 = newLabel();
        string L2 = next;
        translateBoolExpr(node->condition, L1, L2);
        emitLabel(L1);
        translateStmt(node->thenBranch, next);
    }
    else if (node->type == NODE_IF_ELSE) {
        string L1 = newLabel();
        string L2 = newLabel();
        translateBoolExpr(node->condition, L1, L2);
        emitLabel(L1);
        translateStmt(node->thenBranch, next);
        emit("goto " + next);
        emitLabel(L2);
        translateStmt(node->elseBranch, next);
    }
    else if (node->type == NODE_WHILE) {
        string begin = newLabel();
        string bodyLabel = newLabel();
        string end = next;

        loopStack.push({begin, end});

        emitLabel(begin);
        translateBoolExpr(node->condition, bodyLabel, end);
        emitLabel(bodyLabel);
        translateStmt(node->body, begin);
        emit("goto " + begin);

        loopStack.pop();
    }
    else if (node->type == NODE_BREAK) {
        emit("goto " + loopStack.top().endLabel);
    }
    else if (node->type == NODE_CONTINUE) {
        emit("goto " + loopStack.top().beginLabel);
    }
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Control flow statements translate to conditional/unconditional jumps</li>
        <li>Labels mark targets for jump instructions</li>
        <li>Inherited attribute "next" indicates where to go after statement</li>
        <li>If: jump to body on true, to next on false</li>
        <li>If-else: separate labels for then and else branches</li>
        <li>While: loop back label at condition, exit label after body</li>
        <li>For: equivalent to init + while(cond) {"{ body; update; }"}</li>
        <li>Switch: sequential tests or jump table for efficiency</li>
        <li>Break/continue require tracking enclosing loop labels</li>
        <li>Nested structures maintain their own label hierarchies</li>
      </ul>
    </div>
  </div>
);

export default ControlFlowTranslation;
