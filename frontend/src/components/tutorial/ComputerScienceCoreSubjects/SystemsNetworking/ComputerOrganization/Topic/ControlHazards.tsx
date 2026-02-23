import React from 'react';

const ControlHazards: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Control Hazards
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Control hazards, also called branch hazards, occur when the pipeline makes wrong
      decisions about which instructions to fetch. They arise because branch instructions
      change the program counter conditionally, but the outcome is not known until later
      in the pipeline. Since modern programs contain many branches (15-25% of instructions),
      control hazards significantly impact pipeline performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">The Branch Problem</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Hazard Scenario:

Address    Instruction
-------    -----------
100        BEQ R1, R2, Label    ; Branch if R1 == R2
104        ADD R3, R4, R5       ; Sequential next
108        SUB R6, R7, R8       ; Following instruction
...
200        OR R9, R10, R11      ; Branch target (Label)

Problem: When do we know if branch is taken?

Pipeline Timeline:

Cycle:    1   2   3   4   5
BEQ:     [F] [D] [E] [M] [W]
              ^       ^
              |       Branch resolved here!
              |       (comparison in EX, target in MEM)
              |
ADD:         [F] [D] [E] [M] [W]  <- Already fetched!
SUB:             [F] [D] [E] [M]  <- Already fetched!

If branch IS taken to Label (200):
- ADD and SUB should NOT execute!
- We fetched the WRONG instructions!

Branch Penalty = Number of instructions fetched before resolution`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Branch Resolution Timing</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`When is Branch Outcome Known?

Standard 5-Stage Pipeline:

Stage    | Work Done
---------|------------------------------------------
IF       | Fetch BEQ instruction
ID       | Decode, read R1 and R2
EX       | Compare R1 and R2, determine taken/not-taken
         | Calculate target address (PC + offset)
MEM      | Branch decision affects next PC
WB       | (nothing for branch)

Branch resolved at: END of EX stage (cycle 3)
Wrong instructions fetched: 2 (cycles 2 and 3)
Branch penalty: 2 cycles (if branch taken and mispredicted)

Optimized Branch Resolution (Early Branch):

Move comparison to ID stage:
- Add comparator in ID
- Calculate target in ID

Stage    | Work Done
---------|------------------------------------------
IF       | Fetch BEQ instruction
ID       | Decode, read R1/R2, COMPARE, calc target
         | Branch resolved here!
EX/MEM/WB| Continue other work

Branch penalty reduced to: 1 cycle`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Hazard Solutions</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Stall (Freeze) Until Branch Resolves</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Stall on Every Branch:

Cycle:    1   2   3   4   5   6   7   8
BEQ:     [F] [D] [E] [M] [W]
                  ^--- Branch resolved
Next:        [--][--][--][F] [D] [E] [M] [W]
                      ^
              Wait until branch known

Performance Impact:
- Branch frequency: ~20% of instructions
- Penalty: 3 cycles per branch
- Extra cycles = 0.20 * 3 = 0.6 cycles/instruction
- CPI = 1 + 0.6 = 1.6 (60% slowdown!)

Simple but expensive - rarely used in modern CPUs`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">2. Predict Not Taken</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Predict Branch NOT Taken (Always fetch sequential):

Cycle:    1   2   3   4   5   6   7   8
BEQ:     [F] [D] [E] [M] [W]
              |       ^--- Resolve: NOT taken (correct!)
ADD:         [F] [D] [E] [M] [W]   <- Sequential (OK!)
SUB:             [F] [D] [E] [M] [W]
                          ^
                   Prediction correct - no penalty!

If Branch IS Taken (Wrong Prediction):

Cycle:    1   2   3   4   5   6   7   8   9
BEQ:     [F] [D] [E] [M] [W]
                  ^--- Resolve: TAKEN (wrong!)
ADD:         [F] [D] [XX]  <- FLUSH (squash)
SUB:             [F] [XX]  <- FLUSH (squash)
Target:              [F] [D] [E] [M] [W]
                      ^
               Fetch target, 2 cycles lost

