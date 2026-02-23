import React from "react";

const DataFrames: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Data Frames in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      Data Frames in R Language are generic data objects used to store tabular data.
      Data frames can also be interpreted as matrices where each column of a matrix can
      be of different data types.
    </p>

    <p className="leading-relaxed mt-3">
      An R data frame is made up of three principal components: the data, rows, and columns.
      The data is presented in tabular form, which makes it easier to operate and understand.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Creating a Data Frame</h2>

    <p className="leading-relaxed mt-3">
      To create an R data frame, use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">data.frame()</code> function
      and pass each of the vectors as arguments.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`friend.data <- data.frame(
  friend_id = c(1:5),
  friend_name = c("Sachin", "Sourav", "Dravid", "Sehwag", "Dhoni"),
  stringsAsFactors = FALSE
)
print(friend.data)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`  friend_id friend_name
1         1      Sachin
2         2      Sourav
3         3      Dravid
4         4      Sehwag
5         5       Dhoni`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Structure of the Data Frame</h2>

    <p className="leading-relaxed mt-3">
      One can get the structure of the data frame using <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">str()</code> function.
      It provides one-liner output for the basic R objects letting the user know about the object and its constituents.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`str(friend.data)`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`'data.frame':	5 obs. of  2 variables:
 $ friend_id  : int  1 2 3 4 5
 $ friend_name: chr  "Sachin" "Sourav" "Dravid" "Sehwag" ...`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Summary of Data</h2>

    <p className="leading-relaxed mt-3">
      The statistical summary and nature of the data can be obtained by applying
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">summary()</code> function.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create a data frame with numeric data
df <- data.frame(
  name = c("Alice", "Bob", "Charlie"),
  age = c(25, 30, 35),
  score = c(85.5, 90.2, 78.8)
)

summary(df)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Extracting Data from Data Frame</h2>

    <p className="leading-relaxed mt-3">
      Extracting data means accessing rows or columns. You can extract a specific column
      using its column name.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Extract column by name
print(friend.data$friend_name)

# Extract column by index
print(friend.data[, 2])

# Extract row
print(friend.data[1, ])

# Extract specific cell
print(friend.data[1, 2])`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Access Items in Data Frame</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`df <- data.frame(
  Name = c("John", "Jane", "Bob"),
  Age = c(25, 30, 22),
  City = c("NYC", "LA", "Chicago")
)

# Access single column
print(df["Name"])

# Access multiple columns
print(df[c("Name", "Age")])

# Access using $ operator
print(df$Name)

# Access rows by condition
print(df[df$Age > 24, ])`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Amount of Rows and Columns</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Number of rows
print(nrow(df))

# Number of columns
print(ncol(df))

# Dimensions
print(dim(df))`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Add Rows and Columns</h2>

    <h3 className="text-xl font-bold mt-6">Add Rows</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`df <- data.frame(
  Name = c("John", "Jane"),
  Age = c(25, 30)
)

# Add a new row using rbind
new_row <- data.frame(Name = "Bob", Age = 22)
df <- rbind(df, new_row)
print(df)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Add Columns</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Add a new column
df$City <- c("NYC", "LA", "Chicago")
print(df)

# Add column using cbind
Salary <- c(50000, 60000, 45000)
df <- cbind(df, Salary)
print(df)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Modifying Data Frames</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`df <- data.frame(
  Name = c("John", "Jane", "Bob"),
  Age = c(25, 30, 22)
)

# Modify a specific cell
df[1, "Age"] <- 26
print(df)

# Modify entire column
df$Age <- df$Age + 1
print(df)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Deleting Rows and Columns</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Delete column
df$City <- NULL

# Delete row (keep all except row 2)
df <- df[-2, ]

# Delete multiple rows
df <- df[-c(1, 3), ]`}</pre>
    </div>
  </>
);

export default DataFrames;
