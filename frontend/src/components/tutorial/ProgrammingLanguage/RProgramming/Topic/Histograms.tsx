import React from "react";

const Histograms: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Histograms in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      A histogram is an approximate representation of the distribution of numerical data.
      In a histogram, each bar groups numbers into ranges. Taller bars show that more data
      falls in that range. It is used to display the shape and spread of continuous sample data.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Basic Histogram with hist()</h2>

    <p className="leading-relaxed mt-3">
      R provides the built-in <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">hist()</code> function
      to create histograms.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create sample data
data <- c(22, 25, 28, 30, 32, 35, 38, 40, 42, 45,
          28, 30, 32, 35, 38, 40, 42, 45, 48, 50)

# Basic histogram
hist(data)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Customizing Histograms</h2>

    <h3 className="text-xl font-bold mt-6">Adding Title and Labels</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Histogram with title and labels
hist(data,
     main = "Distribution of Values",
     xlab = "Values",
     ylab = "Frequency")`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Changing Colors</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Histogram with colors
hist(data,
     main = "Colored Histogram",
     col = "lightblue",      # Fill color
     border = "black")       # Border color`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Changing Number of Bins</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Histogram with specific number of breaks
hist(data,
     breaks = 10,           # Number of bins
     main = "Histogram with 10 Bins")`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Plotting with ggplot2</h2>

    <p className="leading-relaxed mt-3">
      We can use the ggplot2 library in R to plot more customizable histograms using the
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">geom_histogram()</code> function.
    </p>

    <h3 className="text-xl font-bold mt-6">Creating Sample Data</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Set seed for reproducibility
set.seed(123)

# Create a data frame with simulated income data
df <- data.frame(
  gender = factor(rep(c("Average Female income", "Average Male income"),
                      each = 20000)),
  Average_income = round(c(rnorm(20000, mean = 15500, sd = 500),
                           rnorm(20000, mean = 17500, sd = 600)))
)

head(df)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Basic ggplot2 Histogram</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`library(ggplot2)

# Basic histogram
ggplot(df, aes(x = Average_income)) +
  geom_histogram()`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Changing Border Color</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Histogram with black border
ggplot(df, aes(x = Average_income)) +
  geom_histogram(color = "black")`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Changing Bin Width</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Histogram with custom bin width
ggplot(df, aes(x = Average_income)) +
  geom_histogram(binwidth = 1)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Changing Fill Color</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Histogram with custom colors
ggplot(df, aes(x = Average_income)) +
  geom_histogram(color = "white", fill = "red")`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Adding Descriptive Statistics</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Add mean and median lines using geom_vline()
ggplot(df, aes(x = Average_income, fill = gender)) +
  geom_histogram(position = "identity", alpha = 0.5, bins = 30) +
  geom_vline(aes(xintercept = mean(Average_income)),
             linetype = "dashed", color = "blue", size = 1) +
  geom_vline(aes(xintercept = median(Average_income)),
             linetype = "dotted", color = "red", size = 1) +
  labs(title = "Income Distribution with Mean and Median",
       x = "Average Income",
       y = "Frequency") +
  theme_minimal()`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Plotting Probability Densities</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Histogram with density overlay
ggplot(df, aes(x = Average_income)) +
  geom_histogram(aes(y = ..density..), bins = 30,
                 color = "black", fill = "lightblue") +
  geom_density(color = "red", size = 1) +
  geom_vline(aes(xintercept = mean(Average_income)),
             linetype = "dashed", size = 1) +
  labs(title = "Histogram with Density Curve",
       x = "Average Income",
       y = "Density") +
  theme_minimal()`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Histogram Based on Groups</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Histogram grouped by gender
ggplot(df, aes(x = Average_income, fill = gender)) +
  geom_histogram(position = "identity", alpha = 0.5, bins = 30) +
  scale_fill_manual(values = c("blue", "red")) +
  labs(title = "Income Distribution by Gender",
       x = "Average Income",
       y = "Frequency") +
  theme_minimal() +
  theme(legend.position = "bottom")`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Faceted Histograms</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create separate histograms for each group
ggplot(df, aes(x = Average_income, fill = gender)) +
  geom_histogram(bins = 30, color = "black") +
  facet_wrap(~gender, ncol = 1) +
  labs(title = "Income Distribution by Gender (Faceted)",
       x = "Average Income",
       y = "Frequency") +
  theme_minimal()`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Multiple Histograms in Base R</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create a matrix for multiple plots
mat <- matrix(1:9, nrow = 3, ncol = 3)

# Create multiple histograms in a for loop
par(mfrow = c(1, 3))  # 1 row, 3 columns

for (i in 1:ncol(mat)) {
  hist(mat[, i],
       main = paste("Histogram of Column", i),
       xlab = "Values",
       col = "lightblue")
}

par(mfrow = c(1, 1))  # Reset to single plot`}</pre>
    </div>
  </>
);

export default Histograms;