[XX] = Flushed/squashed instruction

Effectiveness:
- Many branches are NOT taken (esp. loop exits)
- ~50% correct on average
- Penalty only when taken (50% * 2 = 1 cycle avg)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">3. Predict Taken</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Predict Branch TAKEN:

Problem: Target address not known until decode!
Can't fetch target in cycle 2 if address computed in ID

Works for unconditional jumps:
- Target known from instruction encoding
- Fetch target immediately

For conditional branches:
- Must wait for target address calculation
- Not as effective as predicting not-taken

Better Approach: Delayed Branch (MIPS style)
- Always execute instruction after branch (delay slot)
- Compiler fills delay slot with useful work`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">4. Delayed Branch</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Delayed Branch (Branch Delay Slot):

Architecture guarantees: instruction after branch ALWAYS executes

Code Before:
    BEQ R1, R2, Label
    ADD R3, R4, R5      ; Might or might not execute
    ...
Label:
    OR R9, R10, R11

Code With Delay Slot:
    BEQ R1, R2, Label
    SUB R6, R7, R8      ; ALWAYS executes (delay slot)
    ADD R3, R4, R5      ; Sequential path
    ...
Label:
    OR R9, R10, R11

Pipeline Execution:
Cycle:    1   2   3   4   5   6   7
BEQ:     [F] [D] [E] [M] [W]
                  ^--- Branch resolved
SUB:         [F] [D] [E] [M] [W]  <- Delay slot (ALWAYS runs)
Target:          [F] [D] [E] [M] [W]  <- If taken

No penalty if useful instruction fills delay slot!

Filling Delay Slots:
1. From before: Move instruction from before branch
2. From target: Copy target instruction (if safe)
3. From fall-through: Use sequential instruction (if safe)
4. NOP: If nothing safe, insert NOP (wastes slot)`}
      </pre>
    </div>

    <h3 className="text-2xl font-semibold mt-6">5. Branch Prediction</h3>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Dynamic Branch Prediction:

Use history to predict future branch behavior

1-Bit Predictor:
- Remember last outcome
- Predict same as last time

State: TAKEN or NOT-TAKEN
If branch taken: State = TAKEN
If not taken: State = NOT-TAKEN

Problem: Loops - wrong twice per loop iteration
for (i=0; i<10; i++) {  // Branch taken 9 times
    ...                  // Not taken once (exit)
}
Mispredicts at start AND end of loop


2-Bit Predictor (Saturating Counter):

States: Strongly Taken (11)
        Weakly Taken (10)
        Weakly Not-Taken (01)
        Strongly Not-Taken (00)

        +---+  taken  +---+  taken  +---+
    --->|00 |-------->|01 |-------->|10 |----+
        +---+         +---+         +---+    |
         ^             |             ^       v  taken
         |    not      |    not      |      +---+
         +-------------|-------------+------|11 |
                       v                    +---+
                   (predict)            (predict taken)
                  (not taken)

