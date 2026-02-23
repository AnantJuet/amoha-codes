import React from "react";

const HypothesisTesting: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Hypothesis Testing in R</h1>

    <p className="text-lg leading-relaxed mt-4">
      Hypothesis testing is a statistical method used to compare two opposing ideas or claims
      about a population or group. It uses data from a sample to decide which idea or hypothesis
      is more likely to be true. Through hypothesis testing, we assess whether the data supports
      a certain claim, helping us make informed decisions based on evidence.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Defining Hypotheses</h2>

    <p className="leading-relaxed mt-3">
      There are two types of hypotheses which we declare for testing:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Null Hypothesis (H0):</b> This is the default assumption that there is no effect or difference in the population.</li>
      <li><b>Alternative Hypothesis (H1):</b> This hypothesis represents the opposite of the null hypothesis. It suggests that there is a difference or effect.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Key Terms</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Significance Level (alpha):</b> The threshold we set to determine when we will reject the null hypothesis. A commonly used value is 0.05 (5%).</li>
      <li><b>p-value:</b> The probability of observing the data, or something more extreme, if the null hypothesis is true. If the p-value is smaller than alpha, we reject the null hypothesis.</li>
      <li><b>Test Statistic:</b> A numerical value that helps us decide whether to accept or reject the null hypothesis.</li>
      <li><b>Critical Value:</b> The cutoff value used to compare the test statistic and make the decision to reject or fail to reject the null hypothesis.</li>
      <li><b>Degrees of Freedom:</b> A value based on the sample size used in the test to help determine the critical value.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Types of Hypothesis Testing</h2>

    <h3 className="text-xl font-bold mt-6">1. Parametric Tests</h3>

    <p className="leading-relaxed mt-3">
      Parametric tests assume that the data follows a specific distribution, typically normal,
      and are used for interval or ratio data.
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>T-Test:</b> Compares means between two groups (independent or paired)</li>
      <li><b>Z-Test:</b> Compares a sample mean to a population mean (large samples)</li>
      <li><b>ANOVA:</b> Compares means across three or more groups</li>
    </ul>

    <h3 className="text-xl font-bold mt-6">2. Non-Parametric Tests</h3>

    <p className="leading-relaxed mt-3">
      Non-parametric tests do not assume a specific distribution and are used for ordinal or skewed data.
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Chi-Square:</b> Tests categorical data</li>
      <li><b>Mann-Whitney U:</b> Compares two independent groups</li>
      <li><b>Wilcoxon Signed-Rank:</b> Compares paired data</li>
      <li><b>Kruskal-Wallis:</b> Non-parametric ANOVA for multiple groups</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Type I and Type II Errors</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Type I Error (False Positive):</b> This occurs when we reject the null hypothesis when it is actually true.</li>
      <li><b>Type II Error (False Negative):</b> This occurs when we fail to reject the null hypothesis when it is actually false.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Working of Hypothesis Testing</h2>

    <h3 className="text-xl font-bold mt-6">Step 1: Defining the Hypotheses</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Data before and after treatment
before <- c(120, 122, 118, 130, 125, 128, 115, 121, 123, 119)
after <- c(115, 120, 112, 128, 122, 125, 110, 117, 119, 114)

print("Null Hypothesis (H_0): The new drug has no effect on blood pressure.")
print("Alternative Hypothesis (H_1): The new drug has an effect on blood pressure.")`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Step 2: Choosing the Significance Level</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Set significance level
alpha <- 0.05
print(paste("Significance Level:", alpha))`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Step 3: Performing the Test</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Perform paired t-test
result <- t.test(before, after, paired = TRUE)
print(result)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Common Tests in R</h2>

    <h3 className="text-xl font-bold mt-6">One-Sample T-Test</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Test if mean is different from a value
data <- c(23, 25, 28, 30, 32, 35)
result <- t.test(data, mu = 25)
print(result)

# Interpretation
if (result$p.value < 0.05) {
  print("Reject H0: Mean is significantly different from 25")
} else {
  print("Fail to reject H0: No significant difference from 25")
}`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Two-Sample T-Test</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Compare means of two groups
group1 <- c(23, 25, 28, 30, 32)
group2 <- c(30, 33, 35, 38, 40)

result <- t.test(group1, group2)
print(result)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Paired T-Test</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Compare before and after measurements
before <- c(120, 122, 118, 130, 125)
after <- c(115, 120, 112, 128, 122)

result <- t.test(before, after, paired = TRUE)
print(result)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">Chi-Square Test</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Test independence of categorical variables
data <- matrix(c(25, 15, 20, 30), nrow = 2)
colnames(data) <- c("Category1", "Category2")
rownames(data) <- c("Group1", "Group2")

result <- chisq.test(data)
print(result)`}</pre>
    </div>

    <h3 className="text-xl font-bold mt-6">ANOVA Test</h3>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Compare means across multiple groups
group1 <- c(23, 25, 28, 30, 32)
group2 <- c(30, 33, 35, 38, 40)
group3 <- c(40, 42, 45, 48, 50)

data <- data.frame(
  value = c(group1, group2, group3),
  group = factor(rep(c("A", "B", "C"), each = 5))
)

result <- aov(value ~ group, data = data)
print(summary(result))`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Complete Example</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Complete hypothesis testing example
# Testing if a new teaching method improves test scores

# Step 1: Define hypotheses
# H0: New method has no effect (mean difference = 0)
# H1: New method has an effect (mean difference != 0)

# Step 2: Collect data
before_scores <- c(75, 80, 72, 85, 78, 82, 70, 88, 76, 79)
after_scores <- c(82, 85, 78, 90, 84, 88, 76, 92, 82, 85)

# Step 3: Set significance level
alpha <- 0.05

# Step 4: Perform paired t-test
result <- t.test(after_scores, before_scores, paired = TRUE)

# Step 5: Analyze results
cat("\\n=== Hypothesis Test Results ===\\n")
cat("Test Statistic:", result$statistic, "\\n")
cat("Degrees of Freedom:", result$parameter, "\\n")
cat("P-value:", result$p.value, "\\n")
cat("95% Confidence Interval:", result$conf.int[1], "to", result$conf.int[2], "\\n")

# Step 6: Make decision
if (result$p.value < alpha) {
  cat("\\nConclusion: Reject H0. The new teaching method has a significant effect.\\n")
} else {
  cat("\\nConclusion: Fail to reject H0. No significant effect observed.\\n")
}`}</pre>
    </div>
  </>
);

export default HypothesisTesting;
