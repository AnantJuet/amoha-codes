import React from "react";

const Backpatching: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Backpatching Technique
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Backpatching is a technique for generating code in a single pass where target addresses
      of jump instructions are not known when the jump is generated. Instead of using symbolic
      labels, we maintain lists of incomplete instructions that are later "patched" with the
      correct addresses when they become known.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`When translating: if (a > b) goto ???

Problem: We don't know the target address yet!

Two-Pass Solution:
Pass 1: Generate "if a > b goto L1" (symbolic label)
Pass 2: Resolve L1 to actual address (e.g., instruction 105)

One-Pass Solution (Backpatching):
1. Generate "if a > b goto ___" (leave blank)
2. Remember this instruction's location
3. When target address is known, fill in the blank

Example:
    100: if a > b goto ___    ; Generate with blank target
    101: goto ___             ; Another blank
    102: x = 1                ; Target for instruction 100!

    Now backpatch: instruction 100's target = 102

    100: if a > b goto 102    ; Filled in!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Functions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Function</th>
            <th className="p-3 border">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold font-mono text-gray-900">makelist(i)</td>
            <td className="p-3 border">Create a new list containing only instruction index i</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold font-mono text-gray-900">merge(p1, p2)</td>
            <td className="p-3 border">Concatenate lists p1 and p2, return merged list</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold font-mono text-gray-900">backpatch(p, i)</td>
            <td className="p-3 border">Fill in i as target for all instructions in list p</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold font-mono text-gray-900">nextinstr</td>
            <td className="p-3 border">Index of the next instruction to be generated</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold font-mono text-gray-900">emit(instr)</td>
            <td className="p-3 border">Output instruction and increment nextinstr</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Boolean Expression Backpatching</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Attributes for Boolean Expressions:
- B.truelist:  list of instructions with unfilled true targets
- B.falselist: list of instructions with unfilled false targets

Translation Rules:

B → B1 || M B2
    { backpatch(B1.falselist, M.instr);
      B.truelist = merge(B1.truelist, B2.truelist);
      B.falselist = B2.falselist; }

B → B1 && M B2
    { backpatch(B1.truelist, M.instr);
      B.falselist = merge(B1.falselist, B2.falselist);
      B.truelist = B2.truelist; }

B → ! B1
    { B.truelist = B1.falselist;
      B.falselist = B1.truelist; }

B → ( B1 )
    { B.truelist = B1.truelist;
      B.falselist = B1.falselist; }

B → E1 relop E2
    { B.truelist = makelist(nextinstr);
      B.falselist = makelist(nextinstr + 1);
      emit("if" E1.place relop E2.place "goto ___");
      emit("goto ___"); }

B → true
    { B.truelist = makelist(nextinstr);
      emit("goto ___"); }

B → false
    { B.falselist = makelist(nextinstr);
      emit("goto ___"); }

M → ε
    { M.instr = nextinstr; }   ; Marker to record position`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">AND Expression Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: a < b && c > d

Parse: B → B1 && M B2
       B1 = (a < b)
       B2 = (c > d)

Step 1: Translate B1 = (a < b)
    100: if a < b goto ___      ; truelist = {100}
    101: goto ___               ; falselist = {101}

Step 2: M (marker) records position
    M.instr = 102

Step 3: Translate B2 = (c > d)
    102: if c > d goto ___      ; truelist = {102}
    103: goto ___               ; falselist = {103}

Step 4: Apply && rule
    backpatch(B1.truelist, M.instr)
    → backpatch({100}, 102)
    → Instruction 100 becomes: "if a < b goto 102"

    B.truelist = B2.truelist = {102}
    B.falselist = merge(B1.falselist, B2.falselist)
                = merge({101}, {103}) = {101, 103}

After backpatching:
    100: if a < b goto 102      ; Patched!
    101: goto ___               ; Still incomplete
    102: if c > d goto ___      ; Still incomplete
    103: goto ___               ; Still incomplete

Remaining lists:
    truelist = {102}   (jumps to "true" destination)
    falselist = {101, 103}  (jumps to "false" destination)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">OR Expression Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Expression: a < b || c > d

Parse: B → B1 || M B2

Step 1: Translate B1 = (a < b)
    100: if a < b goto ___      ; truelist = {100}
    101: goto ___               ; falselist = {101}

Step 2: M.instr = 102

Step 3: Translate B2 = (c > d)
    102: if c > d goto ___      ; truelist = {102}
    103: goto ___               ; falselist = {103}

Step 4: Apply || rule
    backpatch(B1.falselist, M.instr)
    → backpatch({101}, 102)
    → Instruction 101 becomes: "goto 102"

    B.truelist = merge(B1.truelist, B2.truelist)
               = merge({100}, {102}) = {100, 102}
    B.falselist = B2.falselist = {103}

After backpatching:
    100: if a < b goto ___      ; Still incomplete
    101: goto 102               ; Patched!
    102: if c > d goto ___      ; Still incomplete
    103: goto ___               ; Still incomplete

Remaining lists:
    truelist = {100, 102}  (both jump to "true" destination)
    falselist = {103}      (jumps to "false" destination)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Flow Backpatching</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Statement Attributes:
- S.nextlist: list of jumps to instruction following S

Translation Rules:

S → if ( B ) M S1
    { backpatch(B.truelist, M.instr);
      S.nextlist = merge(B.falselist, S1.nextlist); }