Must mispredict twice to change prediction
Better for loops: only wrong at end`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Branch Target Buffer (BTB)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Branch Target Buffer:

Cache that stores branch targets for fast access

+----------------------------------------+
|           Branch Target Buffer         |
+----------------------------------------+
| PC (tag) | Target Address | Prediction |
+----------+----------------+------------+
|   100    |      200       |   Taken    |
|   150    |      500       |  Not Taken |
|   220    |      300       |   Taken    |
+----------+----------------+------------+

Operation:
1. During IF: Look up current PC in BTB
2. If hit: Use stored target and prediction
3. If miss: Predict not-taken (sequential)
4. After resolution: Update BTB entry

Benefits:
- Predict branch AND get target in same cycle
- Can fetch target immediately if predicted taken
- Reduces branch penalty to near zero when correct

Modern CPUs use sophisticated predictors:
- Correlating predictors (use history of other branches)
- Tournament predictors (choose best predictor)
- Neural branch predictors
- Achieve 95-99% accuracy!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Pipeline Flush on Misprediction</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Handling Misprediction:

When branch outcome differs from prediction:

1. Identify mispredicted instructions in pipeline
2. Flush (squash) all instructions after branch
3. Fetch correct path
4. Update predictor

Flush Mechanism:

Cycle:    1   2   3   4   5   6   7   8
BEQ:     [F] [D] [E] [M] [W]
                  ^--- Oops! Mispredicted!
I1:          [F] [D] [XX]   <- Set control to NOP
I2:              [F] [XX]   <- Set control to NOP
Correct:             [F] [D] [E] [M] [W]

Flush Control Signals:
- IF.Flush: Clear IF/ID register
- ID.Flush: Clear ID/EX register
- Set all control signals to 0 (NOP)

Misprediction Penalty = Pipeline depth from fetch to resolve

5-stage pipeline: 2 cycles
10-stage pipeline: ~5 cycles
20-stage pipeline: ~10+ cycles

Deeper pipelines need better predictors!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Hazard Performance Impact</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Performance Calculation:

CPI_branch = 1 + (Branch_freq * Mispredict_rate * Penalty)

Example 1: Simple Pipeline, No Prediction
- Branch frequency: 20%
- Penalty: 2 cycles (always stall)
- CPI = 1 + (0.20 * 1.0 * 2) = 1.40

Example 2: Simple Pipeline, Predict Not-Taken
- Branch frequency: 20%
- Taken rate: 60%
- Penalty: 2 cycles when wrong
- CPI = 1 + (0.20 * 0.60 * 2) = 1.24

Example 3: 2-Bit Predictor
- Branch frequency: 20%
- Mispredict rate: 10%
- Penalty: 2 cycles
- CPI = 1 + (0.20 * 0.10 * 2) = 1.04

Example 4: Deep Pipeline (20 stages), Good Predictor
- Branch frequency: 20%
- Mispredict rate: 5%
- Penalty: 10 cycles
- CPI = 1 + (0.20 * 0.05 * 10) = 1.10

Even 5% misprediction is significant with deep pipelines!`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Summary of Control Hazard Solutions</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Solution</th>
            <th className="p-3 border">Approach</th>
            <th className="p-3 border">Penalty</th>
            <th className="p-3 border">Complexity</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Stall</td>
            <td className="p-3 border">Wait for resolution</td>
            <td className="p-3 border">Always (2-3 cycles)</td>
            <td className="p-3 border">Simple</td>
          </tr>
          <tr>
            <td className="p-3 border">Predict Not-Taken</td>
            <td className="p-3 border">Always fetch sequential</td>
            <td className="p-3 border">When taken (~50%)</td>
            <td className="p-3 border">Simple</td>
          </tr>
          <tr>
            <td className="p-3 border">Delayed Branch</td>
            <td className="p-3 border">Execute delay slot</td>
            <td className="p-3 border">If slot unfilled</td>
            <td className="p-3 border">Compiler support</td>
          </tr>
          <tr>
            <td className="p-3 border">Static Prediction</td>
            <td className="p-3 border">Based on branch type</td>
            <td className="p-3 border">~30% mispredicts</td>
            <td className="p-3 border">Low</td>
          </tr>
          <tr>
            <td className="p-3 border">Dynamic Prediction</td>
            <td className="p-3 border">Use branch history</td>
            <td className="p-3 border">~2-10% mispredicts</td>
            <td className="p-3 border">Complex</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Control hazards occur because branch outcome is not immediately known</li>
        <li>Branch penalty is the number of wasted cycles on misprediction</li>
        <li>Simple solution: stall until branch resolves (expensive)</li>
        <li>Predict not-taken: fetch sequential, flush if wrong</li>
        <li>Delayed branch: always execute delay slot instruction</li>
        <li>Dynamic prediction uses branch history for better accuracy</li>
        <li>2-bit saturating counters improve on 1-bit predictors</li>
        <li>Branch Target Buffer provides fast target address lookup</li>
        <li>Modern predictors achieve 95-99% accuracy</li>
        <li>Deeper pipelines increase misprediction penalty</li>
      </ul>
    </div>
  </div>
);

export default ControlHazards;
