import React from "react";

const MeanMedianMode: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Mean, Median, and Mode in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      Statistical measures like mean, median, and mode are important for summarizing and understanding
      the central tendency of a dataset. In R, these measures can be calculated easily using built-in
      functions. This article will provide a comprehensive guide on how to calculate mean, median
      and mode in R Programming Language.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Mean in R</h2>

    <p className="leading-relaxed mt-3">
      The mean is the arithmetic average - the sum of all values divided by the count of values.
    </p>

    <h3 className="text-xl font-bold mt-6">Syntax</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`mean(x, na.rm = FALSE)`}</pre>
    </div>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>x:</b> Numeric vector</li>
      <li><b>na.rm:</b> If TRUE, ignores NA values</li>
    </ul>

    <h3 className="text-xl font-bold mt-6">Examples</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Basic mean
x <- c(2, 4, 6, 8, 10)
mean(x)  # Output: 6

# Mean with NA values
x <- c(2, 4, NA, 8)
mean(x)           # Output: NA
mean(x, na.rm = TRUE)  # Output: 4.666667`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Explanation:</b></p>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>First example returns the average of all values: (2+4+6+8+10)/5 = 6</li>
      <li>Second example: The na.rm = TRUE removes the NA, so the average is (2+4+8)/3 = 4.666667</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Median in R</h2>

    <p className="leading-relaxed mt-3">
      The median is the middle value of the data set. It splits the data into two halves.
      If the number of elements in the data set is odd, the center element is the median.
      If it is even, the median is the average of the two central elements.
    </p>

    <h3 className="text-xl font-bold mt-6">Syntax</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`median(x, na.rm = FALSE)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Examples</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Odd number of elements
x <- c(1, 3, 5, 7, 9)
median(x)  # Output: 5

# Even number of elements
x <- c(1, 3, 5, 7)
median(x)  # Output: 4 (average of 3 and 5)

# With NA values
x <- c(1, NA, 5, 7)
median(x, na.rm = TRUE)  # Output: 5`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Explanation:</b></p>
    <ul className="list-disc list-inside mt-2 space-y-2">
      <li>First example: sorted list has 5 numbers, the middle one is 5</li>
      <li>Second example: After removing NA, the sorted values are (1, 5, 7), the middle value is 5</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Mode in R</h2>

    <p className="leading-relaxed mt-3">
      The mode is the value that appears most frequently in a dataset. R does not include a
      built-in mode function for statistical mode, but you can define one easily.
    </p>

    <h3 className="text-xl font-bold mt-6">Method 1: Custom Function to Find Mode</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Custom function to calculate mode
getMode <- function(v) {
  uniqv <- unique(v)
  uniqv[which.max(tabulate(match(v, uniqv)))]
}

# Example
x <- c(1, 2, 3, 3, 3, 4, 5)
mode_value <- getMode(x)
print(mode_value)  # Output: 3`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      <b>Explanation:</b> The number 3 appears most frequently (3 times), so it is the mode.
    </p>

    <h3 className="text-xl font-bold mt-6">Method 2: Using modeest Package</h3>

    <p className="leading-relaxed mt-3">
      We can use the modeest package of R. This package provides methods to find the mode
      of univariate data and the mode of the usual probability distribution.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Install and load the package
# install.packages("modeest")
library(modeest)

x <- c(1, 2, 3, 3, 3, 4, 5)
mode_value <- mfv(x)  # Most Frequent Value
print(mode_value)  # Output: 3`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      <b>Explanation:</b> The mfv() function from the modeest package finds the most frequent value - again, 3.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Complete Example: All Three Measures</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Sample data
data <- c(12, 15, 18, 22, 15, 25, 15, 30, 35, 15)

# Mean
mean_value <- mean(data)
print(paste("Mean:", mean_value))

# Median
median_value <- median(data)
print(paste("Median:", median_value))

# Mode (using custom function)
getMode <- function(v) {
  uniqv <- unique(v)
  uniqv[which.max(tabulate(match(v, uniqv)))]
}
mode_value <- getMode(data)
print(paste("Mode:", mode_value))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Mean: 20.2"
[1] "Median: 16.5"
[1] "Mode: 15"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Additional Statistical Functions</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`data <- c(12, 15, 18, 22, 15, 25, 15, 30, 35, 15)

# Range
print(paste("Min:", min(data)))
print(paste("Max:", max(data)))
print(paste("Range:", max(data) - min(data)))

# Variance
print(paste("Variance:", var(data)))

# Standard Deviation
print(paste("Standard Deviation:", sd(data)))

# Summary statistics
print(summary(data))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Min: 12"
[1] "Max: 35"
[1] "Range: 23"
[1] "Variance: 60.1777777777778"
[1] "Standard Deviation: 7.75744118298456"
   Min. 1st Qu.  Median    Mean 3rd Qu.    Max.
  12.00   15.00   16.50   20.20   24.25   35.00`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Weighted Mean</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Values and their weights
values <- c(10, 20, 30)
weights <- c(1, 2, 3)

# Weighted mean
weighted_mean <- weighted.mean(values, weights)
print(paste("Weighted Mean:", weighted_mean))  # Output: 23.33`}</pre>
    </div>
  </>
);

export default MeanMedianMode;
