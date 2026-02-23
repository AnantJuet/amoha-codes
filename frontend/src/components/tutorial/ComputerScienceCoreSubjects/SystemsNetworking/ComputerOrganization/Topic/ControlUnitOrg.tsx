import React from 'react';

const ControlUnitOrg: React.FC = () => (
  <div className="p-8 space-y-6 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Control Unit Organization
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 13 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      The Control Unit (CU) is a critical component of the CPU that directs and coordinates
      the operations of all other units. It acts as the brain's manager, interpreting
      instructions from memory and generating the control signals that orchestrate
      the execution of each instruction through the processor's datapath.
    </p>

    <h2 className="text-3xl font-bold mt-8">What is a Control Unit?</h2>
    <p className="leading-relaxed">
      The Control Unit is responsible for fetching instructions from memory, decoding them
      to determine what operations need to be performed, and then generating the appropriate
      sequence of control signals to execute those operations. It does not perform any data
      processing itself but rather tells other components what to do and when to do it.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Unit Position in CPU:

                    +----------------------------------+
                    |              CPU                 |
                    |                                  |
    +------------+  |  +---------------------------+   |
    |            |  |  |      Control Unit         |   |
    |   Memory   |<--->|  +---------------------+  |   |
    |            |  |  |  | Instruction Decoder |  |   |
    +------------+  |  |  +---------------------+  |   |
                    |  |           |               |   |
                    |  |  +---------------------+  |   |
                    |  |  | Control Signal Gen  |  |   |
                    |  |  +---------------------+  |   |
                    |  +---------------------------+   |
                    |             |                    |
                    |             v Control Signals    |
                    |  +---------------------------+   |
                    |  |        Datapath           |   |
                    |  |  +-----+  +-----+  +---+  |   |
                    |  |  | ALU |  | Reg |  |MUX|  |   |
                    |  |  +-----+  +-----+  +---+  |   |
                    |  +---------------------------+   |
                    +----------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Functions of Control Unit</h2>
    <ol className="list-decimal list-inside leading-relaxed space-y-2 ml-4">
      <li><strong>Instruction Fetch:</strong> Retrieves the next instruction from memory using the Program Counter (PC)</li>
      <li><strong>Instruction Decode:</strong> Interprets the opcode and operands of the fetched instruction</li>
      <li><strong>Operand Fetch:</strong> Generates signals to fetch operands from registers or memory</li>
      <li><strong>Execute:</strong> Produces control signals to perform the required operation</li>
      <li><strong>Write Back:</strong> Directs results to be stored in appropriate destination</li>
      <li><strong>Sequence Control:</strong> Manages the order of operations and updates the PC</li>
    </ol>

    <h2 className="text-3xl font-bold mt-8">Control Unit Components</h2>

    <h3 className="text-2xl font-semibold mt-6">1. Instruction Register (IR)</h3>
    <p className="leading-relaxed">
      Holds the current instruction being executed. The instruction is fetched from memory
      and stored here for decoding.
    </p>

    <h3 className="text-2xl font-semibold mt-6">2. Instruction Decoder</h3>
    <p className="leading-relaxed">
      Decodes the opcode portion of the instruction to determine which operation to perform.
      It identifies the type of instruction (arithmetic, load/store, branch, etc.).
    </p>

    <h3 className="text-2xl font-semibold mt-6">3. Timing and Control Logic</h3>
    <p className="leading-relaxed">
      Generates properly timed control signals synchronized with the system clock.
      Ensures operations occur in the correct sequence.
    </p>

    <h3 className="text-2xl font-semibold mt-6">4. Control Signal Generator</h3>
    <p className="leading-relaxed">
      Produces the actual control signals that activate various components of the CPU
      based on the decoded instruction and current timing state.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Control Unit Block Diagram:

           +------------------+
           |  Clock Signal    |
           +--------+---------+
                    |
                    v
    +---------------+---------------+
    |        Timing Generator       |
    |  T0  T1  T2  T3  T4  T5  ... |
    +---------------+---------------+
                    |
                    v
    +-------------------------------+
    |      Instruction Register     |
    |  +--------+---------+-------+ |
    |  | Opcode | Mode    | Addr  | |
    |  +--------+---------+-------+ |
    +---------------+---------------+
                    |
                    v
    +---------------+---------------+
    |     Instruction Decoder       |
    |  (Identifies instruction type)|
    +---------------+---------------+
                    |
                    v
    +---------------+---------------+
    |   Control Signal Generator    |
    +---------------+---------------+
                    |
        +-----------+-----------+
        |           |           |
        v           v           v
    +-------+   +-------+   +-------+
    | ALU   |   |Memory |   | Reg   |
    |Control|   |Control|   |Control|
    +-------+   +-------+   +-------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Types of Control Units</h2>
    <p className="leading-relaxed">
      Control units can be implemented using two main approaches, each with its own
      advantages and trade-offs:
    </p>

    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Aspect</th>
            <th className="p-3 border">Hardwired Control</th>
            <th className="p-3 border">Microprogrammed Control</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border">Implementation</td>
            <td className="p-3 border">Combinational logic circuits</td>
            <td className="p-3 border">Control memory with microinstructions</td>
          </tr>
          <tr>
            <td className="p-3 border">Speed</td>
            <td className="p-3 border">Faster (direct logic)</td>
            <td className="p-3 border">Slower (memory access)</td>
          </tr>
          <tr>
            <td className="p-3 border">Flexibility</td>
            <td className="p-3 border">Difficult to modify</td>
            <td className="p-3 border">Easy to modify/update</td>
          </tr>
          <tr>
            <td className="p-3 border">Complexity</td>
            <td className="p-3 border">Complex for large instruction sets</td>
            <td className="p-3 border">Handles complex instructions well</td>
          </tr>
          <tr>
            <td className="p-3 border">Cost</td>
            <td className="p-3 border">Higher for complex designs</td>
            <td className="p-3 border">More economical for complex CPUs</td>
          </tr>
          <tr>
            <td className="p-3 border">Usage</td>
            <td className="p-3 border">RISC processors</td>
            <td className="p-3 border">CISC processors</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Signals</h2>
    <p className="leading-relaxed">
      The control unit generates various signals to control different parts of the CPU.
      These signals determine what operations are performed at each clock cycle.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Common Control Signals:

+------------------+----------------------------------------+
| Signal           | Function                               |
+------------------+----------------------------------------+
| RegWrite         | Enable writing to register file        |
| MemRead          | Enable reading from memory             |
| MemWrite         | Enable writing to memory               |
| ALUSrc           | Select ALU input source (reg/imm)      |
| ALUOp            | Select ALU operation                   |
| MemToReg         | Select data source for register write  |
| Branch           | Enable branch address calculation      |
| Jump             | Enable unconditional jump              |
| PCWrite          | Enable PC update                       |
| IRWrite          | Enable instruction register update     |
+------------------+----------------------------------------+

Example: ADD R1, R2, R3
Control signals for ADD instruction:
- RegWrite = 1    (write result to R1)
- MemRead = 0     (no memory read)
- MemWrite = 0    (no memory write)
- ALUSrc = 0      (ALU input from register)
- ALUOp = ADD     (addition operation)
- MemToReg = 0    (result from ALU, not memory)`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Instruction Execution Cycle</h2>
    <p className="leading-relaxed">
      The control unit manages the instruction cycle through a series of phases,
      each requiring specific control signals.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Instruction Cycle Phases and Control Signals:

T0: Fetch
    +------------------------------------------+
    |  MAR <- PC                               |
    |  Control: PCOut, MARIn                   |
    +------------------------------------------+

T1: Memory Read
    +------------------------------------------+
    |  MBR <- Memory[MAR]                      |
    |  PC <- PC + 1                            |
    |  Control: MemRead, MBRIn, PCIncrement    |
    +------------------------------------------+

T2: Instruction Decode
    +------------------------------------------+
    |  IR <- MBR                               |
    |  Decode opcode                           |
    |  Control: MBROut, IRIn                   |
    +------------------------------------------+

T3-Tn: Execute (varies by instruction)
    +------------------------------------------+
    |  Example for ADD R1, R2, R3:             |
    |  T3: A <- R2                             |
    |  T4: B <- R3                             |
    |  T5: ALU_Result <- A + B                 |
    |  T6: R1 <- ALU_Result                    |
    +------------------------------------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Unit State Diagram</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Simplified State Diagram:

    +-------+      +--------+      +--------+
    | FETCH |----->| DECODE |----->|EXECUTE |
    +-------+      +--------+      +--------+
        ^                              |
        |                              |
        +------------------------------+
                (next instruction)

Detailed State Machine:

         Start
           |
           v
    +-------------+
    |    IDLE     |
    +------+------+
           | Reset/Start
           v
    +-------------+
    | FETCH_INST  |<-----------------+
    +------+------+                  |
           |                         |
           v                         |
    +-------------+                  |
    | DECODE_INST |                  |
    +------+------+                  |
           |                         |
           +--------+--------+       |
           |        |        |       |
           v        v        v       |
    +------+  +-----+  +-----+       |
    | ALU  |  |LOAD |  |STORE|       |
    | OP   |  |     |  |     |       |
    +------+  +-----+  +-----+       |
           |        |        |       |
           +--------+--------+       |
                    |                |
                    v                |
             +------+------+         |
             | WRITE_BACK  |---------+
             +-------------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Control Unit Design Considerations</h2>
    <ul className="list-disc list-inside leading-relaxed space-y-2">
      <li><strong>Instruction Set Complexity:</strong> More instructions require more control logic</li>
      <li><strong>Clock Speed:</strong> Control signals must propagate within clock period</li>
      <li><strong>Pipeline Support:</strong> Must handle multiple instructions simultaneously</li>
      <li><strong>Exception Handling:</strong> Must detect and respond to exceptions</li>
      <li><strong>Power Consumption:</strong> Efficient signal generation reduces power usage</li>
      <li><strong>Testability:</strong> Design should allow for verification and debugging</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Modern Control Unit Features</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Advanced Control Unit Features:

1. Branch Prediction
   - Predicts branch outcomes
   - Reduces pipeline stalls
   - BTB (Branch Target Buffer)

2. Out-of-Order Execution Control
   - Tracks instruction dependencies
   - Issues instructions when ready
   - Maintains program order for commits

3. Speculative Execution
   - Executes predicted path
   - Rolls back if misprediction

4. Multi-threading Control
   - Manages multiple thread contexts
   - Switches threads on stalls

5. Power Management
   - Clock gating control
   - Voltage/frequency scaling
   - Idle state management`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
      <ul className="list-disc list-inside space-y-1">
        <li>Control Unit manages and coordinates all CPU operations</li>
        <li>It generates control signals based on instruction opcode and timing</li>
        <li>Two main implementations: hardwired and microprogrammed</li>
        <li>Hardwired is faster but less flexible</li>
        <li>Microprogrammed is more flexible but slower</li>
        <li>Control signals activate datapath components at correct times</li>
        <li>Instruction cycle includes fetch, decode, execute, and write-back phases</li>
        <li>Modern CPUs use advanced control features like branch prediction</li>
      </ul>
    </div>
  </div>
);

export default ControlUnitOrg;
