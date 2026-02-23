import React from "react";

const Introduction: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">Introduction to R</h1>

    <p className="text-lg leading-relaxed mt-4">
      R is a programming language and software environment that has become the first choice for
      statistical computing and data analysis. Developed in the early 1990s by Ross Ihaka and
      Robert Gentleman, R was built to simplify complex data manipulation and create clear,
      customizable visualizations.
    </p>

    <p className="leading-relaxed mt-3">
      Over time, it has gained popularity among statisticians, data scientists and researchers
      because of its capabilities and the vast array of packages available. As data-driven
      decision-making has grown, R has established itself as an important tool in various
      industries, including finance and healthcare.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Key Features of R</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Cross-Platform Support:</b> R works on multiple operating systems, making it versatile for different environments.</li>
      <li><b>Interactive Development:</b> R allows users to interactively experiment with data and see the results immediately.</li>
      <li><b>Data Wrangling:</b> Tools like dplyr and tidyr help simplify data cleaning and transformation.</li>
      <li><b>Statistical Modeling:</b> R has built-in support for various statistical models like regression, time-series analysis and clustering.</li>
      <li><b>Reproducible Research:</b> With R Markdown, users can combine code, output and narrative in one document, ensuring their analysis is reproducible.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example: Basic Statistics in R</h2>

    <p className="leading-relaxed mt-3">
      Here is a basic example where we calculate the mean and standard deviation of a dataset:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Create a vector of data
data <- c(5, 10, 15, 20, 25, 30, 35, 40, 45, 50)

# Calculate mean
mean_data <- mean(data)
print(paste("Mean: ", mean_data))

# Calculate standard deviation
std_dev <- sd(data)
print(paste("Standard Deviation: ", std_dev))`}</pre>
    </div>

    <p className="leading-relaxed mt-4"><b>Output:</b></p>
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-2 overflow-x-auto">
      <pre>{`[1] "Mean:  27.5"
[1] "Standard Deviation:  15.1382517704875"`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Explanation</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li>We first create a vector <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">data</code> that contains numerical values.</li>
      <li>We use the <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">mean()</code> function to calculate the mean of the dataset.</li>
      <li>The <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">sd()</code> function calculates the standard deviation.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Advantages of R Programming</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Comprehensive Statistical Tools:</b> R includes many statistical functions and models, making it the ideal choice for data analysis.</li>
      <li><b>Customizable Visualizations:</b> R's visualization tools allow for customizations for a simple bar chart or a detailed heatmap.</li>
      <li><b>Extensive Community Support:</b> R has a large user base and there are countless resources, forums and tutorials available.</li>
      <li><b>Highly Extendable:</b> The availability of over 15,000 R packages means we can extend R's functionality to suit any project or need.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Applications of R</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Data Science and Machine Learning:</b> R is widely used for data analysis, statistical modeling and machine learning tasks.</li>
      <li><b>Finance:</b> Financial analysts use R for quantitative modeling and risk analysis.</li>
      <li><b>Healthcare:</b> In clinical research, R helps analyze medical data and test hypotheses.</li>
      <li><b>Academia:</b> Researchers and statisticians use R for data analysis and publishing reproducible research.</li>
    </ul>
  </>
);

export default Introduction;
