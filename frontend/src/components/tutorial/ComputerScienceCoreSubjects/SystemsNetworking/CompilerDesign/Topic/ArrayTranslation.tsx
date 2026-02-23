import React from "react";

const ArrayTranslation: React.FC = () => (
  <div className="p-8 space-y-8 rounded-xl shadow-lg mt-20">
    <h1 className="text-4xl font-extrabold border-b-2 pb-2">
      Translating Array References
    </h1>
    <p className="text-sm text-gray-500">Last Updated: 17 Jan, 2026</p>

    <p className="text-lg leading-relaxed">
      Array references in source code must be translated to address calculations that account
      for array base addresses, element sizes, and index expressions. This involves generating
      intermediate code that computes the memory location of array elements, handling both
      one-dimensional and multi-dimensional arrays.
    </p>

    <h2 className="text-3xl font-bold mt-8">One-Dimensional Array Access</h2>
    <div className="bg-gray-100 text-gray-900 p-6 rounded-lg mt-4 font-mono text-sm text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Array Element Address Calculation:

For array A with elements of size w:
    Address(A[i]) = base(A) + i * w

Where:
    base(A) = starting address of array A
    i       = index expression
    w       = size of each element (bytes)

Example: int A[10];  // Each int is 4 bytes

    A[5] → base(A) + 5 * 4
         → base(A) + 20


If array indices start at low (not 0):
    Address(A[i]) = base(A) + (i - low) * w

Example: int A[5..10];  // Pascal-style

    A[7] → base(A) + (7 - 5) * 4
         → base(A) + 8`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Translation Rules for 1D Arrays</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Grammar:
L → id [ E ]        ; Array reference
L → id              ; Simple variable

Semantic Actions:

L → id [ E ]
    { L.place = newTemp();
      L.offset = newTemp();
      emit(L.offset "=" E.place "*" width(id.type));
      L.place = id.place; }

L → id
    { L.place = id.place;
      L.offset = null; }  ; No offset for simple variables

S → L = E
    { if (L.offset == null)
          emit(L.place "=" E.place);
      else
          emit(L.place "[" L.offset "]" "=" E.place); }

E → L
    { if (L.offset == null)
          E.place = L.place;
      else {
          E.place = newTemp();
          emit(E.place "=" L.place "[" L.offset "]");
      }
    }


Example: x = A[i]

Generated Code:
    t1 = i * 4          ; Offset calculation (assuming 4-byte ints)
    t2 = A[t1]          ; Array access
    x = t2              ; Assignment`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Two-Dimensional Array Access</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For 2D array A[n1][n2] with element size w:

Row-Major Order (C, Java):
    Elements stored row by row
    A[0][0], A[0][1], ..., A[0][n2-1], A[1][0], ...

    Address(A[i][j]) = base(A) + (i * n2 + j) * w

Column-Major Order (Fortran):
    Elements stored column by column
    A[0][0], A[1][0], ..., A[n1-1][0], A[0][1], ...

    Address(A[i][j]) = base(A) + (j * n1 + i) * w


Example (Row-Major): int A[4][5];  // 4 rows, 5 columns

    A[2][3] → base(A) + (2 * 5 + 3) * 4
            → base(A) + 13 * 4
            → base(A) + 52

Memory Layout:
    A[0][0] A[0][1] A[0][2] A[0][3] A[0][4]  ; Row 0
    A[1][0] A[1][1] A[1][2] A[1][3] A[1][4]  ; Row 1
    A[2][0] A[2][1] A[2][2] A[2][3] ...      ; Row 2
                              ↑
                        A[2][3] is here`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Multi-Dimensional Array Translation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`General Formula for n-dimensional array A[d1][d2]...[dn]:

Address = base(A) + (((...((i1 * d2 + i2) * d3 + i3)...) * dn + in) * w

This can be computed incrementally:
    offset = i1
    offset = offset * d2 + i2
    offset = offset * d3 + i3
    ...
    offset = offset * dn + in
    offset = offset * w


Grammar for Multi-Dimensional Access:
L → id Elist ]
Elist → Elist , E
Elist → id [ E

Attributes:
    Elist.array  = array being accessed
    Elist.place  = temp holding partial offset
    Elist.ndim   = number of dimensions processed


Semantic Actions:

Elist → id [ E
    { Elist.array = id.place;
      Elist.place = E.place;
      Elist.ndim = 1; }

Elist → Elist1 , E
    { t = newTemp();
      m = Elist1.ndim + 1;
      emit(t "=" Elist1.place "*" limit(Elist1.array, m));
      emit(t "=" t "+" E.place);
      Elist.array = Elist1.array;
      Elist.place = t;
      Elist.ndim = m; }

L → Elist ]
    { L.place = Elist.array;
      L.offset = newTemp();
      emit(L.offset "=" Elist.place "*" width(Elist.array)); }`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">2D Array Example</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source: x = A[i][j]    // A is int[10][20]

Step-by-step translation:

1. Parse A[i]
   Elist.array = A
   Elist.place = i
   Elist.ndim = 1

2. Parse A[i][j] (Elist, j])
   t1 = newTemp()
   emit("t1 = i * 20")     ; i * (size of row)
   emit("t1 = t1 + j")     ; + column index
   Elist.place = t1
   Elist.ndim = 2

3. L → Elist]
   L.place = A
   t2 = newTemp()
   emit("t2 = t1 * 4")     ; * element size

4. E → L  (reading the array element)
   t3 = newTemp()
   emit("t3 = A[t2]")

5. x = E
   emit("x = t3")


Generated Three-Address Code:
    t1 = i * 20       ; Row offset
    t1 = t1 + j       ; Add column offset
    t2 = t1 * 4       ; Multiply by element size
    t3 = A[t2]        ; Array access
    x = t3            ; Assignment

In quadruples:
+---+------+------+------+--------+
| # |  op  | arg1 | arg2 | result |
+---+------+------+------+--------+
| 0 |  *   |  i   |  20  |   t1   |
| 1 |  +   |  t1  |  j   |   t1   |
| 2 |  *   |  t1  |  4   |   t2   |
| 3 | =[]  |  A   |  t2  |   t3   |
| 4 |  =   |  t3  |  -   |   x    |
+---+------+------+------+--------+`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Array Assignment (L-value)</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Source: A[i][j] = x    // A is int[10][20]

Translation: Same offset calculation, but store instead of load

Generated Code:
    t1 = i * 20       ; Row offset
    t1 = t1 + j       ; Add column offset
    t2 = t1 * 4       ; Multiply by element size
    A[t2] = x         ; Store into array

In quadruples:
+---+------+------+------+--------+
| # |  op  | arg1 | arg2 | result |
+---+------+------+------+--------+
| 0 |  *   |  i   |  20  |   t1   |
| 1 |  +   |  t1  |  j   |   t1   |
| 2 |  *   |  t1  |  4   |   t2   |
| 3 | []=  |  x   |  A   |   t2   |
+---+------+------+------+--------+

Note: []=  means "store x at address A + t2"`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Optimized Address Calculation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`For A[i1][i2]...[in] with dimensions d1, d2, ..., dn:

Standard calculation requires multiplications for each dimension.

Optimization: Precompute partial products

Define:
    Dn = w (element width)
    Dk = Dk+1 * dk+1  for k = n-1, n-2, ..., 1

Address = base(A) + i1*D1 + i2*D2 + ... + in*Dn

Example: int A[10][20][30]  // w = 4 bytes

    D3 = 4
    D2 = D3 * 30 = 120
    D1 = D2 * 20 = 2400

    A[2][5][7] = base(A) + 2*2400 + 5*120 + 7*4
               = base(A) + 4800 + 600 + 28
               = base(A) + 5428

This allows parallel computation of i*Dk terms.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Array Bounds Checking</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`Optional bounds checking in generated code:

Source: x = A[i]    // A is int[100]

With bounds checking:
    if i < 0 goto error
    if i >= 100 goto error
    t1 = i * 4
    t2 = A[t1]
    x = t2
    goto continue
error:
    call array_bounds_error
continue:

Optimized version (single comparison for 0 <= i < n):
    ; If i is unsigned, i < 0 is impossible
    ; If i >= 100 (treated as unsigned comparison)
    ;   this catches both negative and too-large values

    if i >= 100 goto error   ; Unsigned comparison
    t1 = i * 4
    t2 = A[t1]
    x = t2
    goto continue
error:
    call array_bounds_error
continue:

Many compilers have flags to enable/disable bounds checking.`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Implementation</h2>
    <div className="bg-gray-100 text-gray-900 p-4 rounded-lg mt-4 font-mono text-gray-900">
      <pre className="whitespace-pre-wrap text-gray-900">
{`// C++ Implementation

struct ArrayType {
    string elementType;
    int elementSize;
    vector<int> dimensions;  // Size of each dimension
};

struct ArrayAccess {
    string arrayName;
    string offsetTemp;       // Holds computed offset
};

ArrayAccess translateArrayRef(string arrayName, vector<string> indices) {
    ArrayType& arrType = symbolTable.getArrayType(arrayName);
    ArrayAccess result;
    result.arrayName = arrayName;

    if (indices.size() == 1) {
        // 1D array: simple offset
        string t = newTemp();
        emit(t + " = " + indices[0] + " * " +
             to_string(arrType.elementSize));
        result.offsetTemp = t;
    }
    else {
        // Multi-dimensional array
        string offset = indices[0];
        for (int i = 1; i < indices.size(); i++) {
            string t = newTemp();
            emit(t + " = " + offset + " * " +
                 to_string(arrType.dimensions[i]));
            string t2 = newTemp();
            emit(t2 + " = " + t + " + " + indices[i]);
            offset = t2;
        }
        string finalOffset = newTemp();
        emit(finalOffset + " = " + offset + " * " +
             to_string(arrType.elementSize));
        result.offsetTemp = finalOffset;
    }
    return result;
}

// Array read: x = A[i][j]
void translateArrayRead(string dest, ArrayAccess arr) {
    string t = newTemp();
    emit(t + " = " + arr.arrayName + "[" + arr.offsetTemp + "]");
    emit(dest + " = " + t);
}

// Array write: A[i][j] = x
void translateArrayWrite(ArrayAccess arr, string value) {
    emit(arr.arrayName + "[" + arr.offsetTemp + "] = " + value);
}`}
      </pre>
    </div>

    <h2 className="text-3xl font-bold mt-8">Key Points to Remember</h2>
    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mt-4">
      <ul className="list-disc list-inside leading-relaxed space-y-2">
        <li>1D array address: base + index * element_size</li>
        <li>2D row-major: base + (i * cols + j) * element_size</li>
        <li>2D column-major: base + (j * rows + i) * element_size</li>
        <li>Multi-dimensional uses incremental offset computation</li>
        <li>L-value (assignment target) uses store instruction</li>
        <li>R-value (expression) uses load instruction</li>
        <li>Bounds checking adds conditional jumps before access</li>
        <li>Dimension sizes must be known at compile time (static arrays)</li>
        <li>For dynamic arrays, dimension info stored at runtime</li>
      </ul>
    </div>
  </div>
);

export default ArrayTranslation;