S → if ( B ) M1 S1 N else M2 S2
    { backpatch(B.truelist, M1.instr);
      backpatch(B.falselist, M2.instr);
      S.nextlist = merge(S1.nextlist, N.nextlist, S2.nextlist); }

S → while M1 ( B ) M2 S1
    { backpatch(S1.nextlist, M1.instr);
      backpatch(B.truelist, M2.instr);
      S.nextlist = B.falselist;
      emit("goto" M1.instr); }

S → { L }
    { S.nextlist = L.nextlist; }

S → A ;
    { S.nextlist = makelist(); }   ; Empty list

L → L1 M S
    { backpatch(L1.nextlist, M.instr);
      L.nextlist = S.nextlist; }

L → S
    { L.nextlist = S.nextlist; }

N → ε
    { N.nextlist = makelist(nextinstr);
      emit("goto ___"); }

M → ε
    { M.instr = nextinstr; }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Complete If-Else Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source: if (a > b) x = 1; else x = 0;

Parse: S → if ( B ) M1 S1 N else M2 S2

Step 1: Translate B = (a > b)
    100: if a > b goto ___      ; truelist = {100}
    101: goto ___               ; falselist = {101}

Step 2: M1.instr = 102

Step 3: Translate S1 = (x = 1)
    102: x = 1
    S1.nextlist = {} (empty)

Step 4: N (generates goto to skip else)
    103: goto ___               ; N.nextlist = {103}

Step 5: M2.instr = 104

Step 6: Translate S2 = (x = 0)
    104: x = 0
    S2.nextlist = {} (empty)

Step 7: Apply if-else rule
    backpatch(B.truelist, M1.instr)
    → backpatch({100}, 102)
    → 100: if a > b goto 102

    backpatch(B.falselist, M2.instr)
    → backpatch({101}, 104)
    → 101: goto 104

    S.nextlist = merge({}, {103}, {})
               = {103}

Final Code:
    100: if a > b goto 102
    101: goto 104
    102: x = 1
    103: goto ___      ; Still needs patching (next statement)
    104: x = 0

S.nextlist = {103} - will be patched when enclosing context knows next instruction`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">While Loop Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source: while (i < n) i = i + 1;

Parse: S → while M1 ( B ) M2 S1

Step 1: M1.instr = 100

Step 2: Translate B = (i < n)
    100: if i < n goto ___      ; truelist = {100}
    101: goto ___               ; falselist = {101}

Step 3: M2.instr = 102

Step 4: Translate S1 = (i = i + 1)
    102: t1 = i + 1
    103: i = t1
    S1.nextlist = {} (empty)

Step 5: Apply while rule
    backpatch(S1.nextlist, M1.instr)
    → backpatch({}, 100) → nothing to patch

    backpatch(B.truelist, M2.instr)
    → backpatch({100}, 102)
    → 100: if i < n goto 102

    S.nextlist = B.falselist = {101}

    emit("goto 100")
    → 104: goto 100

Final Code:
    100: if i < n goto 102
    101: goto ___      ; Exit loop (S.nextlist)
    102: t1 = i + 1
    103: i = t1
    104: goto 100      ; Loop back

S.nextlist = {101} - patched when next statement known`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C++ Implementation

struct Instruction {
    string op;
    string arg1;
    string arg2;
    int target;   // -1 if not yet patched
};

vector<Instruction> code;
int nextinstr = 0;

// Create list with single element
list<int> makelist(int i) {
    return list<int>{i};
}

// Merge two lists
list<int> merge(list<int> p1, list<int> p2) {
    p1.splice(p1.end(), p2);
    return p1;
}

// Patch all instructions in list with target address
void backpatch(list<int> p, int target) {
    for (int i : p) {
        code[i].target = target;
    }
}

// Emit instruction, return its index
int emit(string op, string arg1 = "", string arg2 = "", int target = -1) {
    code.push_back({op, arg1, arg2, target});
    return nextinstr++;
}

// Translation function for boolean expressions
struct BoolResult {
    list<int> truelist;
    list<int> falselist;
};

BoolResult translateBool(ASTNode* node) {
    BoolResult result;

    if (node->type == NODE_RELOP) {
        result.truelist = makelist(nextinstr);
        result.falselist = makelist(nextinstr + 1);
        emit("if_" + node->op, node->left->place, node->right->place);
        emit("goto");
    }
    else if (node->type == NODE_AND) {
        BoolResult B1 = translateBool(node->left);
        int M = nextinstr;
        BoolResult B2 = translateBool(node->right);
        backpatch(B1.truelist, M);
        result.truelist = B2.truelist;
        result.falselist = merge(B1.falselist, B2.falselist);
    }
    // ... similar for OR, NOT
    return result;
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Backpatching enables single-pass code generation</li>
        <li>Jump targets left blank initially, filled later</li>
        <li>makelist(i): creates singleton list with instruction i</li>
        <li>merge(p1, p2): concatenates two lists</li>
        <li>backpatch(p, i): fills target i in all instructions in list p</li>
        <li>Boolean expressions have truelist and falselist</li>
        <li>Statements have nextlist (jumps to next statement)</li>
        <li>Marker M records current instruction index</li>
        <li>No symbolic labels needed in generated code</li>
        <li>More efficient than two-pass for simple compilers</li>
      </ul>
    </div>
  </div>
);

export default Backpatching;
