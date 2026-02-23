import React from "react";

const RStudioIntro: React.FC = () => (
  <>
    <h1 className="text-4xl font-extrabold border-b-2 pb-2 mt-15">RStudio Introduction</h1>

    <p className="text-lg leading-relaxed mt-4">
      RStudio is an integrated development environment (IDE) for R. IDE is a GUI where you can write
      your code, see the results and also see the variables that are generated during the course of programming.
    </p>

    <p className="leading-relaxed mt-3">
      RStudio is an open-source tool that provides IDE to use R language, and enterprise-ready professional
      software for data science teams to develop and share their work with their team.
    </p>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Features of RStudio</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li>RStudio is available as both Open source and Commercial software.</li>
      <li>RStudio is available as both Desktop and Server versions.</li>
      <li>RStudio is available for various platforms such as Windows, Linux, and macOS.</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">RStudio Interface</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Console Panel (left):</b> This is where R waits for us to enter commands. This is the area where we write our code and see the output immediately.</li>
      <li><b>Environment/History Panel (top right):</b> The Environment tab shows all the variables that have been created during our programming session. The History tab keeps track of all the commands we've used so far.</li>
      <li><b>Files/Plots/Packages/Help Panel (bottom right):</b> This panel contains several useful tabs:
        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
          <li>The Files tab displays the files and folders in the current working directory.</li>
          <li>The Plots tab is used to display graphs and plots that we generate through our R scripts.</li>
          <li>The Packages tab shows all the installed packages and allows us to install new ones.</li>
          <li>The Help tab provides documentation and support for R functions.</li>
          <li>The Viewer tab is used to view local web content generated within R.</li>
        </ul>
      </li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Benefits of RStudio</h2>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li>A friendly user interface</li>
      <li>Writing and storing reusable programs</li>
      <li>All imported data and newly created objects are easily accessible</li>
      <li>Comprehensive assistance for any item</li>
      <li>Code autocompletion</li>
      <li>The capacity to organize and share your work with your partners more effectively through the creation of projects</li>
      <li>Plot snippets</li>
      <li>Simple terminal and console switching</li>
      <li>Tracking of operational history</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Setting the Working Directory</h2>

    <p className="leading-relaxed mt-3">
      R is always pointed at a directory on our computer. We can find out which directory by running the
      <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">getwd()</code> function.
    </p>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Get current working directory
getwd()

# Set working directory
setwd("path/to/your/directory")`}</pre>
    </div>

    <p className="leading-relaxed mt-4">
      There are two ways to set the working directory:
    </p>

    <ul className="list-disc list-inside mt-4 space-y-2">
      <li><b>Using the console:</b> Use the command <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">setwd("directorypath")</code> and give the path of the directory which you want to be the working directory.</li>
      <li><b>Using the GUI:</b> Click on the 3 dots button in the Files tab to open a file browser, select your directory, then click "More" and select "Set as Working Directory".</li>
    </ul>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Creating a New Project</h2>

    <p className="leading-relaxed mt-3">
      Follow these steps to create a new project in RStudio:
    </p>

    <ol className="list-decimal list-inside mt-4 space-y-2">
      <li>Select the FILE option and click create.</li>
      <li>Select the New Project option.</li>
      <li>Choose the path and directory name.</li>
      <li>The project will be created in the specified location.</li>
    </ol>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Installing R Packages</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Install a package
install.packages("package_name")

# Example: Install ggplot2
install.packages("ggplot2")`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Loading R Packages</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Load a package
library(package_name)

# Example: Load ggplot2
library(ggplot2)`}</pre>
    </div>

    <h2 className="text-2xl font-bold text-[#6334B9] mt-6">Getting Help</h2>

    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-green-400 p-4 rounded-lg font-mono mt-4 overflow-x-auto">
      <pre>{`# Get help on a function
help(function_name)
?function_name

# Example
help(mean)
?mean`}</pre>
    </div>
  </>
);

export default RStudioIntro;
