import React from "react";

const InputBuffering: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Input Buffering
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 16 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      <strong>Input buffering</strong> is a technique used by lexical analyzers to efficiently
      read source code from input. Since reading one character at a time from disk is slow,
      buffering techniques are used to improve performance.
    </p>

    <h2 className="text-3xl font-bold mt-8">Why Input Buffering?</h2>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>Reading characters one at a time from disk is very slow</li>
      <li>Need to look ahead to determine token boundaries</li>
      <li>May need to retract (put back) characters</li>
      <li>Buffer allows efficient batch reading</li>
    </ul>

    <h2 className="text-3xl font-bold mt-8">Buffer Pairs Scheme</h2>
    <p className="leading-relaxed">
      The most common approach uses two buffers, each of size N (typically 4096 bytes).
      This allows seamless reading across buffer boundaries.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Buffer Pairs Structure:

┌────────────────────────┬────────────────────────┐
│      Buffer 1          │      Buffer 2          │
│  (N characters)        │  (N characters)        │
├────────────────────────┼────────────────────────┤
│ i n t   x = ...EOF... │ y + z ; ...           │
└────────────────────────┴────────────────────────┘
      ↑                        ↑
   lexemeBegin              forward

lexemeBegin: Points to start of current lexeme
forward:     Points to current character being examined
EOF:         Sentinel marking end of buffer`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two Pointers</h2>
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">Pointer</th>
            <th className="p-3 border">Purpose</th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-900">
          <tr>
            <td className="p-3 border font-semibold">lexemeBegin</td>
            <td className="p-3 border">Marks the beginning of the current lexeme being scanned</td>
          </tr>
          <tr>
            <td className="p-3 border font-semibold">forward</td>
            <td className="p-3 border">Scans ahead until a pattern match is found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 className="text-3xl font-bold mt-8">Algorithm</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Buffer Pairs Algorithm:

1. Initialize:
   - Load first N characters into Buffer 1
   - Place EOF at end of Buffer 1
   - Set lexemeBegin = forward = start of Buffer 1

2. To get next character:
   forward++;
   if (forward points to EOF) {
       if (EOF is at end of Buffer 1) {
           Load Buffer 2 from input
           Place EOF at end of Buffer 2
           forward = start of Buffer 2
       } else if (EOF is at end of Buffer 2) {
           Load Buffer 1 from input
           Place EOF at end of Buffer 1
           forward = start of Buffer 1
       } else {
           // True end of input
           Terminate lexical analysis
       }
   }
   return character at forward

3. When token is found:
   - Lexeme is between lexemeBegin and forward
   - Set lexemeBegin = forward + 1 for next token`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Sentinels</h2>
    <p className="leading-relaxed">
      A <strong>sentinel</strong> is a special character (EOF) placed at the end of each buffer.
      It eliminates the need to check for buffer end at each character read.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Without Sentinel (two checks per character):
    if (forward at end of buffer)
        reload buffer
    if (forward at end of input)
        return EOF

With Sentinel (one check usually):
    if (char == EOF)
        if (at true end of input)
            return EOF
        else
            reload other buffer
            continue

The sentinel reduces checks from 2 to nearly 1 per character`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Example: Scanning</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Scanning "count = 10"

Initial state:
Buffer: [c][o][u][n][t][ ][=][ ][1][0][EOF]...
         ↑
         lexemeBegin, forward

After scanning identifier "count":
Buffer: [c][o][u][n][t][ ][=][ ][1][0][EOF]...
         ↑              ↑
         lexemeBegin    forward

Token found: IDENTIFIER "count"
Move lexemeBegin:
Buffer: [c][o][u][n][t][ ][=][ ][1][0][EOF]...
                        ↑
                        lexemeBegin, forward

Skip whitespace, scan "=":
Buffer: [c][o][u][n][t][ ][=][ ][1][0][EOF]...
                           ↑  ↑
                   lexemeBegin forward

Token found: ASSIGN "="`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Lookahead and Retraction</h2>
    <p className="leading-relaxed">
      Sometimes the scanner needs to look ahead multiple characters to determine the correct
      token, then retract if needed.
    </p>

    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 text-gray-900">
      <pre className="text-sm overflow-x-auto text-gray-900">
{`Example: Distinguishing < from <= and <<

Input: "a <= b"

Step 1: Read '<'
        Could be: <, <=, or <<

Step 2: Read '=' (lookahead)
        Now we know it's <=

If input was "a < b":
Step 1: Read '<'
Step 2: Read ' ' (space)
        Not <= or <<, must be <
        Retract forward pointer
        Return token <`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Takeaways</h2>
    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>Input buffering improves lexical analyzer performance</li>
        <li>Buffer pairs allow seamless reading across boundaries</li>
        <li>Two pointers: lexemeBegin and forward</li>
        <li>Sentinels reduce the number of end-of-buffer checks</li>
        <li>Lookahead and retraction handle multi-character tokens</li>
      </ul>
    </div>
  </div>
);

export default InputBuffering;
