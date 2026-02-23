import React from "react";

const FileHandling: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">File Handling in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      In R programming, handling files (such as reading, writing, creating, and renaming files)
      can be done using built-in functions available in the base R package. These operations help
      in managing data stored in files, which is essential for tasks like data analysis, data
      manipulation, and automation.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">1. Creating a File</h2>

    <p className="leading-relaxed mt-3">
      In R, we can create a new file using the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">file.create()</code> function.
      If the file already exists, it will be truncated (emptied). This function returns a logical value:
      TRUE if the file is created successfully, and FALSE otherwise.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create a new file
file.create("GFG.txt")

# Create multiple files
file.create("file1.txt", "file2.txt", "file3.txt")`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">2. Writing into a File</h2>

    <p className="leading-relaxed mt-3">
      To write data into a file, we can use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">write.table()</code> function.
      This function allows us to write a data frame or matrix to a file.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create a data frame
df <- data.frame(
  Name = c("John", "Jane", "Bob"),
  Age = c(25, 30, 35),
  City = c("NYC", "LA", "Chicago")
)

# Write to file
write.table(df, file = "data.txt")

# Write without row names
write.table(df, file = "data.txt", row.names = FALSE)

# Write as CSV
write.csv(df, file = "data.csv", row.names = FALSE)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Using writeLines()</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Write lines to a file
lines <- c("Line 1", "Line 2", "Line 3")
writeLines(lines, "output.txt")

# Using cat() to write
cat("Hello", "World", file = "hello.txt", sep = "\\n")`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">3. Renaming a File</h2>

    <p className="leading-relaxed mt-3">
      To rename a file, use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">file.rename()</code> function.
      It returns TRUE if the file is successfully renamed, and FALSE otherwise.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Rename a file
file.rename("GFG.txt", "newGFG.txt")

# Rename from and to parameters
file.rename(from = "old_name.txt", to = "new_name.txt")`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">4. Check Existence of a File</h2>

    <p className="leading-relaxed mt-3">
      We can check if a file exists in the current working directory using the
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">file.exists()</code> function.
      It returns TRUE if the file exists, and FALSE otherwise.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Check if file exists
file.exists("GFG.txt")

# Check multiple files
file.exists("file1.txt", "file2.txt")

# Conditional check
if (file.exists("data.txt")) {
  print("File exists!")
} else {
  print("File does not exist!")
}`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">5. Reading a File</h2>

    <p className="leading-relaxed mt-3">
      To read a file into R, use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">read.table()</code> function.
      This function reads files and returns the data as a data frame.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Read a file
data <- read.table("data.txt", header = TRUE)
print(data)

# Read CSV
data <- read.csv("data.csv")
print(data)

# Read lines
lines <- readLines("output.txt")
print(lines)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">6. List All Files in a Directory</h2>

    <p className="leading-relaxed mt-3">
      We can list all files in the current working directory (or a specified path) using the
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">list.files()</code> function.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# List all files
list.files()

# List files with pattern
list.files(pattern = "\\.txt$")  # Only .txt files

# List files in specific directory
list.files(path = "path/to/directory")

# Include full path
list.files(full.names = TRUE)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">7. Copying a File</h2>

    <p className="leading-relaxed mt-3">
      The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">file.copy()</code> function allows
      us to copy files from one location to another.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Copy a file
file.copy("source.txt", "destination.txt")

# Copy to a directory
file.copy("file.txt", "backup/")

# Overwrite if exists
file.copy("source.txt", "destination.txt", overwrite = TRUE)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">8. Deleting a File</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Delete a file
file.remove("file.txt")

# Delete multiple files
file.remove("file1.txt", "file2.txt")

# Using unlink (can delete directories too)
unlink("file.txt")`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">9. Working with Directories</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Get current working directory
getwd()

# Set working directory
setwd("path/to/directory")

# Create a new directory
dir.create("new_folder")

# Check if directory exists
dir.exists("new_folder")

# Delete a directory
unlink("new_folder", recursive = TRUE)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">10. File Information</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Get file information
file.info("data.txt")

# Get file size
file.size("data.txt")

# Get file modification time
file.mtime("data.txt")

# Check if path is a file or directory
file_test("-f", "data.txt")  # Is file?
file_test("-d", "folder")    # Is directory?`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Complete Example</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Complete file handling example

# 1. Create a directory
dir.create("my_data")

# 2. Create a data frame
df <- data.frame(
  ID = 1:5,
  Name = c("Alice", "Bob", "Charlie", "Diana", "Eve"),
  Score = c(85, 92, 78, 95, 88)
)

# 3. Write to CSV
write.csv(df, "my_data/scores.csv", row.names = FALSE)

# 4. Check if file exists
if (file.exists("my_data/scores.csv")) {
  print("File created successfully!")
}

# 5. Read the file
data <- read.csv("my_data/scores.csv")
print(data)

# 6. List files in directory
print(list.files("my_data"))

# 7. Get file info
print(file.info("my_data/scores.csv"))`}</pre>
    </div>
  </>
);

export default FileHandling;
