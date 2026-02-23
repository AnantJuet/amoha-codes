import React from "react";

const Matrices: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Matrices in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      A matrix in R is a two-dimensional arrangement of data in rows and columns. In a matrix,
      rows are the ones that run horizontally and columns are the ones that run vertically.
      In R programming, matrices are two-dimensional, homogeneous data structures.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Creating a Matrix</h2>

    <p className="leading-relaxed mt-3">
      To create a matrix in R you need to use the function called <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">matrix()</code>.
      The arguments to this function are the set of elements in the vector.
    </p>

    <h3 className="text-xl font-bold mt-6">Syntax</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`matrix(data, nrow, ncol, byrow, dimnames)`}</pre>
    </div>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>data:</b> Values you want to enter</li>
      <li><b>nrow:</b> Number of rows</li>
      <li><b>ncol:</b> Number of columns</li>
      <li><b>byrow:</b> Logical clue, if TRUE values will be assigned by rows</li>
      <li><b>dimnames:</b> Names of rows and columns</li>
    </ul>

    <p className="leading-relaxed mt-4">
      <b>Note:</b> By default, matrices are filled in column-wise order.
    </p>

    <h3 className="text-xl font-bold mt-6">Example: Creating a 3x3 Matrix</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`A = matrix(
  c(1, 2, 3, 4, 5, 6, 7, 8, 9),
  nrow = 3,
  ncol = 3,
  byrow = TRUE
)
rownames(A) = c("a", "b", "c")
colnames(A) = c("c", "d", "e")
cat("The 3x3 matrix:\\n")
print(A)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`The 3x3 matrix:
  c d e
a 1 2 3
b 4 5 6
c 7 8 9`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Creating Special Matrices</h2>

    <h3 className="text-xl font-bold mt-6">Matrix Filled with a Constant</h3>

    <p className="leading-relaxed mt-3">
      A matrix where all rows and columns are filled by a single constant 'k':
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create a 3x4 matrix filled with 5
k <- 5
m <- 3
n <- 4
mat <- matrix(k, nrow = m, ncol = n)
print(mat)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`     [,1] [,2] [,3] [,4]
[1,]    5    5    5    5
[2,]    5    5    5    5
[3,]    5    5    5    5`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Diagonal Matrix</h3>

    <p className="leading-relaxed mt-3">
      A diagonal matrix is a matrix in which the entries outside the main diagonal are all zero.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create a diagonal matrix
diag_mat <- diag(c(1, 2, 3, 4))
print(diag_mat)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`     [,1] [,2] [,3] [,4]
[1,]    1    0    0    0
[2,]    0    2    0    0
[3,]    0    0    3    0
[4,]    0    0    0    4`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Identity Matrix</h3>

    <p className="leading-relaxed mt-3">
      An identity matrix is a matrix in which all the elements of the principal diagonal are ones
      and all other elements are zeros.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create a 4x4 identity matrix
identity_mat <- diag(4)
print(identity_mat)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`     [,1] [,2] [,3] [,4]
[1,]    1    0    0    0
[2,]    0    1    0    0
[3,]    0    0    1    0
[4,]    0    0    0    1`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Matrix Metrics</h2>

    <p className="leading-relaxed mt-3">
      Matrix metrics tell you about the Matrix you created.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`mat <- matrix(1:12, nrow = 3, ncol = 4)

# Dimension of the matrix
print(dim(mat))

# Number of rows
print(nrow(mat))

# Number of columns
print(ncol(mat))

# Total number of elements
print(length(mat))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] 3 4
[1] 3
[1] 4
[1] 12`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Accessing Elements of a Matrix</h2>

    <h3 className="text-xl font-bold mt-6">Accessing Rows</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`mat <- matrix(1:9, nrow = 3, ncol = 3, byrow = TRUE)

# Access first row
print(mat[1, ])

# Access second row
print(mat[2, ])`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Accessing Columns</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Access first column
print(mat[, 1])

# Access third column
print(mat[, 3])`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Accessing Specific Elements</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Access element at row 2, column 3
print(mat[2, 3])

# Access multiple elements
print(mat[1:2, 2:3])`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Matrix Operations</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`A <- matrix(1:4, nrow = 2)
B <- matrix(5:8, nrow = 2)

# Addition
print(A + B)

# Multiplication (element-wise)
print(A * B)

# Matrix multiplication
print(A %*% B)

# Transpose
print(t(A))`}</pre>
    </div>
  </>
);

export default Matrices;
