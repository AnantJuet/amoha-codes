import React from "react";

const Home: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">
      Learn R Programming
    </h1>

    <p className="text-lg leading-relaxed mt-4">
      <b>R</b> is an interpreted programming language used for statistical computing, data analysis
      and visualization. R language is open-source with large community support.
    </p>

    <p className="leading-relaxed mt-3">
      R provides a structured approach to data manipulation, along with powerful libraries and packages
      like Dplyr, Ggplot2, Shiny, Janitor and more. It has become the first choice for statisticians,
      data scientists and researchers.
    </p>

    <p className="leading-relaxed mt-3">
      This tutorial helps you learn R from beginner to advanced, covering syntax, data types,
      control flow, functions, data structures, data visualization, and statistical analysis.
    </p>

    <p className="leading-relaxed mt-3">
      You can practice R easily using RStudio IDE or online R compilers where you can write R code
      and instantly see the results.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Example</h2>

    <p className="leading-relaxed mt-3">
      Here is a simple R program that prints <b>"Hello, World!"</b> to the console:
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`print("Hello, World!")`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      This program uses the <b>print()</b> function to output text to the console.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Why Choose R Programming?</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Free and Open-Source:</b> R is open to everyone, meaning users can modify, share and distribute their work freely.</li>
      <li><b>Designed for Data:</b> R is built for data analysis, offering a comprehensive set of tools for statistical computing and graphics.</li>
      <li><b>Large Package Repository:</b> The Comprehensive R Archive Network (CRAN) offers thousands of add-on packages for specialized tasks.</li>
      <li><b>Cross-Platform Compatibility:</b> R can work on Windows, Mac and Linux operating systems.</li>
      <li><b>Great for Visualization:</b> With packages like ggplot2, R makes it easy to create informative, interactive charts and plots.</li>
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

export default Home;
